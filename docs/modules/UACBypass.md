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
UACBypass（管理员绕过）用于按指定链路触发提权流程，不同方法在不同系统环境成功率不同。建议保持默认方法并开启安全检查，失败时再切换方法逐个测试。
配置项
- Exit After Run（运行后退出）
 类型：布尔；默认：true
 说明：执行成功后自动退出当前流程，避免重复触发同一提权链路。
- Method（方法）
 类型：枚举；默认："Computerdefaults Legit"
 说明：选择提权链路（Computerdefaults/Fodhelper/Cmstp/Sdclt/Slui/PCA 等）。不同系统版本命中率不同，建议保留默认并按需切换。
 可选：Computerdefaults（未收录）；Computerdefaults Legit（未收录）；Fodhelper（未收录）；Fodhelper Legit（未收录）；Cmstp（未收录）；PCA (PRO)（未收录）；Sdclt（未收录）；Sdclt Legit（未收录）；Slui（未收录）；Slui Legit（未收录）
- Close Menu（关闭菜单）
 类型：布尔；默认：true
 说明：触发提权前自动关闭客户端菜单，减少前台窗口干扰。
- Legit Transparent Window（Legit 使用透明窗口）
 类型：布尔；默认：true
 说明：在“Legit”路径中把中间交互窗口透明化，降低可见干扰。
- Cmstp Window Search Timeout (ms)（Cmstp 窗口搜索超时时间 (毫秒)）
 类型：数值；默认：10000
 说明：CMSTP 模式查找确认窗口的超时时间，超时会判定本次流程失败。
- Safe Check（安全 Check）
 类型：布尔；默认：true
 说明：执行前清理可能残留的相关注册表键，降低上次中断导致的异常状态。
- bind（绑定）
 类型：按键/复合；默认：{{"Keybind", {VK_RMENU, 'U'}}}
 说明：手动触发 UACBypass 的快捷键。建议使用不与系统快捷键冲突的组合。
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

