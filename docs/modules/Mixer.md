Mixer
混音器
分类：Misc
描述：显示所有所有发声的进程的音量。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Mixer（混音器）用于显示所有所有发声的进程的音量。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Temp HUD Duration (ms)、HUD Mode、Temp HUD Animation Duration (ms)。

配置项
- Base Y Rate（中文：基础纵坐标比例）：类型=数值，默认=0.05f
- Show Only Volume > 0（中文：只显示音量大于0的）：类型=布尔，默认=true
- Process Id (Zero For Any)（中文：进程ID (用0指代任何)）：类型=数值，默认=0
- Highlight Process Volume (%%)（中文：高亮进程音量 (%%)）：类型=数值，默认=80
- Temp HUD Duration (ms)（中文：临时HUD持续时间(毫秒)）：类型=数值，默认=3000L
- X Offset（中文：横坐标偏移）：类型=数值，默认=0.0f
- HUD Mode（中文：HUD 模式）：类型=枚举，默认="Temp"
  可选：Always（总是）；Temp（临时）
- Text Color（中文：文本颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=true
- Max Items（中文：最大显示进程数量。用于限制 HUD 中最多显示的进程条数，防止界面拥挤。）：类型=数值，默认=10
- Bar Max Height（中文：柱最大高度）：类型=数值，默认=500
- Refresh Interval (ms)（中文：刷新间隔（毫秒））：类型=数值，默认=500.0f
- Fade Duration (ms)（中文：淡入淡出时长 (毫秒)）：类型=数值，默认=1000L
- Text Font Size（中文：文本字号）：类型=数值，默认=28
- Base X Rate（中文：基础横坐标比例）：类型=数值，默认=0.5f
- Other Process Volume (%%)（中文：其他进程音量 (%%)）：类型=数值，默认=10
- Bar Gap（中文：柱子间隙）：类型=数值，默认=100
- Temp HUD Animation Duration (ms)（中文：临时显示的淡入淡出动画时长（毫秒）。）：类型=数值，默认=300L
- Bar Color（中文：柱颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.1f
- Bar Direction（中文：柱子方向）：类型=枚举，默认="Down"
  可选：Right（右侧）；Up（向上）；Left（左侧）；Down（向下）
- Y Offset（中文：纵坐标偏移）：类型=数值，默认=0.0f
- Bar Thickness（中文：柱子厚度）：类型=数值，默认=80
- Easing（中文：缓动）：类型=布尔，默认=true
- Set Highlight Process Volume（中文：设置高亮进程音量）：类型=布尔，默认=false
- Label Format（中文：标签格式）：类型=枚举，默认="Process Name"
  可选：PID（进程ID）；Process Name（进程名）；Both（两者）
- Process Name (Empty For Any)（中文：进程名 (用空指代任何)）：类型=文本，默认="JackalClient.exe"
- Bar Opacity (0~1)（中文：柱不透明度 (0~1)）：类型=数值，默认=0.35f

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无

