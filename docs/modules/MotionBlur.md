MotionBlur
动态模糊
分类：Render
描述：在屏幕上应用动态模糊。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MotionBlur（动态模糊）用于在屏幕上应用动态模糊。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Update Cooldown、Apply Model。

配置项
- Blur Samples（中文：模糊取样数）：类型=数值，默认=5
- Frame Count（中文：帧数量）：类型=数值，默认=5
- Blur Direction（中文：模糊方向）：类型=枚举，默认="Both"
  可选：Off（关闭）；Horizontal（横向）；Vertical（纵向）；Both（两者）
- Test 1（中文：未收录）：类型=布尔，默认=false
- Exponential Lambda（中文：指数拉姆达）：类型=数值，默认=0.5f
- Apply Area（中文：应用区域）：类型=枚举，默认="Screen"
  可选：Client Only（仅客户端）；Screen（屏幕）
- Redraw Client Texture（中文：重绘客户端贴图）：类型=布尔，默认=true
- Gaussian Sigma（中文：高斯西格玛）：类型=数值，默认=0.9f
- Gaussian Darken Amount (0~1)（中文：高斯变暗大小 (0~1)）：类型=数值，默认=0.4f
- Blur Brightness Boost (0~1)（中文：模糊亮度增强 (0~1)）：类型=数值，默认=0.3f
- Darken When Blur（中文：模糊时变暗）：类型=布尔，默认=true
- Blur Once（中文：只模糊一次）：类型=布尔，默认=true
- Blur Alpha Boost (0~1)（中文：模糊不透明度增强 (0~1)）：类型=数值，默认=0.0f
- Update Cooldown（中文：更新冷却）：类型=数值，默认=40
- Exponential Darken Amount (0~1)（中文：指数变暗大小 (0~1)）：类型=数值，默认=0.45f
- Apply Model（中文：应用模型）：类型=枚举，默认="Exponential"
  可选：Gaussian（高斯）；Exponential（指数）
- Blur Enabled（中文：启用模糊）：类型=布尔，默认=false
- Blur Strength（中文：模糊强度）：类型=数值，默认=2.0f

历史更新
- 30. 改良了 Motion Blur 模块：
- 11. 添加 MotionBlur 模块，通过叠加截图帧模拟动态模糊。当然，目前还是重影的效果，不是真正的动态模糊。当你打开 Screen 模式时，将会消耗大量CPU，请注意。

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

