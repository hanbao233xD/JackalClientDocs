Background
背景
分类：Render
描述：客户端背景设置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Background（背景）用于客户端背景设置。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Filter Opacity (0~1)、Screen Mode Redraw Client Texture、Filter Shader Offline Path。

配置项
- Screen Compensation（中文：屏幕补偿）：类型=布尔，默认=false
- Filter Opacity (0~1)（中文：滤镜不透明度 (0~1)）：类型=数值，默认=0.5f
- Screen Mode Redraw Client Texture（中文：屏幕模式重绘客户端贴图）：类型=布尔，默认=true
- Filter Shader Offline Path（中文：滤镜离线着色器路径）：类型=文本，默认=""
- When to Apply Filter（中文：何时应用滤镜）：类型=枚举，默认="Menu On"
  可选：Always（总是）；Menu On（打开菜单）；Menu Off（关闭菜单）
- When to Apply Screen Compensation（中文：何时应用屏幕补偿）：类型=枚举，默认="Always"
  可选：Always（总是）；Menu On（打开菜单）；Menu Off（关闭菜单）
- Screen Compensation Faster（中文：让屏幕补偿更快）：类型=布尔，默认=true
- Screen Compensation Cooldown (ms)（中文：屏幕补偿冷却(毫秒)）：类型=数值，默认=250U
- Filter Type（中文：滤镜类型）：类型=枚举，默认="Flow"
  可选：Off（关闭）；Shader Offline（离线着色器）；Shader Online（在线着色器）；Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Lightness (0~1)（中文：亮度 (0~1)）：类型=数值，默认=0.8f
- Filter Shader Online Name（中文：滤镜在线着色器名称）：类型=文本，默认=""
- Hide Filter When No Focus（中文：无焦点时隐藏滤镜）：类型=布尔，默认=true

历史更新
- 45. 修复了 Background 的滤镜。之前那个太不明显了。
- 34. 将 GUI 选项中的 Enabled Module Color 重命名为 Module Background Color (Enabled)
- 9. 为未启用的模块的背景颜色添加GUI选项：Module Background Color。颜色可选：

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

