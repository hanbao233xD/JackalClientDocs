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
MachineLock（锁机）启用后会同时接管输入、窗口焦点与多项系统行为，并在退出时尝试回滚到启用前状态。由于涉及提权与多模块联动，建议先在测试机验证“进入-退出-回滚”全流程，再用于正式环境。
配置项
- Title（标题）
 类型：文本；默认："计算机已锁定"
 说明：锁屏界面主标题文本，直接影响用户第一眼看到的信息。建议使用明确且简短的提示语。
- Subtitle（副标题）
 类型：文本；默认："你需要输入密码"
 说明：锁屏界面副标题文本，可用于补充解锁方式或告警信息。
- Title Display（展示标题）
 类型：布尔；默认：true
 说明：是否显示主标题。关闭后界面更简洁，但提示信息会减少。
- Subtitle Display（展示副标题）
 类型：布尔；默认：true
 说明：是否显示副标题。用于控制提示信息密度。
- Background Color（背景颜色）
 类型：文本；默认："40;0;0;250"
 说明：锁屏背景颜色，支持颜色字符串。建议选择深色背景以提升密码输入区可读性。
- Title Color（标题颜色）
 类型：文本；默认："yellow"
 说明：主标题颜色，建议与背景形成高对比。
- Subtitle Color（副标题颜色）
 类型：文本；默认："aqua"
 说明：副标题颜色，建议与主标题区分层级。
- Password Color（密码颜色）
 类型：文本；默认："green"
 说明：密码输入内容颜色。建议使用高辨识度颜色，便于确认输入状态。
- Title Font Size（标题字号）
 类型：数值；默认：180
 说明：主标题字号。过大可能压缩输入区空间，建议按分辨率微调。
- Subtitle Font Size（副标题字号）
 类型：数值；默认：100
 说明：副标题字号，通常应小于主标题字号。
- Password Font Size（密码字号）
 类型：数值；默认：220
 说明：密码输入区字号，过小会影响可见性。
- Mute（静音）
 类型：布尔；默认：true
 说明：启用后会联动静音模块，减少解锁前的声音反馈。
- Disable IME（禁用输入法）
 类型：布尔；默认：true
 说明：启用后会禁用输入法，避免中英文切换影响口令输入。
- Keep Active（保持活动）
 类型：布尔；默认：true
 说明：保持窗口活跃，降低被其他窗口抢焦点的概率。
- Force Topmost（强制置顶）
 类型：布尔；默认：true
 说明：强制置顶锁屏界面，避免被普通窗口覆盖。
- Hide Taskbar（隐藏任务栏）
 类型：布尔；默认：true
 说明：隐藏任务栏，减少从任务栏绕过锁屏交互的机会。
- Disable KeyLogger（关闭键盘记录）
 类型：布尔；默认：true
 说明：锁机期间主动关闭键盘记录模块，避免记录解锁口令。
- Disable Logoff（禁用注销）
 类型：布尔；默认：true
 说明：联动禁止注销模块。该步骤需要管理员能力，权限不足时会中止锁机启用流程。
- Pause Keystrokes2（暂停按键显示II）
 类型：布尔；默认：true
 说明：锁机时暂停按键可视化显示，防止输入痕迹泄露。
- Mouse Lock（鼠标锁定）
 类型：枚举；默认："Allow Move"
 说明：鼠标限制策略：`Off` 不限制，`Allow Move` 允许移动但限制操作，`Disable All` 完全锁定。切换时会联动鼠标限制模块配置。
 可选：Off（关闭）；Allow Move（允许移动）；Disable All（禁用所有）
- Keyboard Lock (Ctrl, Win, Alt)（键盘锁定 (Ctrl, Win, Alt)）
 类型：布尔；默认：true
 说明：启用后会把键盘限制模式切到 `Ctrl, Win, Alt`，用于阻断常见系统快捷键逃逸路径。
- Disable Client Other Control（禁用客户端其他控制）
 类型：布尔；默认：true
 说明：锁机期间禁用客户端其它控制操作，避免通过其他模块改写锁机状态。
- Disable Client Other HUD（禁用客户端其他HUD）
 类型：布尔；默认：true
 说明：锁机期间隐藏其它 HUD，避免叠加信息干扰或暴露状态。
- Emergency Escape Method（紧急退出方法）
 类型：枚举；默认："Custom Hotkey (Notice Keyboard Lock)"
 说明：紧急退出兜底策略。`Esc 20秒` 适合无可用热键场景；`Custom Hotkey` 更快但需确保按键未被锁定。
- Custom Escape Hotkey（自定义退出快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_OEM_3 } }`}
 说明：紧急退出快捷键。建议使用单独保留的组合键，并先实测在当前键盘锁策略下可触发。
- Exit Condition（退出条件）
 类型：枚举；默认："Password"
 说明：常规退出条件。`Password` 更可控；`Wait Duration` 适合演示/自动恢复场景。
 可选：Password（密码）；Wait Duration（等待一段时间）
- Password (Must Alpha or Num)（密码 (必须字母或数字)）
 类型：文本；默认："0721"
 说明：解锁密码，仅支持字母与数字。建议避免弱口令，并先在可恢复环境验证。
- Wait Duration (min)（等待多久 (分钟)）
 类型：数值；默认：30U
 说明：等待模式下的自动解锁时长。到时后会自动退出锁机并尝试恢复联动状态。
- AUTO ENABLE WHEN CLIENT LAUNCHED（客户端启动时自动启用）
 类型：布尔；默认：false
 说明：客户端启动即锁机。若配置错误可能造成“启动即锁定”循环，务必先确认紧急退出路径。
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

