QuickRun
快捷运行
分类：未分类
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
QuickRun（快捷运行）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Scan Policy。

配置项
- Output Error（中文：输出错误）：类型=布尔，默认=false
- Scan Policy（中文：扫描策略）：类型=枚举，默认="Lazy"
  可选：Lazy（懒散）；Launch（未收录）；Daily（未收录）
- Remember Multi-Result Selection（中文：记忆多结果选择）：类型=布尔，默认=true
- Scan Skip System Files（中文：扫描时跳过系统文件）：类型=布尔，默认=false
- Confirm Before Scanning（中文：扫描前确认）：类型=布尔，默认=true
- Execution（中文：执行）：类型=枚举，默认="system & pause"
  可选：ShellExecute（未收录）；system（系统）；system & pause（系统 & pause）
- Scan Skip Hidden Files（中文：扫描时跳过隐藏文件）：类型=布尔，默认=false
- Scan Skip Readonly Files（中文：扫描时跳过只读文件）：类型=布尔，默认=false
- Unknown Command Auto Resolve（中文：未知命令自动解析）：类型=枚举，默认="Off"
  可选：Off（关闭）；Confirm（确认）；Run（未收录）
- Output While Scanning（中文：Output While 扫描）：类型=布尔，默认=true

历史更新
- 32. 完善 /quickrun ，先扫描 Program Files，如果无结果再扫描全盘。
- 11. 添加模块：QuickRun，需要用指令调用。
- 27. 完善 QuickRun 模块。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

