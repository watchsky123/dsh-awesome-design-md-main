# dsh-awesome-design-md

适配 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai) 工作区技能格式的 **awesome-design-md** 品牌设计系统库。

把 84 个知名网站的设计语言变成 AI 生成 UI 时的可执行约束——真实色彩 token、字号阶梯、组件样式、布局规则和 Do/Don't 反模式清单。

> 数据来源:[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)(MIT License),本仓库仅做 DSH 技能格式适配与打包,品牌设计文档内容未改动。

## 它是什么

每个品牌一个 `design-md/<品牌>/DESIGN.md`,包含 9 个部分:

1. 视觉主题 2. 色彩 token(hex) 3. 字体规则 4. 组件样式 5. 布局原则 6. 层次与阴影 7. Do/Don't 8. 响应式 9. Agent 提示指南

AI 生成 UI 时把这些 token 当作唯一事实来源,而不是凭"印象"模仿品牌。

## 安装(DeepSeek Harness)

把本仓库整体克隆为工作区技能目录:

```bash
git clone https://github.com/watchsky123/dsh-awesome-design-md-main.git <你的工作区>/.dsh/skills/awedesign
```

或手动复制 `SKILL.md` 与 `design-md/` 到 `<工作区>/.dsh/skills/awedesign/`。

安装后技能即时生效(无需重启),会出现在对话输入栏的「添加文件或调用指令」菜单中。

在输入栏键入 `/` 就能从建议列表里选中它,或直接键入 **`/awedesign`** 空格加需求发送——宿主的 pre-step 边界会把 SKILL.md 正文内联注入该轮,无需模型再调用 `skill` 工具。

> 斜杠命令名取自 SKILL.md frontmatter 的 `name`,必须是 kebab-case,且 `user-invocable` 未设为 false。仓库名叫 `dsh-awesome-design-md-main`,但技能命令是 `/awedesign`——**命令名与仓库名不必一致**,改名只需改 `name:` 与技能目录名。

## 使用示例

对话里直接说:

- 「用 **Stripe 风格**写个产品落地页」→ 读取 `design-md/stripe/DESIGN.md`,按紫渐变 + 细体优雅生成
- 「做成 **Notion 的样子**」→ 暖极简 + 衬线标题 + 软表面
- 「这个页面要 **Apple 风格**」→ 高级留白、SF Pro、#0066cc 交互蓝

## 品牌(84 个)

| 分类 | 品牌 |
|---|---|
| AI & LLM | claude, cohere, elevenlabs, jobright, minimax, mistral.ai, ollama, opencode.ai, replicate, runwayml, together.ai, voltagent, x.ai |
| 开发工具 | cursor, expo, lovable, raycast, superhuman, vercel, warp |
| 后端/数据库 | clickhouse, composio, hashicorp, mongodb, oracle, posthog, sanity, sentry, supabase |
| 生产力 SaaS | cal, intercom, linear.app, mintlify, notion, resend, sap, slack, zapier |
| 设计工具 | airtable, clay, figma, framer, miro, webflow |
| 金融/加密 | binance, coinbase, kraken, mastercard, mercury, nerdwallet, revolut, stripe, wise |
| 电商/零售 | airbnb, meta, mydealz, nike, shopify, starbucks |
| 媒体/消费科技 | 1win, aljazeera, apple, dji, hp, ibm, nvidia, oura, pinterest, playstation, spacex, spotify, theverge, uber, vodafone, wired |
| 汽车 | bmw, bmw-m, bugatti, ferrari, lamborghini, renault, tesla |
| 复古 Web | dell-1996, nintendo-2001 |

## 许可

- 设计文档数据:MIT License © VoltAgent(见 [LICENSE](LICENSE))
- DSH 适配打包:MIT
