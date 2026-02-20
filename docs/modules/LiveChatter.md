LiveChatter
直播弹幕
分类：Web
描述：管理直播间弹幕交互（接收/发送/AI回复）。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LiveChatter（直播弹幕）用于管理直播间弹幕交互（接收/发送/AI回复）。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Auto Send Split Cooldown Min (ms)、Auto Send Time Mode、Custom Filter Enabled。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Console Output Timestamp（中文：控制台输出时间戳）：类型=布尔，默认=true
- User Blacklist Enabled（中文：启用用户黑名单）：类型=布尔，默认=false
- Auto Send List Content (Sep With Semicolon)（中文：自动发送列表内容（用分号分隔））：类型=文本，默认=""
- Speaker Skip Emoji（中文：讲述跳过表情）：类型=布尔，默认=true
- Auto Send Split Cooldown Min (ms)（中文：自动发送切片冷却最小值(毫秒)）：类型=数值，默认=1000
- Max Allowed Chatter Delay (s)（中文：弹幕延迟最大允许值 (秒)）：类型=数值，默认=60U
- Title Font Size（中文：标题字号）：类型=数值，默认=150
- AI Response Contexts Limit（中文：人工智能回复上下文限制）：类型=数值，默认=64
- User Blacklist (Sep With Semicolon)（中文：用户黑名单（用分号分隔））：类型=文本，默认=""
- AI Response Contexts Enabled（中文：人工智能回复启用上下文）：类型=布尔，默认=true
- AI Response Prompt (With Contexts)（中文：人工智能带上下文回复提示词）：类型=文本，默认="请用简要的语言和直播间弹幕进行对话，每次你的输出一定不要超过40字，不要思考过程，不要复述用户的消息。下面开始对话。"
- Color（中文：颜色）：类型=枚举，默认="White"
  可选：White（白色）；Black（黑色）；Gray（灰色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Auto Send Prefab Type（中文：自动发送预设类型）：类型=枚举，默认="Aphorism"
  可选：Aphorism（未收录）；Idiom Solitaire（未收录）；Ask Solitaire（自问自答）
- Title Color（中文：标题颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Speaker User Blacklist Enabled（中文：启用讲述用户黑名单）：类型=布尔，默认=false
- File Output（中文：文件输出）：类型=布尔，默认=false
- Horizontal Reverse（中文：横向翻转）：类型=布尔，默认=false
- Auto Send Fixed Content（中文：自动发送固定内容）：类型=文本，默认="给主播点个关注~"
- AI Response User Blacklist (Sep With Semicolon)（中文：人工智能回复用户黑名单（用分号分隔））：类型=文本，默认="Wormwaker;Worrnwaker"
- Speaker（中文：讲述）：类型=枚举，默认="Off"
  可选：Off（关闭）；Username & Text（用户名 & 文本）；Only Text（仅文本）
- Auto Send Time Mode（中文：自动发送时间模式）：类型=枚举，默认="Off"
  可选：Off（关闭）；Periodic（周期性）
- Custom Filter Enabled（中文：启用自定义过滤器）：类型=布尔，默认=false
- Clipboard Quick Send Apply Text Processor（中文：剪贴板快速发送是否应用文本处理器）：类型=布尔，默认=false
- AI Response Prefix String（中文：人工智能回复前缀字符串）：类型=文本，默认="回复@{user}:"
- Auto Send List Current Index（中文：自动发送列表当前索引）：类型=数值，默认=0
- Custom Filter Keywords (Sep With Semicolon)（中文：自定义过滤器关键词（用分号分隔））：类型=文本，默认=""
- Actionbar Color（中文：行为栏颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Trigger Disable Speaker（中文：触发器禁用讲述）：类型=布尔，默认=true
- Remote Execution Privileges Policy（中文：远控权限策略）：类型=枚举，默认="Admin & Normal"
  可选：Everyone Admin（全员管理员）；Admin & Normal（管理员与普通）；Only Admin（仅管理员）；Everyone Normal（全员普通）
- Translator（中文：翻译器）：类型=枚举，默认="Off"
  可选：Off（关闭）；Chinese（中文）；English（英语）；Exchange（交换）
