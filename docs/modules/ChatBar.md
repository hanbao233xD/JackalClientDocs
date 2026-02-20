ChatBar
聊天栏
[PRO]
分类：Render
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
ChatBar（聊天栏）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Sync Console Update Cooldown (ms)。

配置项
- Message Inflow Rate (ms)（中文：消息涌入延迟 (毫秒)）：类型=数值，默认=50
- Background Shadow（中文：背景阴影）：类型=布尔，默认=true
- Horizontal Fade Duration (ms)（中文：横向淡入时长（毫秒））：类型=数值，默认=300
- Max Lines（中文：最大行数）：类型=数值，默认=128
- Background Roundness（中文：背景圆滑程度）：类型=数值，默认=0.5f
- Background Color（中文：背景颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Background Shadow Color（中文：背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Shadow（中文：文本 阴影）：类型=布尔，默认=false
- Background Size（中文：背景大小）：类型=枚举，默认="Static"
  可选：Static（静态）；Dynamic（动态）
- Background Opacity (0~1)（中文：背景不透明度 (0~1)）：类型=数值，默认=0.6f
- Max Allowed Burst Lines（中文：最大允许突变行数）：类型=数值，默认=1024U
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.05f
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=true
- Console Read Tail Lines（中文：读取控制台底部行数）：类型=数值，默认=30U
- Text Line Gap（中文：文本 Line Gap）：类型=数值，默认=10
- Background Shadow Thickness（中文：背景阴影厚度）：类型=数值，默认=70.0f
- Text Font Size（中文：文本字号）：类型=数值，默认=30
- Text Opacity (0~1)（中文：文本不透明度 (0~1)）：类型=数值，默认=0.99f
- Auto Stick Bottom（中文：自动吸底）：类型=布尔，默认=true
- Y Rate（中文：纵坐标比例）：类型=数值，默认=0.9f
- X Rate（中文：横坐标比例）：类型=数值，默认=0.02f
- Easing Horizontal（中文：横向缓动）：类型=布尔，默认=true
- Sync Console（中文：同步控制台）：类型=布尔，默认=true
- Text Margin（中文：文本 Margin）：类型=数值，默认=20
- Max Width Rate（中文：最大数量 宽度 比率）：类型=数值，默认=0.5f
- Background（中文：背景）：类型=布尔，默认=true
- Easing Vertical（中文：纵向缓动）：类型=布尔，默认=true
- Background Round Corners（中文：背景圆角）：类型=布尔，默认=true
- Sync Console Update Cooldown (ms)（中文：同步控制台更新冷却（毫秒））：类型=数值，默认=500
- Max Height Rate（中文：最大数量 高度 比率）：类型=数值，默认=0.5f
- Background Shadow Opacity (0~1)（中文：背景阴影不透明度 (0~1)）：类型=数值，默认=0.5f

历史更新
- 23. 为 Download HUD, Chat Bar, Clipboard ESP, Security ESP, Letter Graph 添加 HUD Editor 拖曳。
- 33. 修复 Chat Bar 在背景关闭时文本超出范围的问题。
- 63. 【PRO】添加模块：Chat Bar，模拟游戏的聊天栏。

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

