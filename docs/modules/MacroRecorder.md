MacroRecorder
宏录制
分类：Control
描述：录制键盘和鼠标操作的宏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MacroRecorder（宏录制）用于录制键盘和鼠标操作的宏。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Recording HUD、Recording HUD Font Size、Notify Mouse Pos (Chatter)。

配置项
- bind (Enable)（中文：绑定 (启用)）：类型=按键/复合，默认={{"Keybind", {0}}}
- Recording HUD（中文：录制中HUD）：类型=枚举，默认="Off"
  可选：Off（关闭）；Rec（未收录）；Red Rectangle（红色矩形）
- Recording HUD Font Size（中文：录制中HUD字号）：类型=数值，默认=50
- Record Window Assertions（中文：记录窗口断言）：类型=布尔，默认=false
- Notify Mouse Pos (Chatter)（中文：通知鼠标坐标 (弹幕)）：类型=布尔，默认=false
- First Perspective Mouse Offset Scale Y（中文：第一人称视角鼠标偏移 Y 缩放）：类型=数值，默认=1.0f
- First Perspective Mouse Offset（中文：第一视角鼠标偏移）：类型=布尔，默认=false
- First Perspective Mouse Offset Scale X（中文：第一人称视角鼠标偏移 X 缩放）：类型=数值，默认=5.0f
- Notify File Path（中文：通知文件路径）：类型=布尔，默认=true
- Output Format（中文：输出格式）：类型=枚举，默认="Jackal Macro"
  可选：Jackal Macro（Jackal 宏）；Jackal Batch（Jackal 批处理）
- Recording HUD X Rate（中文：录制中HUD X比例）：类型=数值，默认=0.05f
- Notify Actions (Chatter)（中文：通知动作 (弹幕)）：类型=布尔，默认=false
- bind (Disable)（中文：绑定 (关闭)）：类型=按键/复合，默认={{"Keybind", {0}}}
- Recording HUD Y Rate（中文：录制中HUD Y比例）：类型=数值，默认=0.12f

历史更新
- 10. 添加模块： MacroRecorder（宏录制）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无

