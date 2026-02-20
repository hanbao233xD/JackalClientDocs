BiliVideo
B站视频
分类：Web
描述：查询并输出指定的B站视频的信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliVideo（B站视频）用于查询并输出指定的B站视频的信息。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Notify Mode、Mode、Notify Prefix。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Speak Changes（中文：讲述变化）：类型=布尔，默认=false
- Notify Mode（中文：通知模式）：类型=枚举，默认="Chatter"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；WinToast（系统通知）
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=4L
- AID/BID/Link（中文：AID/BID/链接）：类型=文本，默认=""
- Mode（中文：模式）：类型=枚举，默认="Once"
  可选：Once（未收录）；Monitor（监视）
- Async（中文：异步）：类型=布尔，默认=true
- User ID（中文：用户ID）：类型=通用，默认=WORMWAKER_MID
- Video（中文：视频）：类型=枚举，默认="Latest"
  可选：Latest（未收录）；Custom（自定义）
- Notify Prefix（中文：通知前缀）：类型=枚举，默认="Title"
  可选：Off（关闭）；Module Name（模块名称）；Title（标题）；BVID（BV 号）
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Query Cooldown (s)（中文：查询冷却（秒））：类型=数值，默认=1L
- No Decrease Notification（中文：禁用减少通知）：类型=布尔，默认=false

历史更新
- 22. /bilivideo 命令的参数现已支持完整链接。
- 23. 添加模块 BiliVideoCover，提取视频封面。
- 24. 添加模块 BiliVideo，输出视频各种信息。

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

