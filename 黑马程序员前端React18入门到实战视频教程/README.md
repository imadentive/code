# 黑马程序员前端 React18 入门到实战视频教程

这是黑马程序员前端 React18 入门到实战视频教程的完整项目代码集合，包含了从基础到实战的完整学习路径。

## 📚 教程内容

本教程涵盖了 React 18 的完整学习体系，从基础概念到实战项目，帮助学习者系统掌握现代 React 开发技术。

## 🎯 学习目标

通过本教程，你将学会：

- **React 基础** - 组件、JSX、状态管理等核心概念
- **Hooks 使用** - useState、useEffect、自定义 Hooks 等
- **状态管理** - Redux Toolkit 进行复杂状态管理
- **路由管理** - React Router v6 进行页面路由
- **移动端开发** - 使用 Ant Design Mobile 构建移动应用
- **项目实战** - 完整的项目开发经验

## 📁 项目结构

```
黑马程序员前端React18入门到实战视频教程/
├── react-basic/                    # React 基础学习项目
│   ├── src/
│   │   ├── 1.jsx-高频场景.js      # JSX 高频使用场景
│   │   ├── 2.jsx-列表渲染.js      # 列表渲染示例
│   │   ├── 3.jsx-条件渲染.js      # 条件渲染示例
│   │   ├── 4.jsx-复杂条件渲染.js   # 复杂条件渲染
│   │   ├── 5.jsx-事件绑定.js      # 事件绑定示例
│   │   ├── 6.React组件基础使用.js  # React 组件基础
│   │   ├── 7.useState基础使用.js   # useState Hook
│   │   ├── 8.理解状态不可变.js     # 状态不可变性
│   │   ├── 9.样式控制.js          # 样式控制
│   │   ├── 10.表单受控绑定.js     # 表单受控组件
│   │   ├── 11.useRef获取真实dom.js # useRef Hook
│   │   ├── 12.父传子-基础使用.js   # 父传子通信
│   │   ├── 13.子传父.js           # 子传父通信
│   │   ├── 14.兄弟组件通信.js     # 兄弟组件通信
│   │   ├── 15.跨层传递数据.js     # Context 跨层传递
│   │   ├── 16.useEffect-概念理解和基础使用.js # useEffect 基础
│   │   ├── 17.useEffect-不同依赖项下的执行时机.js # useEffect 依赖
│   │   ├── 18.useEffect-清除副作用.js # useEffect 清理
│   │   └── 19.封装自定义hook.js   # 自定义 Hook
│   └── README.md
│
├── react-redux-pro/               # React Redux 专业项目
│   ├── src/store/                 # Redux Store 配置
│   │   ├── index.js              # Store 主入口
│   │   └── modules/              # Store 模块
│   │       ├── counterStore.js   # 计数器状态管理
│   │       └── channelStore.js   # 频道状态管理
│   └── README.md
│
├── react-router-pro/               # React Router 专业项目
│   ├── src/
│   │   ├── page/                 # 页面组件
│   │   │   ├── Layout/           # 布局组件
│   │   │   ├── Login/            # 登录页面
│   │   │   ├── About/            # 关于页面
│   │   │   ├── Article/          # 文章页面
│   │   │   ├── Board/            # 公告板页面
│   │   │   └── NotFound/          # 404 页面
│   │   └── router/               # 路由配置
│   │       └── index.js          # 路由主配置
│   └── README.md
│
├── react-bill-finished/           # React 记账应用 - 完整版
│   ├── src/
│   │   ├── components/           # 可复用组件
│   │   ├── pages/                # 页面组件
│   │   │   ├── KeepAccount/      # 记账页面
│   │   │   ├── MonthBill/        # 月度账单页面
│   │   │   └── YearBill/         # 年度账单页面
│   │   ├── store/                # Redux Store
│   │   ├── hooks/                # 自定义 Hooks
│   │   └── utils/                # 工具函数
│   └── README.md
│
├── react-bill-test/               # React 记账应用 - 测试版
│   ├── src/
│   │   ├── pages/                # 页面组件
│   │   │   ├── New/              # 新增账单页面
│   │   │   ├── Month/            # 月度账单页面
│   │   │   └── Year/             # 年度账单页面
│   │   └── store/                # Redux Store
│   └── README.md
│
├── redux-meituan-finished/        # Redux 美团外卖应用 - 完整版
│   ├── src/
│   │   ├── components/           # 组件
│   │   │   ├── NavBar/           # 导航栏组件
│   │   │   ├── Menu/             # 菜单组件
│   │   │   ├── FoodsCategory/    # 商品分类组件
│   │   │   ├── Count/             # 数量控制组件
│   │   │   └── Cart/              # 购物车组件
│   │   └── store/                # Redux Store
│   └── README.md
│
├── B站评论完整版/                  # B站评论系统 - 完整版
│   └── react-basic-pro/
│       ├── src/
│       │   ├── App.js            # 主应用组件
│       │   ├── App.scss           # 主应用样式
│       │   └── images/            # 图片资源
│       └── README.md
│
├── B站评论静态模版/                # B站评论系统 - 静态模版
│   └── react-basic-pro/
│       ├── src/
│       │   ├── App.js            # 主应用组件
│       │   ├── App.scss           # 主应用样式
│       │   └── images/            # 图片资源
│       └── README.md
│
├── react-jike-mobile/             # React 即刻移动端应用
│   ├── src/
│   │   ├── apis/                 # API 接口
│   │   ├── pages/                # 页面组件
│   │   │   ├── Home/             # 首页
│   │   │   └── Detail/            # 详情页
│   │   ├── router/               # 路由配置
│   │   └── utils/                # 工具函数
│   └── README.md
│
└── redux-counter.html             # Redux 计数器示例
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- Yarn >= 1.22.0 或 npm >= 8.0.0

### 运行项目

1. **选择要运行的项目**

   ```bash
   cd 项目目录名
   ```

2. **安装依赖**

   ```bash
   yarn install
   # 或
   npm install
   ```

3. **启动开发服务器**

   ```bash
   yarn start
   # 或
   npm start
   ```

4. **访问应用**
   - 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📖 学习路径

### 第一阶段：React 基础 (react-basic)

1. **JSX 语法** - 学习 React 的 JSX 语法
2. **组件基础** - 理解 React 组件概念
3. **状态管理** - 学习 useState Hook
4. **事件处理** - 掌握事件绑定和处理
5. **条件渲染** - 学习条件渲染和列表渲染
6. **组件通信** - 掌握组件间通信方式
7. **副作用处理** - 学习 useEffect Hook
8. **自定义 Hooks** - 封装自定义 Hooks

### 第二阶段：状态管理 (react-redux-pro)

1. **Redux 基础** - 理解 Redux 核心概念
2. **Redux Toolkit** - 学习现代 Redux 开发方式
3. **Store 设计** - 设计合理的 Store 结构
4. **异步操作** - 处理异步状态更新
5. **性能优化** - Redux 性能优化技巧

### 第三阶段：路由管理 (react-router-pro)

1. **React Router v6** - 学习最新版本的路由 API
2. **嵌套路由** - 实现复杂的页面嵌套
3. **路由守卫** - 实现权限控制和登录验证
4. **动态路由** - 处理参数化路由
5. **编程式导航** - 程序化页面跳转

### 第四阶段：项目实战

#### 4.1 记账应用 (react-bill-finished / react-bill-test)

- **移动端开发** - 使用 Ant Design Mobile
- **状态管理** - Redux Toolkit 状态管理
- **路由管理** - React Router 页面路由
- **数据持久化** - 本地数据存储
- **用户体验** - 流畅的交互设计

#### 4.2 外卖应用 (redux-meituan-finished)

- **复杂状态管理** - 购物车、订单管理
- **组件设计** - 高度模块化的组件
- **业务逻辑** - 复杂业务逻辑实现
- **性能优化** - Redux 性能优化

#### 4.3 评论系统 (B 站评论完整版 / B 站评论静态模版)

- **数据管理** - 评论数据的增删改查
- **用户交互** - 点赞、回复等交互功能
- **状态更新** - 复杂状态更新处理
- **界面设计** - 美观的评论界面

#### 4.4 移动端应用 (react-jike-mobile)

- **TypeScript** - 类型安全的开发体验
- **Vite** - 现代构建工具的使用
- **移动端优化** - 移动端应用优化
- **API 管理** - 前端 API 接口管理

## 🛠️ 技术栈

### 核心技术

- **React** 18.2.0 - 前端框架
- **JavaScript** ES6+ - 编程语言
- **TypeScript** 5.0.2 - 类型系统（部分项目）

### 状态管理

- **Redux Toolkit** 1.9.x - 状态管理
- **React Redux** 8.0.5 - React-Redux 绑定

### 路由管理

- **React Router DOM** 6.x - 路由管理

### UI 组件库

- **Ant Design Mobile** 5.x - 移动端 UI 组件库

### 构建工具

- **Create React App** 5.0.1 - React 应用脚手架
- **Vite** 4.4.5 - 现代构建工具（部分项目）
- **CRACO** 7.1.0 - Create React App 配置覆盖

### 样式处理

- **Sass** 1.5x - CSS 预处理器
- **CSS Modules** - CSS 模块化

### 工具库

- **Axios** 1.x - HTTP 客户端
- **Day.js** 1.11.x - 日期处理库
- **Lodash** 4.17.21 - 工具函数库
- **Classnames** 2.3.2 - CSS 类名工具
- **UUID** 9.0.1 - 唯一标识符生成

### 开发工具

- **JSON Server** 0.17.x - 模拟后端服务
- **ESLint** - 代码检查工具
- **Prettier** - 代码格式化工具

## 📚 学习资源

### 官方文档

- [React 官方文档](https://react.dev/)
- [Redux Toolkit 官方文档](https://redux-toolkit.js.org/)
- [React Router 官方文档](https://reactrouter.com/)
- [Ant Design Mobile 官方文档](https://mobile.ant.design/)

### 推荐阅读

- [React 18 新特性](https://react.dev/blog/2022/03/29/react-v18)
- [Redux 最佳实践](https://redux.js.org/style-guide/style-guide)
- [React Hooks 详解](https://react.dev/reference/react)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个教程项目！

## 📄 许可证

MIT License

## 📞 联系方式

- **黑马程序员官网**: [https://www.itheima.com/](https://www.itheima.com/)
- **课程咨询**: 请联系黑马程序员官方客服

---

**注意**: 本项目为黑马程序员前端 React18 入门到实战视频教程的配套代码，建议配合视频教程学习使用。
