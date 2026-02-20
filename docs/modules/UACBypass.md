UACBypass
管理员绕过
分类：Combat
描述：绕过UAC弹窗获得管理员权限。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
UACBypass（管理员绕过）用于绕过UAC弹窗获得管理员权限。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Method。

配置项
- Close Menu（中文：关闭菜单）：类型=布尔，默认=true
- Method（中文：方法）：类型=枚举，默认="Computerdefaults Legit"
  可选：Computerdefaults（未收录）；Computerdefaults Legit（未收录）；Fodhelper（未收录）；Fodhelper Legit（未收录）；Cmstp（未收录）；PCA (PRO)（未收录）；Sdclt（未收录）；Sdclt Legit（未收录）；Slui（未收录）；Slui Legit（未收录）
- Safe Check（中文：安全 Check）：类型=布尔，默认=true
- bind（中文：绑定）：类型=按键/复合，默认={{"Keybind", {VK_RMENU, 'U'}}}
- Cmstp Window Search Timeout (ms)（中文：Cmstp 窗口搜索超时时间 (毫秒)）：类型=数值，默认=10000
- Legit Transparent Window（中文：Legit 使用透明窗口）：类型=布尔，默认=true
- Exit After Run（中文：运行后退出）：类型=布尔，默认=true

历史更新
- 30. 改善了一下 UAC Bypass ，并添加了新手段，可以更好的绕过。
- 1. UAC Bypass: 修复 Legit Mode 的粘贴问题
- 30. 添加新的 UAC Bypass 方式：Sdclt Legit 和 Slui Legit.

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

