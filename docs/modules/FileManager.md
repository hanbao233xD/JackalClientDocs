FileManager
文件管理器
分类：File
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
FileManager（文件管理器）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：File Enum Max Cooldown (ms)、Directory Status Update Cooldown (ms)、Drive Enum Larger Cooldown (ms)。

配置项
- Menu Icons（中文：菜单图标）：类型=布尔，默认=true
- Calc Selected Folder Size（中文：计算已选择文件夹总大小）：类型=枚举，默认="Off"
  可选：Off（关闭）；Async（异步）；Sync（同步）
- Cancel Selection Hotkey（中文：取消选择快捷键）：类型=按键/复合，默认={{"Keybind", {VK_ESCAPE}}}
- File Enum Max Cooldown (ms)（中文：文件枚举最大冷却 (毫秒)）：类型=数值，默认=10000L
- Directory Status Update Cooldown (ms)（中文：目录状态更新冷却（毫秒））：类型=数值，默认=3000L
- Async File Enum（中文：异步文件枚举）：类型=布尔，默认=true
- Tab Switcher Round Corners（中文：标签页切换器启用圆角）：类型=布尔，默认=true
- Menu Round Corners（中文：菜单圆角）：类型=布尔，默认=true
- Menu Background Color 2（中文：菜单背景颜色 2）：类型=文本，默认="69;139;0;220"
- Tab Font Size（中文：标签页字号）：类型=数值，默认=30U
- Open Selected With Single Click（中文：单击打开选中文件）：类型=布尔，默认=true
- Tab Switcher Shadow Color（中文：标签切换器阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Drive Show Serial Number（中文：驱动器显示序列号）：类型=布尔，默认=true
- Menu Background Color 1（中文：菜单背景颜色 1）：类型=文本，默认="16;78;139;220"
- Selected Item Outline Color（中文：选择项轮廓色）：类型=文本，默认="18;74;143;200"
- Drive Enum Larger Cooldown (ms)（中文：驱动器枚举更高的冷却 (毫秒)）：类型=数值，默认=3000L
- Tab Switcher Font Size（中文：标签页切换器字号）：类型=数值，默认=30U
- Drive Enum Cooldown (ms)（中文：驱动器枚举冷却 (毫秒)）：类型=数值，默认=1000L
- Slow File Enum Item Size Threshold（中文：减慢枚举文件的项目文件阈值）：类型=数值，默认=50
- File Time Colorful Highlight (PRO)（中文：文件时间彩色高亮（专业版））：类型=枚举，默认="Modified Time"
  可选：Off（关闭）；Modified Time（修改时间）
- UAC Bypass Method（中文：UAC 绕过方式）：类型=枚举，默认="Computerdefaults Legit"
  可选：Computerdefaults（未收录）；Computerdefaults Legit（未收录）；Fodhelper（未收录）；Fodhelper Legit（未收录）；Cmstp（未收录）；PCA (PRO)（未收录）；Sdclt（未收录）；Sdclt Legit（未收录）；Slui（未收录）；Slui Legit（未收录）
