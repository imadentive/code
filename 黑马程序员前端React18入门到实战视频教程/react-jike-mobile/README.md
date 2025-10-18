# React 即刻移动端应用

这是一个基于 React + TypeScript + Vite 构建的即刻移动端应用，展示了现代 React 移动端开发的最佳实践。项目使用最新的技术栈和开发工具，提供了完整的移动端应用开发体验。

## 🎯 项目特色

- **现代技术栈** - React 18 + TypeScript + Vite
- **移动端优先** - 专为移动设备设计的 UI/UX
- **类型安全** - 完整的 TypeScript 类型支持
- **快速开发** - Vite 提供极快的开发体验
- **组件库** - Ant Design Mobile 提供丰富的移动端组件
- **路由管理** - React Router v6 进行页面路由管理

## 🚀 快速开始

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

项目将在 [http://localhost:5173](http://localhost:5173) 启动。

### 其他命令

```bash
# 构建生产版本
yarn build

# 预览构建结果
yarn preview

# 代码检查
yarn lint
```

## 📁 项目结构

```
src/
├── apis/                    # API 接口
│   ├── home.ts             # 首页相关 API
│   ├── profile.ts          # 个人资料相关 API
│   └── types.ts            # API 类型定义
├── pages/                   # 页面组件
│   ├── Home/               # 首页
│   │   ├── index.tsx       # 首页组件
│   │   └── index.css       # 首页样式
│   ├── Profile/            # 个人资料页
│   │   ├── index.tsx       # 个人资料组件
│   │   └── index.css       # 个人资料样式
│   └── Login/              # 登录页
│       ├── index.tsx       # 登录组件
│       └── index.css       # 登录样式
├── router/                  # 路由配置
│   └── index.tsx           # 路由主配置
├── utils/                   # 工具函数
│   ├── request.ts          # 请求工具
│   └── storage.ts          # 存储工具
├── App.tsx                  # 主应用组件
├── main.tsx                 # 应用入口
└── vite-env.d.ts            # Vite 环境类型
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **TypeScript** 5.0.2 - 类型系统
- **Vite** 4.4.5 - 构建工具
- **React Router DOM** 6.18.0 - 路由管理
- **Ant Design Mobile** 5.33.0 - 移动端 UI 组件库
- **Axios** 1.6.1 - HTTP 客户端
- **Normalize.css** 8.0.1 - CSS 重置样式

## 🎨 功能特性

### 核心功能

- **首页展示** - 应用首页内容展示
- **个人资料** - 用户个人资料管理
- **登录功能** - 用户登录和认证
- **路由导航** - 页面间导航和路由管理
- **响应式设计** - 适配不同移动设备

### 技术特性

- **TypeScript 支持** - 完整的类型安全
- **模块化开发** - 清晰的模块组织结构
- **API 管理** - 统一的 API 接口管理
- **工具函数** - 可复用的工具函数
- **样式管理** - 模块化的样式管理

## 📚 核心概念

### TypeScript 类型定义

```typescript
// apis/types.ts
export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface LoginParams {
  username: string;
  password: string;
}
```

### API 接口管理

```typescript
// apis/home.ts
import { request } from "../utils/request";
import type { ApiResponse, User } from "./types";

export const getHomeData = (): Promise<ApiResponse<User[]>> => {
  return request.get("/api/home");
};

export const getUserProfile = (id: string): Promise<ApiResponse<User>> => {
  return request.get(`/api/user/${id}`);
};
```

### 路由配置

```typescript
// router/index.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
```

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新页面组件
2. 在 `src/router/index.tsx` 中添加路由配置
3. 在 `src/apis/` 中添加相关 API 接口
4. 更新导航菜单

### 添加新 API

1. 在 `src/apis/types.ts` 中定义相关类型
2. 在对应的 API 文件中添加接口函数
3. 在组件中使用 API 接口

### 样式开发

使用 CSS 模块化开发：

```css
/* pages/Home/index.css */
.home {
  padding: 16px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.home__header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.home__title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.home__content {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### TypeScript 开发

```typescript
// pages/Home/index.tsx
import React, { useState, useEffect } from "react";
import { getHomeData } from "../../apis/home";
import type { User } from "../../apis/types";
import "./index.css";

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getHomeData();
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">首页</h1>
      </div>
      <div className="home__content">
        {loading ? (
          <div>加载中...</div>
        ) : (
          <div>
            {users.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
```

## 📖 学习要点

通过这个项目，你将学会：

1. **TypeScript 开发** - TypeScript 在 React 中的应用
2. **Vite 使用** - 现代构建工具的使用
3. **移动端开发** - 移动端应用的设计和开发
4. **API 管理** - 前端 API 接口的管理
5. **路由管理** - React Router v6 的使用
6. **组件库使用** - Ant Design Mobile 的使用

## 🧪 测试

```bash
# 运行测试
yarn test

# 运行测试并监听变化
yarn test --watch
```

## 📦 构建和部署

```bash
# 构建生产版本
yarn build

# 预览构建结果
yarn preview

# 构建后的文件在 dist/ 目录
```

### 部署注意事项

- **移动端优化** - 确保在移动设备上的良好体验
- **性能优化** - 使用 Vite 的优化功能
- **PWA 支持** - 可考虑添加 PWA 支持

## 🔄 与其他项目的区别

这个项目相比其他项目：

- **技术栈现代** - 使用最新的技术栈
- **TypeScript 支持** - 完整的类型安全
- **构建工具先进** - 使用 Vite 而非 Create React App
- **移动端专业** - 专为移动端设计

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
