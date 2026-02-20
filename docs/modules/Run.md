Run
运行
分类：Process
描述：运行指定进程。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Run（运行）用于运行指定进程。
适合进程观测、控制与排障场景。
初次使用可优先调整：Target。

配置项
- Target（中文：目标）：类型=文本，默认="cmd.exe"
- Parameters（中文：参数）：类型=文本，默认=""
- Hidden（中文：隐藏）：类型=布尔，默认=false
- Watch（中文：守望）：类型=布尔，默认=false
- Directory（中文：目录）：类型=文本，默认=""

历史更新
无（HISTORY 中暂无明确记录）

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

