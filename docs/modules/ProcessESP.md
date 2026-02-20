ProcessESP
进程透视
分类：Process
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ProcessESP（进程透视）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Exited Process Notify Whitelist Enabled、New Process Notify Blacklist Enabled、New Process Notify Whitelist (Regex Sep With Semicolon)。

配置项
- Exited Process Notify Whitelist Enabled（中文：进程通知白名单是否启用）：类型=布尔，默认=false
- New Process Notify Blacklist Enabled（中文：新增进程通知黑名单是否启用）：类型=布尔，默认=false
- New Process Notify Whitelist (Regex Sep With Semicolon)（中文：新增进程通知白名单 (用分号分隔的正则表达式)）：类型=文本，默认="cmd\\.exe;explorer\\.exe;Hips[a-zA-Z]+\\.exe;360[a-zA-Z0-9]+\\.exe"
- New Process Notify Blacklist (Regex Sep With Semicolon)（中文：新增进程通知黑名单 (用分号分隔的正则表达式)）：类型=文本，默认="loader\\.exe;conhost\\.exe;tesseract\\.exe"
- New Process Notify Mode（中文：新增进程通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=100L
- Exited Process Notify Blacklist Enabled（中文：进程通知黑名单是否启用）：类型=布尔，默认=false
- New Process Parent Display（中文：新进程显示父进程）：类型=布尔，默认=true
- Exited Process Notify Whitelist (Regex Sep With Semicolon)（中文：退出进程通知白名单 (用分号分隔的正则表达式)）：类型=文本，默认="cmd\\.exe;explorer\\.exe;Hips[a-zA-Z]+\\.exe;360[a-zA-Z0-9]+\\.exe"
- Exited Process Notify Blacklist (Regex Sep With Semicolon)（中文：退出进程通知黑名单 (用分号分隔的正则表达式)）：类型=文本，默认="loader\\.exe;conhost\\.exe;tesseract\\.exe"
- Exited Process Notify Mode（中文：退出进程通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
- New Process Notify Whitelist Enabled（中文：新增进程通知白名单是否启用）：类型=布尔，默认=false

历史更新
- 12. 为 ProcessESP 添加配置：
- 18. 实装模块： Process ESP，探测进程及变化，并进行通知。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

相关资料
无

