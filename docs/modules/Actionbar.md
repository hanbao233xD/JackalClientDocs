Actionbar
行为栏
分类：Render
描述：显示一条动作栏消息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Actionbar（行为栏）用于显示一条动作栏消息。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Y Rate、Auto Focus、Text Duration。

配置项
- Y Rate（中文：纵坐标比例）：类型=数值，默认=0.8f
- Auto Focus（中文：自动取得焦点）：类型=布尔，默认=false
- Text Duration（中文：文本持续时间）：类型=数值，默认=4500L
- Draw Prev Text During Animation（中文：动画时绘制上一个文本）：类型=布尔，默认=true
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Text Color（中文：文本颜色）：类型=枚举，默认="Green"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Animation（中文：文本动画）：类型=枚举，默认="Slide (Left
- Fixed Text（中文：固定文本）：类型=文本，默认="NEVER GONNA GIVE YOU UP"
- Text Base Opacity (0~1)（中文：文本基础不透明度 (0~1)）：类型=数值，默认=1.0f
- Text Font Size（中文：文本字号）：类型=数值，默认=36
- Module Status Auto Switch（中文：模块状态自动切换）：类型=布尔，默认=true
- Check Topmost（中文：检查置顶）：类型=布尔，默认=true
- Text Animation Duration (ms)（中文：文本动画时长 (毫秒)）：类型=数值，默认=1600L
- Text Background（中文：文本背景）：类型=枚举，默认="Simple"
  可选：Off（关闭）；Simple（简易）；Fancy（优美）

历史更新
- 47. 为 Actionbar 模块添加配置：
- 70. 为 Actionbar 模块添加配置：
- 14. 添加模块： Actionbar

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

