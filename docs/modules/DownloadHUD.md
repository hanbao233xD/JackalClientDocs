DownloadHUD
下载显示
分类：Render
描述：显示客户端文件下载进度。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DownloadHUD（下载显示）用于显示客户端文件下载进度。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Background Shadow、Item Height、Background Roundness。

配置项
- Background Shadow（中文：背景阴影）：类型=布尔，默认=true
- Item Height（中文：Item 高度）：类型=数值，默认=120.0f
- Background Roundness（中文：背景圆滑程度）：类型=数值，默认=0.5f
- Item Width（中文：Item 宽度）：类型=数值，默认=350.0f
- Background Color（中文：背景颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Shadow Color（中文：背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Opacity (0~1)（中文：背景不透明度 (0~1)）：类型=数值，默认=0.8f
- Item Gap（中文：未收录）：类型=数值，默认=40.0f
- Item Width Strict（中文：项目严格宽度）：类型=布尔，默认=true
- Item Easing（中文：Item 缓动）：类型=布尔，默认=true
- Background Shadow Thickness（中文：背景阴影厚度）：类型=数值，默认=30.0f
- Text Font Size（中文：文本字号）：类型=数值，默认=25
- Text Opacity (0~1)（中文：文本不透明度 (0~1)）：类型=数值，默认=1.0f
- Progress Bar Easing（中文：进度条缓动）：类型=布尔，默认=true
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Title（中文：标题）：类型=布尔，默认=true
- X Rate（中文：横坐标比例）：类型=数值，默认=0.7f
- Progress Bar Height（中文：进度条高度）：类型=数值，默认=10
- Progress Bar Easing Speed (0~1)（中文：进度条缓动速率 (0~1)）：类型=数值，默认=0.07f
- Y Rate（中文：纵坐标比例）：类型=数值，默认=0.1f
- Item Max Count（中文：最大显示的项数。）：类型=数值，默认=8U
- Background（中文：背景）：类型=布尔，默认=true
- Background Round Corners（中文：背景圆角）：类型=布尔，默认=true
- Item Easing Speed (0~1)（中文：Item 缓动 速率 (0~1)）：类型=数值，默认=0.2f
- Item Fade Duration (ms)（中文：Item 淡入淡出 时长 (ms)）：类型=数值，默认=1000L
- Completed Task Show Time (ms)（中文：完成的任务显示的时长（毫秒）。）：类型=数值，默认=5000L
- Background Shadow Opacity (0~1)（中文：背景阴影不透明度 (0~1)）：类型=数值，默认=0.5f

历史更新
- 31. 为 Download HUD 添加配置：
- 32. 修复 Download HUD 进度条缓动在绘制时有概率不生效的问题。
- 64. 添加模块：Download HUD，显示客户端文件下载进度。

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

