ChestStealer
箱子小偷
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
ChestStealer（箱子小偷）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：HUD Target Slot Color、Notify Mode、Trigger Mode。

配置项
- Manual X Offset (Large Chest)（中文：手动X偏移 (大型箱子)）：类型=数值，默认=-240
- Mouse Easing Movement（中文：鼠标缓动）：类型=枚举，默认="EaseInOutSine"
  可选：Off（关闭）；Linear（线性）；EaseInOutSine（未收录）；EaseInOutExpo（未收录）；EaseInOutBack（未收录）
- Manual Y Offset (Large Chest)（中文：手动Y偏移 (大型箱子)）：类型=数值，默认=-278
- HUD Target Slot Color（中文：HUD 目标格子颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Not Trigger While Moving（中文：移动中不触发）：类型=布尔，默认=true
- Operate Delay Max (ms)（中文：操作延迟最大值 (毫秒)）：类型=数值，默认=250
- Semi-Auto Y Offset Slots (Large Chest)（中文：半自动Y偏移格子数 (大型箱子)）：类型=数值，默认=4.60f
- Manual Y Offset (Dispenser)（中文：手动Y偏移 (发射器)）：类型=数值，默认=-198
- Trigger Hotkey Interrupt（中文：触发快捷键中断）：类型=枚举，默认="Close Container"
  可选：Off（关闭）；Stop（停止）；Close Container（关闭容器）
- Interrupt Key 2（中文：中断键 2）：类型=按键/复合，默认={{"Keybind", {VK_ESCAPE}}}
- Minecraft Window Check（中文：Minecraft 窗口检查）：类型=布尔，默认=true
- Notify Mode（中文：通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
- Slot Selector（中文：格子选择器）：类型=枚举，默认="No Empty Detect"
  可选：All（所有）；No Empty Detect（非空检测）
- Trigger Hotkey（中文：触发快捷键）：类型=按键/复合，默认={{"Keybind", {'B'}}}
- Key Internal Gap 1 (ms)（中文：按键内部延迟1 (毫秒)）：类型=数值，默认=40L
- Manual X Offset (Dispenser)（中文：手动X偏移 (发射器)）：类型=数值，默认=-78
- Manual X Offset (Small Chest)（中文：手动X偏移 (小型箱子)）：类型=数值，默认=-240
- Start Delay Min (ms)（中文：开始延迟最小值 (毫秒)）：类型=数值，默认=100
- Semi-Auto Y Offset Slots (Small Chest)（中文：半自动Y偏移格子数 (小型箱子)）：类型=数值，默认=3.12f
- Slot No Empty Single Channel Threshold（中文：Slot 否 Empty 单个 Channel Threshold）：类型=数值，默认=1000
- Trigger Mode（中文：触发模式）：类型=枚举，默认="Hotkey"
  可选：Instant（瞬间）；Right Mouse Button（鼠标右键）；Hotkey（快捷键）
- Semi-Auto Y Offset Slots (Dispenser)（中文：半自动Y偏移格子数 (发射器)）：类型=数值，默认=4.10f
- Auto Close Key（中文：自动合上按键）：类型=按键/复合，默认={{"Keybind", {'E'}}}
- Item Operation（中文：物品操作）：类型=枚举，默认="Steal"
  可选：Steal（偷窃）；Drop（丢弃）；Drag Steal（拖曳偷窃）
- Slot Size（中文：格子大小）：类型=数值，默认=52
- Key Internal Gap 2 (ms)（中文：按键内部延迟2 (毫秒)）：类型=数值，默认=40L
- Manual X Offset (Hopper)（中文：手动X偏移 (漏斗)）：类型=数值，默认=-132
- Slot Internal Random Offset（中文：格子内部随机偏移）：类型=布尔，默认=true
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=30
- Async（中文：异步）：类型=布尔，默认=true
- End Delay Max (ms)（中文：结束延迟最大值 (毫秒)）：类型=数值，默认=200
- Interrupt Key 1（中文：中断键 1）：类型=按键/复合，默认={{"Keybind", {'E'}}}
- HUD（中文：是否显示HUD。）：类型=枚举，默认="Off"
  可选：Off（关闭）；Basic（基础）
- Manual Y Offset (Small Chest)（中文：手动Y偏移 (小型箱子)）：类型=数值，默认=-198
- Mouse Easing Duration (ms)（中文：鼠标缓动时长 (毫秒)）：类型=数值，默认=50L
- Container Type（中文：容器类型）：类型=枚举，默认="Small Chest"
  可选：Small Chest（小型箱子）；Large Chest（大型箱子）；Hopper（漏斗）；Dispenser（发射器）
- Semi-Auto Y Offset Slots (Hopper)（中文：半自动Y偏移格子数 (漏斗)）：类型=数值，默认=2.00f
- Auto Close（中文：自动合上）：类型=布尔，默认=true
- End Delay Min (ms)（中文：结束延迟最小值 (毫秒)）：类型=数值，默认=100
- Click Internal Gap (ms)（中文：点击内部延迟 (毫秒)）：类型=数值，默认=40L
- Manual Y Offset (Hopper)（中文：手动Y偏移 (漏斗)）：类型=数值，默认=-141
- Operate Delay Min (ms)（中文：操作延迟最小值 (毫秒)）：类型=数值，默认=150
- Slot Order（中文：格子顺序）：类型=枚举，默认="Random"
  可选：Snake（蛇形）；Reverse Snake（反转蛇形）；Sequential（顺序）；Reverse（颠倒）；Random（随机）
- Start Delay Max (ms)（中文：开始延迟最大值 (毫秒)）：类型=数值，默认=200
- Drop Items Key（中文：丢东西按键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, 'Q'}}}
- Coordinate Mode（中文：坐标模式）：类型=枚举，默认="Semi-Auto"
  可选：Semi-Auto（半自动）；Manual（手动）

历史更新
- 28. 添加模块：ChestStealer，这里不展开描述。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

