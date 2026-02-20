LiveStream
直播间
分类：Web
描述：一些直播间的功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LiveStream（直播间）用于一些直播间的功能。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：HUD Online Audience Nickname Font Size、HUD Information Font Size、HUD Online Audience Face。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- HUD Online Audience Nickname Font Size（中文：HUD 在线观众昵称字号）：类型=数值，默认=20
- Gift Triggers Enabled (PRO)（中文：是否启用礼物触发器 (专业版)）：类型=布尔，默认=false
- HUD Information Font Size（中文：HUD 信息字号）：类型=数值，默认=30
- HUD Online Audience Face（中文：HUD 在线观众头像）：类型=布尔，默认=true
- Gift Check（中文：礼物检查）：类型=布尔，默认=true
- Audience Enter Preset（中文：观众进入预设）：类型=枚举，默认="Enter"
  可选：Enter（进入）；Welcome（欢迎）；Join（加入）
- HUD Online Audience Face Circle（中文：HUD在线观众头像圆形）：类型=布尔，默认=true
- HUD Online Audience Max Absolute Time (min)（中文：HUD 在线观众最大绝对时长（分钟））：类型=数值，默认=240
- Gift Triggers Config Path（中文：礼物触发器配置路径）：类型=文本，默认="config/liveStreamGiftTriggers.ini"
- Gift Update Cooldown (ms)（中文：礼物更新冷却（毫秒））：类型=数值，默认=5000L
- HUD Y Rate（中文：HUD 纵坐标比例）：类型=数值，默认=0.2f
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=8L
- Gift Notify Mode（中文：礼物通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Speak（讲述）；Title（标题）；Actionbar（行为栏）；WinToast（系统通知）
- Notify Audience Enter（中文：通知观众进入）：类型=枚举，默认="Off"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Speak（讲述）；Title（标题）；Actionbar（行为栏）
- HUD Online Audience Face Update Cooldown (d)（中文：HUD在线观众头像更新冷却（天））：类型=数值，默认=7
- HUD Online Audience Query API Host UID（中文：HUD 在线观众查询API主播UID）：类型=通用，默认=WORMWAKER_MID
- Audience Level Upgrade Congratulations（中文：观众等级升级恭喜）：类型=枚举，默认="Real Chatter"
  可选：Off（关闭）；Chatter（弹幕）；Notify（通知）；Title（标题）；Real Chatter（真弹幕）；Speak（讲述）；WinToast（系统通知）
- Notify Audience Face Download（中文：通知下载观众头像）：类型=布尔，默认=false
- HUD Online Audience Line Gap（中文：HUD 在线观众行距）：类型=数值，默认=35
- HUD Online Audience Background（中文：HUD 是否绘制在线观众背景）：类型=布尔，默认=true
- HUD Online Audience Background Shadow Thickness（中文：HUD 在线观众背景阴影厚度）：类型=数值，默认=20.0f
- HUD Online Audience Background Color（中文：HUD 在线观众背景颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Online Audience Background Shadow（中文：HUD 在线观众背景开启阴影）：类型=布尔，默认=true
- HUD Online Audience Background Unification（中文：是否显示HUD。 Online Audience 背景 Unification）：类型=布尔，默认=true
- Notify Audience Enter Chatter Color（中文：通知观众进入弹幕颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Online Audience Background Shadow Opacity (0~1)（中文：HUD 在线观众背景阴影不透明度 (0~1)）：类型=数值，默认=0.5f
- Gift Value Display（中文：礼物价值显示）：类型=枚举，默认="Off"
  可选：Off（关闭）；Gold（金瓜子）；Hamster（金仓鼠）；Silver（银瓜子）
- Notify Audience Leave（中文：通知观众离开）：类型=枚举，默认="Off"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Speak（讲述）；Title（标题）；Actionbar（行为栏）
- Audience Level System Only Followers（中文：观众等级系统仅供粉丝）：类型=布尔，默认=true
- Audience Leave Preset（中文：观众离开预设）：类型=枚举，默认="Leave"
  可选：Leave（离开）；Depart（离去）
- HUD Online Audience Query Source（中文：HUD 在线观众查询源）：类型=枚举，默认="Front-end"
  可选：Gold Rank API（贡献榜API）；Front-end（前端）
- HUD（中文：是否显示HUD。）：类型=布尔，默认=true
- HUD Online Audience Time Mode（中文：HUD 在线观众时长模式）：类型=枚举，默认="Absolute"
  可选：Off（关闭）；Absolute（绝对）；Relative（未收录）；Level System（等级系统）
- HUD Online Audience Animation Speed（中文：是否显示HUD。 Online Audience Animation 速率）：类型=数值，默认=6.0f
- HUD Online Audience Query API Page Size（中文：HUD 在线观众查询API页大小）：类型=数值，默认=2
- HUD Online Audience Max Count（中文：HUD 在线观众最大显示数量）：类型=数值，默认=12U
- HUD Online Audience Background Roundness（中文：HUD 在线观众背景圆滑程度）：类型=数值，默认=0.3f
- Auto Toggle LiveChatter Module（中文：自动联动直播弹幕模块）：类型=布尔，默认=true
- HUD Show Online Audience（中文：HUD 显示在线观众）：类型=布尔，默认=true
- Wipe Audience Profile If Not Fans（中文：清除非粉丝观众档案）：类型=布尔，默认=true
- HUD Online Audience Update Cooldown (ms)（中文：HUD 在线观众更新冷却时间 (毫秒)）：类型=数值，默认=8000L
- Audience Level System Speed（中文：观众等级系统速率）：类型=数值，默认=1.0f
- Room ID（中文：房间号）：类型=数值，默认=0L
- Notify Audience Leave Chatter Color（中文：通知观众离开弹幕颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Online Audience Background Opacity (0~1)（中文：HUD 在线观众背景不透明度 (0~1)）：类型=数值，默认=0.5f
- HUD Online Audience Background Shadow Color（中文：HUD 在线观众背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Gift Title Color（中文：礼物标题颜色）：类型=枚举，默认="Flow"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Online Audience Background Round Corners（中文：HUD 在线观众背景开启圆角）：类型=布尔，默认=true
- Audience Level Up Only When Host is Present（中文：观众等级系统仅在主播在场时工作）：类型=布尔，默认=true
- HUD Show Basic Information（中文：HUD 是否显示直播间基本信息）：类型=布尔，默认=true
- Gift Trigger Default Command（中文：礼物触发器默认命令）：类型=文本，默认="/bili live chatter Thanks {{nickname}} for {{gift}}[比心]!!!"
- Receive Info Data（中文：接收信息数据）：类型=布尔，默认=true
- HUD X Rate（中文：HUD 横坐标比例）：类型=数值，默认=0.05f

历史更新
- 7. 修复 Livestream 模块中 Chatter Remote Execution (Riskful) 无效的问题。
- 8. 为 Livestream 添加配置：
- 14. 添加模块：LiveStream，支持爬取B站直播间弹幕并显示出来：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

