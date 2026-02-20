Ambience
环境气氛
分类：Render
描述：模拟环境，如天气和光照。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Ambience（环境气氛）用于模拟环境，如天气和光照。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mouse Camera Mode。

配置项
- Thunder Sound Volume（中文：雷声音量）：类型=数值，默认=100
- Precipitation Display Position（中文：降水展示位置）：类型=枚举，默认="Screen"
  可选：Screen（屏幕）；Foreground（前端）；Background（背景）
- Lightning Display（中文：闪电展示）：类型=布尔，默认=true
- Precipitation Increase Speed（中文：降水增多速率）：类型=数值，默认=10.0f
- Rain Shape（中文：雨形状）：类型=文本，默认="/"
- Lightning Display Duration (ms)（中文：闪电展示时长（毫秒））：类型=数值，默认=5000L
- Mouse Camera Mode（中文：鼠标相机模式）：类型=布尔，默认=false
- Precipitation Mouse Circle Radius（中文：降水鼠标圆圈半径）：类型=数值，默认=200.0f
- Precipitation Amount Scale（中文：降水量比例）：类型=数值，默认=1.0f
- Precipitation Angle (rad)（中文：降水角（弧度））：类型=数值，默认=8.168f
- Rain Color（中文：雨颜色）：类型=枚举，默认="Blue"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Weather Cycle（中文：天气循环）：类型=布尔，默认=true
- Precipitation Decrease Speed（中文：降水减少速率）：类型=数值，默认=5.0f
- Mouse Camera Y Rate（中文：鼠标相机 Y 比率）：类型=数值，默认=1.0f
- Precipitation Fall Speed（中文：降水下落速率）：类型=数值，默认=1.0f
- Precipitation Mouse Circle（中文：降水鼠标圆圈）：类型=枚举，默认="Off"
  可选：Off（关闭）；Hide（隐藏）；Fade（淡入淡出）；Lighten（未收录）；Darken（未收录）
- Weather（中文：天气）：类型=枚举，默认="Rainy"
  可选：Off（关闭）；Rainy（雨天）；Thundery（雷雨天）
- Mouse Camera X Rate（中文：鼠标相机 X 比率）：类型=数值，默认=1.0f
- Precipitation Sound Volume（中文：降水音效音量）：类型=数值，默认=30

历史更新
- 50. 添加模块：Ambience。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无

