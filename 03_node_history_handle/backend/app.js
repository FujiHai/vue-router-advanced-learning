const path = require("path");
// 导入处理 history 模式的模块
const history = require("connect-history-api-fallback");
// 导入 Express
const express = require("express");

const app = express();
// 注册处理 history 模式的中间件

// 开启 history 模式
app.use(history());

app.use(express.static(path.join(__dirname, "../dist")));

// 开启服务器,端口是 3000
app.listen(3000, () => {
  console.log("服务器开启,端口: 3000");
});
