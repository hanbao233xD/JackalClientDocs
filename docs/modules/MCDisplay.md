MCDisplay
MC显示
分类：Render
描述：显示 Minecraft 的 HUD 元素。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MCDisplay（MC显示）用于显示 Minecraft 的 HUD 元素。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Hand Left Click Action、Hand Wield Action Rotation Changes (Degrees)、Hand Block Action Rotation Changes (Degrees)。

配置项
- Hand Y Addition（中文：手部Y额外增加）：类型=数值，默认=0.0f
- Hand Opacity (0~1)（中文：手部不透明度 (0~1)）：类型=数值，默认=1.0f
- Crosshair Color（中文：准星颜色）：类型=枚举，默认="Smart"
  可选：Smart（智能）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Hand Left Click Action（中文：手部左键行为）：类型=枚举，默认="Wield"
  可选：Off（关闭）；Wield（挥动）
- Hand X Addition（中文：手部X额外增加）：类型=数值，默认=0.0f
- Hand Enabled（中文：启用手部）：类型=布尔，默认=true
- Crosshair Opacity (0~1)（中文：准星不透明度 (0~1)）：类型=数值，默认=1.0f
- Crosshair Scale（中文：准星缩放）：类型=数值，默认=1.0f
- Hand Rotation Base (Degrees)（中文：手部旋转基础值（度））：类型=数值，默认=-150.0f
- Hand Wield Action Rotation Changes (Degrees)（中文：手部挥动动作旋转角度变化（度））：类型=数值，默认=25.0f
- Hand Block Action Rotation Changes (Degrees)（中文：手部格挡动作旋转角度变化（度））：类型=数值，默认=-45.0f
- Hand Right Click Action（中文：手部右键行为）：类型=枚举，默认="Block"
  可选：Off（关闭）；Block（格挡）
- Hand Move X Range（中文：手部移动X范围）：类型=数值，默认=400.0f
- Crosshair（中文：准星）：类型=枚举，默认="Vanilla"
  可选：Off（关闭）；Vanilla（原版）
- Hand Texture Name（中文：手部贴图名称）：类型=文本，默认="iron_sword.png"
- Hand Rotation Turn Coefficient (0~1)（中文：手部旋转变向系数 (0~1)）：类型=数值，默认=0.35f
- Hand Scale（中文：手部缩放）：类型=数值，默认=6.0f
- Hand Move Y Range（中文：手部移动Y范围）：类型=数值，默认=1000.0f
- Hand Left Click Action Duration (ms)（中文：手部左键行为持续时间（毫秒））：类型=数值，默认=400L
- Hide When In Minecraft（中文：在MC中隐藏）：类型=布尔，默认=false

历史更新
- 33. 为 MC Display 添加配置：
- 60. 修复 MC Display 模块名称少了一个空格导致无法访问配置的问题。
- 7. 将之前的 Minecraft 重命名为 MCDisplay

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