- Menu Line Gap（中文：菜单行距）：类型=数值，默认=10
- Tab Switcher Shadow Opacity (0~1)（中文：标签页切换器阴影不透明度 (0~1））：类型=数值，默认=0.5f
- Tab Switcher Shadow（中文：标签页切换器启用阴影）：类型=布尔，默认=true
- File Item Font Size（中文：文件项目字号）：类型=数值，默认=35
- Drive Space Bar Color Start（中文：驱动器空间条初始颜色）：类型=文本，默认="86;156;214;220"
- Drive Space Bar Absolute Coefficient (px/GB)（中文：驱动器空间条绝对系数 (像素每GB)）：类型=数值，默认=1.1f
- Menu Roundness（中文：菜单圆滑程度）：类型=数值，默认=0.1f
- Drive Show Volume Label（中文：驱动器显示卷标）：类型=布尔，默认=true
- File Item Line Gap（中文：文件项目行距）：类型=数值，默认=5
- Tab Switcher Color（中文：标签切换器颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Show File Size（中文：显示文件大小）：类型=布尔，默认=true
- Show Modified Time（中文：显示修改时间）：类型=布尔，默认=true
- Drive Font Size（中文：驱动器字号）：类型=数值，默认=30
- Show File Time Difference (PRO)（中文：显示文件时间差（专业版））：类型=布尔，默认=true
- Menu Easing Speed (0~1)（中文：菜单缓动速率 (0~1)）：类型=数值，默认=0.1f
- Info Font Size（中文：信息字号）：类型=数值，默认=30
- Menu Mask Alpha (0~1)（中文：菜单遮罩不透明度 (0~1)）：类型=数值，默认=0.3f
- Hovered Item Background Color（中文：悬停项背景色）：类型=文本，默认="239;200;244;90"
- Move Selection Cooldown (ms)（中文：移动选择冷却 (毫秒)）：类型=数值，默认=100L
- Menu Shadow（中文：菜单阴影）：类型=布尔，默认=true
- Check Directory Is Empty（中文：检查目录是否为空）：类型=布尔，默认=true
- Apply Folder Attributes（中文：应用目录属性）：类型=枚举，默认="Query"
  可选：Query（询问）；Only Folder（仅文件夹）；Recursive（递归）
- Enable Night Module（中文：启用夜间模块）：类型=布尔，默认=true
- Stop File Enum Item Size Threshold（中文：停止枚举文件的项目数量阈值）：类型=数值，默认=200
- Drive Space Bar Height（中文：驱动器空间条高）：类型=数值，默认=25
- Drive Icon Size（中文：驱动器图标大小）：类型=数值，默认=50
- Drive Space Bar Color End（中文：驱动器空间条最终颜色）：类型=文本，默认="255;0;0;220"
- Menu Background Darkness (0~1)（中文：菜单背景黑暗程度 (0~1)）：类型=数值，默认=0.8f
- Menu Shadow Opacity (0~1)（中文：菜单阴影不透明度 (0~1)）：类型=数值，默认=0.5f
- Show Hidden Files（中文：显示隐藏的文件）：类型=布尔，默认=true
- Sort Order（中文：排序顺序）：类型=枚举，默认="Ascending"
  可选：Ascending（升序）；Descending（降序）
- Sort By（中文：排序依据）：类型=枚举，默认="Name"
  可选：Name（名称）；Type（类型）；Size（大小）；Modified Time（修改时间）
- Drive Show File System（中文：驱动器显示文件系统）：类型=布尔，默认=true
- Multiple File Open（中文：多个文件的打开）：类型=枚举，默认="Allow"
  可选：Off（关闭）；Allow（允许）
- Drive Space Bar Width（中文：驱动器空间条宽）：类型=数值，默认=300
- Wheel Sensitivity（中文：滚轮灵敏度）：类型=数值，默认=200.0f
- Apply Multifile Attributes（中文：应用多文件属性）：类型=枚举，默认="Unify"
  可选：Unify（统一化）；Toggle（切换）
- Show System Files（中文：显示系统文件）：类型=布尔，默认=true
- Selected Item Background Color（中文：选择项背景色）：类型=文本，默认="66;90;123;200"
- Deletion Confirmation（中文：删除时确认）：类型=枚举，默认="Always"
  可选：Off（关闭）；Only Force（仅强制）；Always（总是）
- Hovered Item Outline Color（中文：悬停项轮廓色）：类型=文本，默认="151;4;148;200"
- Menu Outline Color（中文：菜单轮廓颜色）：类型=文本，默认="255;185;15;255"
- Tab Switcher Roundness（中文：标签页切换器圆滑程度）：类型=数值，默认=0.3f
- File Enum Min Cooldown (ms)（中文：文件枚举最小冷却 (毫秒)）：类型=数值，默认=500L
- File Attributes Update Cooldown (ms)（中文：文件属性更新冷却（毫秒））：类型=数值，默认=1000L
- Menu Animation Duration (ms)（中文：菜单动画时长（毫秒））：类型=数值，默认=200L
- File Filter（中文：文件筛选器）：类型=文本，默认="*.*"
- Calc Selected Total Size（中文：计算已选择总大小）：类型=布尔，默认=true
- Drive Space Text Format（中文：驱动器空间文字格式）：类型=枚举，默认="Free / Total"
  可选：Free / Total（可用 / 总计）；Used / Total（已用 / 总计）
- Menu Shadow Thickness（中文：菜单阴影厚度）：类型=数值，默认=30.0f
- Menu Basic Alpha (0~1)（中文：菜单基础不透明度 (0~1)）：类型=数值，默认=0.8f
- Menu Shadow Color（中文：菜单阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Toolbar Color（中文：工具栏颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Tab Switcher Shadow Thickness（中文：标签页切换器阴影厚度）：类型=数值，默认=40.0f
- Show Attributes（中文：显示属性）：类型=布尔，默认=true
- File Operation API（中文：文件操作 API）：类型=枚举，默认="COM"
  可选：COM（未收录）；Win32（未收录）
- Drive Space Bar Style（中文：驱动器空间条风格）：类型=枚举，默认="Classic"
  可选：Classic（经典）；Absolute（绝对）
- Sort Files（中文：给文件排序）：类型=布尔，默认=true
- Tab Switcher Opacity (0~1)（中文：标签页切换器不透明度 (0~1)）：类型=数值，默认=0.7f
- Tab Height（中文：标签页高度）：类型=数值，默认=40U
- Go to Parent Folder Hotkey（中文：前往父文件夹快捷键）：类型=按键/复合，默认={{"Keybind", {VK_BACK}}}
- Menu Font Size（中文：菜单字号）：类型=数值，默认=30
- Icon Style（中文：图标风格）：类型=枚举，默认="Character"
  可选：Off（关闭）；Character（字符）；Normal（普通）；Full（未收录）

历史更新
- 2. 为 File Manager 添加配置：
- 10. 修复 FileManager 在不显示隐藏文件和系统文件时留出多余位子的问题。
- 4. 加入模块：FileManager 文件管理器。添加新的顶部选项卡 "Apps"，文件管理器在这里查看。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)
- [DiskMissing (磁盘丢失)](./DiskMissing.md)

相关资料
无

