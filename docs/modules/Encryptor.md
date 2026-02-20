Encryptor
加密器
分类：Misc
描述：帮助你加密指定的文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Encryptor（加密器）用于帮助你加密指定的文本。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Method。

配置项
- Morning Greetings（中文：早晨问候）：类型=枚举，默认="Basic"
  可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Night Greetings（中文：晚间问候）：类型=枚举，默认="Basic"
  可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Afternoon Time Min（中文：下午最早时间）：类型=数值，默认=12.5f
- Afternoon Time Max（中文：下午最晚时间）：类型=数值，默认=16.8f
- Midnight Greetings（中文：凌晨问候）：类型=枚举，默认="Basic"
  可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Abracadabra Encryptor Path（中文：魔曰加密器路径）：类型=文本，默认=""
- Night Time Max（中文：晚间最晚时间）：类型=数值，默认=23.5f
- Midnight Time Min（中文：凌晨最早时间）：类型=数值，默认=0.0f
- Morning Time Max（中文：早晨最晚时间）：类型=数值，默认=10.5f
- Midnight Time Max（中文：凌晨最晚时间）：类型=数值，默认=4.0f
- Method（中文：方法）：类型=枚举，默认="beast"
  可选：base64（未收录）；crc32（未收录）；md5（未收录）；sha1（未收录）；beast（兽语）；abracadabra（魔曰。由于开源协议影响，该方法需要你外部下载魔曰加密器并配置好 Encryptor 模块的路径。我已经尝试将原仓库移植为C++，点击链接查看仓库：https://github.com/noexcept2005/AbracadabraCpp 编译后将moyue.exe的绝对路径输入到 Encryptor 的 Abracadabra Encryptor Path 中。）；pipa（未收录）；pipaplus（未收录）；pipasimp（未收录）；pipatrad（未收录）；pipasimpplus（未收录）；pipatradplus（未收录）；pipasimpplus2（未收录）；pipatradplus2（未收录）
- Source（中文：来源）：类型=枚举，默认="Clipboard"
  可选：Fixed（固定）；Clipboard（剪贴板）
- Greeting Persona（中文：问候口吻）：类型=枚举，默认="Normal"
  可选：Normal（普通）；Maid（女仆）；Catgirl（猫娘）
- Morning Time Min（中文：早晨最早时间）：类型=数值，默认=6.0f
- Copy to Clipboard（中文：复制到剪贴板）：类型=布尔，默认=true
- Night Time Min（中文：晚间最早时间）：类型=数值，默认=18.8f
- Afternoon Greetings（中文：下午问候）：类型=枚举，默认="Basic"
  可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Operation（中文：操作）：类型=枚举，默认="Encrypt"
  可选：Encrypt（加密）；Decrypt（解密）
- Fixed Content（中文：固定内容）：类型=文本，默认="Hello, Jackal!"
- Holiday Greetings（中文：节日祝福）：类型=枚举，默认="Basic"
  可选：Off（关闭）；Basic（基础）；AI（人工智能）

历史更新
- 21. 添加模块：Encryptor 加密器。加密或解密文本然后输出。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无

