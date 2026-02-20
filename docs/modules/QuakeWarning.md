QuakeWarning
地震预警
分类：Web
描述：地震来临时提供预警。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
QuakeWarning（地震预警）用于地震来临时提供预警。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Warning Filter、Notify Mode、Check Cooldown (ms)。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Min Warning Intensity（中文：最低警告烈度）：类型=数值，默认=0.0
- Warning Filter（中文：警告过滤器）：类型=枚举，默认="Global"
  可选：Global（全局）；Domestic（国内）；Province（省份）；City（城市）
- Notify Mode（中文：通知模式）：类型=枚举，默认="Title"
  可选：Notify（通知）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）
- Quake Query Source（中文：地震查询源）：类型=枚举，默认="Auto"
  可选：Auto（自动）；JMA（未收录）；Sichuan（四川）；Fujian（福建）；CENC（未收录）；CWA（未收录）
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=30000L
- Async（中文：异步）：类型=布尔，默认=true
- Max Warning Event Age (hour)（中文：最大警告事件间隔 (小时)）：类型=数值，默认=3.0
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=10L
- AI Location Validation（中文：人工智能位置校验）：类型=布尔，默认=false
- Min Warning Magnitude（中文：最低警告震级）：类型=数值，默认=0.0
- Clear Events When Disabled（中文：禁用时清空事件）：类型=布尔，默认=true

历史更新
- 32. 添加模块：Quake Warning，提供地震预警

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

