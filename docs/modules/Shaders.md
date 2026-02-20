Shaders
着色器
分类：Render
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Shaders（着色器）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Style、Screen Mode Redraw Client Texture、Screen Mode Update Cooldown。

配置项
- Blur Samples（中文：模糊取样数）：类型=数值，默认=5
- Bloom Intensity（中文：泛光强度）：类型=数值，默认=0.3f
- Flow Text Scale（中文：流动文本缩放）：类型=数值，默认=6.0f
- Bloom Samples（中文：泛光采样数）：类型=数值，默认=1.0f
- Apply Area（中文：应用区域）：类型=枚举，默认="Client Only"
  可选：Client Only（仅客户端）；Screen（屏幕）
- Flow Text Brightness（中文：流动文本亮度）：类型=数值，默认=1.2f
- Flow Text Depth（中文：流动文本深度）：类型=数值，默认=0.6f
- Bloom Quality（中文：泛光质量）：类型=数值，默认=0.2f
- Screen Compensation Faster（中文：让屏幕补偿更快）：类型=布尔，默认=true
- Flow Text Theme Period (s)（中文：流动文本主题周期（秒））：类型=数值，默认=300L
- Style（中文：风格）：类型=枚举，默认="bloom"
  可选：bloom（泛光）；bloom_time（泛光_time）；blur（模糊）；cross_hatching（未收录）；cross_stitching（未收录）；dispersion（未收录）；dream_vision（未收录）；flash_shake（flash_抖动）；mvp（未收录）；old（老版）；pixelizer_time（未收录）；shadow_glitch（阴影_glitch）；sobel（未收录）
- Flow Text Noise Amount（中文：流动文本噪音数量）：类型=数值，默认=0.6f
- Screen Mode Redraw Client Texture（中文：屏幕模式重绘客户端贴图）：类型=布尔，默认=true
- Screen Mode Update Cooldown（中文：屏幕模式更新冷却）：类型=数值，默认=33U
- Flow Text Speed（中文：流动文本速率）：类型=数值，默认=1.0f
- Blur Strength（中文：模糊强度）：类型=数值，默认=2.0f

历史更新
- 4. 在 Shader 模块 (bloom模式) 开启后，LiveStream 的观众头像亮度将会降低。
- 30. 修复 Screen 范围的其他 Shader 无法生效的问题。
- 5. 为模块 Shader 添加配置：

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

