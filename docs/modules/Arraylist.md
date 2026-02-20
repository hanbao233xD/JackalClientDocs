Arraylist
模块列表
分类：Render
描述：显示已启用模块列表。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Arraylist（模块列表）用于显示已启用模块列表。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Background Height Mode、Side Bar Style。

配置项
- Background Opacity Max (0~1)（中文：背景不透明度最大值 (0~1)）：类型=数值，默认=0.57f
- Show Info（中文：显示信息）：类型=布尔，默认=true
- Show Window（中文：显示窗口）：类型=布尔，默认=true
- Background Shadow（中文：背景阴影）：类型=布尔，默认=true
- Opacity Period (ms)（中文：不透明度周期（毫秒））：类型=数值，默认=3000L
- Show Control（中文：显示控制）：类型=布尔，默认=true
- Background Opacity Min (0~1)（中文：背景不透明度最小值 (0~1)）：类型=数值，默认=0.56f
- Sort By Length（中文：按长度排序）：类型=布尔，默认=true
- Show Web（中文：显示联网状态）：类型=布尔，默认=true
- Show Render（中文：显示渲染）：类型=布尔，默认=true
- Background Roundness（中文：背景圆滑程度）：类型=数值，默认=0.3f
- Background Color（中文：背景颜色）：类型=枚举，默认="Black"
  可选：Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Shadow Color（中文：背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Shadow Old Rendering（中文：背景阴影使用旧渲染）：类型=布尔，默认=true
- Background Shadow Thickness（中文：背景阴影厚度）：类型=数值，默认=40
- Show Combat（中文：显示竞技）：类型=布尔，默认=true
- Entry Exit Animation（中文：进出场动画）：类型=枚举，默认="Normal"
  可选：Off（关闭）；Normal（普通）；Elastic（弹性）；Back（返回）
- Top（中文：顶端）：类型=数值，默认=60
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Background Height Mode（中文：背景高度模式）：类型=枚举，默认="Font Size"
  可选：Font Size + Line Gap（字号+行距）；Font Size（字号）
- Global Position（中文：全局位置）：类型=枚举，默认="Screen"
  可选：Screen（屏幕）；Foreground（前端）；PointAt（指向）
- Opacity Max (0~1)（中文：不透明度最大值 (0~1)）：类型=数值，默认=0.88f
- Removed Item Offset Y（中文：Removed Item 偏移 Y）：类型=数值，默认=0.0f
- Side Bar Style（中文：侧边条样式）：类型=枚举，默认="Disconnected"
  可选：Disconnected（已断开）；Continuous（连续）
- Background Opacity Period (ms)（中文：背景不透明度周期 (毫秒)）：类型=数值，默认=2000L
- Drag X（中文：未收录）：类型=数值，默认=0
- Background Outline Color（中文：背景描边颜色）：类型=枚举，默认="Transparent"
  可选：Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Use Display Length（中文：使用实际长度）：类型=布尔，默认=true
- Show Registry（中文：显示注册表）：类型=布尔，默认=true
- Side Margin（中文：侧边空白）：类型=数值，默认=12
- Side Bar Text Gap（中文：侧边条与文字间距）：类型=数值，默认=15
- Show Process（中文：显示进程）：类型=布尔，默认=true
- Position（中文：位置）：类型=枚举，默认="Right"
  可选：Left（左侧）；Right（右侧）
- Background Round Corners（中文：背景圆角）：类型=布尔，默认=false
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.2f
- Show Drivers（中文：显示驱动）：类型=布尔，默认=true
- Text Glow Radius Rate（中文：文本发光半径占比）：类型=数值，默认=0.2f
- Give Way to Mouse（中文：给鼠标让道）：类型=布尔，默认=true
- Background Shadow Opacity (0~1)（中文：背景阴影不透明度 (0~1)）：类型=数值，默认=0.5f
- Info Gap（中文：信息间距）：类型=数值，默认=10
- Background Color Darkness (0~1)（中文：背景颜色暗度 (0~1)）：类型=数值，默认=0.8f
- Info Color（中文：信息颜色）：类型=枚举，默认="White-Gray"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Glow (PRO)（中文：文本发光（专业版））：类型=布尔，默认=true
- Background（中文：背景）：类型=布尔，默认=true
- Background Horizontal Padding（中文：背景水平留白）：类型=数值，默认=10
- Show Misc（中文：显示其他）：类型=布尔，默认=true
- Side Bar（中文：侧边矩形）：类型=布尔，默认=false
- Language（中文：语言）：类型=枚举，默认="Follow Global"
  可选：Follow Global（跟随全局）；English（英语）；简体中文（未收录）
- hidden（中文：隐藏）：类型=布尔，默认=true
- Font Size（中文：字号）：类型=数值，默认=36
- Background Outline（中文：背景描边）：类型=布尔，默认=true
- Opacity Min (0~1)（中文：不透明度最小值 (0~1)）：类型=数值，默认=0.8f
- Text Glow Alpha (0~1)（中文：文本发光不透明度 (0~1)）：类型=数值，默认=0.5f
- Give Way to Mouse Distance（中文：给鼠标让道的距离）：类型=数值，默认=80.0f
- Line Gap（中文：行距）：类型=数值，默认=9

历史更新
- 17. 现在 模块列表HUD 添加了丝滑的动画。
- 25. 现在模块列表HUD支持靠左了。
- 3. 修复了模块列表 HUD 字右侧无法对齐的问题。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无

