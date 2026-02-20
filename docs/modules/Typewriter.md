Typewriter
打字机
分类：Control
描述：自动帮你输入段落。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Typewriter（打字机）用于自动帮你输入段落。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：HUD Progress Style、Timing Mode、HUD Window Highlight。

配置项
- Fixed Delay（中文：固定延迟）：类型=数值，默认=100U
- HUD Progress Style（中文：进度条 HUD 风格）：类型=枚举，默认="Bottom Bar"
  可选：Off（关闭）；Bottom Bar（底部条）；Mouse Percentage（鼠标百分数）；Rainbow Giant（彩虹巨型）
- Auto Send（中文：自动发送）：类型=枚举，默认="Off"
- Display Chatter Type（中文：显示 弹幕 类型）：类型=枚举，默认="Top"
  可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Source File Path（中文：文件来源路径）：类型=文本，默认=""
- Source AI Ask（中文：人工智能来源问题）：类型=文本，默认="Please tell me Li Bai's famous poem in Chinese."
- Focus Window（中文：聚焦窗口）：类型=布尔，默认=true
- Display On Send（中文：发送时展示要发送的内容。）：类型=枚举，默认="Off"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；Fancy（优美）；WinToast（系统通知）
- Pause/Resume Hotkey（中文：暂停/继续快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, '2'}}}
- Timing Mode（中文：节奏模式）：类型=枚举，默认="Smart"
- Send Fixed Length（中文：发送固定长度）：类型=数值，默认=10U
- HUD Window Highlight（中文：窗口高亮 HUD）：类型=布尔，默认=true
- Source Fixed（中文：固定来源）：类型=文本，默认="An apple a day keeps the doctor away."
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=45
- Keep Disabling IME（中文：保持禁用输入法）：类型=布尔，默认=true
- Auto Send Key（中文：自动发送键）：类型=枚举，默认="Ctrl + Enter"
  可选：Enter（进入）；Ctrl + Enter（Ctrl + 进入）
- HUD（中文：是否显示HUD。）：类型=布尔，默认=true
- Auto Send Method（中文：自动发送方式）：类型=枚举，默认="Simulation"
  可选：Simulation（模拟）；WMessage（窗口消息）
- Accelerate Space Typing（中文：瞬间输入空格类字符。）：类型=布尔，默认=true
- Key Internal Gap（中文：按键按下和松开之间的间隙。）：类型=数值，默认=10U
- Timer（中文：变速）：类型=数值，默认=1.0f
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=true
- Send Period (ms)（中文：发送周期（毫秒））：类型=数值，默认=1000U
- Init/Stop Hotkey（中文：初始化/停止快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, '1'}}}
- Display Chatter Color（中文：显示 弹幕 颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Source（中文：来源）：类型=枚举，默认="Clipboard"
  可选：Fixed（固定）；Clipboard（剪贴板）；File（文件）；AI Answer（人工智能回答）
- Clipboard Tweaks Module Text Processor（中文：剪贴板功能模块文本处理器）：类型=布尔，默认=false

历史更新
- 22. Typewriter 修复了无法打出 Tab 的问题。
- 9. 为 Typewriter 添加配置：HUD Font Size
- 9. 添加模块 Typewriter，用于自动帮你打字（甚至可以帮你发送）

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

