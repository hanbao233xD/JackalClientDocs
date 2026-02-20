BetterLyrics
更好的歌词
分类：Render
描述：识别歌词并以更好的方式显示。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BetterLyrics（更好的歌词）用于识别歌词并以更好的方式显示。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Actionbar Color、Basic Mode、Capture Mode。

配置项
- Exclude Non-lyrics Content（中文：排除非歌词内容）：类型=布尔，默认=true
- Skip If Includes Enabled（中文：是否启用如果包含则跳过）：类型=布尔，默认=true
- Off（中文：关闭）：类型=文本，默认="Chinese", "English", "Japanese"
- Bar Graph Lyrics Opacity (0~1)（中文：柱状图歌词不透明度 (0~1)）：类型=数值，默认=0.9f
- MessageBox Set As Tool Window（中文：将对话框设为工具窗口）：类型=布尔，默认=false
- Actionbar Color（中文：行为栏颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Window Class Name（中文：窗口类名）：类型=文本，默认="DesktopLyrics"
- Chatter Color（中文：弹幕颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Basic Mode（中文：基本模式）：类型=枚举，默认="Hook Render"
  可选：Hook Render（挂钩渲染）；OCR（未收录）
- Capture Mode（中文：捕获模式）：类型=枚举，默认="PrintWindow"
- Kugou Use Taskbar Lyrics（中文：酷狗使用任务栏歌词）：类型=布尔，默认=true
- MessageBox Mode（中文：对话框模式）：类型=枚举，默认="Background"
  可选：Background（背景）；Foreground（前端）
- Skip If Includes（中文：如果包含则跳过）：类型=文本，默认="<>[]{}%@#\\`"
- Line Index（中文：行号）：类型=数值，默认=0
- Remove Extra Characters（中文：移除的额外字符）：类型=文本，默认="=."
- Bar Graph Lyrics Color Jitter（中文：柱形图歌词颜色抖动）：类型=数值，默认=0.05f
- Window Title（中文：窗口标题）：类型=文本，默认="桌面歌词"
- Lyrics Correction Min Similarity (0~1)（中文：歌词纠正最小相似度 (0~1)）：类型=数值，默认=0.8f
- Skip If Similarity Greater Than（中文：相似度大于多少则跳过）：类型=数值，默认=0.7f
- Remove Letters（中文：移除字母）：类型=布尔，默认=false
- Bar Graph Lyrics Color（中文：柱状图歌词颜色）：类型=枚举，默认="Blue"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Y Offset（中文：纵坐标偏移）：类型=数值，默认=70
- Display Mode（中文：展示模式）：类型=枚举，默认="Fancy"
  可选：Title（标题）；Chatter（弹幕）；Notify（通知）；Actionbar（行为栏）；WinToast（系统通知）；Fancy（优美）；Speak（讲述）；Mixed（混合）；MessageBox（消息框）；Island（岛）；Bar Graph（柱状图）
- Chatter Type（中文：弹幕类型）：类型=枚举，默认="Top"
  可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Async（中文：异步）：类型=布尔，默认=true
- Custom Language（中文：自定义语言）：类型=文本，默认="chi_sim"
- Language Candidates (Sep With Semicolon)（中文：语言候选（用分号分隔））：类型=文本，默认="chi_sim;jpn;eng"
- Translation（中文：翻译）：类型=枚举，默认="Off"
  可选：Off（关闭）；Chinese（中文）；English（英语）；Japanese（日语）
- MessageBox Duration Coefficient（中文：对话框时长系数）：类型=数值，默认=1.0f
- Bar Graph Lyrics Font Size（中文：柱状图歌词字号）：类型=数值，默认=80
- Lyrics Fetch Attempt Cooldown (s)（中文：歌词抓取尝试冷却 (秒)）：类型=数值，默认=10
- Unload DLL When Quit（中文：退出时自动卸载DLL）：类型=布尔，默认=false
- X Offset（中文：横坐标偏移）：类型=数值，默认=0
- Music Player Preset（中文：音乐播放器预设）：类型=枚举，默认="Netease Music"
  可选：Netease Music（网易云音乐）；Kugou Music（酷狗音乐）；QQ Music（QQ音乐）；Custom（自定义）
- Bar Graph Lyrics Char Extra Gap（中文：柱状图歌词字符额外间距）：类型=数值，默认=5
- Language（中文：语言）：类型=枚举，默认="Infer From Music Name"
  可选：AI Decide（人工智能决定）；Infer From Music Name（从歌名推断）；chi_sim（未收录）；eng（未收录）；jpn（未收录）；osd（未收录）；Custom（自定义）
- Notify Music Change（中文：通知音乐变化）：类型=枚举，默认="Actionbar"
  可选：Off（关闭）；Actionbar（行为栏）；Notify（通知）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）
- Pause When Menu On（中文：打开菜单时暂停）：类型=布尔，默认=true
- Lyrics Auto Correct（中文：歌词自动纠正）：类型=布尔，默认=true
- Capture Cooldown (ms)（中文：捕获冷却（毫秒））：类型=数值，默认=700L

历史更新
- 36. 为 BetterLyrics 的 Display Mode 显示模式添加一个 Island 灵动岛上显示。带动画。没有歌词时会采用歌名。
- 37. 为 BetterLyrics 的 Exclude Non-lyrics Content 排除非歌词内容添加对特定前缀的检查（例如“作曲：”）
- 29. 添加模块： BetterLyrics，更好的桌面歌词。目前只支持网易云音乐。

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
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无

