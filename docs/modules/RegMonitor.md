RegMonitor
注册表监视
分类：未分类
描述：监视注册表变化。（维护中）

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：WIP / 维护中
- 版本属性：普通可用

介绍
RegMonitor（注册表监视）用于监视注册表变化。（维护中）。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Item Filter RegExp、Key Filter RegExp、Value Filter RegExp。
该模块处于 WIP 阶段，行为可能不稳定，建议先小范围测试。

配置项
- Item Filter RegExp（中文：项筛选正则表达式）：类型=通用，默认=""s
- Path（中文：路径）：类型=通用，默认=""s
- Key Filter RegExp（中文：键筛选正则表达式）：类型=通用，默认=""s
- Value Filter RegExp（中文：值筛选正则表达式）：类型=通用，默认=""s
- Cooldown (ms)（中文：冷却 (毫秒)）：类型=数值，默认=1000U
- HKEY（中文：主键：）：类型=枚举，默认="HKEY_LOCAL_MACHINE"
  可选：HKEY_LOCAL_MACHINE（主键：_本地_MACHINE）；HKEY_CURRENT_USER（主键：_当前_用户）；HKEY_CLASSES_ROOT（主键：_CLASSES_ROOT）；HKEY_CURRENT_CONFIG（主键：_当前_配置）；HKEY_USERS（主键：_USERS）

历史更新
- 28. 添加模块：RegMonitor，注册表监视。还没有做的很好。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

