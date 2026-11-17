/**
 * `/awedesign` 斜杠命令 —— 让 awedesign 技能出现在输入栏「添加文件或调用指令」菜单里。
 *
 * **为什么需要这个插件(而不是只把技能命名成 awedesign)**
 *
 * DSH 的 `+` 按钮打开的是**命令源**(`inputTriggers.toggleSource("command", {trigger:"/"})`),
 * 而技能注册的是**另一个 source**(`{trigger:"/", name:"skill", order:2}`)。两者共享 `/` 触发器,
 * 但 `+` 菜单只列出命令源 —— 所以纯技能永远不会出现在「添加文件或调用指令」里。
 * 想出现在那儿,必须有宿主命令,这与 hwforge 的 `/hwforge` 是同一件事。
 *
 * **handler 为什么把文本重新投递成 `/awedesign <需求>`**
 *
 * 宿主的 pre-step 边界(`@deepseek-ai/dsh-tool-skill`)不针对命令,而是扫描
 * `source.kind === "user"` 的消息正文,用 `/(^|\s)\/(name)(?=\s|$)/` 取技能名,
 * 命中后把 `renderSkillContent(skill)` 作为注入上下文追加到该步骤。
 * 因此保留 `/awedesign` 前缀转投,等价于用户自己键入 `/awedesign …`:
 * 需求照常送达模型,技能正文由宿主注入,**无需模型额外调用 `skill` 工具**。
 *
 * 转发不能用 `steer`(那是更正一个正在运行的步骤);`followup` 才是"独立一轮的普通消息"。
 *
 * @module dsh-awedesign
 */

import { createUserMessage } from '@deepseek-ai/dsh-llm'

/** 插件名(仅用于日志)。 */
export const name = 'awedesign-command'

/**
 * 必须先就绪的服务。
 *
 * **这一行为什么关键。** 不声明 `inject` 时,`apply` 可能在命令注册表存在之前运行:
 * `ctx.get('commands')` 返回 `undefined`,命令根本没注册,外部只表现为
 * "斜杠菜单里没有它" —— hwforge 就踩过这个坑。声明后 cordis 会把 `apply`
 * 推迟到 `commands` 就绪。
 *
 * 反过来,宿主没有 `commands` 时本插件不会加载:这是正确行为,
 * 因为一个没有命令注册表的宿主本来也无法提供 `/awedesign`。
 */
export const inject = ['commands']

/** 命令名,不含前导斜杠。 */
const COMMAND = 'awedesign'

/**
 * 注册 `/awedesign`。
 *
 * handler 从不抛出:抛出的命令 handler 在 UI 上只表现为"命令坏了、没有解释"。
 * 每条失败路径都返回 `{kind:'error', text}`,理由直接显示给用户。
 *
 * @param ctx - cordis 上下文。
 */
export function apply(ctx) {
  const commands = ctx.get('commands')
  if (commands === undefined) {
    console.error(
      '[dsh-awedesign] commands 服务不可用，/awedesign 未注册（检查 inject 是否含 "commands"）')
    return
  }

  const dispose = commands.register({
    name: COMMAND,
    description: '用 awedesign 技能（84 个品牌设计系统）生成 UI：/awedesign 用 Stripe 风格做个落地页',
    // `input` 是 `{ hint: string }`，不是 `{ placeholder }`，也不是裸字符串；
    // 字段名写错会让宿主在加载时拒绝整条命令。
    input: {
      hint: '要做什么？例如：用 Stripe 风格写个产品落地页',
    },
    handler: (invocation) => {
      // `rawInput` 是"命令名之后的原样文本,含分隔空白";先去掉前导空白,
      // 否则转发出去的消息会以空行开头。
      const text = String(invocation.rawInput ?? '')
        .replace(/^[\s\u3000]+/, '')
        .trimEnd()

      const agent = invocation.agent
      if (agent === undefined || typeof agent.followup !== 'function') {
        return {
          kind: 'error',
          text: '这个会话没有可投递的 agent，/awedesign 无法转发需求。',
        }
      }

      const line = text === '' ? `/${COMMAND}` : `/${COMMAND} ${text}`
      try {
        agent.followup(createUserMessage({
          content: [{ type: 'text', text: line }],
          // 来源如实标为 user:文本确实来自用户,只是经由命令转发。
          // 技能注入只认这个来源,换成别的就没有技能正文了。
          source: { kind: 'user' },
        }))
      } catch (err) {
        return {
          kind: 'error',
          text: `转发需求失败：${
            String(err instanceof Error ? err.message : err).slice(0, 300)}`,
        }
      }

      return {
        kind: 'success',
        text: text === ''
          ? 'awedesign 已载入。下一条消息直接说需求即可，例如：用 Stripe 风格写个落地页。'
          : `已提交：${text.slice(0, 80)}${text.length > 80 ? '…' : ''}`,
      }
    },
  })

  // 注册标记:没有它,"命令没注册"和"注册了但菜单没列"从外面看一模一样。
  console.info(`[dsh-awedesign] /${COMMAND} 命令已注册`)
  ctx.effect(() => dispose, `dsh-awedesign: /${COMMAND} command`)
}
