WebSettings
网络设定
分类：Web
描述：客户端联网设置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
WebSettings（网络设定）用于客户端联网设置。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Network Check Cooldown (ms)、Network Online Status Change Notify Mode。

配置项
- Network Module Force Online（中文：联网模块强制联网）：类型=布尔，默认=true
- Network Check Cooldown (ms)（中文：网络检查冷却 (毫秒)）：类型=数值，默认=5000U
- Network Online Status Change Notify Mode（中文：网络在线状态变化时通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Title（标题）；Chatter（弹幕）；WinToast（系统通知）
- Output Curl Error（中文：输出 Curl 错误）：类型=枚举，默认="Always"
  可选：Off（关闭）；Non Timeout（非超时）；Always（总是）

历史更新
- 47. 添加模块：Web Settings，将客户端联网设置集中在这里。

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

