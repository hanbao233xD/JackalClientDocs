BiliHot
B站热搜
分类：Web
描述：显示B站热搜。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliHot（B站热搜）用于显示B站热搜。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Auto Console、Interface、Show Top (Mobile)。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Interface（中文：接口）：类型=枚举，默认="Standard"
  可选：Standard（标准）；Mobile（移动端）
- Show Top (Mobile)（中文：显示登顶 (移动端)）：类型=布尔，默认=true
- Show Heat Score (Standard)（中文：显示热度分数 (标准)）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=5L
- Limit（中文：上限）：类型=数值，默认=20U

历史更新
- 10. 添加模块：Bili Hot，显示指定数量的B站热搜。

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

