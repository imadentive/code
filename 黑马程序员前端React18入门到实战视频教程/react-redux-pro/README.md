# React Redux 专业项目

这是一个基于 React 和 Redux Toolkit 的专业级项目，展示了现代 React 应用中状态管理的最佳实践。

## 🎯 项目特色

- **Redux Toolkit** - 使用现代化的 Redux 工具包进行状态管理
- **模块化设计** - 清晰的 store 模块划分
- **TypeScript 支持** - 完整的类型安全
- **现代 React** - 使用 React 18 的最新特性
- **专业架构** - 企业级项目结构和代码组织

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
├── store/                     # Redux Store 配置
│   ├── index.js              # Store 主入口
│   └── modules/              # Store 模块
│       ├── counterStore.js   # 计数器状态管理
│       └── channelStore.js   # 频道状态管理
├── components/               # 可复用组件
├── pages/                    # 页面组件
├── hooks/                    # 自定义 Hooks
├── utils/                    # 工具函数
├── services/                 # API 服务
├── App.js                    # 主应用组件
├── App.css                   # 主应用样式
├── index.js                  # 应用入口
└── index.css                 # 全局样式
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **Redux Toolkit** 1.9.3 - 状态管理
- **React Redux** 8.0.5 - React-Redux 绑定
- **Axios** 1.3.4 - HTTP 客户端
- **React Scripts** 5.0.1 - 构建工具

## 📚 核心概念

### Redux Store 结构

项目采用模块化的 Redux store 设计：

```javascript
// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";

export default configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
  },
});
```

### Store 模块示例

每个 store 模块都使用 Redux Toolkit 的 `createSlice` 创建：

```javascript
// store/modules/counterStore.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

## 🎨 功能特性

- **计数器管理** - 演示基本的 Redux 状态操作
- **频道管理** - 展示复杂状态管理场景
- **异步操作** - 使用 Redux Toolkit 处理异步请求
- **状态持久化** - 可选的状态持久化方案
- **开发工具** - Redux DevTools 集成

## 🔧 开发指南

### 添加新的 Store 模块

1. 在 `src/store/modules/` 目录下创建新的 slice 文件
2. 在 `src/store/index.js` 中注册新的 reducer
3. 在组件中使用 `useSelector` 和 `useDispatch` 访问状态

### 异步操作处理

使用 Redux Toolkit 的 `createAsyncThunk` 处理异步操作：

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async (params) => {
  const response = await api.getData(params);
  return response.data;
});
```

## 📖 学习要点

通过这个项目，你将学会：

1. **Redux Toolkit 使用** - 现代 Redux 开发方式
2. **状态管理架构** - 大型应用的状态管理设计
3. **模块化设计** - Store 的模块化组织
4. **异步状态管理** - 处理 API 请求和异步操作
5. **性能优化** - Redux 性能优化技巧
6. **最佳实践** - Redux 开发的最佳实践

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
# 可以部署到任何静态文件服务器
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
