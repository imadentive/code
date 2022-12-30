# 说明

《TypeScript 编程》第2章 例子: 从零开始创建一个TypeScript项目

1. 初始化一个新的npm项目

  ```bash
  npm init
  ```

2. 安装TSC、TSLint和NodeJS的类型声明

  ```bash
  npm install --save-dev typescript tslint @types/node
  ```

3. 新建tsconfig.json

   ```bash
     touch tsconfig.json
   ```

4. 自动初始化一个tsling.json

   ```bash
   ./node_modules/.bin/tslint --init
   ```

5. 编译并运行

   ```bash
   ./node_modules/.bin/tsc
   ```

   ```bash
   node ./dist/index.js
   ```

6. 🎉 捷径

   1. ts-node：https://www.npmjs.com/package/ts-node

   2. typescript-node-starter：https://github.com/Microsoft/TypeScript-Node-Starter

