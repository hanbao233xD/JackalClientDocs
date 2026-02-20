Title
标题显示
分类：Render
描述：在屏幕中央显示一个标题。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Title（标题显示）用于在屏幕中央显示一个标题。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Title Text Mode。

配置项
- Fixed Title Text（中文：标题固定文本）：类型=文本，默认="JackalClient"
- Title Size（中文：标题尺寸）：类型=枚举，默认="Auto"
  可选：Auto（自动）；Fixed（固定）
- Brightness Min（中文：最小亮度）：类型=数值，默认=0.66f
- Random Rotation Max Value（中文：随机旋转角最大值）：类型=数值，默认=100.0f
- Animation Type (Enter)（中文：动画类型 (进入)）：类型=枚举，默认="Slide (Bottom
- Random Rotation（中文：随机旋转）：类型=布尔，默认=true
- Animation Slide Fade（中文：滑动动画淡入淡出）：类型=布尔，默认=true
- Shake Enabled（中文：启用抖动）：类型=布尔，默认=true
- Title Text List（中文：标题文本列表）：类型=文本，默认="你好，陌生人;GRW团队招生了;无论你是跑酷大神;还是生存大师;还是PVP大佬;又或是起床大佬;还是PVP大佬;又或是建筑大佬;还是PVP大佬;又或是红石大佬 ...
- Mask Fade Speed (0~1)（中文：遮罩淡入速率 (0~1)）：类型=数值，默认=0.05f
- Debug Gizmos（中文：未收录）：类型=布尔，默认=false
- Force Exit Speed Boost（中文：强制退出速度加成）：类型=数值，默认=2.0f
- Fixed Title Size（中文：标题固定尺寸）：类型=数值，默认=200
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Text Glow Size Rate（中文：文本发光大小比例）：类型=数值，默认=1.3f
- Text Stroke（中文：文本描边）：类型=枚举，默认="Shadow"
  可选：Off（关闭）；Shadow（阴影）；Glow（未收录）
- Module Status Auto Switch（中文：模块状态自动切换）：类型=布尔，默认=true
- Blur Samples Max（中文：模糊最大取样数）：类型=数值，默认=10
- Check Topmost（中文：检查置顶）：类型=布尔，默认=true
- Subtitle Easing Speed (0~1)（中文：副标题缓动速率 (0~1)）：类型=数值，默认=0.02f
- Title Subtitle Line Gap（中文：主副标题行距）：类型=数值，默认=30
- Mask Enabled（中文：启用遮罩）：类型=布尔，默认=false
- Animation Type (Exit)（中文：动画类型 (离开)）：类型=枚举，默认="Slide (Top
- Title Text Mode（中文：标题文本模式）：类型=枚举，默认="Fixed"
  可选：Fixed（固定）；List Random Element（列表中随机的元素）；List Loop（列表循环）；Clipboard Text（剪贴板文本）
- Text Glow Amount（中文：文本发光数量）：类型=数值，默认=5U
- Brightness Max（中文：最大亮度）：类型=数值，默认=1.0f
- Shake Amplitude（中文：抖动振幅）：类型=数值，默认=60.0f
- Title Duration（中文：标题持续时间）：类型=数值，默认=5000L
- Brightness Pulse（中文：亮度脉冲）：类型=布尔，默认=true
- Blur Strength Max（中文：模糊力度最大值）：类型=数值，默认=20.0f
- Subtitle Enabled（中文：启用副标题）：类型=布尔，默认=true
- Title Color（中文：标题颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Shake Speed（中文：抖动速率）：类型=数值，默认=2.0f
- Subtitle Color（中文：副标题颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Brightness Speed (Hz)（中文：亮度速率 (赫兹)）：类型=数值，默认=0.72f
- Console Output（中文：控制台输出）：类型=布尔，默认=true
- Auto Title Size Scale（中文：标题自动尺寸缩放比例）：类型=数值，默认=1.0f
- Fixed Subtitle Size（中文：固定副标题字号）：类型=数值，默认=90
- Mask Alpha (0~1)（中文：遮罩不透明度 (0~1)）：类型=数值，默认=0.5f
- Fixed Subtitle Text（中文：固定副标题文本）：类型=文本，默认="yee~"
- List Current Index（中文：列表当前索引）：类型=数值，默认=0
- Blur Effect（中文：模糊效果）：类型=布尔，默认=true
- Title Stay Time (0~1)（中文：标题停留时间 (0~1)）：类型=数值，默认=0.5f
- Main Title Enabled（中文：启用主标题）：类型=布尔，默认=true
- Title Base Opacity (0~1)（中文：标题基准不透明度 (0~1)）：类型=数值，默认=1.0f
- Force Previous Fade Out（中文：强制先前的淡出）：类型=布尔，默认=true
- Auto Focus（中文：自动取得焦点）：类型=布尔，默认=false
- Title Easing Speed (0~1)（中文：标题缓动速率 (0~1)）：类型=数值，默认=0.02f

历史更新
- 38. 添加模块：Title，实现标题显示功能。注意：命令 /title 发出的标题的颜色请在 Shell 模块中设置。

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

