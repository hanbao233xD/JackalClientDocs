SessionHUD
会话显示
分类：Render
描述：显示当前用户的信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SessionHUD（会话显示）用于显示当前用户的信息。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Y Rate、Background Roundness、Background Round Corners。

配置项
- Y Rate（中文：纵坐标比例）：类型=数值，默认=0.2f
- Background Roundness（中文：背景圆滑程度）：类型=数值，默认=0.6f
- Background Round Corners（中文：背景圆角）：类型=布尔，默认=true
- Background Shadow Color（中文：背景阴影颜色）：类型=枚举，默认="Black"
  可选：Transparent（透明）；Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Time Info（中文：时间信息）：类型=布尔，默认=true
- Background Opacity (0~1)（中文：背景不透明度 (0~1)）：类型=数值，默认=0.5f
- Background Shadow Thickness（中文：背景阴影厚度）：类型=数值，默认=60.0f
- Hide When Menu On（中文：菜单打开时不显示）：类型=布尔，默认=false
- Give Way to Mouse（中文：给鼠标让道）：类型=布尔，默认=true
- Text Color（中文：文本颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Width（中文：宽度）：类型=数值，默认=300
- Avatar Opacity (0~1)（中文：头像不透明度 (0~1)）：类型=数值，默认=1.0f
- Avatar Circle（中文：圆形头像）：类型=布尔，默认=true
- Background Color（中文：背景颜色）：类型=枚举，默认="Flow"
  可选：Transparent（透明）；Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Font Size（中文：文本字号）：类型=数值，默认=30
- Background Shadow（中文：背景阴影）：类型=布尔，默认=true
- Background Shadow Opacity (0~1)（中文：背景阴影不透明度 (0~1)）：类型=数值，默认=0.6f
- Avatar Scale（中文：头像缩放）：类型=数值，默认=1.0f
- X Rate（中文：横坐标比例）：类型=数值，默认=0.1f
- Background（中文：背景）：类型=布尔，默认=true

历史更新
- 19. 修复了 SessionHUD 在 HudEditor 启用时仍能为鼠标让位的问题。
- 1. 添加模块：Session HUD，显示当前 Windows 用户信息，模仿挂端设计。还会有当前的游玩时间，实际是开机时间。

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

