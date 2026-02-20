QQInspect
QQ窥探
分类：未分类
描述：如果漏洞存在，则窥探你的基本QQ信息。

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：WIP / 维护中
- 版本属性：普通可用

介绍
QQInspect（QQ窥探）用于如果漏洞存在，则窥探你的基本QQ信息。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify Others、Notify Basic Info。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Close Menu（中文：关闭菜单）：类型=布尔，默认=true
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- Notify Others（中文：通知其他信息）：类型=布尔，默认=false
- Notify Basic Info（中文：通知基本信息）：类型=布尔，默认=false
- Scan Port Min（中文：扫描端口最小值）：类型=数值，默认=4300
- Async（中文：异步）：类型=布尔，默认=true
- Output Verbose Connection Info（中文：输出冗长的连接信息）：类型=布尔，默认=false
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=3L
- Output Steps（中文：输出步骤）：类型=布尔，默认=false
- Scan Port Max（中文：扫描端口最大值）：类型=数值，默认=4305

历史更新
- 27. 添加几个实验性模块：Totem, AutoTotem, QQInspect, IPHorror,

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

