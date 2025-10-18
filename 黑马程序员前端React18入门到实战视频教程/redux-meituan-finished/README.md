# Redux 美团外卖应用 - 完整版

这是一个基于 Redux 的美团外卖应用完整版，展示了如何使用 Redux 进行复杂应用的状态管理。项目模拟了真实的外卖应用功能，包括商品展示、购物车管理、订单处理等。

## 🎯 项目特色

- **Redux 状态管理** - 完整的 Redux 状态管理实现
- **复杂业务逻辑** - 购物车、订单、商品管理等复杂业务
- **组件化设计** - 高度模块化的组件结构
- **真实场景** - 模拟真实的外卖应用场景
- **性能优化** - Redux 性能优化最佳实践
- **用户体验** - 流畅的交互和动画效果

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

后端服务将在 [http://localhost:3004](http://localhost:3004) 启动。

### 其他命令

```bash
# 构建生产版本
yarn build

# 弹出配置（谨慎使用）
yarn eject
```

## 📁 项目结构

```
src/
├── components/               # 可复用组件
│   ├── NavBar/              # 导航栏组件
│   ├── Menu/                # 菜单组件
│   ├── FoodsCategory/       # 商品分类组件
│   │   └── FoodItem/        # 商品项组件
│   ├── Count/               # 数量控制组件
│   └── Cart/                # 购物车组件
├── store/                   # Redux Store
│   ├── index.js            # Store 配置
│   └── modules/            # Redux 模块
│       └── takeaway.js     # 外卖相关状态
├── App.js                   # 主应用组件
├── App.scss                 # 主应用样式
├── index.js                 # 应用入口
server/
└── data.json                # 模拟数据
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **Redux Toolkit** 1.9.2 - 状态管理
- **React Redux** 8.0.5 - React-Redux 绑定
- **Axios** 1.3.2 - HTTP 客户端
- **Classnames** 2.3.2 - CSS 类名工具
- **Lodash** 4.17.21 - 工具函数库
- **Sass** 1.58.0 - CSS 预处理器
- **JSON Server** 0.17.2 - 模拟后端服务

## 🎨 功能特性

### 核心功能

- **商品展示** - 商品列表和分类展示
- **购物车管理** - 添加、删除、修改商品数量
- **订单处理** - 订单生成和状态管理
- **用户交互** - 商品选择、数量调整等交互
- **数据同步** - 前后端数据同步

### 组件功能

- **导航栏** - 应用顶部导航
- **菜单组件** - 商品分类菜单
- **商品分类** - 按分类展示商品
- **商品项** - 单个商品的展示和操作
- **数量控制** - 商品数量的增减控制
- **购物车** - 购物车商品展示和管理

## 📚 核心概念

### Redux Store 设计

```javascript
// store/modules/takeaway.js
import { createSlice } from "@reduxjs/toolkit";

const takeawaySlice = createSlice({
  name: "takeaway",
  initialState: {
    foodsList: [],
    cartList: [],
    currentCategory: "",
    totalPrice: 0,
  },
  reducers: {
    setFoodsList: (state, action) => {
      state.foodsList = action.payload;
    },
    addToCart: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },
    updateCartItemCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) {
        item.count = count;
      }
    },
    calculateTotalPrice: (state) => {
      state.totalPrice = state.cartList.reduce((total, item) => {
        return total + item.price * item.count;
      }, 0);
    },
  },
});
```

### 组件与 Redux 连接

```javascript
// components/Cart/index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemCount,
} from "../../store/modules/takeaway";

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.takeaway.cartList);
  const totalPrice = useSelector((state) => state.takeaway.totalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateCount = (id, count) => {
    dispatch(updateCartItemCount({ id, count }));
  };

  return <div className="cart">{/* 购物车内容 */}</div>;
};
```

## 🔧 开发指南

### 添加新功能

1. 在 `src/components/` 目录下创建新组件
2. 在 `src/store/modules/takeaway.js` 中添加相关状态和 actions
3. 在组件中使用 `useSelector` 和 `useDispatch` 连接 Redux
4. 更新样式文件

### 状态管理最佳实践

- **状态规范化** - 使用规范化的数据结构
- **选择器优化** - 使用 `createSelector` 优化选择器性能
- **异步处理** - 使用 `createAsyncThunk` 处理异步操作
- **状态更新** - 使用 Immer 确保状态不可变性

### 样式开发

使用 Sass 和 BEM 命名规范：

```scss
// components/Cart/index.scss
.cart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #eee;

  &__header {
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;

    &--selected {
      background-color: #f5f5f5;
    }
  }
}
```

## 📖 学习要点

通过这个项目，你将学会：

1. **Redux 基础** - Redux 的核心概念和使用方法
2. **状态管理** - 复杂应用的状态管理策略
3. **组件设计** - 可复用组件的设计和实现
4. **性能优化** - Redux 应用的性能优化技巧
5. **业务逻辑** - 复杂业务逻辑的实现
6. **项目架构** - 大型 React 应用的架构设计

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

# 构建后的文件在 build/ 目录
```

## 🔄 与基础版本的区别

这个完整版相比基础版本：

- **功能完整** - 包含完整的外卖应用功能
- **状态复杂** - 更复杂的状态管理逻辑
- **组件丰富** - 更多的组件和交互
- **业务真实** - 更贴近真实业务场景

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
