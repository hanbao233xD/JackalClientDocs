AntiBrowser
反浏览器
分类：Web
描述：自动关闭浏览器或者链接跳转。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiBrowser（反浏览器）用于自动关闭浏览器或者链接跳转。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Check Cooldown、Filter。

配置项
- Check Cooldown（中文：检查冷却）：类型=数值，默认=1000U
- Async（中文：异步）：类型=布尔，默认=true
- Measures（中文：措施）：类型=枚举，默认="Kill"
  可选：Warn（警告）；Kill（击杀）；SilentKill（暗杀）；KillParent（弑父）；KillFamily（剿灭父子）
- Filter（中文：筛选器）：类型=枚举，默认="OpenUrl Browser"
  可选：Any Browser（任何浏览器）；OpenUrl Browser（打开链接的浏览器）；OpenHttpUrl Browser（打开HTTP链接的浏览器）；OpenUrl Process（打开链接的进程）；OpenHttpUrl Process（打开HTTP链接的进程）

历史更新
- 6. 添加新模块 Anti Browser: 阻止弹出浏览器或者网站。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

