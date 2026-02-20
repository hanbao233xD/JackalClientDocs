Keystrokes
按键显示
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
Keystrokes（按键显示）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Y Rate、Shadow、Mouse Buttons。

配置项
- Y Rate（中文：纵坐标比例）：类型=数值，默认=0.7f
- Shadow（中文：阴影）：类型=布尔，默认=true
- Mouse Buttons（中文：鼠标按钮）：类型=布尔，默认=true
- Box Size（中文：框大小）：类型=数值，默认=54
- Roundness（中文：圆滑程度）：类型=数值，默认=0.2f
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Box Opacity (0~1)（中文：方框不透明度 (0~1)）：类型=数值，默认=1.0f
- Background Color（中文：背景颜色）：类型=枚举，默认="Black"
  可选：Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Shift（中文：未收录）：类型=布尔，默认=true
- Space（中文：空格）：类型=布尔，默认=true
- Text Color（中文：文本颜色）：类型=枚举，默认="Rainbow"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Show CPS（中文：显示CPS）：类型=布尔，默认=true
- Box Gap（中文：方框间隙）：类型=数值，默认=15
- Shadow Color（中文：阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Round Corners（中文：圆角）：类型=布尔，默认=false
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.1f
- Font Size（中文：字号）：类型=数值，默认=43
- Give Way to Mouse（中文：给鼠标让道）：类型=布尔，默认=true
- Shadow Thickness（中文：阴影厚度）：类型=数值，默认=20.0f
- X Rate（中文：横坐标比例）：类型=数值，默认=0.9f
- Outline Color（中文：轮廓颜色）：类型=枚举，默认="Rainbow"
  可选：Flow（流动）；Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）

历史更新
- 8. 修复了 Keystrokes 里 Shift 隐藏无效的问题。
- 7. 为 Keystrokes2 添加了丝滑动画。添加配置项：
- 8. 为 Keystrokes 也添加了 Give Way to Mouse 选项，鼠标经过后会自动偏移。

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

