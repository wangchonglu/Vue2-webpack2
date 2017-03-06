# Vue2 + webpack2 + Yarn 基础项目框架

本项目使用yarn替换传统的npm对包进行管理，yarn可以默认对依赖包锁定初次安装时对版本，解决传统方式下js包默认升级造成对依赖包版本不兼容对问题

## 运行步骤

``` bash
# 项目推荐使用yarn进行包管理，需要预先安装全局yarn
npm install yarn -g

# 安装依赖
yarn install

# 开发环境启动
npm run dev

# 线上环境代码打包
npm run build

```


## 目录结构
```
project
  ├─ build      webpack各环境配置文件
  ├─ config     全局环境配置
  ├─ src        项目源码
  │  ├─ assets  静态资源，全局css、image
  │  ├─ base    基础类
  │  │  └─ BaseComponent  组件基类
  │  │  └─ BaseDialog     模态窗口基类
  │  │  └─ BasePage       普通窗口基类
  │  ├─ toolBus           工具模块
  │  │  └─ Http           http请求封装类
  │  │  └─ Date           日期处理封装类
  │  │  └─ ...
  │  ├─ components        独立组件
  │  │  ├─ Alert          提示框
  │  │  ├─ Confirm        确认框
  │  │  ├─ Dialogs        模态窗口
  │  │  ├─ Footer         底部
  │  │  ├─ Header         头部
  │  │  ├─ Loading        加载等待框
  │  │  ├─ Log            日志组件
  │  │  └─ .....
  │  └─ config            基本配置文件
  │  │  ├─ dev            开发环境配置
  │  │  └─ index          入口
  │  │  └─ prod           生产环境配置
  │  └─ extends           Vue扩展
  │  │  ├─ directives     全局指令
  │  │  └─ Filters        全局过滤器
  │  │  └─ ...
  │  └─ router            路由
  │  │  ├─ PageLoad       页面路由加载处理
  │  │  └─ routers        路由配置
  │  │  └─ ...
  │  └─ views             业务模块
  │  │  ├─ dialogs        默认存放弹框业务页面
  │  │  └─ **.vue         业务模块页面
  │  │  └─ ...
  │  └─ App.vue           根组件
  │  └─ main.js           程序入口
  ├─ .babelrc             babel配置--编译es6
  ├─ .editorconfig        管理不同开发者不同编辑器的编码规范
  ├─ .eslintignore        eslint代码规范忽略文件
  ├─ .eslintrc.js         eslint代码规范配置文件
  ├─ .gitignore           git忽略的文件
  ├─ .index.html          单页应用程序入口页面
  ├─  package.json        项目描述与依赖配置
  ├─  README.md           项目使用描述
  ├─  yarn.lock           Yarn包管理版本锁定配置文件
  ├─  yarn-error.log      Yarn安装错误信息
  ...
```

## 相关资料
###### [Vue](http://cn.vuejs.org/)
###### [vux组件库](https://vux.li/#/)
###### [Vue webpack](http://vuejs-templates.github.io/webpack/)
###### [vue-loader](http://vuejs.github.io/vue-loader)
###### [webpack](https://webpack.js.org/)
###### [zepto](https://github.com/victorisildur/zepto-webpack)
###### [Yarn](https://yarnpkg.com/en/docs/usage)




