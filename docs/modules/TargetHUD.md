TargetHUD
目标显示
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
TargetHUD（目标显示）用于暂无描述。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：HUD Background Color、Target、HUD Position。

配置项
- HUD Background Color（中文：HUD 背景颜色）：类型=枚举，默认="Flow"
  可选：Transparent（透明）；Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Image（中文：背景图片）：类型=布尔，默认=false
- Target（中文：目标）：类型=枚举，默认="Foreground"
  可选：Foreground（前端）；PointAt（指向）；it (Pronoun)（代词 it）
- HUD Position（中文：HUD 位置）：类型=枚举，默认="Follow"
  可选：Follow（追随）；Fixed（固定）
- HUD Roundness（中文：HUD 圆滑程度）：类型=数值，默认=0.6f
- HUD Shadow Thickness（中文：HUD 阴影厚度）：类型=数值，默认=60.0f
- HUD Background Opacity (0~1)（中文：HUD 背景不透明度 (0~1)）：类型=数值，默认=0.8f
- Fixed X Rate（中文：固定X坐标比例）：类型=数值，默认=0.85f
- HUD Shadow（中文：HUD 阴影）：类型=布尔，默认=true
- Fixed Y Rate（中文：固定Y坐标比例）：类型=数值，默认=0.65f
- HUD Outline Color（中文：HUD 轮廓线颜色）：类型=枚举，默认="Dark Green"
  可选：Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Background Darkness (0~1)（中文：HUD 背景暗度 (0~1)）：类型=数值，默认=0.85f
- Flow Color（中文：流动颜色）：类型=布尔，默认=true
- HUD Round Corners（中文：HUD 圆角）：类型=布尔，默认=true
- Style（中文：风格）：类型=枚举，默认="Default"
  可选：Default（默认）
- Background Image Opacity (0~1)（中文：背景图片不透明度 (0~1)）：类型=数值，默认=0.5f
- HUD Shadow Color（中文：HUD 阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Fade Time (ms)（中文：淡入淡出时间（毫秒））：类型=数值，默认=500L
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.2f
- Give Way to Mouse（中文：给鼠标让道）：类型=布尔，默认=true
- Mouse Click Feedback Particles（中文：鼠标点击反馈粒子）：类型=布尔，默认=true
- Avatar Circle（中文：圆形头像）：类型=布尔，默认=true
- Background Image Moving Speed（中文：背景图片移动速度）：类型=数值，默认=0.5f
- UWP Show Original Process（中文：UWP 应用显示原始进程）：类型=布尔，默认=true
- HUD Shadow Opacity (0~1)（中文：HUD 阴影不透明度 (0~1)）：类型=数值，默认=0.7f
- Background Image Path（中文：背景图片路径）：类型=文本，默认=""
- Easing（中文：缓动）：类型=布尔，默认=true
- Mouse Click Feedback（中文：鼠标点击反馈）：类型=布尔，默认=true
- Command Line Getter Hotkey（中文：命令行获取器快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LWIN, VK_SUBTRACT}}}
- Command Line Getter（中文：命令行获取器）：类型=枚举，默认="Console Output"
  可选：Off（关闭）；Console Output（控制台输出）；Copy（复制）

历史更新
- 40. 为 Target Hud 添加了裁剪，以免文本超出范围。
- 2. 修复通知、WindowTags、TargetHUD 中的百分号显示问题。
- 31. 添加新模块： TargetHUD，显示目标窗口HUD。拥有丝滑的动画

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

