BlackCapture
黑屏捕获
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
BlackCapture（黑屏捕获）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：HUD、HUD Alignment、HUD X Rate。

配置项
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- HUD（中文：是否显示HUD。）：类型=布尔，默认=true
- HUD Alignment（中文：HUD 对齐方式）：类型=枚举，默认="Center"
  可选：Left（左侧）；Center（居中）；Right（右侧）
- HUD X Rate（中文：HUD 横坐标比例）：类型=数值，默认=0.5f
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=30
- HUD Color（中文：HUD 颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Console（中文：控制台）：类型=布尔，默认=true
- HUD Y Rate（中文：HUD 纵坐标比例）：类型=数值，默认=0.55f
- HUD Opacity (0~1)（中文：HUD 不透明度）：类型=数值，默认=0.8f

历史更新
- 61. 为 Anti Capture 和 Black Capture 添加配置：
- 13. 为 AntiCapture 和 BlackCapture 添加 HUD 相关的配置。
- 5. 发现 SetWindowDisplayAffinity 和 图腾动画不兼容。受影响的模块有：AntiCapture, BlackCapture。经过修改，这两个模块在启用的时候如果 AutoTotem 启用，则会启用失败。

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

