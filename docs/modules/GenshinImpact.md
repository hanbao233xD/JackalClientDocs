GenshinImpact
原神启动
分类：未分类
描述：启动原神。（原神，启动！）（还没做好）

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：WIP / 维护中
- 版本属性：普通可用

介绍
GenshinImpact（原神启动）用于启动原神。（原神，启动！）（还没做好）。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Enable Action、Disable Action。
使用前请确认网络可用及相关 API/平台账号配置完整。
该模块处于 WIP 阶段，行为可能不稳定，建议先小范围测试。

配置项
- Enable Action（中文：启用行为）：类型=枚举，默认="Install & Start"
  可选：Fake（假的）；Start（启动）；Install & Start（安装并启动）
- Auto Boot（中文：开机自启）：类型=布尔，默认=false
- Close Window（中文：关闭窗口）：类型=文本，默认="Kill Process", "Close Window & Uninstall", "Kill Process & Uninstall"
- Fake（中文：假的）：类型=文本，默认="Start", "Install & Start"
- Boot Sound（中文：启动音效）：类型=布尔，默认=true
- Disable Action（中文：禁用行为）：类型=枚举，默认="Kill Process"
  可选：Close Window（关闭窗口）；Kill Process（结束进程）；Close Window & Uninstall（关闭窗口并卸载）；Kill Process & Uninstall（击杀进程并卸载）

历史更新
- 8. 修复禁用原神启动时直接崩溃的问题。
- 29. 略修改了一下 GenshinImpact 模块，虽然我这里还是没测试成功。说什么已经有相同版本的 HoYoPlay，无法安装
- 36. 添加模块：Genshin Impact，帮助你自动下载米哈游启动器并安装原神，最后运行。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

