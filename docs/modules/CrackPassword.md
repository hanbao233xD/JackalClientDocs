CrackPassword
破解密码
分类：Combat
描述：凭借字典，暴力破解计算机当前用户的密码。

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
CrackPassword（破解密码）用于凭借字典，暴力破解计算机当前用户的密码。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：HUD、HUD Show Current Password Attempt、Notify Speed。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Use Strong Password Dictionary（中文：使用强口令字典）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- HUD（中文：是否显示HUD。）：类型=布尔，默认=true
- HUD Show Current Password Attempt（中文：在HUD中显示当前的密码尝试）：类型=布尔，默认=true
- Notify Speed（中文：通知速率）：类型=布尔，默认=true
- Threshold Setting Confirmation MessageBox Timeout (ms)（中文：阈值设置确认提示框超时时间 (毫秒)）：类型=数值，默认=20000
- Multithread（中文：多线程）：类型=布尔，默认=true
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=false
- Memorize Prev Password（中文：记住上一次的密码）：类型=布尔，默认=true
- Try Birthdays（中文：尝试生日）：类型=布尔，默认=true
- Notify Password（中文：通知密码）：类型=布尔，默认=true
- Account Lockout Threshold Policy（中文：账号锁定阈值策略）：类型=枚举，默认="Query"
  可选：Ignore（忽略）；Safe（安全）；Query（询问）
- Threshold Setting Default Option（中文：阈值设置默认选项）：类型=枚举，默认="Cancel"
  可选：Yes（是）；No（否）；Cancel（取消）

历史更新
- 18. 添加了 CrackPassword 破解密码时的HUD。
- 19. 修复 CrackPassword 中配置 Notify Password 无效的问题。
- 7. 添加模块：CrackPassword，用于暴力破解当前用户登录密码。使用一个字典。

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

