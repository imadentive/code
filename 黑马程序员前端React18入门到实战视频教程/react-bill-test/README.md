# React 记账应用 - 测试版

这是一个记账应用的测试版本，用于学习和实验 React 移动端开发技术。项目展示了如何使用现代 React 技术栈构建移动端应用的原型。

## 🎯 项目特色

- **学习导向** - 专注于学习 React 移动端开发技术
- **模块化设计** - 清晰的组件结构和代码组织
- **现代技术栈** - React 18 + Redux Toolkit + Ant Design Mobile
- **测试友好** - 便于测试和实验的代码结构
- **渐进式开发** - 从简单功能逐步扩展到复杂应用

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
yarn server
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
│   └── Icon/                # 图标组件
├── pages/                   # 页面组件
│   ├── Layout/              # 布局组件
│   ├── New/                 # 新增账单页面
│   ├── Month/               # 月度账单页面
│   │   └── components/      # 月度账单子组件
│   │       └── DayBill/     # 日账单组件
│   └── Year/                # 年度账单页面
├── store/                   # Redux Store
│   ├── index.js            # Store 配置
│   └── modules/            # Redux 模块
│       └── billStore.js    # 账单状态管理
├── contants/                # 常量定义
│   └── index.js            # 常量文件
├── router/                  # 路由配置
│   └── index.js            # 路由主配置
├── App.js                   # 主应用组件
├── index.js                 # 应用入口
├── index.css                # 全局样式
├── theme.css                # 主题样式
└── test.js                  # 测试文件
server/
└── data.json                # 模拟数据
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **Redux Toolkit** 1.9.3 - 状态管理
- **React Redux** 8.0.5 - React-Redux 绑定
- **Ant Design Mobile** 5.28.1 - 移动端 UI 组件库
- **React Router DOM** 6.9.0 - 路由管理
- **Axios** 1.3.4 - HTTP 客户端
- **Day.js** 1.11.7 - 日期处理库
- **Lodash** 4.17.21 - 工具函数库
- **Classnames** 2.3.2 - CSS 类名工具
- **Sass** 1.60.0 - CSS 预处理器
- **JSON Server** 0.17.3 - 模拟后端服务

## 🎨 功能特性

### 基础功能

- **账单管理** - 添加、查看账单记录
- **分类管理** - 收入和支出分类
- **时间筛选** - 按月份和年份筛选
- **数据展示** - 列表和统计展示

### 页面功能

- **新增页面** - 添加新的账单记录
- **月度页面** - 查看月度账单统计
- **年度页面** - 查看年度账单统计
- **布局组件** - 统一的页面布局

## 📚 核心概念

### 状态管理

使用 Redux Toolkit 进行状态管理：

```javascript
// store/modules/billStore.js
import { createSlice } from "@reduxjs/toolkit";

const billStore = createSlice({
  name: "bill",
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

### 组件设计

采用组件化设计模式：

```javascript
// pages/Month/components/DayBill/index.js
import React from "react";
import "./index.scss";

const DayBill = ({ date, bills }) => {
  return (
    <div className="day-bill">
      <div className="day-bill__date">{date}</div>
      <div className="day-bill__content">
        {bills.map((bill) => (
          <div key={bill.id} className="bill-item">
            {/* 账单项内容 */}
          </div>
        ))}
      </div>
    </div>
  );
};
```

## 🔧 开发指南

### 添加新功能

1. 在 `src/pages/` 目录下创建新页面组件
2. 在 `src/store/modules/` 中添加相关状态管理
3. 在 `src/router/index.js` 中配置路由
4. 更新导航菜单

### 样式开发

使用 Sass 和 BEM 命名规范：

```scss
// pages/Month/components/DayBill/index.scss
.day-bill {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;

  &__date {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
```

### 数据管理

使用 JSON Server 提供模拟数据：

```javascript
// server/data.json
{
  "bills": [
    {
      "id": 1,
      "type": "expense",
      "amount": 100,
      "category": "food",
      "date": "2024-01-01",
      "note": "午餐"
    }
  ]
}
```

## 📖 学习要点

通过这个项目，你将学会：

1. **React 基础** - React 组件和 Hooks 的使用
2. **状态管理** - Redux Toolkit 的使用方法
3. **移动端开发** - 移动端 UI 组件库的使用
4. **路由管理** - React Router 的配置和使用
5. **样式开发** - Sass 和 CSS 模块化开发
6. **项目结构** - React 项目的组织结构

## 🧪 测试

项目包含基础的测试配置：

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

# 构建后的文件在 build/ 目录
```

## 🔄 与完整版的区别

这个测试版本相比完整版：

- **功能简化** - 专注于核心功能的实现
- **代码结构** - 更简单的代码组织结构
- **学习导向** - 更适合学习和实验
- **测试友好** - 便于测试和调试

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
