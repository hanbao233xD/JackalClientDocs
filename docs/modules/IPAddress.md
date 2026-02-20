IPAddress
IP地址
分类：Web
描述：查看本机IP地址及相关信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IPAddress（IP地址）用于查看本机IP地址及相关信息。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Location Cache Update Cooldown (ms)、Method。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Query External IP Position（中文：查询外网 IP 地理位置）：类型=布尔，默认=true
- External IP Address Source URL（中文：外网 IP 获取来源网址）：类型=枚举，默认=XorStringA("https:
- Async（中文：异步）：类型=布尔，默认=true
- Location Cache Update Cooldown (ms)（中文：位置缓存更新冷却（毫秒））：类型=数值，默认=30000L
- Use HTTPS When Query Position（中文：查询位置时使用 HTTPS）：类型=布尔，默认=true
- Output Local IP Details（中文：输出本地 IP 详细信息）：类型=布尔，默认=true
- Output Verbose Connection Info（中文：输出冗长的连接信息）：类型=布尔，默认=false
- Method（中文：方法）：类型=枚举，默认="Curl"
  可选：Curl（未收录）；Command（命令）
- IP Location Query Source（中文：IP位置查询源）：类型=枚举，默认="PearAPI"
  可选：Vore.top（Vore.顶端）；PearAPI（未收录）；IQIYI（未收录）
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Query External IP（中文：查询外网 IP）：类型=布尔，默认=true
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=5L
- AI Generated Description of IP Position（中文：IP位置使用人工智能生成的描述）：类型=布尔，默认=false

历史更新
- 72. 为 IPAddress 添加配置：
- 20. 为 IP Address, IP Horror 和 Weather 添加 Auto Console 选项。
- 9. 添加模块：IPAddress，可以查看本机IP地址相关信息。

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

