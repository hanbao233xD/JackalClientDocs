TimeDisplay
时间显示
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
TimeDisplay（时间显示）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Time Announcement Mode、Online Time Update Cooldown (ms)、Style。

配置项
- Time Announcement（中文：报时）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；WinToast（系统通知）；Title（标题）；Actionbar（行为栏）
- Time Announcement Mode（中文：报时模式）：类型=枚举，默认="Half Hour"
  可选：Half Hour（半小时）；Hour（小时）；Custom（自定义）
- Flip Duration (ms)（中文：翻动时长（毫秒））：类型=数值，默认=400.0f
- Background Shadow（中文：背景阴影）：类型=布尔，默认=true
- Opacity (0~1)（中文：不透明度 (0~1））：类型=数值，默认=0.7f
- Background Shadow Thickness（中文：背景阴影厚度）：类型=数值，默认=20.0f
- Y Rate（中文：纵坐标比例）：类型=数值，默认=0.8f
- Background Roundness（中文：背景圆滑程度）：类型=数值，默认=0.3f
- Text Background（中文：文本背景）：类型=布尔，默认=false
- Background Color（中文：背景颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Shadow Color（中文：背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Whiter（中文：更白一点）：类型=布尔，默认=true
- Transparent（中文：透明）：类型=布尔，默认=true
- Background Opacity (0~1)（中文：背景不透明度 (0~1)）：类型=数值，默认=0.8f
- New Day Title Color（中文：新日子标题颜色）：类型=枚举，默认="Flow"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Time Announcement Title Color（中文：报时标题颜色）：类型=枚举，默认="Aqua-Blue"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Tick Sound Pan（中文：滴答声声像）：类型=枚举，默认="Surround"
  可选：Normal（普通）；Binary（二进制）；Surround（环绕）
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Tick Sound (PRO)（中文：滴答声（专业版））：类型=枚举，默认="Dynamic"
  可选：Off（关闭）；Always（总是）；Silence（寂静）；Dynamic（动态）；Music Stopped（音乐停止时）
- Time Announcement Title Font Size（中文：报时标题字号）：类型=数值，默认=100
- Color（中文：颜色）：类型=枚举，默认="Rainbow"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- New Day Notification（中文：新日子通知）：类型=枚举，默认="Title"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；WinToast（系统通知）；Title（标题）；Actionbar（行为栏）
- Online Time Update Cooldown (ms)（中文：在线时间更新冷却 (毫秒)）：类型=数值，默认=60000L
- Style（中文：风格）：类型=枚举，默认="Flip"
  可选：Classic（经典）；Flip（翻动）；Flip + Clock（翻动钟表）
- New Day Title Font Size（中文：新日子标题字号）：类型=数值，默认=300
- X Rate（中文：横坐标比例）：类型=数值，默认=0.2f
- Tick Sound Volume（中文：滴答声音量）：类型=数值，默认=20
- Tick Sound Pitch（中文：滴答声音高）：类型=枚举，默认="Binary"
  可选：Normal（普通）；Binary（二进制）；Vary（变动）
- Wave Color（中文：波动颜色）：类型=布尔，默认=true
- Tick Sound Silence Threshold（中文：滴答声寂静阈值）：类型=数值，默认=300.0f
- Background Round Corners（中文：背景圆角）：类型=布尔，默认=true
- Background（中文：背景）：类型=布尔，默认=false
- Time Announcement Highlight（中文：报时高亮）：类型=布尔，默认=true
- Font Size（中文：字号）：类型=数值，默认=50
- Online Time（中文：在线时间）：类型=布尔，默认=false
- Time Announcement Custom Rules (Sep With Semicolon)（中文：报时自定义规则（用分号分隔））：类型=文本，默认="**:00;**:20;**:40"
- Background Shadow Opacity (0~1)（中文：背景阴影不透明度 (0~1)）：类型=数值，默认=0.5f

历史更新
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：
- 44. 将 TimeDisplay 模块的 Rainbow 选项改为 Color，可以选颜色预设。
- 50. 为 TimeDisplay 添加配置：

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

