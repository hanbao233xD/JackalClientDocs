CompileESP
编译透视
[PRO]
分类：Process
描述：监控编译器进程并通知编译开始/结束。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
CompileESP（编译透视）用于监控编译器进程并通知编译开始/结束。
适合进程观测、控制与排障场景。
初次使用可优先调整：Compile Start Notify Mode、HUD Background Opacity (0~1)、HUD Background Color。

配置项
- Show PID（中文：显示进程ID）：类型=布尔，默认=true
- Compiler Process Blacklist Enabled（中文：编译器进程黑名单是否启用）：类型=布尔，默认=false
- Compile Start Notify Mode（中文：编译开始通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Island（岛）；Console Output（控制台输出）；WinToast（系统通知）；Speak（讲述）；Real Chatter（真弹幕）
- HUD Background Opacity (0~1)（中文：HUD 背景不透明度 (0~1)）：类型=数值，默认=0.35f
- HUD Background Color（中文：HUD 背景颜色）：类型=枚举，默认="Black"
  可选：Flow（流动）；Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Background Roundness（中文：HUD背景圆角度）：类型=数值，默认=0.3f
- HUD Loading Color 1（中文：HUD加载动画颜色1）：类型=枚举，默认="Aqua"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Subtext Color（中文：HUD副文本颜色）：类型=枚举，默认="Aqua"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Main Text（中文：HUD主文本）：类型=文本，默认="Compiling..."
- HUD Y Rate（中文：HUD 纵坐标比例）：类型=数值，默认=0.56f
- HUD Fade In Duration (ms)（中文：HUD淡入时长 (毫秒)）：类型=数值，默认=2000L
- HUD Text Font Size（中文：HUD 文本字号）：类型=数值，默认=24
- HUD Text Gap（中文：HUD文本间隔）：类型=数值，默认=8
- Compiler Process Blacklist (Regex Sep With Semicolon)（中文：编译器进程黑名单（用分号分隔的正则表达式））：类型=文本，默认=""
- Show Duration（中文：显示耗时）：类型=布尔，默认=true
- HUD Subtext（中文：HUD副文本）：类型=枚举，默认="Type + Duration"
  可选：Off（关闭）；Type（类型）；Tool（工具）；Duration（时长）；Type + Duration（类型 + 时长）；Type + Tool + Duration（类型 + 工具 + 时长）
- HUD Background（中文：HUD背景）：类型=布尔，默认=true
- HUD Padding（中文：HUD内边距）：类型=数值，默认=14
- Compiler Process Whitelist (Regex Sep With Semicolon)（中文：编译器进程扩展列表（用分号分隔的正则表达式））：类型=文本，默认=""
- Arraylist Extra Info（中文：模块列表额外信息）：类型=枚举，默认="Type"
  可选：Off（关闭）；Type（类型）；Tool（工具）；Target File（目标文件）；Type + File（类型 + 文件）
- Compile Finish Notify Mode（中文：编译结束通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Island（岛）；Console Output（控制台输出）；WinToast（系统通知）；Speak（讲述）；Real Chatter（真弹幕）
- HUD Extra Height（中文：HUD额外高度）：类型=数值，默认=12
- HUD Loading Thickness（中文：HUD加载动画粗细）：类型=数值，默认=5.0f
- HUD（中文：是否显示HUD。）：类型=布尔，默认=true
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=300L
- HUD Show Task Count（中文：HUD显示任务数量）：类型=布尔，默认=true
- HUD Loading Color 2（中文：HUD加载动画颜色2）：类型=枚举，默认="Sky Blue"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Text Line Gap（中文：HUD文本行间距）：类型=数值，默认=3
- HUD Loading Radius（中文：HUD加载动画半径）：类型=数值，默认=18.0f
- HUD Loading Period (ms)（中文：HUD加载动画周期 (毫秒)）：类型=数值，默认=1800L
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=false
- Show Command Line（中文：显示命令行）：类型=布尔，默认=false
- HUD Opacity (0~1)（中文：HUD 不透明度）：类型=数值，默认=0.92f
- HUD Text Color（中文：HUD文本颜色）：类型=枚举，默认="White"
  可选：Flow（流动）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Fade Out Duration (ms)（中文：HUD淡出时长 (毫秒)）：类型=数值，默认=1000L
- HUD X Rate（中文：HUD 横坐标比例）：类型=数值，默认=0.5f

历史更新
- 34. 【PRO】添加 CompileESP 模块：监控常见编译器进程（Java / C / C++，支持 MSVC/GCC/Clang），在编译开始和结束时发送通知。
- 35. 【PRO】为 CompileESP 添加可配置项：开始/结束通知模式、PID/命令行/耗时显示、编译器进程白名单/黑名单、检查间隔。以及各种HUD配置项。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

相关资料
无

