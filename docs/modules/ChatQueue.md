ChatQueue
聊天队列
分类：Control
描述：管理MC的聊天发送任务。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ChatQueue（聊天队列）用于管理MC的聊天发送任务。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：HUD In Sharpness、HUD Title、Chat Send Cooldown (s)。

配置项
- HUD In Sharpness（中文：是否显示HUD。 In Sharpness）：类型=数值，默认=16.0f
- HUD Title（中文：HUD 标题）：类型=布尔，默认=true
- Chat Send Cooldown (s)（中文：聊天发送冷却（秒））：类型=数值，默认=20.0f
- HUD Background Opacity (0~1)（中文：HUD 背景不透明度 (0~1)）：类型=数值，默认=0.55f
- HUD Background Color（中文：HUD 背景颜色）：类型=枚举，默认="Black"
  可选：Transparent（透明）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD Hide Auto L（中文：HUD 隐藏自动嘲讽）：类型=布尔，默认=false
- Pause Hotkey（中文：暂停快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, '0'}}}
- HUD Out Sharpness（中文：是否显示HUD。 Out Sharpness）：类型=数值，默认=20.0f
- Chat Send Task Lifetime (s)（中文：聊天发送任务有效期（秒））：类型=数值，默认=30.0f
- HUD Background Shadow Thickness（中文：HUD 背景阴影厚度）：类型=数值，默认=2.0f
- HUD Y Rate（中文：HUD 纵坐标比例）：类型=数值，默认=0.1f
- HUD Max Items（中文：HUD 项目最大数量）：类型=数值，默认=5
- HUD Text Font Size（中文：HUD 文本字号）：类型=数值，默认=25
- Clear When Bed Destroyed（中文：床摧毁时清空）：类型=布尔，默认=true
- HUD Text Opacity (0~1)（中文：HUD 文本不透明度 (0~1)）：类型=数值，默认=1.0f
- HUD Item Width（中文：HUD 项目宽度）：类型=数值，默认=300
- HUD Item Gap（中文：HUD 项目间隙）：类型=数值，默认=10
- Target Unique Message（中文：目标唯一消息）：类型=布尔，默认=true
- HUD Background（中文：HUD背景）：类型=布尔，默认=true
- HUD Highlight Cooldown（中文：HUD 高亮冷却）：类型=枚举，默认="Override"
  可选：Off（关闭）；Override（覆盖）；Color（颜色）
- HUD Current Instance Only（中文：HUD 仅显示当前实例）：类型=布尔，默认=true
- HUD Background Shadow（中文：HUD 背景阴影）：类型=布尔，默认=true
- Clear When Team Eliminated（中文：队伍淘汰时清空）：类型=布尔，默认=true
- Transparent（中文：透明）：类型=通用，默认=NAMED_COLOR_BASE_LIST
- Discard Queue Front Hotkey（中文：丢弃队首快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_SUBTRACT}}}
- HUD Background Round Corners（中文：HUD 背景是否圆角）：类型=布尔，默认=true
- HUD（中文：是否显示HUD。）：类型=布尔，默认=true
- HUD Move Sharpness（中文：是否显示HUD。 Move Sharpness）：类型=数值，默认=18.0f
- Send Queue Front Hotkey（中文：发送队首快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_ADD}}}
- HUD Hide Auto Account（中文：HUD 隐藏自动账户）：类型=布尔，默认=true
- HUD Background Roundness（中文：HUD背景圆角度）：类型=数值，默认=0.35f
- Clear Hotkey（中文：清除快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, 'F'}}}
- HUD Item Height（中文：HUD 项目高度）：类型=数值，默认=60
- HUD Item Width Strict（中文：HUD 项目是否使用严格宽度）：类型=布尔，默认=false
- HUD Time Countdown（中文：HUD 时间倒数）：类型=布尔，默认=true
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=false
- HUD Leave Max Time (ms)（中文：是否显示HUD。 离开 最大数量 Time (ms)）：类型=数值，默认=2200L
- HUD Background Shadow Opacity (0~1)（中文：HUD 背景阴影不透明度（0~1））：类型=数值，默认=0.45f
- HUD Background Shadow Color（中文：HUD 背景阴影颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Block Keyboard While Sending（中文：发送时屏蔽键盘）：类型=布尔，默认=true
- Chat Send Required Idle Time (ms)（中文：聊天发送要求的空闲时间（毫秒））：类型=数值，默认=1500L
- HUD X Rate（中文：HUD 横坐标比例）：类型=数值，默认=0.7f

历史更新
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。
- 69. 添加模块：Auto Text，包括 AutoGG, AutoThankWatchdog, AutoLogin, AutoRegister 等，在 Minecraft 自动发送文本。建议打开 ChatQueue 模块实时查看待发送消息队列。
- 70. 添加模块：Chat Queue，管理 Minecraft 消息发送队列，并提供一个 HUD，可以显示每条消息的剩余时间以及发送冷却的情况。

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

