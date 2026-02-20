Kill360Test
杀数字测试
分类：未分类
描述：三环杀数字。（只是测试）

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Kill360Test（杀数字测试）用于三环杀数字。（只是测试）。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：360 Process Detection Method、Filter Architecture。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Max Process Attempts（中文：最大进程尝试次数）：类型=数值，默认=1
- 360 Process Detection Method（中文：360 进程检测方法）：类型=枚举，默认="Directory"
  可选：Fixed List（固定清单）；Directory（目录）
- Filter Architecture（中文：过滤架构）：类型=枚举，默认="x64"
  可选：Both（两者）；x64（x64）；x86（x86）
- Operation When Max Process Attempts Reached（中文：最大进程尝试次数达到后操作）：类型=枚举，默认="Next Process"
  可选：Next Process（下一个进程）；Stop（停止）

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

