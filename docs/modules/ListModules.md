ListModules
枚举模块
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
ListModules（枚举模块）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Async、Auto Console、Verify。

配置项
- Async（中文：异步）：类型=布尔，默认=true
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Verify（中文：验证）：类型=布尔，默认=true
- PID (0 for self)（中文：进程ID (0 for self)）：类型=数值，默认=0

历史更新
- 18. 使 /listmodules 命令可以接收一个参数。
- 3. 现在 ListModules 模块如果枚举的是64位进程，则会调用loader进行枚举。

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
- [ListServices (枚举服务)](./ListServices.md)

相关资料
无

