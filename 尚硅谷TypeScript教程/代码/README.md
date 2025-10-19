# 尚硅谷 TypeScript 教程 - 代码示例

https://www.bilibili.com/video/BV1Xy4y1v7S2/?spm_id_from=333.1391.0.0&p=13&vd_source=8c2d9b1c8368cfb27cf3c0cafb615e97

本目录包含尚硅谷 TypeScript 教程的所有代码示例和练习项目。

## 📁 目录结构

### Chapter01 - TypeScript 快速入门

- **part1/**: 基础语法示例

  - `01_helloTS.ts` - Hello TypeScript 入门
  - `02_basis.ts` - TypeScript 基础语法
  - `03_types.ts` - 类型系统介绍
  - `04_types.ts` - 高级类型
  - `index.html` - 浏览器运行示例

- **part2/**: TypeScript 编译配置

  - `src/` - TypeScript 源码
  - `dist/` - 编译后的 JavaScript 文件
  - `tsconfig.json` - TypeScript 配置文件

- **part3/**: Webpack 集成项目
  - `src/` - 源码目录
  - `dist/` - 打包输出目录
  - `webpack.config.js` - Webpack 配置
  - `package.json` - 项目依赖配置

### Chapter02 - 面向对象编程

- **part1/**: 面向对象基础概念

  - `01_类的简介.ts` - 类的定义和使用
  - `02_构造函数.ts` - 构造函数详解
  - `03_继承.ts` - 类的继承
  - `04_super.ts` - super 关键字
  - `05_抽象类.ts` - 抽象类概念
  - `06_接口.ts` - 接口定义和使用
  - `07_属性的封装.ts` - 属性封装
  - `08_泛型.ts` - 泛型编程

- **part2/**: 综合项目 - 贪吃蛇游戏
  - `src/moduls/` - 游戏模块
    - `GameControl.ts` - 游戏控制器
    - `Snake.ts` - 蛇类
    - `Food.ts` - 食物类
    - `ScorePanel.ts` - 计分面板
  - `src/style/` - 样式文件
  - `webpack.config.js` - 项目打包配置

## 🚀 运行说明

1. **基础示例**: 直接在浏览器中打开 `index.html` 文件
2. **编译项目**: 使用 `tsc` 命令编译 TypeScript 文件
3. **Webpack 项目**: 运行 `npm install` 安装依赖，然后使用 `npm start` 启动

## 📚 学习建议

- 按照章节顺序学习，从基础语法到面向对象编程
- 每个示例都包含详细注释，建议仔细阅读
- 动手实践每个代码示例，加深理解
- 最后通过贪吃蛇项目综合运用所学知识
