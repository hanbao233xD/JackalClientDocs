WeatherInfo
天气信息
分类：Web
描述：一些天气方面的功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
WeatherInfo（天气信息）用于一些天气方面的功能。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Custom City、Auto Console、Use Custom QWeather ApiHost。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Custom City（中文：自定义城市）：类型=文本，默认="北京市"
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Use Custom QWeather ApiHost（中文：使用自定义和风天气Api主机）：类型=布尔，默认=false
- Custom QWeather ApiKey（中文：自定义和风天气Api密钥）：类型=文本，默认=""
- Custom QWeather ApiHost（中文：自定义和风天气Api主机）：类型=文本，默认=""
- Async（中文：异步）：类型=布尔，默认=true
- City（中文：城市）：类型=枚举，默认="Auto Locate"
  可选：Auto Locate（自动定位）；Custom（自定义）
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=10L
- Use Custom QWeather ApiKey（中文：使用自定义和风天气Api密钥）：类型=布尔，默认=false

历史更新
- 18. 为 WeatherInfo 添加配置：
- 21. 修复了 IPAddress, IPHorror, WeatherInfo 崩溃的问题。
- 48. 重命名 Weather 模块为 WeatherInfo 天气信息。

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

