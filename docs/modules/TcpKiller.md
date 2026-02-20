TcpKiller
TCP杀手
分类：Web
描述：断开指定进程的某些TCP连接。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TcpKiller（TCP杀手）用于断开指定进程的某些TCP连接。
适合联网信息获取、账号联动和在线交互场景。
建议先以管理员身份运行客户端。
初次使用可优先调整：Filter IPs、Notify、Filter Processes。

配置项
- Filter IPs（中文：过滤 IP）：类型=布尔，默认=false
- Process Id (Zero For Any)（中文：进程ID (用0指代任何)）：类型=数值，默认=0
- IP Type（中文：IP 类型）：类型=枚举，默认="Remote"
  可选：Remote（远程）；Local（本地）
- Notify（中文：通知）：类型=枚举，默认="Smart"
  可选：Off（关闭）；Only Error（Only 错误）；Smart（智能）；All（所有）
- Exclude LAN IP（中文：排除局域网IP）：类型=布尔，默认=true
- Filter Processes（中文：过滤进程）：类型=布尔，默认=false
- Port Type（中文：端口类型）：类型=枚举，默认="Remote"
  可选：Remote（远程）；Local（本地）
- Filter Ports（中文：过滤端口号）：类型=布尔，默认=true
- Process Name (Empty For Any)（中文：进程名 (用空指代任何)）：类型=文本，默认=""
- Mode（中文：模式）：类型=枚举，默认="Once"
  可选：Once（未收录）；Keep（保持）
- Ports Blacklist (e.g. 4-10,80)（中文：端口黑名单（例：4-10,80））：类型=文本，默认=""
- IP Whitelist (Sep With Semicolon)（中文：IP 白名单（用分号分隔多个））：类型=文本，默认=""
- Keep Mode Cooldown (ms)（中文：保持模式冷却时间 (毫秒)）：类型=数值，默认=200U
- Ports Whitelist (e.g. 4-10,80)（中文：端口白名单（例：4-10,80））：类型=文本，默认="80,443"
- Notify Mode（中文：通知模式）：类型=枚举，默认="Notify"
  可选：Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）
- IP Blacklist (Sep With Semicolon)（中文：IP 黑名单（用分号分隔多个））：类型=文本，默认=""
- Max Disconnection Count（中文：最大断连数量）：类型=数值，默认=65535

历史更新
- 4. 添加新模块：Tcp Killer，自动终止指定进程的 TCP 连接。

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
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

