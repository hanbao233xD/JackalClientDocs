PrivacyDatabase
隐私数据库
[PRO]
分类：File
描述：一个有用的隐私数据库。（专业版）

需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：PRO 独有

介绍
PrivacyDatabase 是本地 SQLite 隐私数据管理模块，用于结构化保存人员信息（姓名、学号、电话、邮箱、证件号等）。
模块本体是配置入口，实际操作主要通过 `/pdb` 系列命令完成，适合需要离线、可检索的人员信息整理场景。

配置项
- Database Directory（数据库目录）
  类型：文本；默认："D:\\Program Files (x86)\\Jackal\\Privacy"；说明：数据库目录会用于创建和读取 `data_0.db`。建议放在稳定、可备份的位置，并保证当前账号有写入权限。

历史更新
- 4. 【PRO】添加模块：Privacy Database。

备注
首次使用建议先执行 `/pdb init` 初始化库结构；修改目录后也应重新确认数据库是否已创建，避免出现“命令可用但无数据文件”的情况。

相关命令
- `/privacydatabase <args...>`：隐私数据库主命令。
- `/privacydb <args...>`：同义命令。
- `/pdb init`：初始化数据库文件与表结构。
- `/pdb add [人名]`：交互式录入信息。
- `/pdb set <name> <key> [value]`：设置字段值。
- `/pdb upsert <name> <key> [value]`：不存在则创建后写入。
- `/pdb list`、`/pdb query`、`/pdb search`：查询与检索。
- `/pdb uninstall`：移除数据库。

相关模块
- [PrivacySpy (隐私密探)](./PrivacySpy.md)
- [SelfBackup (自我备份)](./SelfBackup.md)
- [SelfRestore (自我还原)](./SelfRestore.md)
- [AutoRestore (自动还原)](./AutoRestore.md)

相关资料
无
