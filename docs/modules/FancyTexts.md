FancyTexts
花式文字
分类：Render
描述：显示一些带有动画和特效的花哨文字。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
FancyTexts（花式文字）用于显示一些带有动画和特效的花哨文字。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Opacity Min (0~1)、Fog Color、Async。

配置项
- Opacity Min (0~1)（中文：不透明度最小值 (0~1)）：类型=数值，默认=0.7f
- Fog Color（中文：雾颜色）：类型=枚举，默认="Black"
  可选：Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Async（中文：异步）：类型=布尔，默认=true
- Random Rotation Start Coefficient（中文：随机旋转起始系数）：类型=数值，默认=1.0f
- Color（中文：颜色）：类型=枚举，默认="Colorful"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Fixed Text（中文：固定文本）：类型=文本，默认="阿诺头顶怎么尖尖的"
- Parallax Intensity（中文：视差强度）：类型=数值，默认=0.8f
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Fade Out Duration (ms)（中文：淡出时长（毫秒））：类型=数值，默认=800L
- Opacity Period (ms)（中文：不透明度周期（毫秒））：类型=数值，默认=6000L
- Fog Enabled（中文：启用雾效果）：类型=布尔，默认=false
- Fog Opacity (0~1)（中文：雾不透明度 (0~1)）：类型=数值，默认=0.6f
- Cut Words（中文：分词）：类型=枚举，默认="Single"
  可选：Single（单个）；Double（两个）；Bili Suggestion（哔哩建议）；API（未收录）；API 2（未收录）
- Random Rotation End Coefficient（中文：随机旋转结束系数）：类型=数值，默认=1.0f
- Flow（中文：流动）：类型=通用，默认=NAMED_COLOR_BASE_LIST
- Show Duration (ms)（中文：显示时长（毫秒））：类型=数值，默认=3000L
- Opacity Max (0~1)（中文：不透明度最大值 (0~1)）：类型=数值，默认=0.9f
- Module Status Auto Switch（中文：模块状态自动切换）：类型=布尔，默认=true
- Scale（中文：比例）：类型=数值，默认=100
- Single（中文：单个）：类型=文本，默认="Double", "Bili Suggestion", "API", "API 2"
- Fade In Duration (ms)（中文：淡入时长（毫秒））：类型=数值，默认=500L
- Random Rotation（中文：随机旋转）：类型=布尔，默认=true

历史更新
- 35. 改良 Fancy Text 的渲染，添加了三种新布局: 阻止元素超出屏幕范围
- 36. 为 Fancy Text 添加配置：
- 32. 添加新模块：FancyTexts，显示花哨的文字。

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

