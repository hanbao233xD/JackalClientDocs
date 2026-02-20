Tasklist
进程列表
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
Tasklist（进程列表）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Style。

配置项
- Use Record（中文：使用记录）：类型=布尔，默认=false
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Style（中文：风格）：类型=枚举，默认="Normal"
  可选：Vanilla（原版）；Normal（普通）；Pathes（未收录）；Command Lines（命令行）
- Verify Signature（中文：验证签名）：类型=布尔，默认=false

历史更新
- 42. 为 Tasklist 模块的 Style 添加配置项：Pathes
- 43. 为 Tasklist 添加配置项：

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

