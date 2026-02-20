FileMonitor
文件监视
分类：File
描述：监视一个目录下的文件变化。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
FileMonitor（文件监视）用于监视一个目录下的文件变化。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify、Cooldown。

配置项
- Exclude Client Files（中文：排除客户端文件）：类型=布尔，默认=true
- Notify（中文：通知）：类型=布尔，默认=false
- Folder（中文：文件夹）：类型=文本，默认="D:\\"
- Console Output（中文：控制台输出）：类型=布尔，默认=true
- Monitor Modify（中文：监视修改）：类型=布尔，默认=true
- Log (Client)（中文：客户端日志）：类型=布尔，默认=false
- Log (Seperate)（中文：独立日志）：类型=布尔，默认=false
- Exclude Prefetch（中文：排除Prefetch）：类型=布尔，默认=true
- Monitor Create（中文：监视创建）：类型=布尔，默认=true
- Exclude Recent（中文：排除最近使用文件夹）：类型=布尔，默认=true
- Monitor Rename（中文：监视重命名）：类型=布尔，默认=true
- Ext Blacklist（中文：扩展名黑名单）：类型=文本，默认=".log;.pf;.tmp;.db;.qqxlog;.db-wal;.lck"
- Monitor Delete（中文：监视删除）：类型=布尔，默认=true
- Cooldown（中文：冷却）：类型=数值，默认=100U

历史更新
- 39. 修复 File Monitor 输出非ASCII时乱码的问题。
- 11. 修复 File Monitor 扩展名过滤无效的bug.
- 4. 添加 FileMonitor 模块，可用于监视一个目录的文件变化。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)
- [DiskMissing (磁盘丢失)](./DiskMissing.md)

相关资料
无

