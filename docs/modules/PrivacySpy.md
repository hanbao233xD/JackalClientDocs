PrivacySpy
隐私密探
分类：File
描述：根据本地文件汇总用户的隐私信息，让你变得紧张

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
PrivacySpy（隐私密探）用于根据本地文件汇总用户的隐私信息，让你变得紧张。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Filter File Extensions。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Skip System Files（中文：跳过系统文件）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- IDCard Valid Year Min（中文：身份证有效年份最小值）：类型=数值，默认=1914
- Skip Hidden Files（中文：跳过隐藏文件）：类型=布尔，默认=true
- Included File Extensions（中文：包括的文件扩展名）：类型=文本，默认=".txt;.md;.rtf;.doc;.ppt;.xls;.docx;.pptx;.xlsx;.wps;.zip;.rar;.7z;.gz;.c;.cpp;. ...
- Custom Scan Directory（中文：自定义扫描目录）：类型=文本，默认="D:\\"
- IDCard Strict Validify（中文：身份证严格验证）：类型=布尔，默认=true
- Confirm Before Scanning（中文：扫描前确认）：类型=布尔，默认=true
- Skip Readonly Files（中文：跳过只读文件）：类型=布尔，默认=true
- Skip Folders（中文：跳过目录检查）：类型=布尔，默认=false
- Auto Console（中文：自动启用控制台）：类型=布尔，默认=true
- IDCard Valid Year Max（中文：身份证有效年份最大值）：类型=数值，默认=2024
- Filter File Extensions（中文：筛选文件扩展名）：类型=布尔，默认=true
- Find Other Privacy（中文：寻找其他隐私）：类型=布尔，默认=true
- Scan Disk Privacy（中文：扫描磁盘隐私）：类型=布尔，默认=true
- Person Name Character Max Count（中文：人名最多几个汉字）：类型=数值，默认=3

历史更新
- 12. 现在 PrivacySpy 也会对文件夹名称进行检查统计了，如果你不想，就打开 Skip Folders 选项。
- 13. 现在 PrivacySpy 支持扫描时取消扫描。
- 31. 添加了新模块 PrivacySpy，对指定目录进行扫描，提取文件名中包含的人名、身份证号码和可能的手机号码并汇总输出。assets文件夹中多了PERSON_SUERNAMES.TXT存储姓氏，PERSON_EXCLUDE.TXT中存储非人名的排除项，可以自行修改。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)

相关资料
无

