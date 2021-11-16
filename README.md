# 使用文档

该应用采用 [ofajs](https://ofajs.com/) 开发；相关使用方法可[查阅文档](https://ofajs.com/)；

## 启动

运行在 静态服务器 或 静态 Blocklets 上；

以下流程默认先安装好 nodejs 相关环境；

### 静态 Blocklets 启动

1. 配置好 [abtnode](https://docs.arcblock.io/abtnode/zh/developer/config-dev-env) 并启动环境；
2. 安装 [blocklet-cli](https://docs.arcblock.io/abtnode/en/developer/blocklet-cli)
3. 在当前目录下使用 `blocklet dev .` 启动开发模式;
4. 进入 Blocklet 列表页面查看并进入应用;

### 部署到静态服务器上

直接部署到你的静态服务器上测试，`index.html` 为应用入口页；

### 项目内的静态服务器启动

该项目默认准备了一套静态环境，在 `scripts/`文件夹内，可以直接运行 `npm run dev` 查看；

## 构建

不需要构建项目，修改源代码后，刷新页面即可更新代码； 

刷新后若没更新代码，需取消静态服务器的缓存相关的header；

## 测试项目

<!-- 运行 `npm run test`; -->

包含两个关键组件的测试和app测试；页面打印条目为绿色即可；

在构建 静态服务器 获 静态Blocklets 的相对地址上；直接访问 [`test.html`](test.html) 总览测试；

或直接点击 [在线测试](https://kirakiray.github.io/ofa-blocklet/test.html) 查看;

### block-transcation

单条transcation数据展示组件

相对地址：comps/block-transcation/block-transcation-test.html

### transaction

多条transcation数据展示组件  

相对地址：comps/transactions-show/transaction-show-test.html

### test-app

app应用测试；

相对地址：test-app.html