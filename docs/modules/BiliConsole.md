BiliConsole
B站控制台
分类：Web
描述：一个实用的交互式B站控制台。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliConsole（B站控制台）用于一个实用的交互式B站控制台。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Update Cooldown (ms)、Draw Cooldown (ms)。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Show User Space Notice（中文：显示用户空间公告）：类型=布尔，默认=true
- Show User Masterpieces（中文：显示用户代表作）：类型=布尔，默认=true
- Update Periodically（中文：是否周期性刷新页面。按 F5 可以手动刷新。）：类型=布尔，默认=false
- Draw Periodically（中文：是否周期性绘制。不推荐开启，因为绘制需要时间。）：类型=布尔，默认=false
- Use Chinese Number Format（中文：使用中文数字格式）：类型=布尔，默认=true
- Show User Favorite Folders（中文：显示用户收藏夹缩略信息）：类型=布尔，默认=true
- User Medal Wall Y（中文：用户 Medal Wall Y）：类型=数值，默认=3
- Show User Top Video（中文：显示用户置顶的视频）：类型=布尔，默认=true
- Single Coin Quantity（中文：单次投币数量）：类型=数值，默认=2U
- User Medal Wall X（中文：用户 Medal Wall X）：类型=数值，默认=110
- Like When Coin（中文：投币时点赞）：类型=布尔，默认=true
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Debug Output（中文：调试输出）：类型=布尔，默认=false
- Show User Like Videos（中文：显示用户点赞的视频）：类型=布尔，默认=true
- User Medal Wall Display（中文：用户勋章墙展示）：类型=布尔，默认=true
- Update Cooldown (ms)（中文：更新冷却（毫秒））：类型=数值，默认=180000L
- Draw Cooldown (ms)（中文：绘制冷却（毫秒））：类型=数值，默认=500L
- Show User Coin Videos（中文：显示用户投币的视频）：类型=布尔，默认=true

历史更新
- 15. 添加新模块：Bili Settings。表面上看是B站设定，其实按一下就可以扫码登录。Bili Notifier, Bili Console等模块会用到这里的 Cookies 等信息。
- 17. 添加新模块：Bili Console，B站交互式控制台，工程量巨大的一个模块。

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

