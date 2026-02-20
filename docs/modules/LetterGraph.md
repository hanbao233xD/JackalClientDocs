LetterGraph
字母图
分类：Control
描述：呈现字母数量的图表。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LetterGraph（字母图）用于呈现字母数量的图表。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Bar Width Fill Mode。

配置项
- Bar Width Fill Mode（中文：柱子宽度使用填充模式）：类型=布尔，默认=false
- X Offset（中文：横坐标偏移）：类型=数值，默认=0.0f
- Sort By（中文：排序依据）：类型=枚举，默认="Name"
  可选：Name（名称）；Code（未收录）；Count（数目）
- Bar Direction（中文：柱子方向）：类型=枚举，默认="Right"
  可选：Right（右侧）；Up（向上）；Left（左侧）；Down（向下）
- Easing（中文：缓动）：类型=布尔，默认=true
- Stat Lyrics（中文：统计歌词）：类型=布尔，默认=true
- Bar Gap（中文：柱子间隙）：类型=数值，默认=10
- Bar Color 2（中文：柱子颜色 2）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Value Color（中文：值颜色）：类型=枚举，默认="Pink"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Base Y Rate（中文：基础纵坐标比例）：类型=数值，默认=0.5f
- Key Max Value（中文：键最大值）：类型=数值，默认=1024
- Bar Width（中文：柱宽度）：类型=数值，默认=50
- Stat Keys（中文：统计按键）：类型=布尔，默认=true
- Key Color（中文：键颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.2f
- Y Offset（中文：纵坐标偏移）：类型=数值，默认=0.0f
- Bar Color 1（中文：柱子颜色 1）：类型=枚举，默认="Green"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Opacity (0~1)（中文：文本不透明度 (0~1)）：类型=数值，默认=0.7f
- Text Font Size（中文：文本字号）：类型=数值，默认=50
- Adaptive Height Scaling（中文：适应性高度缩放）：类型=布尔，默认=true
- Bar Opacity (0~1)（中文：柱不透明度 (0~1)）：类型=数值，默认=0.3f
- Bar Max Height（中文：柱最大高度）：类型=数值，默认=500
- Base X Rate（中文：基础横坐标比例）：类型=数值，默认=0.2f

历史更新
- 23. 为 Download HUD, Chat Bar, Clipboard ESP, Security ESP, Letter Graph 添加 HUD Editor 拖曳。
- 29. 修复 LetterGraph 中的配置项 Text Opacity (0~1) 无效的问题。

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

