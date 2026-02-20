ConsoleESP
控制台透视
分类：Window
描述：监控任意应用程序的控制台内容。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ConsoleESP（控制台透视）用于监控任意应用程序的控制台内容。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Target Single Process (Content)、Actionbar Color (Created)、Notify Mode (Content)。

配置项
- Target Single Process (Content)（中文：目标 单个 进程 (内容)）：类型=枚举，默认=""
- Actionbar Color (Created)（中文：行为栏 颜色 (已新建)）：类型=枚举，默认="Dark Green"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Notify Mode (Content)（中文：通知 模式 (内容)）：类型=枚举，默认="Console Output"
  可选：Off（关闭）；Console Output（控制台输出）；File Output（文件输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Speak（讲述）
- Target Mode (Content)（中文：目标 模式 (内容)）：类型=枚举，默认="Single"
  可选：Single（单个）；All（所有）
- Monitor Console Content（中文：监视 控制台 内容）：类型=布尔，默认=true
- Actionbar Color (Content)（中文：行为栏 颜色 (内容)）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Monitor Console Destroyed（中文：监视 控制台 Destroyed）：类型=布尔，默认=true
- Title Color (Destroyed)（中文：标题 颜色 (Destroyed)）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Title Color (Content)（中文：标题 颜色 (内容)）：类型=枚举，默认="Gray"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Monitor Console Created（中文：监视 控制台 已新建）：类型=布尔，默认=true
- Chatter Color (Content)（中文：弹幕 颜色 (内容)）：类型=枚举，默认="Gray"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Title Color (Created)（中文：标题 颜色 (已新建)）：类型=枚举，默认="Dark Green"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Process Blacklist (Sep With Semicolon)（中文：进程 黑名单 (Sep With Semicolon)）：类型=文本，默认="cmd.exe;git.exe;tesseract.exe;MSBuild.exe;JackalClient.exe;AppProvisioningPlugi ...
- Actionbar Color (Destroyed)（中文：行为栏 颜色 (Destroyed)）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Chatter Color (Created)（中文：弹幕 颜色 (已新建)）：类型=枚举，默认="Dark Green"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Notify Mode (Created/Destroyed)（中文：通知 模式 (已新建/Destroyed)）：类型=枚举，默认="Console Output"
  可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Speak（讲述）
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=500U
- Chatter Color (Destroyed)（中文：弹幕 颜色 (Destroyed)）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）

历史更新
- 20. 现在不允许 Console ESP 监视自己的控制台，防止客户端卡死。
- 5. 添加新模块：ConsoleESP（控制台透视）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无

