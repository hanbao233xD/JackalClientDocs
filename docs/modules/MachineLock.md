MachineLock
锁机
分类：Combat
描述：锁定这台计算机（谨慎使用）。

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MachineLock（锁机）用于锁定这台计算机（谨慎使用）。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Emergency Escape Method、Disable Client Other HUD。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Wait Duration (min)（中文：等待多久 (分钟)）：类型=数值，默认=30U
- Subtitle（中文：副标题）：类型=文本，默认="你需要输入密码"
- Force Topmost（中文：强制置顶）：类型=布尔，默认=true
- Emergency Escape Method（中文：紧急退出方法）：类型=枚举，默认="Custom Hotkey (Notice Keyboard Lock
- Background Color（中文：背景颜色）：类型=文本，默认="40;0;0;250"
- Disable KeyLogger（中文：关闭键盘记录）：类型=布尔，默认=true
- Hide Taskbar（中文：隐藏任务栏）：类型=布尔，默认=true
- Subtitle Display（中文：展示副标题）：类型=布尔，默认=true
- Password (Must Alpha or Num)（中文：密码 (必须字母或数字)）：类型=文本，默认="0721"
- Keyboard Lock (Ctrl, Win, Alt)（中文：键盘锁定 (Ctrl, Win, Alt)）：类型=布尔，默认=true
- Mouse Lock（中文：鼠标锁定）：类型=枚举，默认="Allow Move"
  可选：Off（关闭）；Allow Move（允许移动）；Disable All（禁用所有）
- Pause Keystrokes2（中文：暂停按键显示II）：类型=布尔，默认=true
- Disable Client Other Control（中文：禁用客户端其他控制）：类型=布尔，默认=true
- AUTO ENABLE WHEN CLIENT LAUNCHED（中文：客户端启动时自动启用）：类型=布尔，默认=false
- Subtitle Font Size（中文：副标题字号）：类型=数值，默认=100
- Disable IME（中文：禁用输入法）：类型=布尔，默认=true
- Title（中文：标题）：类型=文本，默认="计算机已锁定"
- Password Font Size（中文：密码字号）：类型=数值，默认=220
- Custom Escape Hotkey（中文：自定义退出快捷键）：类型=按键/复合，默认={{"Keybind", {VK_OEM_3}}}
- Title Font Size（中文：标题字号）：类型=数值，默认=180
- Title Color（中文：标题颜色）：类型=文本，默认="yellow"
- Subtitle Color（中文：副标题颜色）：类型=文本，默认="aqua"
- Exit Condition（中文：退出条件）：类型=枚举，默认="Password"
  可选：Password（密码）；Wait Duration（等待一段时间）
- Title Display（中文：展示标题）：类型=布尔，默认=true
- Mute（中文：静音）：类型=布尔，默认=true
- Password Color（中文：密码颜色）：类型=文本，默认="green"
- Keep Active（中文：保持活动）：类型=布尔，默认=true
- Disable Logoff（中文：禁用注销）：类型=布尔，默认=true
- Disable Client Other HUD（中文：禁用客户端其他HUD）：类型=布尔，默认=true

历史更新
- 17. 为 MachineLock 锁机模块添加配置：
- 20. 为 MachineLock 锁机添加配置：
- 28. 添加模块：MachineLock，用于锁机。请谨慎使用。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)

相关资料
无

