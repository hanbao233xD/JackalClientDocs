ClipboardESP
剪贴板透视
分类：Control
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ClipboardESP（剪贴板透视）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Background Shadow、Show Text Stats、Bitmap Preview Border Color。

配置项
- Background Shadow（中文：背景阴影）：类型=布尔，默认=true
- Show Text Stats（中文：显示文本统计）：类型=布尔，默认=true
- Bitmap Preview Border Color（中文：位图预览边框颜色）：类型=枚举，默认="White"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Roundness（中文：背景圆滑程度）：类型=数值，默认=0.2f
- Background Color（中文：背景颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Shadow Color（中文：背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Background（中文：文本背景）：类型=布尔，默认=false
- Background Opacity (0~1)（中文：背景不透明度 (0~1)）：类型=数值，默认=0.5f
- Text Color（中文：文本颜色）：类型=枚举，默认="Gold"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Bitmap Preview Max Width（中文：位图预览最大宽度）：类型=数值，默认=420
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=true
- Line Gap（中文：行距）：类型=数值，默认=3
- Mid Y Rate（中文：中心纵坐标比例）：类型=数值，默认=0.3
- Background Shadow Thickness（中文：背景阴影厚度）：类型=数值，默认=24.0f
- Show Line Number（中文：显示行号）：类型=布尔，默认=true
- Bitmap Preview Border（中文：位图预览边框）：类型=布尔，默认=true
- X Rate（中文：横坐标比例）：类型=数值，默认=0.16
- Show Bitmap Preview（中文：显示位图预览）：类型=布尔，默认=true
- Give Way to Mouse（中文：给鼠标让道）：类型=布尔，默认=true
- Max Lines Shown（中文：最多显示的行数）：类型=数值，默认=25
- Background Round Corners（中文：背景圆角）：类型=布尔，默认=true
- Background（中文：背景）：类型=布尔，默认=true
- Show Format（中文：显示格式）：类型=布尔，默认=true
- Bitmap Preview Max Height（中文：位图预览最大高度）：类型=数值，默认=260
- Font Size（中文：字号）：类型=数值，默认=20
- Bitmap Preview Border Width（中文：位图预览边框宽度）：类型=数值，默认=2.0f
- Background Shadow Opacity (0~1)（中文：背景阴影不透明度 (0~1)）：类型=数值，默认=0.45f

历史更新
- 6. 修复 ClipboardESP 文件路径显示的问题，现在还会标注额外信息。对于文件，会标注文件大小。
- 25. 修复 Clipboard ESP 的崩溃问题。
- 29. 修复 Clipboard ESP 的还有几行未显示文本的错位问题。

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

