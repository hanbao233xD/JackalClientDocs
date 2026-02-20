Tint
染色
分类：Render
描述：应用全局颜色到客户端纹理。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Tint（染色）用于应用全局颜色到客户端纹理。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Screen Capture Cooldown (ms)、Mode。

配置项
- Screen Capture Cooldown (ms)（中文：屏幕捕获冷却（毫秒））：类型=数值，默认=1000L
- Preset Color（中文：预设颜色）：类型=枚举，默认="Aqua-Pink"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- (Current Color)（中文：(当前颜色)）：类型=文本，默认="255;255;255"
- Mode（中文：模式）：类型=枚举，默认="Preset"
  可选：Static（静态）；Preset（预设）
- Static Color（中文：静态颜色）：类型=文本，默认="200;210;255"
- Screen Samples（中文：屏幕采样数）：类型=数值，默认=1024
- Coefficient（中文：系数）：类型=数值，默认=1.0f

历史更新
无（HISTORY 中暂无明确记录）

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

