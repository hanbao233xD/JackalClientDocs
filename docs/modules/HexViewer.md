HexViewer
十六进制查看
分类：File
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
HexViewer（十六进制查看）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Color Mode。

配置项
- Category CR Color（中文：类别 CR 颜色）：类型=文本，默认="&11"
- Category Null Color（中文：类别 Null 颜色）：类型=文本，默认="30;30;30"
- Category 3-Byte Unicode Color（中文：类别 3-Byte Unicode 颜色）：类型=文本，默认="255;110;180"
- Category Punct Color（中文：类别 Punct 颜色）：类型=文本，默认="&14"
- Color Mode（中文：颜色模式）：类型=枚举，默认="Simple"
  可选：Off（关闭）；Simple（简易）；Category（类别）；Step（步长）；Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Category Control Color（中文：类别 控制 颜色）：类型=文本，默认="&6"
- Category Space Color（中文：类别 空格 颜色）：类型=文本，默认="&12"
- Category LF Color（中文：类别 LF 颜色）：类型=文本，默认="&10"
- Category Punct Unicode Color (Strict)（中文：类别 Punct Unicode 颜色 (严格)）：类型=文本，默认="255;80;80"
- Category Other Color（中文：类别 Other 颜色）：类型=文本，默认="&13"
- Category Number Color（中文：类别 号码 颜色）：类型=文本，默认="&9"
- Step Color End（中文：步长 颜色 End）：类型=文本，默认="255;255;255"
- Category 2-Byte Unicode Color（中文：类别 2-Byte Unicode 颜色）：类型=文本，默认="255;110;180"
- Category Alpha Color（中文：类别 不透明度 颜色）：类型=文本，默认="&7"
- Category Punct Unicode Color（中文：类别 Punct Unicode 颜色）：类型=文本，默认="72;118;255"
- Category 4-Byte Unicode Color（中文：类别 4-Byte Unicode 颜色）：类型=文本，默认="255;110;180"
- Step Color Start（中文：步长 颜色 启动）：类型=文本，默认="30;30;30"

历史更新
- 1. 修复 Hex Viewer 数字左对齐的问题。
- 35. 为 Hex Viewer 添加了更多的类目自定义颜色。支持对 Unicode 字符的解析了。
- 9. 添加模块：Hex Viewer，十六进制查看。需要用指令调用。

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

