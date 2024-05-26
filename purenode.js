// 加载 HTTP 模块
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
    // 用 HTTP 状态码和内容类型（Content-Type）设置 HTTP 响应头
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    // 发送响应体
    res.end("Hello World\n");
});

// 监听 3000 端口的请求，注册一个回调函数记录监听开始
server.listen(port, hostname, () => {
    console.log(`服务器运行于 http://${hostname}:${port}/`);
});
