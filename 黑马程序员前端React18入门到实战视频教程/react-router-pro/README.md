# React Router 专业项目

这是一个基于 React Router v6 的专业级单页应用项目，展示了现代 React 应用中路由管理的最佳实践。

## 🎯 项目特色

- **React Router v6** - 使用最新的 React Router 版本
- **嵌套路由** - 复杂的嵌套路由结构
- **路由守卫** - 实现登录验证和权限控制
- **动态路由** - 支持参数化路由和动态加载
- **布局组件** - 可复用的布局组件设计
- **404 页面** - 完善的错误页面处理

## 🚀 快速开始

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn start
```

项目将在 [http://localhost:3000](http://localhost:3000) 启动。

### 其他命令

```bash
# 构建生产版本
yarn build

# 运行测试
yarn test

# 弹出配置（谨慎使用）
yarn eject
```

## 📁 项目结构

```
src/
├── router/                   # 路由配置
│   └── index.js             # 路由主配置
├── page/                    # 页面组件
│   ├── Layout/              # 布局组件
│   │   └── index.js        # 主布局
│   ├── Login/               # 登录页面
│   │   └── index.js        # 登录组件
│   ├── About/               # 关于页面
│   │   └── index.js        # 关于组件
│   ├── Article/             # 文章页面
│   │   └── index.js        # 文章组件
│   ├── Board/               # 公告板页面
│   │   └── index.js        # 公告板组件
│   └── NotFound/            # 404 页面
│       └── index.js        # 404 组件
├── components/              # 可复用组件
├── hooks/                   # 自定义 Hooks
├── utils/                   # 工具函数
├── App.js                   # 主应用组件
├── App.css                  # 主应用样式
├── index.js                 # 应用入口
└── index.css                # 全局样式
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **React Router DOM** 6.9.0 - 路由管理
- **React Scripts** 5.0.1 - 构建工具

## 📚 核心概念

### 路由配置

项目使用 React Router v6 的新 API 进行路由配置：

```javascript
// router/index.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../page/Layout";
import Login from "../page/Login";
import About from "../page/About";
import Article from "../page/Article";
import Board from "../page/Board";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "board",
        element: <Board />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
```

### 布局组件

使用 `Outlet` 组件实现嵌套路由：

```javascript
// page/Layout/index.js
import { Outlet, Link, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <nav>
        <Link to="/about">关于</Link>
        <Link to="/article">文章</Link>
        <Link to="/board">公告板</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

## 🎨 功能特性

- **多页面应用** - 完整的页面路由系统
- **嵌套路由** - 支持复杂的页面嵌套结构
- **路由参数** - 支持动态路由参数
- **路由守卫** - 实现登录验证和权限控制
- **404 处理** - 完善的错误页面处理
- **导航组件** - 可复用的导航组件

## 🔧 开发指南

### 添加新页面

1. 在 `src/page/` 目录下创建新的页面组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在布局组件中添加导航链接

### 路由参数使用

```javascript
import { useParams, useSearchParams } from "react-router-dom";

function ArticleDetail() {
  const { id } = useParams(); // 获取路径参数
  const [searchParams] = useSearchParams(); // 获取查询参数

  return <div>文章 ID: {id}</div>;
}
```

### 编程式导航

```javascript
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 登录成功后跳转
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>登录</button>;
}
```

## 📖 学习要点

通过这个项目，你将学会：

1. **React Router v6** - 最新版本的路由 API
2. **嵌套路由** - 复杂应用的路由结构设计
3. **路由守卫** - 实现权限控制和登录验证
4. **动态路由** - 处理参数化路由和查询参数
5. **布局组件** - 可复用的页面布局设计
6. **导航管理** - 程序化导航和用户交互

## 🧪 测试

项目包含完整的测试套件：

```bash
# 运行所有测试
yarn test

# 运行测试并监听变化
yarn test --watch

# 生成测试覆盖率报告
yarn test --coverage
```

## 📦 构建和部署

```bash
# 构建生产版本
yarn build

# 构建后的文件在 build/ 目录
# 注意：SPA 应用需要配置服务器支持 History API
```

### 部署注意事项

由于使用了 `createBrowserRouter`，需要配置服务器支持 History API：

- **Nginx**: 配置 `try_files $uri $uri/ /index.html`
- **Apache**: 配置 `.htaccess` 文件
- **Netlify**: 配置 `_redirects` 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
