AutoStart
开机自启
分类：Combat
描述：系统启动时自动启动本客户端。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoStart（开机自启）用于系统启动时自动启动本客户端。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Method、Check Cooldown (ms)。

配置项
- Service Stopping Timeout (s)（中文：停止服务的超时时间 (秒)）：类型=数值，默认=10
- Scheduled Task Name（中文：计划任务名称）：类型=文本，默认="JackalClient"
- Method（中文：方法）：类型=枚举，默认="Registry"
  可选：Registry（注册表）；Service（未收录）；Scheduled Task（计划任务）
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=30000L
- Extra Arguments（中文：额外参数）：类型=文本，默认=""
- Async（中文：异步）：类型=布尔，默认=true
- Service Display Name（中文：服务显示名称）：类型=文本，默认="Jackal Client Service"
- Registry Value Name（中文：注册表值名称）：类型=文本，默认="JackalClient"
- Registry（中文：注册表）：类型=文本，默认="Service", "Scheduled Task"
- Service Description（中文：服务描述）：类型=文本，默认="Jackal Client Auto Start Service"

历史更新
- 43. 将 AutoStart 开机自启默认项改为 Registry.
- 6. 添加模块 AutoStart，开机自启。

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

