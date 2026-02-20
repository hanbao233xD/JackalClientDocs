LyricsPhysics
物理歌词
分类：Render
描述：在音频可视化器上应用物理效果到歌词。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LyricsPhysics（物理歌词）用于在音频可视化器上应用物理效果到歌词。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Bar Collision、Allow Rotation、Wave Push Impulse。

配置项
- Bar Collision（中文：柱碰撞）：类型=布尔，默认=true
- Allow Rotation（中文：允许旋转）：类型=布尔，默认=true
- Wave Push Impulse（中文：波前推到时对旧字的冲量）：类型=数值，默认=820.0f
- Rotation Friction (0~1)（中文：旋转摩擦力 (0~1)）：类型=数值，默认=0.15f
- Drop Start Y Offset（中文：掉落新字起始高度）：类型=数值，默认=260.0f
- Wave Width (bars)（中文：波宽（柱子数)）：类型=数值，默认=6.0f
- Lyric Friction (0~1)（中文：歌词摩擦力 (0~1)）：类型=数值，默认=0.15f
- Drop Soft Landing Coef (0~1)（中文：掉落软着陆阻尼）：类型=数值，默认=0.55f
- Bar Collide Height Multiplier（中文：Bar Collide 高度 Multiplier）：类型=数值，默认=0.8f
- Replace Animation（中文：取代动画）：类型=枚举，默认="Push-Over"
  可选：Push-Over（推覆）；Drop-Replace（掉落替代）；Wave-Push（波推进）
- Lyric Bounce Coef (0~1)（中文：歌词反弹系数 (0~1)）：类型=数值，默认=0.88f
- Push-Over Start X Offset（中文：推覆起始X偏移）：类型=数值，默认=-120.0f
- Push-Over Fadeout Time (s)（中文：推覆歌词淡出时长）：类型=数值，默认=2.0f
- Push-Over Hit Impulse（中文：推覆冲量）：类型=数值，默认=170.0f
- Push-Over Direction（中文：推覆方向）：类型=枚举，默认="Left"
  可选：Left（左侧）；Right（右侧）；Both（两者）
- Wave Speed (bars/sec)（中文：波前推进速度（每秒经过的柱子数））：类型=数值，默认=18.0f
- Push-Over Horizontal Speed（中文：推覆水平推进速度）：类型=数值，默认=800.0f
- Rotation Bounce Coef (0~1)（中文：旋转角反弹系数 (0~1)）：类型=数值，默认=0.35f
- Lyric Scale Pulse (0~1)（中文：歌词脉冲比例）：类型=数值，默认=0.15f
- Drop Old Fadeout Time (s)（中文：掉落旧字淡出时长）：类型=数值，默认=0.35f
- Lyric Gravity（中文：歌词重力）：类型=数值，默认=580.0f

历史更新
- 6. 添加模块： Lyrics Physics

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
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无

