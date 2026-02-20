ListServices
枚举服务
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
ListServices（枚举服务）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Style。

配置项
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Style（中文：风格）：类型=枚举，默认="Normal"
  可选：Vanilla（原版）；Vanilla (Only Win32)（原版 (仅Win32)）；Vanilla (Only Drivers)（原版 (仅驱动程序)）；Vanilla Custom（原版 (自定义)）；Normal（普通）；Simple（简易）
- Vanilla Enum Custom Command（中文：原版枚举自定义命令）：类型=文本，默认="sc query"

历史更新
- 10. 添加新模块 ListServices: 枚举服务。

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