- Speaker User Blacklist (Sep With Semicolon)（中文：讲述用户黑名单（用分号分隔））：类型=文本，默认=""
- Auto Send Periodic Interval (ms)（中文：自动发送周期（毫秒））：类型=数值，默认=60000L
- Triggers Config Path（中文：触发器配置路径）：类型=文本，默认="config\\liveStreamChatterTriggers.ini"
- Remote Execution Username Whitelist (Sep with Semicolon)（中文：远程执行用户名白名单（用分号分隔））：类型=文本，默认="Wormwaker;Worrnwaker"
- Console Output Wealth & Medal（中文：控制台输出财富值和灯牌）：类型=布尔，默认=true
- Console Output（中文：控制台输出）：类型=布尔，默认=true
- Remote Execution Display（中文：是否显示远程执行信息）：类型=布尔，默认=false
- Sound（中文：音效）：类型=枚举，默认="Off"
- User Whitelist Enabled（中文：启用用户白名单）：类型=布尔，默认=false
- Speaker User Whitelist (Sep With Semicolon)（中文：讲述用户白名单（用分号分隔））：类型=文本，默认="Wormwaker;Worrnwaker"
- AI Response Chatter Type（中文：人工智能回复弹幕类型）：类型=枚举，默认="Top"
  可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- AI Response Title Color（中文：人工智能回复标题颜色）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Speaker User Whitelist Enabled（中文：启用讲述用户白名单）：类型=布尔，默认=false
- Clipboard Quick Send Prevent Repeat（中文：剪贴板快速发送防止重复发送）：类型=布尔，默认=true
- AI Response Prefix（中文：人工智能回复前缀）：类型=布尔，默认=true
- Display（中文：显示）：类型=枚举，默认="Chatter"
  可选：Off（关闭）；Chatter（弹幕）；Notify（通知）；Title（标题）；Actionbar（行为栏）
- Single Chatter Length Limit（中文：单条弹幕长度限制）：类型=数值，默认=40U
- User Whitelist (Sep With Semicolon)（中文：用户白名单（用分号分隔））：类型=文本，默认="Wormwaker;Worrnwaker"
- Clipboard Quick Send Confirm（中文：剪贴板快速发送是否确认）：类型=布尔，默认=false
- AI Response Cooldown (ms)（中文：人工智能回复冷却（毫秒））：类型=数值，默认=5000L
- Taboo Filter（中文：违禁词过滤）：类型=枚举，默认="Replace (Unsafe
- AI Response Prompt（中文：人工智能回复提示词）：类型=文本，默认="请用简要的语言回复这条直播间弹幕，最好不要超过20字，但是不要复述弹幕："
- Auto Send Split Cooldown Max (ms)（中文：自动发送切片冷却最大值(毫秒)）：类型=数值，默认=2000
- File Output Format（中文：文件输出格式）：类型=文本，默认="{{content}}`{{nickname}}"
- Clipboard Quick Send（中文：剪贴板快速发送）：类型=枚举，默认="Off"
  可选：Off（关闭）；Send（未收录）；Copy and Send（复制并发送）；Select All, Copy and Send（全选复制并发送）
- Speaker Async（中文：讲述是否异步）：类型=布尔，默认=true
- AI Response User Blacklist Enabled（中文：人工智能回复启用用户黑名单）：类型=布尔，默认=true
- Remote Execution Notify（中文：是否通知远程执行结果）：类型=布尔，默认=true
- Auto Send Content Mode（中文：自动发送内容模式）：类型=枚举，默认="Fixed"
  可选：Fixed（固定）；List Random Element（列表中随机的元素）；List Loop（列表循环）；Prefab（未收录）；File Lines（文件 行数）
- Triggers Using Regex（中文：触发器使用正则表达式）：类型=布尔，默认=true
- Triggers Enabled（中文：启用触发器）：类型=布尔，默认=false
- AI Response（中文：人工智能回复）：类型=枚举，默认="Off"
  可选：Off（关闭）；Notify（通知）；Speak（讲述）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；Real Chatter（真弹幕）
- Auto Send File Source Path（中文：自动发送文件来源路径）：类型=文本，默认=""
- Clipboard Quick Send Key（中文：剪贴板快速发送快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_ADD}}}
- Clipboard Quick Send Confirm Time (s)（中文：剪贴板快速发送确认限时 (秒)）：类型=数值，默认=5
- File Output Path（中文：文件输出路径）：类型=文本，默认="output\\Chatters.txt"
- AI Response Chatter Color（中文：人工智能回复弹幕颜色）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Remote Execution (Riskful)（中文：远程执行（有风险））：类型=枚举，默认="Disabled"
  可选：Disabled（禁用）；Wormwake（未收录）

历史更新
- 35. 将 AutoLiveChatter 模块重命名为 LiveChatter，并将 LiveStream 模块的弹幕部分分到 LiveChatter 模块。重命名部分配置项。
- 8. 添加模块：AutoLiveChatter，自动直播间弹幕。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

