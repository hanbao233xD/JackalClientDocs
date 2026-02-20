TargetESP
目标透视
分类：Window
描述：标记目标窗口的位置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TargetESP（目标透视）用于标记目标窗口的位置。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Target。

配置项
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.05f
- Opacity (0~1)（中文：不透明度 (0~1））：类型=数值，默认=0.9f
- Rotation Speed（中文：旋转速度）：类型=数值，默认=1.5f
- Show Temporarily（中文：临时显示）：类型=布尔，默认=true
- Show Duration (ms)（中文：显示时长（毫秒））：类型=数值，默认=5000L
- Target（中文：目标）：类型=枚举，默认="PointAt"
  可选：Target HUD（目标 是否显示HUD。）；Foreground（前端）；PointAt（指向）；it (Pronoun)（代词 it）
- Scale（中文：比例）：类型=数值，默认=1.0f
- Fade In Time (ms)（中文：淡入时长 (毫秒)）：类型=数值，默认=1200L
- Fade Out Time (ms)（中文：淡出时长 (毫秒)）：类型=数值，默认=5000L
- Rotation Amplitude（中文：最大旋转角）：类型=数值，默认=150.0f
- Color（中文：颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）

历史更新
- 7. 添加模块：Target ESP

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

