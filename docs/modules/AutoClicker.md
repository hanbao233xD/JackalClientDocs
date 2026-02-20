AutoClicker
连点器
分类：Control
描述：自动帮助你飞快地点击鼠标。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoClicker（连点器）用于自动帮助你飞快地点击鼠标。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Click Method、Notify Mode、Assist Interrupt Cooldown (ms)。

配置项
- Extra Key Enabled（中文：额外键是否启用）：类型=布尔，默认=false
- Gap Random Deviation (%%)（中文：间隔随机偏差 (%%)）：类型=数值，默认=10U
- Pause Shake While Not Moving（中文：未移动时暂停抖动）：类型=布尔，默认=true
- Click Method（中文：点击方式）：类型=枚举，默认="WMessage"
  可选：Simulation（模拟）；WMessage（窗口消息）；SendInput（未收录）
- Window Message Cancel Extra Up（中文：窗口消息取消其他键抬起）：类型=布尔，默认=false
- Only When Cursor Hidden（中文：仅在光标隐藏时触发）：类型=布尔，默认=false
- Right CPS Min（中文：右键 CPS 最小值）：类型=数值，默认=6U
- Notify Mode（中文：通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Chatter（弹幕）；Notify（通知）
- Right Hotkey（中文：右键快捷键）：类型=按键/复合，默认={{"Keybind", {VK_XBUTTON1}}}
- Only Window Center（中文：仅窗口客户区中心）：类型=布尔，默认=false
- Left Hotkey（中文：左键快捷键）：类型=按键/复合，默认={{"Keybind", {VK_XBUTTON2}}}
- Extra Key Sound（中文：额外键音效）：类型=文本，默认="kbhit_2.wav"
- Interrupt Key 4（中文：中断键 4）：类型=按键/复合，默认={{"Keybind", {VK_OEM_2}}}
- CPS Fast Stop（中文：CPS 快速停止）：类型=布尔，默认=true
- Interrupt Key 2（中文：中断键 2）：类型=按键/复合，默认={{"Keybind", {'T'}}}
- Assist Interrupt Cooldown (ms)（中文：辅助模式中断冷却（毫秒））：类型=数值，默认=3000L
- Extra Custom Key Code（中文：额外键自定义键码）：类型=数值，默认=32
- Stop When Menu On（中文：开启菜单时停下）：类型=布尔，默认=true
- Only Trigger While Moving（中文：仅移动时触发）：类型=布尔，默认=false
- Left CPS Min（中文：左键 CPS 最小值）：类型=数值，默认=7U
- Right CPS Max（中文：右键 CPS 最大值）：类型=数值，默认=11U
- Left Mouse Button Enabled（中文：鼠标左键是否启用）：类型=布尔，默认=true
- Extra Key Hotkey（中文：额外快捷键）：类型=按键/复合，默认={{"Keybind", {0}}}
- Keep Target Window Active（中文：保持目标窗口活动）：类型=布尔，默认=false
- Extra Key Trigger Mode（中文：额外键触发模式）：类型=枚举，默认="Hotkey Hold"
  可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）
- Left Trigger Mode（中文：左键触发模式）：类型=枚举，默认="Hotkey Hold"
  可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）；Assist (PRO)（辅助（专业版））
- Click Internal Gap（中文：点击内部间隔）：类型=数值，默认=5U
- Only Window Center Radius（中文：仅窗口客户区中心半径）：类型=数值，默认=100.0
- Click Point Setting（中文：点击位置设定）：类型=枚举，默认="Manual"
  可选：Manual（手动）；Locked（锁定）；Shake（抖动）；Shake Locked（锁定并抖动）
- Assist Mode CPS Threshold（中文：辅助模式 CPS 阈值）：类型=数值，默认=5
- Only In Minecraft Window（中文：只在MC窗口触发）：类型=布尔，默认=false
- Interrupt Key 1（中文：中断键 1）：类型=按键/复合，默认={{"Keybind", {'E'}}}
- CPS Transition Speed（中文：CPS 过渡速度）：类型=数值，默认=0.2f
- Extra Target Key（中文：额外目标键）：类型=枚举，默认="Custom"
  可选：Left Button（左键）；Right Button（右键）；Middle Button（中键）；Custom（自定义）
- Left CPS Max（中文：左键 CPS 最大值）：类型=数值，默认=14U
- Window Message Cancel Left Up（中文：窗口消息取消左键抬起）：类型=布尔，默认=false
- Right Blatant Mode（中文：右键暴力模式）：类型=布尔，默认=false
- Interrupt Key 3（中文：中断键 3）：类型=按键/复合，默认={{"Keybind", {VK_ESCAPE}}}
- Left Blatant Mode（中文：左键暴力模式）：类型=布尔，默认=false
- Extra Key CPS Max（中文：额外键 CPS 最大值）：类型=数值，默认=15U
- Left Sound（中文：左键音效）：类型=文本，默认="jclick.wav"
- Right Mouse Button Enabled（中文：鼠标右键是否启用）：类型=布尔，默认=true
- Extra Key CPS Min（中文：额外键 CPS 最小值）：类型=数值，默认=8U
- TargetKey Hold Threshold Time（中文：目标键按住阈值时间）：类型=数值，默认=700U
- Right Sound（中文：右键音效）：类型=文本，默认="nclick.wav"
- Extra Key Blatant Mode（中文：额外键暴力模式）：类型=布尔，默认=false
- Right Trigger Mode（中文：右键触发模式）：类型=枚举，默认="Hotkey Hold"
  可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）；Assist (PRO)（辅助（专业版））
- Window Message Cancel Right Up（中文：窗口消息取消右键抬起）：类型=布尔，默认=false
- Click Shake Max Radius（中文：点击抖动最大距离）：类型=数值，默认=8

历史更新
- 8. 大幅度升级 AutoClicker 连点器模块，将左键、右键和额外键分开来，独立设置CPS（范围）、触发方式。
- 27. 为 Auto Clicker 连点器增加配置：
- 1. Auto Clicker: 连点器功能。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

相关资料
无

