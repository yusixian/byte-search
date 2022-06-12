# 搜索引擎项目

## 启动项目

本项目需要 [Node.js](https://nodejs.org/zh-cn/) 环境

可输入`node -v` 查看是否安装 node.js，若未安装，可至此处下载：[Node.js](https://nodejs.org/zh-cn/)

如未安装，可通过如下命令来安装 node.js

```bash
# 下载依赖
npm install
# 启动项目
npm start
```

启动后自动打开，运行在 http://localhost:3000

可通过根目录的 `.env` 更改运行端口

# 目录结构

```
├───public          静态资源目录
├───src             源码目录
    ├───global.css  全局CSS样式
    ├───index.tsx
    │
    ├───@types      全局type
    ├───components  通用组件
    ├───hooks       自定义Hooks
    ├───lib
    │   ├───lowcode-editor      低代码编辑器
    │   ....
    ├───pages       独立页面
    │   ├───App
    │   ├───Login
    │   ├───ProjectEditor
    │   ├───ProjectList
    │   └───UserHome
    ├───redux       redux逻辑
    ├───route       路由
    ├───service     网络接口
    └───util        实用工具
```

# npm 脚本

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
