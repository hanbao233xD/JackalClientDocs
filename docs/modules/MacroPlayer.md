MacroPlayer
宏播放
分类：Control
描述：播放键盘和鼠标操作的宏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MacroPlayer（宏播放）用于播放键盘和鼠标操作的宏。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Notify、Playing HUD Font Size、Playing HUD X Rate。

配置项
- Notify（中文：通知）：类型=布尔，默认=true
- Close Menu（中文：关闭菜单）：类型=布尔，默认=true
- bind (Enable)（中文：绑定 (启用)）：类型=按键/复合，默认={{"Keybind", {0}}}
- bind (Disable)（中文：绑定 (关闭)）：类型=按键/复合，默认={{"Keybind", {0}}}
- Macro Path（中文：宏路径）：类型=文本，默认=""
- Playing HUD Font Size（中文：播放中HUD字号）：类型=数值，默认=50
- adjust offset (Later)（中文：调整偏移 (晚一点)）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_DOWN}}}
- Auto Loop（中文：自动循环）：类型=布尔，默认=false
- Playing HUD X Rate（中文：播放中HUD X比例）：类型=数值，默认=0.05f
- Start Delay (ms)（中文：开始延迟 (毫秒)）：类型=数值，默认=3000L
- Perform Window Assertions（中文：执行窗口断言）：类型=布尔，默认=true
- Playing HUD Y Rate（中文：播放中HUD Y比例）：类型=数值，默认=0.12f
- Adjust Offset Step (ms)（中文：偏移调整差值 (毫秒)）：类型=数值，默认=50L
- Actionbar Display Mouse Move（中文：行为栏展示鼠标移动）：类型=布尔，默认=true
- Playing HUD（中文：播放中HUD）：类型=枚举，默认="Off"
  可选：Off（关闭）；Replay（未收录）；Blue Rectangle（红色矩形）
- Actionbar Display Mouse Wheel（中文：行为栏展示鼠标滚轮）：类型=布尔，默认=true
- Reset Keyboard When Disable（中文：关闭时重置键盘）：类型=布尔，默认=true
- Actionbar Display Key Press（中文：行为栏展示按下的键）：类型=布尔，默认=true
- adjust offset (Earlier)（中文：调整偏移 (早一点)）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_UP}}}

历史更新
- 27. 为 Macro Player 添加配置：
- 11. 添加模块： MacroPlayer（宏播放）

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

