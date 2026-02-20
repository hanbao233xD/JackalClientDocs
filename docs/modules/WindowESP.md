WindowESP
窗口透视
分类：Window
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
WindowESP（窗口透视）用于暂无描述。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Hide HUD When Menu On。

配置项
- Box Color（中文：方框颜色）：类型=枚举，默认="Rainbow"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=true
- Exclude Foreground（中文：排除前端）：类型=布尔，默认=true
- Box Line Width（中文：框线宽）：类型=数值，默认=3.0f
- Exclude Invisible（中文：排除不可见）：类型=布尔，默认=true
- Box Alpha（中文：框不透明度）：类型=数值，默认=0.5f
- Exclude Pointed（中文：排除鼠标指向）：类型=布尔，默认=true

历史更新
- 14. WindowESP 的顶层窗口更新现已和 Tracers 共用，更新冷却在 Config 设置

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

