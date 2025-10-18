# B 站评论系统 - 静态模版

这是一个 B 站评论系统的静态模版，展示了如何使用 React 构建评论界面的基础结构。适合学习 React 基础组件开发和静态页面构建。

## 🎯 项目特色

- **静态展示** - 专注于界面展示和组件结构
- **学习友好** - 适合 React 初学者学习
- **组件化设计** - 清晰的组件结构和代码组织
- **样式完整** - 完整的样式设计和布局
- **数据模拟** - 使用静态数据模拟真实场景

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

### 界面功能

- **评论展示** - 评论列表的静态展示
- **用户信息** - 用户头像和昵称显示
- **时间显示** - 评论时间格式化显示
- **回复展示** - 回复评论的展示
- **点赞显示** - 点赞数量的显示

### 组件结构

- **评论列表** - 评论列表容器组件
- **评论项** - 单个评论项组件
- **回复项** - 回复评论组件
- **用户信息** - 用户头像和昵称组件
- **操作按钮** - 点赞、回复等操作按钮

## 📚 核心概念

### 组件设计

```javascript
// 评论项组件
const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-item__avatar">
        <img src={comment.avatar} alt={comment.author} />
      </div>
      <div className="comment-item__content">
        <div className="comment-item__header">
          <span className="comment-item__author">{comment.author}</span>
          <span className="comment-item__time">{comment.time}</span>
        </div>
        <div className="comment-item__text">{comment.comment}</div>
        <div className="comment-item__actions">
          <button className="comment-item__like">👍 {comment.like}</button>
          <button className="comment-item__reply">回复</button>
        </div>
      </div>
    </div>
  );
};
```

### 数据展示

```javascript
// 评论列表组件
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentItem comment={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className="comment-replies">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
```

## 🔧 开发指南

### 添加新组件

1. 在 `src/App.js` 中创建新组件
2. 在 `src/App.scss` 中添加组件样式
3. 使用组件并传递必要的 props

### 样式开发

使用 Sass 和 BEM 命名规范：

```scss
// App.scss
.comment-list {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;

  &__item {
    display: flex;
    margin-bottom: 16px;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: white;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  &__author {
    font-weight: bold;
    margin-right: 8px;
    color: #333;
  }

  &__time {
    color: #999;
    font-size: 12px;
  }

  &__text {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #333;
  }

  &__actions {
    display: flex;
    gap: 16px;
  }

  &__action {
    cursor: pointer;
    color: #666;
    font-size: 12px;
    border: none;
    background: none;
    padding: 4px 8px;
    border-radius: 4px;

    &:hover {
      background-color: #f5f5f5;
      color: #1890ff;
    }
  }
}
```

### 数据管理

使用静态数据模拟真实场景：

```javascript
// _db.json
const mockComments = [
  {
    id: "1",
    author: "用户1",
    avatar: "/images/bozai.png",
    comment: "这是一条评论内容",
    time: "2024-01-01 12:00:00",
    like: 5,
    replies: [
      {
        id: "1-1",
        author: "用户2",
        avatar: "/images/bozai.png",
        comment: "这是一条回复",
        time: "2024-01-01 12:05:00",
        like: 2,
      },
    ],
  },
];
```

## 📖 学习要点

通过这个项目，你将学会：

1. **React 基础** - React 组件的基本使用
2. **组件设计** - 组件的设计和组织
3. **Props 传递** - 组件间数据传递
4. **条件渲染** - 条件渲染和列表渲染
5. **样式开发** - Sass 和 CSS 开发
6. **静态页面** - 静态页面的构建

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

## 🔄 与完整版的区别

这个静态模版相比完整版：

- **功能简化** - 只展示界面，不包含交互功能
- **学习导向** - 更适合学习 React 基础
- **代码简单** - 更简单的代码结构
- **静态展示** - 专注于静态页面展示

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
