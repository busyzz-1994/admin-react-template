## 线上参考地址

[react-admin-template](https://busyzz-1994.github.io/admin-react-template)

## 准备工作

- 使用 `vscode 编辑器`
- 安装 `EditorConfig for VS Code 插件` 统一代码风格 ，具体配置查看 `.editorconfig` 文件
- 安装 `Prettier 插件` 自动格式化代码
- 安装 `ESlint 插件` 对代码进行校验，如果需要修改 eslint 规则，修改 `package.json -> eslintConfig -> rules`

## 主要依赖项

- 基于 [typescript](https://www.typescriptlang.org/) 开发
- 打包、开发环境基于 [create-react-app](https://create-react-app.dev/docs/documentation-intro/)
- UI 组件使用 [antd-design v4](https://ant.design/docs/react/introduce-cn)
- 样式主要使用 [scss](https://www.sass.hk/docs/)
- 请求库 [umi—request](https://github.com/umijs/umi-request)

## 快速开始

### `clone`

git clone git@github.com:busyzz-1994/admin-react-template.git

### `install and run `

yarn install

yarn start

启动完成以后 访问 [http://localhost:3000/](http://localhost:3000/)

### `build and analyz`

yarn build

构建以后会在根目录下生成 `build` 目录

yarn analyz

对打包后的文件进行分析

## 环境相关

### `环境变量`

如果需要使用环境变量，可以在 `.env` 文件下设置, 设置完成以后可以使用`process.env.XXX` 访问, 如果需要在客户端的代码中访问环境变量，那么变量名称必须以 `REACT_APP_` 开头，如 `REACT_APP_VERSION` ,只有以 `REACT_APP_` 开头的环境变量会使用到 [webpack.DefinePlugin](https://v4.webpack.docschina.org/plugins/define-plugin/),具体配置请查看 [create-react-app](https://create-react-app.dev/docs/documentation-intro/)

### `不同环境下的环境变量`

在开发、生成环境中，使用到的环境变量可能会不同，如 `PUBLIC_URL` , 不同的环境变量可以在 `.env-cmdrc.js` 中配置

```js
{
  // 生产环境变量
  prod: {
    PUBLIC_URL: '/admin-react-template',
  },
  // 开发环境变量
  dev: {
    PUBLIC_URL: '',
  },
}
```

### `请求代理`

在开发中经常会遇到请求跨域的问题，在 `src/setupProxy.js` 中可以设置请求代理

```js
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // 对应的请求地址
      changeOrigin: true,
    })
  );
};
```

## css 相关

以 `.scss` 结尾的为全局样式, 以 `.module.scss` 结尾的使用 css-modules

## 目录相关 （认真阅读）

```js
|-- APP
    |-- .editorconfig // 编辑器配置
    |-- .env // 配置环境变量
    |-- .env-cmdrc.js // 配置不同环境下的环境变量
    |-- .gitignore // git忽略文件
    |-- .npmrc // npm下载源 设置的taobao镜像
    |-- .prettierrc // 代码格式化配置文件
    |-- .travis.yml // travis配置文件
    |-- README.md // 文档
    |-- package.json
    |-- tsconfig.json // ts配置文件
    |-- yarn.lock
    |-- build // 打包生成的文件
    |-- config // webpack配置相关文件
    |-- public // 静态资源文件
    |-- scripts // npm 执行脚本文件 包含 start 和 build
    |-- src
        |-- App.tsx // 应用入口文件
        |-- index.tsx // 入口文件引入初始化依赖
        |-- react-app-env.d.ts // typescript类型声明文件
        |-- setupProxy.js // 请求代理配置文件
        |-- assets // 资源文件夹 存放图片、字体等
        |-- components // 公共组件
        |   |-- biz // 业务相关组件
        |   |-- ui // UI相关组件
        |-- config // 配置相关
        |   |-- layout.tsx // 布局相关配置
        |   |-- routes.tsx // 路由配置
        |   |-- routesPath.tsx // 路由对应的path路径
        |-- hooks // 自定义hooks
        |-- layout // 页面布局相关
        |-- pages // 页面文件
        |-- polyfill // polyfill 兼容 ie 11
        |-- service // 请求接口
        |-- styles // 样式相关文件
        |   |-- antd-reset.scss  // 重置antd默认样式
        |   |-- index.scss // 入口
        |   |-- motion.scss // 动画相关
        |   |-- variables.scss // 变量
        |-- typings
        |   |-- global.d.ts // window下的typescript类型设置
        |-- utils // 工具类文件
```
