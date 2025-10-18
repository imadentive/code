# React 记账应用 - 完整版

这是一个功能完整的移动端记账应用，使用 React + Redux Toolkit + Ant Design Mobile 构建，提供了完整的记账、统计和管理功能。

## 🎯 项目特色

- **移动端优先** - 专为移动设备设计的 UI/UX
- **完整功能** - 记账、统计、分类管理等完整功能
- **现代技术栈** - React 18 + Redux Toolkit + Ant Design Mobile
- **数据持久化** - 本地数据存储和同步
- **响应式设计** - 适配各种屏幕尺寸
- **用户体验** - 流畅的交互动画和反馈

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

### 启动后端服务

```bash
# 启动 JSON Server 模拟后端
yarn serve
```

后端服务将在 [http://localhost:8888](http://localhost:8888) 启动。

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
├── components/               # 可复用组件
│   ├── Icon/                # 图标组件
│   ├── OneLineOverview/     # 单行概览组件
│   └── TwoLineOverview/     # 双行概览组件
├── pages/                   # 页面组件
│   ├── Layout/              # 布局组件
│   ├── KeepAccount/         # 记账页面
│   ├── MonthBill/           # 月度账单页面
│   │   └── components/      # 月度账单子组件
│   │       └── DailyBill/   # 日账单组件
│   └── YearBill/            # 年度账单页面
├── store/                   # Redux Store
│   ├── index.js            # Store 配置
│   └── slices/             # Redux Slices
│       └── ka.js           # 记账相关状态
├── hooks/                   # 自定义 Hooks
│   ├── useBillList.js      # 账单列表 Hook
│   └── useDate.js          # 日期处理 Hook
├── contant/                 # 常量定义
│   └── billList.js         # 账单相关常量
├── utils/                   # 工具函数
│   └── http.js             # HTTP 请求工具
├── router/                  # 路由配置
│   └── index.js            # 路由主配置
├── App.js                   # 主应用组件
├── index.js                 # 应用入口
├── index.css                # 全局样式
└── theme.css                # 主题样式
server/
└── data.json                # 模拟数据
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **Redux Toolkit** 1.9.1 - 状态管理
- **React Redux** 8.0.5 - React-Redux 绑定
- **Ant Design Mobile** 5.26.0 - 移动端 UI 组件库
- **React Router DOM** 6.4.4 - 路由管理
- **Axios** 1.2.0 - HTTP 客户端
- **Day.js** 1.11.6 - 日期处理库
- **Classnames** 2.3.2 - CSS 类名工具
- **Sass** 1.56.1 - CSS 预处理器
- **JSON Server** 0.17.2 - 模拟后端服务

## 🎨 功能特性

### 核心功能

- **记账管理** - 添加、编辑、删除账单记录
- **分类管理** - 收入和支出分类管理
- **统计分析** - 月度、年度账单统计
- **数据可视化** - 图表展示收支情况
- **搜索筛选** - 按时间、分类筛选账单

### 页面功能

- **记账页面** - 快速添加账单记录
- **月度账单** - 查看月度收支统计
- **年度账单** - 查看年度收支统计
- **设置页面** - 应用设置和偏好配置

## 📚 核心概念

### 状态管理

使用 Redux Toolkit 管理应用状态：

```javascript
// store/slices/ka.js
import { createSlice } from "@reduxjs/toolkit";

const kaSlice = createSlice({
  name: "ka",
  initialState: {
    billList: [],
    currentMonth: "",
    currentYear: "",
  },
  reducers: {
    setBillList: (state, action) => {
      state.billList = action.payload;
    },
    addBill: (state, action) => {
      state.billList.push(action.payload);
    },
  },
});
```

### 自定义 Hooks

封装业务逻辑到自定义 Hooks：

```javascript
// hooks/useBillList.js
import { useSelector, useDispatch } from "react-redux";
import { setBillList } from "../store/slices/ka";

export const useBillList = () => {
  const dispatch = useDispatch();
  const billList = useSelector((state) => state.ka.billList);

  const fetchBillList = async () => {
    // 获取账单列表逻辑
  };

  return { billList, fetchBillList };
};
```

## 🔧 开发指南

### 添加新功能

1. 在对应的页面目录下创建组件
2. 在 store/slices 中添加相关状态管理
3. 在 hooks 中封装业务逻辑
4. 更新路由配置

### 样式开发

项目使用 Sass 进行样式开发：

```scss
// 使用 BEM 命名规范
.bill-item {
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__content {
    margin-top: 8px;
  }
}
```

### 数据管理

使用 JSON Server 模拟后端 API：

```javascript
// utils/http.js
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8888",
  timeout: 5000,
});

export default http;
```

## 📖 学习要点

通过这个项目，你将学会：

1. **移动端开发** - 移动端应用的设计和开发
2. **状态管理** - 复杂应用的状态管理策略
3. **组件设计** - 可复用组件的设计和实现
4. **数据可视化** - 图表和统计数据的展示
5. **用户体验** - 移动端应用的用户体验设计
6. **项目架构** - 大型 React 应用的架构设计

## 🧪 测试

```bash
# 运行所有测试
yarn test

# 运行测试并监听变化
yarn test --watch
```

## 📦 构建和部署

```bash
# 构建生产版本
yarn build

# 构建后的文件在 build/ 目录
# 可以部署到任何静态文件服务器
```

### 移动端部署

- **PWA 支持** - 可安装为移动端应用
- **响应式设计** - 适配各种移动设备
- **离线支持** - 支持离线使用（需配置 Service Worker）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
