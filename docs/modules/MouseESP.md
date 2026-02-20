MouseESP
鼠标透视
分类：Control
描述：高亮鼠标指针的位置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MouseESP（鼠标透视）用于高亮鼠标指针的位置。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Particles Amount (Continuous)、CPS Font Size、Particles Color Jitter。

配置项
- Particles Amount (Continuous)（中文：粒子数量（持续性））：类型=数值，默认=1.0f
- CPS Font Size（中文：CPS 字号）：类型=数值，默认=30
- Particles Color Jitter（中文：粒子颜色抖动）：类型=数值，默认=0.8f
- Circle（中文：圆圈）：类型=布尔，默认=false
- Box Line Width（中文：框线宽）：类型=数值，默认=2
- CPS Color（中文：CPS 颜色）：类型=枚举，默认="Aqua-Pink"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- CPS Opacity (0~1)（中文：CPS 不透明度 (0~1)）：类型=数值，默认=0.5f
- Particles Color (Continuous)（中文：粒子颜色（持续性））：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Coordinates（中文：坐标）：类型=布尔，默认=false
- Circle Color（中文：圆圈颜色）：类型=枚举，默认="Yellow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Box Easing（中文：方框缓动）：类型=布尔，默认=true
- Circle Color (Left Click)（中文：圆圈颜色（左键））：类型=枚举，默认="Blue"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Circle Color (Middle Click)（中文：圆圈颜色（中键））：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Coordinates X Offset（中文：横坐标偏移）：类型=数值，默认=5
- Coordinates Font Size（中文：坐标字号）：类型=数值，默认=30
- Coordinates Y Offset（中文：纵坐标偏移）：类型=数值，默认=5
- Particles Color (Click)（中文：粒子颜色（点击）（）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Particles Amount (Click)（中文：粒子数量（点击））：类型=数值，默认=20.0f
- Box Easing Speed (0~1)（中文：方框缓动高速率 (0~1)）：类型=数值，默认=0.2f
- Visibility Check（中文：可见性检查）：类型=布尔，默认=true
- Coordinates Color（中文：坐标颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Coordinates Opacity (0~1)（中文：坐标不透明度 (0~1)）：类型=数值，默认=0.5f
- Box Height Rate（中文：方框高度比例）：类型=数值，默认=1.2f
- Box Opacity (0~1)（中文：方框不透明度 (0~1)）：类型=数值，默认=0.8f
- Box Color（中文：方框颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Circle Radius（中文：圆圈半径）：类型=数值，默认=25.0f
- Circle Color (Right Click)（中文：圆圈颜色（右键））：类型=枚举，默认="Pink"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Box（中文：方框）：类型=布尔，默认=false
- Box Rounded Corners（中文：方框圆角）：类型=布尔，默认=true
- Particles（中文：粒子）：类型=枚举，默认="Both"
  可选：Off（关闭）；Click（未收录）；Continuous（连续）；Both（两者）
- Box Width Rate（中文：方框宽度比例）：类型=数值，默认=1.0f
- CPS Display（中文：CPS 显示）：类型=枚举，默认="Off"
  可选：Off（关闭）；CPS Left | Right（每秒点击次数。 左侧 | 右侧）；Left | Right（左侧 | 右侧）；Left（左侧）；Right（右侧）
- Circle Opacity (0~1)（中文：圆圈不透明度 (0~1)）：类型=数值，默认=0.3f

历史更新
- 28. 为 Mouse ESP 添加配置：
- 2. 为 Mouse ESP 添加配置：

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
- [Crosshair (准星线)](./Crosshair.md)

相关资料
无

