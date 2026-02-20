ProcessManager
进程管理器
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
ProcessManager（进程管理器）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Keyword Filter、Enum Cooldown (ms)、Filter Critical PID <= 4。

配置项
- Simplify Command Line（中文：精简命令行）：类型=布尔，默认=true
- Open File Location Select（中文：打开 文件 Location Select）：类型=布尔，默认=true
- Menu Font Size（中文：菜单字号）：类型=数值，默认=28
- Show PPID（中文：显示 父进程ID）：类型=布尔，默认=true
- Menu Line Gap（中文：菜单行距）：类型=数值，默认=8
- Show Memory Usage Private (PRO)（中文：显示内存占用（专用，专业版））：类型=布尔，默认=true
- Highlight Process Lifecycle (PRO)（中文：高亮进程创建/退出（专业版））：类型=布尔，默认=true
- Show Path（中文：显示 路径）：类型=布尔，默认=true
- Show Architecture (PRO)（中文：显示架构 (PRO)）：类型=枚举，默认="Label"
  可选：Off（关闭）；Column（未收录）；Label（未收录）
- Show Description（中文：显示描述）：类型=布尔，默认=true
- Sort By（中文：排序依据）：类型=枚举，默认="PID"
  可选：PID（进程ID）；Name（名称）；Threads（个线程）；PPID（父进程ID）；CPU（CPU）；GPU（GPU）；Memory (Private)（内存（专用））；Privilege（权限）；Owner（所有者）；Rank（进程类型）；Description（简介）；Profile Description（档案描述）
- Keyword Filter（中文：Keyword 筛选器）：类型=文本，默认=""
- Async Enum（中文：异步 Enum）：类型=布尔，默认=true
- Show Process Privilege Tag (PRO)（中文：显示进程权限标签 (PRO)）：类型=布尔，默认=true
- Show Owner（中文：显示 所有者）：类型=布尔，默认=true
- Process Name Color（中文：进程名颜色）：类型=枚举，默认="Dynamic"
  可选：Type（类型）；Dynamic（动态）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Show PID（中文：显示进程ID）：类型=布尔，默认=true
- Menu Easing Speed (0~1)（中文：菜单缓动速率 (0~1)）：类型=数值，默认=0.18f
- Row Select Alpha (0~1)（中文：Row Select 不透明度 (0~1)）：类型=数值，默认=0.66f
- Menu Animation Duration (ms)（中文：菜单动画时长（毫秒））：类型=数值，默认=200L
- Menu Alpha (0~1)（中文：Menu 不透明度 (0~1)）：类型=数值，默认=0.88f
- Show Process Icon（中文：显示进程图标）：类型=布尔，默认=false
- Row Height（中文：Row 高度）：类型=数值，默认=42
- Use Tree Structure（中文：使用树形结构）：类型=布尔，默认=false
- Show CPU Usage (PRO)（中文：显示CPU占用率（专业版））：类型=布尔，默认=true
- Enum Cooldown (ms)（中文：Enum 冷却 (ms)）：类型=数值，默认=1200L
- Auto Refresh On Open（中文：自动 刷新 开启 打开）：类型=布尔，默认=true
- Enum Max Item Count（中文：Enum 最大数量 Item 数目）：类型=数值，默认=4096
- Dynamic Column Width (PRO)（中文：动态列宽（专业版））：类型=布尔，默认=true
- Lifecycle Highlight Duration (ms)（中文：生命周期高亮时长 (毫秒)）：类型=数值，默认=3500L
- Background Alpha (0~1)（中文：背景 不透明度 (0~1)）：类型=数值，默认=0.68f
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.14f
- Animation Duration (ms)（中文：动画持续时间 (毫秒)）：类型=数值，默认=260L
- Show GPU Usage (PRO)（中文：显示GPU占用率（专业版））：类型=布尔，默认=true
- Filter Critical PID <= 4（中文：筛选器 严重 进程ID <= 4）：类型=布尔，默认=false
- Show Rank（中文：显示 进程类型）：类型=布尔，默认=true
- Filter Lifecycle Rows By Search（中文：搜索时筛选生命周期列表）：类型=布尔，默认=false
- Sort Order（中文：排序顺序）：类型=枚举，默认="Ascending"
  可选：Ascending（升序）；Descending（降序）
- Header Alpha (0~1)（中文：Header 不透明度 (0~1)）：类型=数值，默认=0.78f
- Enable Night Module（中文：启用夜间模块）：类型=布尔，默认=true
- Header Font Size（中文：Header 字体 大小）：类型=数值，默认=28
- Show Threads（中文：显示 个线程）：类型=布尔，默认=true
- Row Hover Alpha (0~1)（中文：Row Hover 不透明度 (0~1)）：类型=数值，默认=0.48f
- Font Size（中文：字号）：类型=数值，默认=30
- Menu Roundness（中文：菜单圆滑程度）：类型=数值，默认=0.18f
- Pin Lifecycle Rows On Top（中文：将创建/退出进程置顶）：类型=布尔，默认=false
- Show Command Line (PRO)（中文：显示命令行 (PRO)）：类型=布尔，默认=true
- Show Profile Description（中文：显示档案描述）：类型=布尔，默认=false
- Tree Sort Strategy（中文：树形排序策略）：类型=枚举，默认="Keep Parent First"
  可选：Keep Parent First（父进程优先）；Subtree Metric（按子树指标）
- Roundness（中文：圆滑程度）：类型=数值，默认=0.15f
- Process Path Color Style（中文：进程路径颜色样式）：类型=枚举，默认="Static"
  可选：Static（静态）；Dynamic（动态）
- Line Gap（中文：行距）：类型=数值，默认=6
- Wheel Sensitivity（中文：滚轮灵敏度）：类型=数值，默认=160.0f

历史更新
- 46. 添加模块：ProcessManager 进程管理器，成为第二个 App。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)
- [ListServices (枚举服务)](./ListServices.md)

相关资料
无

