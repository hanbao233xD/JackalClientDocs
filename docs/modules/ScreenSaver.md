ScreenSaver
屏保程序
分类：Render
描述：启动系统的一个屏幕保护程序。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ScreenSaver（屏保程序）用于启动系统的一个屏幕保护程序。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Disable Gamma、Use Custom Program、Your Custom Program。

配置项
- Disable Gamma（中文：关闭伽马覆写）：类型=布尔，默认=false
- Use Custom Program（中文：使用自定义程序）：类型=布尔，默认=false
- Your Custom Program（中文：你的自定义程序）：类型=文本，默认="null"
- Mute（中文：静音）：类型=布尔，默认=true
- Disable ForceTopmost（中文：关闭强制置顶）：类型=布尔，默认=true
- Disable Night（中文：关闭夜间模式）：类型=布尔，默认=true
- Close Client Menu（中文：关闭客户端菜单）：类型=布尔，默认=true
- Mouse Disabler (Press END to quit)（中文：鼠标锁 (按End退出)）：类型=布尔，默认=false
- Key Locker (Press END to quit)（中文：键盘锁 (按End退出)）：类型=布尔，默认=false
- Display On Client（中文：在客户端窗口显示）：类型=布尔，默认=true

历史更新
- 31. 为 NoScreenSaver 添加对相关系统参数的设置。

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

