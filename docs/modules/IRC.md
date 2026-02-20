IRC
聊天室
分类：Web
描述：一个简单的在线聊天系统。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IRC（聊天室）用于一个简单的在线聊天系统。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Taboo Filter、Quick Send Style、Notify My Mentions。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Speak Message（中文：讲述消息）：类型=布尔，默认=true
- Cancel Sending When As Guest（中文：访客身份时取消发送）：类型=布尔，默认=true
- Taboo Filter（中文：违禁词过滤）：类型=布尔，默认=false
- Cancel Sending Repeated Message（中文：取消发送重复消息）：类型=布尔，默认=true
- Blatant Send（中文：暴力发送）：类型=布尔，默认=false
- Speak Max Length（中文：最大讲述长度）：类型=数值，默认=60
- Underline Pro User Messages（中文：为专业版用户的消息添加下划线）：类型=布尔，默认=true
- Fast Send With # Prefix Command（中文：使用#开头的命令快速发送）：类型=布尔，默认=true
- Blocked User Names (Sep With Semicolon) (PRO)（中文：已屏蔽用户名称（用分号分隔）（专业版））：类型=文本，默认=""
- Message Fetch Timeout (s)（中文：消息拉取超时 (秒)）：类型=数值，默认=20
- Quick Send Hotkey（中文：快速发送快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, '0'}}}
- Ignore Old Messages（中文：忽略久远的消息）：类型=布尔，默认=true
- Quick Send Style（中文：快速发送的样式）：类型=枚举，默认="Input Box"
  可选：Off（关闭）；Bottom Chat（底部聊天栏）；Input Box（输入框）
- Notify My Mentions（中文：通知对我的@）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；WinToast（系统通知）
- Message Send Timeout (s)（中文：消息发送超时 (秒)）：类型=数值，默认=20
- Message Notify Type（中文：消息通知类型）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Island（岛）
- Message Length Limit Via GET（中文：使用GET时的消息长度上限）：类型=数值，默认=39
- Auto Change Name When Name Missing（中文：名称丢失时自动改名）：类型=布尔，默认=true
- Console Output（中文：控制台输出）：类型=布尔，默认=true
- Text Database Update Method（中文：文本数据库更新方法）：类型=枚举，默认="POST"
  可选：Old（老版）；GET（未收录）；POST（未收录）
- Old Messages Threshold (s)（中文：久远消息阈值 (秒)）：类型=数值，默认=180
- Message Fetch Interval (ms)（中文：消息拉取延迟 (毫秒)）：类型=数值，默认=5000L
- Async While Getting Username（中文：异步获取用户名）：类型=布尔，默认=true
- Debug Output（中文：调试输出）：类型=布尔，默认=false

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

