# 大致的project structure思路

* /app: 放置前端代码的地方
  * actions: 放置actions
  * reducers: 放置reducers
  * config: 配置，比如API.js
  * layouts: 根据router配置放container
  * components: 各种presentational组件
  * middlewares: 各种功能的middleware，比如logger之类
  * routes: route也切开来吧
  * utils: 各种utility，比如jQuery Alert
  * index.js: 主入口

** OR **

按照component区分

* /app: 放置前端代码的地方
  * work: 作品组件
    * actions:
    * reducers:
    * layouts:
  * grapher: 摄影师组件
  * user: 用户组件
  * common: 通用组件
  * util: 工具类
  * config:
  * index.js: 主入口
