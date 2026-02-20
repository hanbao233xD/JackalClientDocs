MsgBlocker
消息阻塞
分类：未分类
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：WIP / 维护中
- 版本属性：普通可用

介绍
MsgBlocker（消息阻塞）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Hide HUD When Menu On、Notify、Target Window。
该模块处于 WIP 阶段，行为可能不稳定，建议先小范围测试。

配置项
- Output Messages（中文：输出消息）：类型=布尔，默认=true
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=false
- Overlay Color（中文：覆盖膜颜色）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Overlay Opacity (0~1)（中文：覆盖膜不透明度 (0~1)）：类型=数值，默认=0.2f
- Ignore WM_PAINT（中文：忽略 WM_PAINT）：类型=布尔，默认=true
- Notify（中文：通知）：类型=布尔，默认=true
- Ignore WM_TIMER（中文：忽略 WM_TIMER）：类型=布尔，默认=false
- Disable When Quit（中文：退出时关闭）：类型=布尔，默认=true
- Target Window（中文：目标窗口）：类型=枚举，默认="Foreground"
  可选：Foreground（前端）；PointAt（指向）
- Overlay（中文：覆盖膜）：类型=布尔，默认=true
- Ignore WM_QUIT（中文：忽略 WM_QUIT）：类型=布尔，默认=false

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

