MinecraftUtils
MC功能
分类：Control
描述：一些MC上的实用功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MinecraftUtils（MC功能）用于一些MC上的实用功能。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Input Method (Chat)、Log Game Chat Output Mode (PRO)、Input Method (Game)。

配置项
- Input Method (Chat)（中文：输入法（聊天栏））：类型=枚举，默认="Ignore"
  可选：Ignore（忽略）；Off（关闭）；On（开启）
- Left Key（中文：向左键）：类型=按键/复合，默认={{"Keybind", {'A'}}}
- Inventory Key（中文：背包键）：类型=按键/复合，默认={{"Keybind", {'E'}}}
- Sneak Key（中文：潜行键）：类型=按键/复合，默认={{"Keybind", {VK_LSHIFT}}}
- Log Game Chat Output Mode (PRO)（中文：日志游戏聊天输出模式（专业版））：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Speak（讲述）；Island（岛）；Real Chatter（真弹幕）
- Use Key（中文：使用键）：类型=按键/复合，默认={{"Keybind", {VK_RBUTTON}}}
- Input Method (Game)（中文：输入法（游戏时））：类型=枚举，默认="Ignore"
  可选：Ignore（忽略）；Off（关闭）
- Log Parser Utilities（中文：日志解析功能）：类型=布尔，默认=true
- Key Input Method（中文：按键输入方式）：类型=枚举，默认="SendInput"
  可选：SendInput（未收录）；WMessage（窗口消息）；Simulation（模拟）
- Auto Read Cooldown (ms)（中文：自动读取冷却（毫秒））：类型=数值，默认=60000L
- Save Move Keys (PRO)（中文：保存移动按键 （专业版））：类型=布尔，默认=true
- In Game Detection（中文：游戏中检测方式）：类型=枚举，默认="Auto"
  可选：Auto（自动）；Cursor Visibility（光标可见性）；Mouse Capture（鼠标捕获）；Window Center（窗口中心）
- Log Parser Update Cooldown (ms)（中文：日志解析更新冷却（毫秒））：类型=数值，默认=300L
- Command Key（中文：命令键）：类型=按键/复合，默认={{"Keybind", {VK_OEM_2}}}
- Save Move Keys Release Interval (ms)（中文：保存移动按键释放间隔（毫秒））：类型=数值，默认=10L
- Window Center Radius（中文：窗口中心半径）：类型=数值，默认=100.0f
- Auto Sprint (Attack)（中文：自动疾跑 (攻击)）：类型=布尔，默认=true
- Log Game Chat Speak Translator（中文：日志游戏聊天讲述翻译）：类型=布尔，默认=false
- Sprint Key（中文：疾跑键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL}}}
- Jump Key（中文：跳跃键）：类型=按键/复合，默认={{"Keybind", {VK_SPACE}}}
- Log Parser Notify（中文：日志解析通知）：类型=布尔，默认=false
- Chat Key（中文：聊天键）：类型=按键/复合，默认={{"Keybind", {'T'}}}
- Log Game Chat Output Filter（中文：日志游戏聊天输出过滤）：类型=布尔，默认=true
- Log Game Chat Chatter Type（中文：日志游戏聊天弹幕类型）：类型=枚举，默认="Top"
  可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Log Cache Max Lines（中文：日志缓存最大行数）：类型=数值，默认=32L
- Attack Key（中文：攻击键）：类型=按键/复合，默认={{"Keybind", {VK_LBUTTON}}}
- Right Key（中文：向右键）：类型=按键/复合，默认={{"Keybind", {'D'}}}
- Auto Sprint (Forward)（中文：自动疾跑 (前进)）：类型=布尔，默认=true
- Log Game Chat Chatter Color（中文：日志游戏聊天弹幕颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Backward Key（中文：后退键）：类型=按键/复合，默认={{"Keybind", {'S'}}}
- Log Parser UTF-8（中文：日志解析使用UTF-8编码）：类型=布尔，默认=true
- Auto Read Keybinds（中文：自动读取按键绑定）：类型=布尔，默认=true
- Forward Key（中文：前进键）：类型=按键/复合，默认={{"Keybind", {'W'}}}
- Log Game Chat Output Filter Mode（中文：日志游戏聊天输出过滤模式）：类型=枚举，默认="Warn & Block"
  可选：Block（格挡）；Replace（替换）；Warn（警告）；Warn & Block（警告并阻止）

历史更新
- 52. 为 Minecraft Utils 添加配置：
- 13. 修复 MinecraftUtils 的 Log Parser Utilities 尝试对基岩版启动解析的问题。
- 8. 添加模块：MinecraftUtils，关于MC的合法功能

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

