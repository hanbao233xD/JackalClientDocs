TypingEffects
打字效果
分类：Control
描述：打字时展示一些特效。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TypingEffects（打字效果）用于打字时展示一些特效。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Selected Text Indicator Mode、Caret Indicator Style、Caret Indicator Arrow Style。

配置项
- Area Indicator Color（中文：区域指示器颜色）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Caret Indicator Capture Rotation Speed（中文：插入符指示器捕获旋转速率）：类型=数值，默认=4.0f
- IME Indicator（中文：输入法指示器）：类型=枚举，默认="Temp"
  可选：Off（关闭）；Temp（临时）；Always（总是）
- Selected Text Indicator（中文：选中文本指示器）：类型=枚举，默认="Off"
  可选：Off（关闭）；Temp（临时）；Always（总是）
- Selected Text Indicator Mode（中文：选中文本指示器模式）：类型=枚举，默认="Translation"
  可选：Raw（原始）；Translation（翻译）
- Caret Indicator Style（中文：插入符指示器风格）：类型=枚举，默认="Capture"
  可选：Arrow（未收录）；Box（方框）；Crosshair（准星）；Capture（未收录）
- Area Indicator（中文：区域指示器）：类型=枚举，默认="Off"
  可选：Off（关闭）；Temp（临时）；Always（总是）
- Caret Indicator Arrow Style（中文：插入符指示器箭头风格）：类型=枚举，默认="Up"
  可选：Up（向上）；Down（向下）；Up & Down（向上 & 向下）
- Caret Update Cooldown (ms)（中文：Caret 更新窗口 冷却 (ms)）：类型=数值，默认=500L
- Area Indicator Easing Speed (0~1)（中文：区域指示器缓动速率 (0~1)）：类型=数值，默认=0.2f
- IME Indicator Temp Duration (ms)（中文：输入法指示器临时时长（毫秒））：类型=数值，默认=3000L
- Caret Particles（中文：插入符粒子）：类型=枚举，默认="Moving"
  可选：Off（关闭）；Moving（正在移动）；Continuous（连续）
- Selected Text Indicator Translation Max Length（中文：选中文本指示器翻译最大长度）：类型=数值，默认=300
- Caret Indicator Temp Duration (ms)（中文：插入符指示器临时时长（毫秒））：类型=数值，默认=5000L
- Caret Easing Speed (0~1)（中文：Caret 缓动 速率 (0~1)）：类型=数值，默认=0.05f
- Selected Text Indicator Opacity (0~1)（中文：选中文本指示器不透明度 (0~1)）：类型=数值，默认=0.75f
- Caret Indicator Size（中文：插入符指示器大小）：类型=数值，默认=40
- Caret Particles Color（中文：插入符粒子颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Area Indicator Easing（中文：区域指示器缓动）：类型=布尔，默认=true
- Not As Debuggee（中文：被调试时禁用）：类型=布尔，默认=true
- Caret Indicator Capture Scale（中文：插入符指示器捕获缩放）：类型=数值，默认=4.0f
- Caret Easing（中文：Caret 缓动）：类型=布尔，默认=true
- Selected Text Indicator Color（中文：选中文本指示器颜色）：类型=枚举，默认="Blue"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Caret Particles Amount（中文：插入符粒子量）：类型=数值，默认=1.0f
- IME Indicator Style（中文：输入法指示器风格）：类型=枚举，默认="1"
  可选：1（未收录）；2（未收录）；3（未收录）；4（未收录）；5（未收录）
- Selected Text Indicator Size（中文：选中文本指示器大小）：类型=数值，默认=30
- Caret Indicator Color（中文：插入符指示器颜色）：类型=枚举，默认="Rainbow"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Selected Text Indicator Temp Duration (ms)（中文：选中文本指示器临时时长（毫秒））：类型=数值，默认=5000L
- Selected Text Indicator Translation Exclude Characters（中文：选中文本指示器翻译排除字符）：类型=文本，默认="^#{}<>\\/*|"
- Caret Indicator（中文：插入符指示器）：类型=枚举，默认="Temp"
  可选：Off（关闭）；Temp（临时）；Always（总是）
- IME Indicator Size（中文：输入法指示器大小）：类型=数值，默认=50
- Caret Indicator Opacity (0~1)（中文：插入符指示器不透明度 (0~1)）：类型=数值，默认=0.8f
- Caret Particles Color Jitter（中文：插入符粒子颜色抖动）：类型=数值，默认=0.2f

历史更新
- 20. 修复 TypingEffects 显示的 % 占位符注入导致崩溃的问题。
- 20. 添加模块：Typing Effects，打字特效
- 22. 为 Speaker / Typing Effects 添加配置项：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无

