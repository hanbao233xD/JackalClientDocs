BiliProfile
B友档案
分类：Web
描述：为指定的B站用户生成一个档案。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliProfile（B友档案）用于为指定的B站用户生成一个档案。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Masterpieces Max Shown、Async、Show Like Videos。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Masterpieces Max Shown（中文：代表作最多显示几个）：类型=数值，默认=3
- Async（中文：异步）：类型=布尔，默认=true
- Show Like Videos（中文：显示点赞的视频）：类型=布尔，默认=true
- Show Coin Videos（中文：显示投币的视频）：类型=布尔，默认=true
- Like Videos Max Shown（中文：点赞视频最多显示几个）：类型=数值，默认=3
- Show Favourite Folders（中文：显示创建的收藏夹）：类型=布尔，默认=true
- Show Masterpieces（中文：显示代表作）：类型=布尔，默认=true
- User ID（中文：用户ID）：类型=通用，默认=WORMWAKER_MID
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Coin Videos Max Shown（中文：投币视频最多显示几个）：类型=数值，默认=3
- Show Space Notice（中文：显示主页公告）：类型=布尔，默认=true
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=5L
- Show Top Video（中文：显示热门视频）：类型=布尔，默认=true

历史更新
- 11. 为 Bili Profile 添加对昵称的获取和输出。 （使用前端方法）
- 15. 添加模块： BiliProfile，查询B站用户的一些信息。

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

