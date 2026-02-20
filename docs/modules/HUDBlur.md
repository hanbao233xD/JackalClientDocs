HUDBlur
HUD模糊
分类：Render
描述：应用模糊效果到HUD。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
HUDBlur（HUD模糊）用于应用模糊效果到HUD。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Screen Capture Cooldown (ms)、Style。

配置项
- Liquid Highlight（中文：液体高光）：类型=通用，默认=8.f
- Liquid Scatter Directions（中文：液体散射方向数）：类型=数值，默认=5
- Liquid Edge Width Rate（中文：液体边缘宽度占比）：类型=数值，默认=0.45f
- Liquid Flow Scale（中文：液体流动比例）：类型=数值，默认=14.0f
- Liquid Blur（中文：液体模糊）：类型=布尔，默认=false
- Liquid Corner Roundness Rate（中文：液体角落圆角率）：类型=数值，默认=0.6f
- Screen Capture Cooldown (ms)（中文：屏幕捕获冷却（毫秒））：类型=数值，默认=100L
- Liquid Speed（中文：液体速率）：类型=数值，默认=0.8f
- Opacity (0~1)（中文：不透明度 (0~1））：类型=数值，默认=1.0f
- Blur Taps（中文：模糊采样数）：类型=数值，默认=32
- Style（中文：风格）：类型=枚举，默认="Blur"
  可选：Blur（模糊）；Liquid Glass (PRO)（液体玻璃（专业版））
- Liquid Flow Strength（中文：液体流动强度）：类型=数值，默认=0.2f
- Liquid Distortion (px)（中文：液体扭曲（像素））：类型=数值，默认=10.0f
- Liquid Brightness（中文：液体亮度）：类型=数值，默认=0.8f
- Dropdown GUI Background (PRO)（中文：下拉式 GUI 背景（专业版））：类型=布尔，默认=true
- Liquid Scatter Quality（中文：液体散射质量）：类型=数值，默认=2.0f
- Liquid Thickness Rate（中文：液体厚度占比）：类型=数值，默认=0.2f
- Liquid IOR（中文：液体折射率）：类型=数值，默认=1.5f
- Liquid Scatter Size (px)（中文：液体散射大小（像素））：类型=数值，默认=1.0f
- Blur Strength（中文：模糊强度）：类型=数值，默认=20.0f

历史更新
- 35. 为 HUD Blur 添加配置项：
- 58. 添加 HUD Blur 模块，为 HUD 背景添加模糊或者【PRO】液体玻璃效果。需要实时屏幕捕获，会降低性能，但是可以调低频率。

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

