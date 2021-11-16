const { PureServer } = require("./PureServer");

let serverObj = new PureServer();

// 设置监听端口
serverObj.listen = 10826;

// 设置静态目录
serverObj.setStatic("/", process.cwd() + "/");