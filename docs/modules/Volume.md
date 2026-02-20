Volume
音量
分类：Misc
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Volume（音量）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Process Volume HUD、Volume Mode、Temp HUD Animation Duration (ms)。

配置项
- Wheel System Volume Adjust（中文：系统音量滚轮调节）：类型=枚举，默认="Mouse On Taskbar"
  可选：Off（关闭）；LAlt（未收录）；RAlt（未收录）；Mouse On Taskbar（鼠标在任务栏上）
- Auto Mute Output Device Name Keyword (Include)（中文：自动静音、输出设备名称关键词（包含））：类型=文本，默认=""
- Process Volume HUD（中文：进程音量HUD）：类型=枚举，默认="Temp"
  可选：Off（关闭）；Temp（临时）；Always（总是）
- Limit System Volume（中文：限制系统音量）：类型=布尔，默认=false
- Mute（中文：静音）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LSHIFT, 'M'}}}
- Off（中文：关闭）：类型=文本，默认="Once On Launch", "Output Device Changed", "Output Device Name Keyword When Chan ...
- Volume Mode（中文：音量模式）：类型=枚举，默认="System"
  可选：System（系统）；Process（进程）
- System Volume Min（中文：系统音量最小值）：类型=数值，默认=1
- Wheel Volume Step（中文：音量滚轮差值）：类型=数值，默认=5U
- Vol-（中文：音量-）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LSHIFT, VK_DOWN}}}
- Step (%%)（中文：差值 (%%)）：类型=数值，默认=5U
- Temp HUD Animation Duration (ms)（中文：临时显示的淡入淡出动画时长（毫秒）。）：类型=数值，默认=300L
- Process Volume Smart ID Infer（中文：进程音量智能ID推断）：类型=布尔，默认=true
- Auto Mute Output Device Name Keyword (Exclude)（中文：自动静音、输出设备名称关键词（排除））：类型=文本，默认="耳机"
- Temp HUD Duration (ms)（中文：临时HUD持续时间(毫秒)）：类型=数值，默认=3000L
- Process Volume HUD Style（中文：进程音量HUD风格）：类型=枚举，默认="Bottom"
  可选：Bottom（底部）；Giant（巨型）；Rainbow Giant（彩虹巨型）
- Auto Mute Notify（中文：自动静音通知）：类型=枚举，默认="Title"
  可选：Off（关闭）；Title（标题）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；WinToast（系统通知）
- System Volume HUD（中文：系统音量HUD）：类型=枚举，默认="Temp"
  可选：Off（关闭）；Temp（临时）；Always（总是）
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=false
- System Volume HUD Style（中文：系统音量HUD风格）：类型=枚举，默认="Bottom"
  可选：Bottom（底部）；Bottom Big（底部，大号）；Giant（巨型）；Rainbow Giant（彩虹巨型）
- Notify Type（中文：通知类型）：类型=枚举，默认="Off"
  可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）
- Auto Mute（中文：自动静音）：类型=枚举，默认="Off"
  可选：Off（关闭）；Once On Launch（Once 开启 Launch）；Output Device Changed（未收录）；Output Device Name Keyword When Changed（Output Device 名称 Keyword 何时 Changed）
- Wheel Process Volume Adjust（中文：进程音量滚轮调节）：类型=枚举，默认="Mouse On Caption"
  可选：Off（关闭）；LAlt（未收录）；RAlt（未收录）；Mouse On Caption（鼠标在标题栏上）
- System Volume Max（中文：系统音量最大值）：类型=数值，默认=50
- Vol+（中文：音量+）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LSHIFT, VK_UP}}}
- Wheel Detect Only If Cursor Visible（中文：仅在光标可见时检测滚轮）：类型=布尔，默认=true

历史更新
- 1. 修复 Volume 模块内的按键绑定错误的问题。
- 17. 将 Volume 模块的三个按键改成自定义。
- 10. 添加模块 Volume ，用于辅助调节音量。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无

