# B 站评论系统 - 完整版

这是一个模拟 B 站评论系统的完整版应用，展示了如何使用 React 构建复杂的评论功能，包括评论列表、回复、点赞、删除等完整功能。

## 🎯 项目特色

- **完整评论功能** - 评论、回复、点赞、删除等完整功能
- **真实场景模拟** - 模拟真实的 B 站评论系统
- **交互丰富** - 丰富的用户交互和反馈
- **数据管理** - 完整的数据增删改查功能
- **用户体验** - 流畅的交互和动画效果
- **响应式设计** - 适配不同屏幕尺寸

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

# 运行测试
yarn test

# 弹出配置（谨慎使用）
yarn eject
```

## 📁 项目结构

```
src/
├── images/                   # 图片资源
│   └── bozai.png            # 头像图片
├── App.js                   # 主应用组件
├── App.scss                 # 主应用样式
├── index.js                 # 应用入口
├── _db.json                 # 数据配置文件
db.json                      # 评论数据文件
```

## 🛠️ 技术栈

- **React** 18.2.0 - 前端框架
- **Axios** 1.5.1 - HTTP 客户端
- **Day.js** 1.11.10 - 日期处理库
- **Lodash** 4.17.21 - 工具函数库
- **Classnames** 2.3.2 - CSS 类名工具
- **Sass** 1.57.1 - CSS 预处理器
- **UUID** 9.0.1 - 唯一标识符生成
- **JSON Server** 0.17.3 - 模拟后端服务

## 🎨 功能特性

### 核心功能

- **评论展示** - 评论列表展示和分页
- **评论发布** - 发布新评论
- **回复功能** - 对评论进行回复
- **点赞功能** - 评论点赞和取消点赞
- **删除功能** - 删除自己的评论
- **时间显示** - 评论时间格式化显示
- **用户信息** - 用户头像和昵称显示

### 交互功能

- **实时更新** - 评论实时更新和同步
- **状态管理** - 评论状态的管理和更新
- **数据验证** - 输入数据的验证和处理
- **错误处理** - 完善的错误处理机制

## 📚 核心概念

### 数据结构

```javascript
// 评论数据结构
const comment = {
  id: "uuid",
  author: "用户名",
  comment: "评论内容",
  time: "2024-01-01 12:00:00",
  like: 0,
  isLike: false,
  replies: [
    {
      id: "uuid",
      author: "回复者",
      comment: "回复内容",
      time: "2024-01-01 12:05:00",
      like: 0,
      isLike: false,
    },
  ],
};
```

### 状态管理

```javascript
// 评论状态管理
const [commentList, setCommentList] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// 添加评论
const addComment = (newComment) => {
  setCommentList((prev) => [newComment, ...prev]);
};

// 删除评论
const deleteComment = (id) => {
  setCommentList((prev) => prev.filter((item) => item.id !== id));
};

// 点赞评论
const likeComment = (id) => {
  setCommentList((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            like: item.isLike ? item.like - 1 : item.like + 1,
            isLike: !item.isLike,
          }
        : item
    )
  );
};
```

## 🔧 开发指南

### 添加新功能

1. 在 `src/App.js` 中添加新的状态和方法
2. 更新 UI 组件以支持新功能
3. 在 `src/App.scss` 中添加相关样式
4. 更新数据模型以支持新功能

### 样式开发

使用 Sass 进行样式开发：

```scss
// App.scss
.comment-list {
  padding: 16px;

  &__item {
    display: flex;
    margin-bottom: 16px;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 8px;

    &--reply {
      margin-left: 40px;
      background-color: #f9f9f9;
    }
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
  }

  &__content {
    flex: 1;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  &__author {
    font-weight: bold;
    margin-right: 8px;
  }

  &__time {
    color: #999;
    font-size: 12px;
  }

  &__text {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    gap: 16px;
  }

  &__action {
    cursor: pointer;
    color: #666;
    font-size: 12px;

    &:hover {
      color: #1890ff;
    }

    &--liked {
      color: #ff4d4f;
    }
  }
}
```

### 数据管理

使用 JSON Server 提供模拟数据：

```javascript
// db.json
{
  "comments": [
    {
      "id": "1",
      "author": "用户1",
      "comment": "这是一条评论",
      "time": "2024-01-01 12:00:00",
      "like": 5,
      "isLike": false,
      "replies": []
    }
  ]
}
```

## 📖 学习要点

通过这个项目，你将学会：

1. **React 基础** - React 组件和状态管理
2. **数据管理** - 复杂数据的增删改查
3. **用户交互** - 丰富的用户交互实现
4. **状态更新** - 复杂状态更新的处理
5. **组件设计** - 可复用组件的设计
6. **样式开发** - Sass 和 CSS 模块化开发

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

## 🔄 与静态模版的区别

这个完整版相比静态模版：

- **功能完整** - 包含完整的评论功能
- **交互丰富** - 更多的用户交互
- **数据管理** - 完整的数据管理功能
- **状态更新** - 实时状态更新

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
