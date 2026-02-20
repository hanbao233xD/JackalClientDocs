IPHorror
IP恐惧
分类：Web
描述：根据提供的IP地址组装一个吓人的段落

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IPHorror（IP恐惧）用于根据提供的IP地址组装一个吓人的段落。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Target IP Address、Method。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Log Destination Info（中文：日志记录目的地信息）：类型=布尔，默认=true
- Target IP Address（中文：目标 IP 地址）：类型=文本，默认="127.0.0.1"
- Async（中文：异步）：类型=布尔，默认=true
- Method（中文：方法）：类型=枚举，默认="V1"
  可选：V1（未收录）；AI Normal（人工智能 普通）；AI Mesugaki（人工智能 Mesugaki）；AI Catgirl（人工智能 猫娘）
- Copy to Clipboard（中文：复制到剪贴板）：类型=布尔，默认=true

历史更新
- 24. 修正 IPHorror 的外国判定。
- 20. 为 IP Address, IP Horror 和 Weather 添加 Auto Console 选项。
- 27. 添加几个实验性模块：Totem, AutoTotem, QQInspect, IPHorror,

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

