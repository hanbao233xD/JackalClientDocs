WarpUI
空间变形
[PRO]
分类：Render
描述：将伪 3D 视觉形变与 GUI 交互坐标精确同步的界面形变

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
WarpUI（空间变形）用于将伪 3D 视觉形变与 GUI 交互坐标精确同步的界面形变。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：When、Flip Y、Curve Camera Z Bias。

配置项
- When（中文：何时）：类型=枚举，默认="Always"
  可选：Always（总是）；Menu On（打开菜单）；Menu Off（关闭菜单）
- Flip Y（中文：反转 Y）：类型=布尔，默认=true
- Curve Camera Z Bias（中文：曲面相机Z矫正）：类型=数值，默认=1.0f
- Camera Offset X（中文：相机横向偏移）：类型=数值，默认=0.0f
- Easing（中文：缓动）：类型=布尔，默认=true
- Sphere Radius（中文：球体半径）：类型=数值，默认=600.0f
- Camera Yaw（中文：相机偏航）：类型=数值，默认=0.0f
- Camera Z（中文：相机 Z）：类型=数值，默认=0.0f
- Camera Offset Y（中文：相机纵向偏移）：类型=数值，默认=0.0f
- Camera Pitch（中文：相机俯仰）：类型=数值，默认=0.0f
- Camera Fov（中文：相机视野）：类型=数值，默认=60.0f
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.12f
- Vignette（中文：暗角）：类型=数值，默认=0.25f
- Chroma（中文：色差）：类型=数值，默认=0.008f

历史更新
- 23. 【PRO】添加模块：WarpUI，实现三维界面，并修正鼠标坐标的映射关系。启用前最好绑定一个快捷键。注意启用后托盘右键菜单将会出现一个选项叫“禁用空间变形 Disable WarpUI”。
- 26. 为托盘菜单添加 Disable WarpUI, Disable Streamer
- 40. 为 WarpUI 添加了变化时的淡入淡出。

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
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)

相关资料
无

