AudioVisualizer
音频可视化
分类：Render
描述：显示音频波形或其他形式的可视化。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AudioVisualizer（音频可视化）用于显示音频波形或其他形式的可视化。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Bar Graph Style、Visualizer Mode、Global HUD Pulse Effects。

配置项
- Bar Direction（中文：柱子方向）：类型=枚举，默认="Up"
  可选：Up（向上）；Down（向下）；Both（两者）
- Bar Graph Style（中文：柱状图风格）：类型=枚举，默认="Normal"
  可选：Normal（普通）；Pixel（像素）
- Line Opacity (0~1)（中文：线条不透明度 (0~1)）：类型=数值，默认=0.6f
- Line Color（中文：线条颜色）：类型=枚举，默认="Blue"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Line Thickness（中文：线条宽度）：类型=数值，默认=3L
- Visualizer Mode（中文：可视化模式）：类型=枚举，默认="Bar Graph"
  可选：Off（关闭）；Bar Graph（柱状图）；Line Wave（折线波）；Circle Spectrum（环状频谱）
- Circle Scale（中文：圆圈缩放）：类型=数值，默认=1.8f
- Bar Y Rate（中文：柱纵坐标比例）：类型=数值，默认=1.0f
- Global HUD Pulse Effects（中文：全局HUD律动效果）：类型=布尔，默认=false
- Bar Easing Speed (0~1)（中文：柱缓动速率 (0~1)）：类型=数值，默认=0.15f
- Bar Width（中文：柱宽度）：类型=数值，默认=100L
- Circle Color（中文：圆圈颜色）：类型=枚举，默认="Gold"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Bar Max Height（中文：柱最大高度）：类型=数值，默认=250L
- Line Y Rate（中文：线条纵坐标比例）：类型=数值，默认=0.8f
- Line Direction（中文：线条方向）：类型=枚举，默认="Up"
  可选：Up（向上）；Down（向下）；Both（两者）
- Menu Off Alpha（中文：菜单关闭时不透明度）：类型=数值，默认=1.0f
- Bar Pixel Gap（中文：柱像素间距）：类型=数值，默认=40
- Bar Color（中文：柱颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Circle Opacity (0~1)（中文：圆圈不透明度 (0~1)）：类型=数值，默认=0.8f
- Circle Radius（中文：圆圈半径）：类型=数值，默认=250L
- Menu On Alpha（中文：菜单打开时不透明度）：类型=数值，默认=1.0f
- Bar Color (Top)（中文：柱颜色 (顶部)）：类型=枚举，默认="Same"
  可选：Same（相同）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Circle Thickness（中文：圆圈厚度）：类型=数值，默认=5L
- Global HUD Pulse Effects Intensity (0~1)（中文：全局HUD律动效果强度 (0~1)）：类型=数值，默认=0.5f
- Bar Opacity (0~1)（中文：柱不透明度 (0~1)）：类型=数值，默认=0.3f
- Enable Better Lyrics Module（中文：启用更好的歌词模块）：类型=布尔，默认=false
- Bar Horizontal Gap（中文：柱子横向间隙）：类型=数值，默认=2
- Line Amplitude（中文：线条振幅）：类型=数值，默认=300.0f
- Capture Cooldown (ms)（中文：捕获冷却（毫秒））：类型=数值，默认=50L

历史更新
- 4. 为 Audio Visualizer 添加配置：
- 12. 添加模块： AudioVisualizer，音频可视化。
- 30. 添加模块：Island，简单的灵动岛效果。在 Audio Visualizer 启用时会随音频旋律震动。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无

