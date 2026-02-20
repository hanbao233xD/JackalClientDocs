BiliNotifier
B站通知
分类：Web
描述：向你发送B站的通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliNotifier（B站通知）用于向你发送B站的通知。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Notify Likes、Notify Comments、Notify Danmaku。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Notify Likes（中文：通知点赞消息。）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Off（中文：关闭）：类型=文本，默认="Notify", "Chatter", "Actionbar", "Title", "WinToast"
- PREVIOUS DATA（中文：上一次的缓存数据。无需修改。）：类型=文本，默认="{\"at\":0,\"chat\":0,\"coin\":0,\"danmu\":0,\"favorite\":0,\"like\":0,\"recv_li ...
- Notify Comments（中文：通知回复消息。）：类型=布尔，默认=true
- Notify Danmaku（中文：通知弹幕消息。）：类型=布尔，默认=true
- Show Reply Content（中文：显示回复内容）：类型=枚举，默认="Chatter"
  可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；WinToast（系统通知）
- Notify Chats（中文：通知私信消息。）：类型=布尔，默认=true
- Notify System Messages（中文：通知系统消息。）：类型=布尔，默认=true
- Notify Favorites（中文：通知收藏消息。）：类型=布尔，默认=true
- Ignore Negative Changes（中文：忽略负值变化。）：类型=布尔，默认=true
- Notify Ats（中文：通知@我的消息。）：类型=布尔，默认=true
- Notify Coins（中文：通知投币消息。）：类型=布尔，默认=true
- Query Cooldown (s)（中文：查询冷却（秒））：类型=数值，默认=5L
- Mode（中文：模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；WinToast（系统通知）
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=4L
- Notify Uploader Helper Messages（中文：通知UP主小助手消息。）：类型=布尔，默认=true
- Reply Content Max Length（中文：回复内容最大长度）：类型=数值，默认=80U

历史更新
- 31. 为 Bili Notifier 添加配置：
- 15. 添加新模块：Bili Settings。表面上看是B站设定，其实按一下就可以扫码登录。Bili Notifier, Bili Console等模块会用到这里的 Cookies 等信息。
- 16. 添加新模块：Bili Notifier，可以通知你B站的消息种类和数量。注意：需要先用 Bili Settings 登录才能使用。

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
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无

