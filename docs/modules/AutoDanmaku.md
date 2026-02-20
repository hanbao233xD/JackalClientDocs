AutoDanmaku
自动弹幕
分类：Render
描述：根据xml文件自动发送弹幕。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoDanmaku（自动弹幕）用于根据xml文件自动发送弹幕。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Danmaku Font Size Mode、File Selection Mode、Notify Danmaku File Name。

配置项
- Danmaku Font Size Mode（中文：弹幕字号模式）：类型=枚举，默认="Auto"
  可选：Fixed（固定）；Auto（自动）；Manual（手动）
- Path（中文：路径）：类型=文本，默认="danmaku_172423516.xml"
- White Danmaku Color（中文：白色弹幕颜色）：类型=枚举，默认="White"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- File Selection Mode（中文：弹幕文件选择模式。）：类型=枚举，默认="Single File"
  可选：Single File（单一文件）；Single File Loop（单一文件循环）；Folder Random Select（文件夹中随机选择）；Folder Sequential Select（文件夹中顺序选择）；Folder Loop Select（文件夹中循环选择）
- List Current Index（中文：列表当前索引）：类型=数值，默认=0
- Lazy Danmaku Pushing（中文：懒汉式推送弹幕）：类型=布尔，默认=false
- Horizontal Reverse（中文：横向翻转）：类型=布尔，默认=false
- Hotkey (Next Danmaku File)（中文：快捷键（下一个弹幕文件））：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, '2'}}}
- Recursive Selection in Folder（中文：文件夹中选择文件时采用递归）：类型=布尔，默认=false
- Show Reverse Danmaku（中文：展示逆向弹幕）：类型=布尔，默认=true
- Show Top Danmaku（中文：展示顶部居中弹幕）：类型=布尔，默认=true
- File Selection Max Attempts（中文：文件选择最大尝试次数）：类型=数值，默认=5
- White Danmaku Color Frozen（中文：白色弹幕颜色是否冻结）：类型=布尔，默认=false
- Show Bottom Danmaku（中文：展示底部居中弹幕）：类型=布尔，默认=true
- Danmaku Font Size Manual Scale（中文：弹幕字号手动缩放）：类型=数值，默认=1.0f
- Notify Danmaku File Name（中文：通知弹幕文件名）：类型=布尔，默认=true
- Vertical Reverse（中文：纵向翻转）：类型=布尔，默认=false
- File Gap Duration (ms)（中文：文件间隔时间 (毫秒)）：类型=数值，默认=0L
- Correct /n to NewLine（中文：纠正/n为换行符）：类型=布尔，默认=true

历史更新
- 17. 修复 AutoDanmaku 模块因为编码而无法启动问题。
- 22. 修改 AutoDanmaku 的示例文件为 danmaku_172423516.xml
- 15. 添加模块：Auto Danmaku，用于自动解析B站弹幕 XML 文件并自动播放弹幕。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无

