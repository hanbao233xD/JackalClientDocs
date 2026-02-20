Gatekeeper
看门人
分类：Combat
描述：通过注入动态链接库，拦截 Winlogon 事件（需要管理员和特权）

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Gatekeeper（看门人）用于通过注入动态链接库，拦截 Winlogon 事件（需要管理员和特权）。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Check Working Cooldown、Filter Keys、Comm File Check Cooldown (ms)。

配置项
- Ctrl + Shift + Esc（中文：未收录）：类型=枚举，默认="Allow"
- Disable When Quit（中文：退出时关闭）：类型=布尔，默认=true
- Narrator（中文：讲述人）：类型=枚举，默认="Query"
- Use Loader to Inject (Suggested)（中文：使用加载器注入（推荐））：类型=布尔，默认=true
- Admin（中文：管理员）：类型=枚举，默认="Allow"
- Accessibility（中文：辅助功能）：类型=枚举，默认="Query"
- Check Working Cooldown（中文：检查工作状态冷却）：类型=数值，默认=5000U
- Reboot（中文：重启）：类型=枚举，默认="Query"
- Logoff（中文：注销）：类型=枚举，默认="Query"
- Ctrl + Alt + Del（中文：未收录）：类型=枚举，默认="Query"
- Shutdown（中文：关机）：类型=枚举，默认="Query"
- Filter Keys（中文：筛选键）：类型=枚举，默认="Query"
- Win + L（中文：未收录）：类型=枚举，默认="Query"
- Comm File Check Cooldown (ms)（中文：通信文件检查冷却 (毫秒)）：类型=数值，默认=200L
- Sticky Keys（中文：粘滞键）：类型=枚举，默认="Query"
- Projection Menu（中文：投影菜单）：类型=枚举，默认="Query"
- Magnifier（中文：放大镜）：类型=枚举，默认="Query"

历史更新
- 7. 为 JDGatekeeper.dll 添加了新的注销（一个）、关机（两个）和重启（一个）筛选。
- 11. 现在 Gatekeeper 模块弹出的选择是否的对话框默认落在否上。
- 16. 为 JDGatekeeper.dll 添加了几个事件：

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

