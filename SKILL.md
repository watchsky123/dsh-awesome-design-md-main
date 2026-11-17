---
name: awedesign
description: Use when the user wants UI, web pages, components, or posters to look like a specific brand or design language — e.g. "做成 Apple/Linear/Stripe 的风格", "make it look like Notion", "用 Stripe 风格写个落地页", or any request naming a famous product's visual style. Contains 84 analyzed brand design systems (Apple, Linear, Vercel, Stripe, Notion, Notion-like SaaS, Spotify, Nike, BMW, Ferrari, Slack, Figma, Supabase, retro 90s web…) as DESIGN.md documents with real color tokens, typography scales, component styles, layout rules and do/don'ts.
---

# awesome-design-md — 品牌设计系统库

把知名网站的设计语言变成可执行的 UI 生成约束。数据来源:VoltAgent/awesome-design-md(MIT)。

## 工作流程

1. **确定品牌**:从用户需求里找目标品牌(如 apple、linear、stripe)。速查表在文末;不确定就 `ls design-md/` 看目录。
2. **读取设计文档**:完整读 `design-md/<品牌>/DESIGN.md`(相对本技能目录)。文件包含 9 个部分:视觉主题、色彩 token、字体规则、组件样式、布局原则、层次与阴影、Do/Don't、响应式、Agent 提示指南。
3. **应用为硬约束**:生成 UI 时把 DESIGN.md 的 token 当作唯一事实来源——颜色用它的 hex,字号层级照它的表格,组件状态照它的定义。用户要求与 DESIGN.md 冲突时,先指出冲突再听用户的。
4. **遵守 Do/Don't**:每个文档末尾的反模式清单是踩坑总结,优先级高于你的通用审美习惯。

## 交付方式

- **用户要"整个项目都用这个风格"**:把该 `DESIGN.md` 复制到用户项目根目录,说明后续 agent 会自动遵循。
- **用户要"这个页面/组件用这个风格"**:直接按文档生成代码,不落盘 DESIGN.md。
- **用户想要的风格没有对应品牌**:选最接近的邻居品牌做底,再按用户描述覆盖差异;并向用户说明依据。全列表见速查表。

## 注意

- 字体:文档常指定专有字体(SF Pro、Geist、SoDoSans…)。Web 项目用官方 CDN 或最接近的系统栈替代,并在代码注释里标注替代关系。
- 深浅色:部分品牌有明确的暗色规范(canvas-parchment、surface-tile 系列),需求提"暗色模式"时用它们,不要自己反色。
- `design-md/<品牌>/README.md` 是一行链接,没有额外信息,不需要读。

## 品牌速查表(84 个)

**AI & LLM**:claude(暖赤陶色、编辑排版)| cohere(活力渐变、数据仪表盘)| elevenlabs(暗色电影感、声波美学)| jobright(春薄荷绿、黑胶囊按钮)| minimax(深色界面、霓虹点缀)| mistral.ai(法式极简、紫调)| ollama(终端优先、单色)| opencode.ai(开发者暗色)| replicate(纯白画布、代码优先)| runwayml(电影节编辑风、纯黑胶囊)| together.ai(蓝图式技术风)| voltagent(虚空黑、翡翠绿、终端原生)| x.ai( Stark 单色、未来极简)

**开发工具**:cursor(顺滑暗色、渐变点缀)| expo(暗色、紧字距、代码中心)| lovable(俏皮渐变、友好)| raycast(暗色 chrome、活力渐变)| superhuman(高级暗色、键盘优先、紫光)| vercel(黑白精确、Geist 字体)| warp(块状命令 UI)

**后端/数据库**:clickhouse(黄点缀、技术文档风)| composio(现代暗色、彩色图标)| hashicorp(企业简洁、黑白)| mongodb(绿叶品牌、文档导向)| oracle(暖中性阶梯、炭黑操作)| posthog(俏皮刺猬、开发者友好暗色)| sanity(暗色编辑、112px 显示字、珊瑚红 CTA)| sentry(暗色仪表盘、粉紫点缀)| supabase(暗色翡翠、代码优先)

**生产力 SaaS**:cal(中性简洁)| intercom(友好蓝、对话式)| linear.app(超简、精确、紫点缀)| mintlify(清爽绿、阅读优化)| notion(暖极简、衬线标题、软表面)| resend(极简暗色、等宽点缀)| sap(白画布、平蓝色带、应用框)| slack(深茄紫主色、奶油薰衣草渐变、胶囊 CTA)| zapier(暖橙、插画驱动)

**设计工具**:airtable(彩色、结构化数据美学)| clay(有机形状、软渐变、艺术指导)| figma(活力多彩、俏皮专业)| framer(黑白蓝、动效优先)| miro(亮黄、无限画布)| webflow(蓝点缀、精致营销站)

**金融/加密**:binance(币安黄+单色、交易紧迫感)| coinbase(干净蓝、机构感)| kraken(紫点缀暗色、数据密集)| mastercard(暖奶油、轨道胶囊形)| mercury(墨紫夜色、靛蓝胶囊)| nerdwallet(深云杉绿、薄荷洗、近直角)| revolut(暗色渐变卡、精密)| stripe(招牌紫渐变、细体优雅)| wise(亮绿、友好清晰)

**电商零售**:airbnb(暖珊瑚、摄影驱动、圆角)| meta(摄影优先、二元明暗、Meta 蓝 CTA)| mydealz(白卡流、绿品牌)| nike(单色 UI、巨大 Futura 大写、满幅摄影)| shopify(暗色电影感、霓虹绿、超细显示字)| starbucks(四级土绿、暖奶油、SoDoSans)

**媒体/消费科技**:1win(近黑画布、鲜绿操作色)| aljazeera(平白纸面、密集 Roboto、橙签+直播红)| apple(高级留白、SF Pro、电影感图像、#0066cc 交互蓝)| dji(影棚产品块、工程蓝胶囊、紧凑 Open Sans)| hp(纯白、电光蓝 CTA、几何 Forma)| ibm(Carbon 设计系统、结构化蓝)| nvidia(绿黑能量、技术力量感)| oura(暖纸奶油、编辑衬线、大地色)| pinterest(红点缀、瀑布流、图像优先)| playstation(三表面通道、青色悬停缩放)| spacex(黑白分明、满幅图像、未来感)| spotify(暗底活力绿、粗字型、专辑封面驱动)| theverge(酸薄荷+紫外光、Manuka 显示字)| uber(黑白粗体、紧凑字型、都市能量)| vodafone(巨型大写显示字、红色章带)| wired(报纸白、定制衬线、墨蓝链接)

**汽车**:bmw(暗色高级、德系精密)| bmw-m(赛车对比、M 三色)| bugatti(影院黑、单色严肃、巨型显示字)| ferrari(明暗编辑风、法拉利红极简用)| lamborghini(纯黑殿堂、金点缀、LamboType)| renault(极光渐变、零圆角按钮)| tesla(激进减法、满幅电影摄影、Universal Sans)

**复古 Web**:dell-1996(1996 目录页:黑框、色块丝带卡、Helvetica-Black+Times)| nintendo-2001(2001 主机铬合金:斜纹金属面板、琥珀光导航、像素马里奥)
