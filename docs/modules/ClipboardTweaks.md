ClipboardTweaks
剪贴板功能
分类：Control
描述：一些剪贴板的实用功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ClipboardTweaks（剪贴板功能）用于一些剪贴板的实用功能。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Notify、Taboo Super Filter、Cut Line Mode。

配置项
- Remove Numbers（中文：移除数字）：类型=布尔，默认=false
- Notify（中文：通知）：类型=布尔，默认=true
- Remove URL（中文：移除链接）：类型=布尔，默认=false
- Encryptor（中文：加密器）：类型=布尔，默认=false
- Character Obfuscation（中文：字符混淆）：类型=枚举，默认="Off"
  可选：Off（关闭）；Normal（普通）；Advanced（高级）；Ultimate（终极）
- Remove URL Arguments（中文：移除链接的参数）：类型=布尔，默认=true
- Chinese Traditionalization（中文：中文转繁体）：类型=布尔，默认=false
- Cut Line Extra Tail（中文：切分行额外尾巴）：类型=文本，默认="喵"
- Punctuation Changes（中文：标点变化）：类型=枚举，默认="Off"
  可选：Off（关闭）；Remove（移除）；To English（转英文）；To Chinese（转中文）；Random（随机）
- Taboo Super Filter（中文：违禁词超级过滤）：类型=布尔，默认=false
- Cut Line Random Length Max（中文：切分行随机长度最大值）：类型=数值，默认=16
- Cut Line Fixed Length（中文：切分行固定长度）：类型=数值，默认=12
- Cut Line Random Length Min（中文：切分行随机长度最小值）：类型=数值，默认=5
- AI Transformation（中文：人工智能变换）：类型=布尔，默认=false
- Remove Markdown（中文：移除Markdown）：类型=布尔，默认=false
- Cut Line Mode（中文：切分行模式）：类型=枚举，默认="Off"
  可选：Off（关闭）；Punctuation（未收录）；Fixed Length（固定长度）；Random Length（随机 长度）；Wave Left（Wave 左侧）；Wave Center（Wave 居中）
- Letter Changes（中文：字母变化）：类型=枚举，默认="Off"
  可选：Off（关闭）；Upper Case（大写）；Lower Case（小写）；Annoying Case（混写）；Fancy Letters（花体）
- Update Cooldown (ms)（中文：更新冷却（毫秒））：类型=数值，默认=500L
- AI Transformation Prompt（中文：人工智能变换提示词）：类型=文本，默认="请将下面的文本每个字符间加一个点后原样输出，不要添加任何的前缀后缀以及说明文字："
- Add Spaces Mode（中文：添加空格模式）：类型=枚举，默认="Off"
  可选：Off（关闭）；Single（单个）；Double（两个）；Pair（未收录）；Wave（未收录）；Smaller Random（Smaller 随机）；Bigger Random（Bigger 随机）

历史更新
- 3. 为 ClipboardTweaks 添加新的配置：
- 2. 为 Clipboard Tweaks 模块添加 Taboo Super Filter 选项，用于屏蔽违禁词。（仍在测试）
- 8. 添加模块 Clipboard Tweaks，用于对剪贴板文本进行操作。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无

