# 贪吃蛇游戏 - TypeScript 实现

## 项目概述

这是一个使用 TypeScript 开发的经典贪吃蛇游戏，采用面向对象的设计模式，通过 Webpack 构建工具进行项目管理和打包。

## 项目结构

```
part2/
├── src/
│   ├── index.ts          # 入口文件
│   ├── index.html        # HTML页面
│   ├── moduls/
│   │   ├── GameControl.ts # 游戏控制器
│   │   ├── Snake.ts      # 蛇类
│   │   ├── Food.ts       # 食物类
│   │   └── ScorePanel.ts # 计分板类
│   └── style/
│       └── index.less    # 样式文件
├── package.json
├── webpack.config.js
└── tsconfig.json
```

## 类关系图

```
GameControl (游戏控制器)
├── Snake (蛇)
├── Food (食物)
└── ScorePanel (计分板)
```

## 核心类说明

### GameControl (游戏控制器)

- **职责**: 控制整个游戏的运行逻辑
- **核心方法**:
  - `init()`: 初始化游戏，绑定事件监听器
  - `keydownHandler()`: 处理键盘输入
  - `run()`: 游戏主循环
  - `checkEat()`: 检查是否吃到食物

### Snake (蛇类)

- **职责**: 管理蛇的位置、移动和碰撞检测
- **核心方法**:
  - `get/set X/Y`: 获取/设置蛇头坐标
  - `addBody()`: 增加蛇身
  - `moveBody()`: 移动蛇身
  - `checkHeadBody()`: 检查蛇头是否撞到身体

### Food (食物类)

- **职责**: 管理食物的位置和重新生成
- **核心方法**:
  - `get X/Y`: 获取食物坐标
  - `change()`: 随机生成新的食物位置

### ScorePanel (计分板类)

- **职责**: 管理分数和等级
- **核心方法**:
  - `addScore()`: 增加分数
  - `levelUp()`: 提升等级

## 游戏运行流程

### 1. 初始化阶段

```
开始
  ↓
创建GameControl实例
  ↓
构造函数初始化:
  ├── 创建Snake实例
  ├── 创建Food实例
  └── 创建ScorePanel实例
  ↓
调用init()方法
  ├── 绑定键盘事件监听器
  └── 调用run()方法开始游戏循环
```

### 2. 游戏主循环

```
游戏循环 (run方法):
  ├── 获取当前蛇头坐标 (X, Y)
  ├── 根据按键方向计算新坐标
  │   ├── ArrowUp: Y -= 10
  │   ├── ArrowDown: Y += 10
  │   ├── ArrowLeft: X -= 10
  │   └── ArrowRight: X += 10
  ├── 检查是否吃到食物 (checkEat)
  │   ├── 如果吃到: 食物重新生成 + 分数增加 + 蛇身增长
  │   └── 如果没吃到: 继续移动
  ├── 更新蛇的位置
  │   ├── 移动蛇身 (moveBody)
  │   ├── 更新蛇头位置
  │   └── 检查碰撞 (checkHeadBody)
  ├── 异常处理:
  │   ├── 撞墙: 抛出"蛇撞墙了！"异常
  │   └── 撞自己: 抛出"撞到自己了！"异常
  └── 设置定时器继续下一轮 (300ms - 等级*30ms)
```

### 3. 碰撞检测逻辑

```
位置更新后检查:
├── 边界检测 (0-290像素范围)
│   └── 超出边界 → 抛出"蛇撞墙了！"异常
├── 自身碰撞检测
│   └── 蛇头与身体重叠 → 抛出"撞到自己了！"异常
└── 食物检测
    └── 蛇头与食物重叠 → 吃食物，增加分数和蛇身
```

## 游戏状态转换

```
游戏开始 → 等待按键 → 蛇移动 → 检查碰撞
    ↑                              ↓
游戏结束 ← 显示GAME OVER ← 发生碰撞
    ↑                              ↓
重新开始 ← 用户确认 ← 游戏暂停
```

