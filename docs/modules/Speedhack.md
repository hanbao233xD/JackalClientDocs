Speedhack
变速齿轮
分类：Process
描述：暂无描述

需求
- 安全级别：不安全模块（谨慎使用）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Speedhack（变速齿轮）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Speed Up Keybind、Process Name (Empty For Any)、Anti Unload。
该模块属于不安全能力，建议先备份关键数据并确认回滚路径。

配置项
- Speed Up Keybind（中文：加速按键绑定）：类型=按键/复合，默认={{"Keybind", {VK_RMENU, 187}}}
- Process Name (Empty For Any)（中文：进程名 (用空指代任何)）：类型=文本，默认="javaw.exe"
- Anti Unload（中文：反卸载）：类型=布尔，默认=false
- Process Id (Zero For Any)（中文：进程ID (用0指代任何)）：类型=数值，默认=0
- Speed（中文：速率）：类型=数值，默认=0.5f
- Speed Down Keybind（中文：减速按键绑定）：类型=按键/复合，默认={{"Keybind", {VK_RMENU, 189}}}
- Speed Change Step（中文：每次变速差值）：类型=数值，默认=0.1f

历史更新
- 15. 为 JDSpeedhack.dll 变速模块添加了一个针对 Sleep 的 hook，以便变速延时。
- 12. 为变速齿轮 Speedhack 模块添加配置项：Anti Unload。打开此项后，将会开启DLL自保护功能，无法通过正常方式卸载。所以如果要卸载只能关闭进程。相应的修改了JDSpeedhack.dll
- 11. 添加模块 Speedhack ，即变速器，通过注入DLL改变某一进程的速度。

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

