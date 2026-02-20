BiliFeed
B站推荐
分类：Web
描述：从B站获取一些推荐视频。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliFeed（B站推荐）用于从B站获取一些推荐视频。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Style。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=5L
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Style（中文：风格）：类型=枚举，默认="Simple"
  可选：Simple（简易）；List（未收录）；Fancy（优美）
- Limit（中文：上限）：类型=数值，默认=100U

历史更新
- 17. 添加新模块：Bili Feed，给出B站视频推荐。

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