## 事件处理流程

```
键盘事件 → keydownHandler → 更新direction
    ↓
定时器触发 → run方法 → 计算新位置 → 更新蛇位置
    ↓
检查游戏状态 → 继续循环 或 游戏结束
```

## 异常处理机制 (try-catch)

### try-catch 的调用位置

try-catch 块位于 **GameControl.ts** 文件的 `run()` 方法中：

```typescript
//修改蛇的X和Y值
try {
  this.snake.X = X;
  this.snake.Y = Y;
} catch (e) {
  // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
  alert((e as Error).message + " GAME OVER！！！");
  // 将isLive设置为false
  this.isLive = false;
}
```

### 异常抛出的位置

异常是在 **Snake.ts** 类中抛出的，有三个地方会抛出异常：

#### 1. 撞墙检测 - X 坐标

```typescript
// X的值的合法范围0-290之间
if (value < 0 || value > 290) {
  // 进入判断说明蛇撞墙了
  throw new Error("蛇撞墙了！");
}
```

#### 2. 撞墙检测 - Y 坐标

```typescript
// Y的值的合法范围0-290之间
if (value < 0 || value > 290) {
  // 进入判断说明蛇撞墙了，抛出一个异常
  throw new Error("蛇撞墙了！");
}
```

#### 3. 撞自己身体检测

```typescript
// 检查蛇头是否撞到身体的方法
checkHeadBody(){
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for(let i=1; i<this.bodies.length; i++){
        let bd = this.bodies[i] as HTMLElement;
        if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
            // 进入判断说明蛇头撞到了身体，游戏结束
            throw new Error('撞到自己了！');
        }
    }
}
```

### 异常处理流程

```
GameControl.run() 方法
    ↓
try {
    this.snake.X = X;  // 可能抛出"蛇撞墙了！"异常
    this.snake.Y = Y;  // 可能抛出"蛇撞墙了！"异常
} catch (e) {
    alert(e.message + " GAME OVER！！！");  // 显示游戏结束信息
    this.isLive = false;  // 停止游戏循环
}
```

### 异常触发的时机

1. **撞墙异常**：当蛇头移动到游戏边界外时（X < 0 或 X > 290，Y < 0 或 Y > 290）
2. **撞自己异常**：当蛇头与蛇身任何一部分重叠时

### 异常处理的作用

- **用户体验**：通过 alert 弹窗告知用户游戏结束的原因
- **游戏控制**：设置 `isLive = false` 停止游戏循环
- **错误恢复**：防止程序崩溃，优雅地处理游戏结束状态

### 调用链图

```
GameControl.run()
    ↓
try {
    Snake.set X() → 边界检查 → throw Error('蛇撞墙了！')
    Snake.set Y() → 边界检查 → throw Error('蛇撞墙了！')
    Snake.checkHeadBody() → 碰撞检查 → throw Error('撞到自己了！')
} catch (e) {
    显示游戏结束信息
    停止游戏循环
}
```

## 技术特点

1. **面向对象设计**: 采用类的方式组织代码，职责分离清晰
2. **事件驱动**: 通过键盘事件和定时器驱动游戏运行
3. **异常处理**: 使用 try-catch 处理游戏结束情况
4. **模块化**: 每个功能独立成类，便于维护和扩展
5. **TypeScript**: 提供类型安全，减少运行时错误

## 运行方式

1. 安装依赖: `npm install` 或 `yarn install`
2. 启动开发服务器: `npm start` 或 `yarn start`
3. 使用方向键控制蛇的移动
4. 吃到食物可以增加分数和蛇身长度
5. 避免撞墙和撞到自己

## 游戏规则

- 使用方向键（↑↓←→）控制蛇的移动
- 吃到食物后蛇身会增长，分数增加
- 每 10 分提升一个等级，游戏速度会加快
- 撞墙或撞到自己身体游戏结束
- 游戏区域为 300x300 像素的网格
