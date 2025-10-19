import { defineConfig } from "vite";

export default defineConfig({
  // 指定入口文件
  root: "./src",

  // 构建配置
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/index.html",
      },
    },
  },

  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
  },

  // 解析配置
  resolve: {
    extensions: [".ts", ".js"],
  },
});
