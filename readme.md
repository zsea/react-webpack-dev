一个自用的webpack+react的开发环境。

支持以下功能：

* 热加载
* less
* react
* ES6
* async/await
* sass
* postcss
* npm-install-webpack-plugin *自动安装依赖的npm包*

### loaders

*  babel-loader
*  css-loader
*  file-loader
*   json-loader
*   less-loader
*   postcss-loader
*   raw-loader
*   sass-loader
*   style-loader
*   url-loader

### 目录说明

* src:源代码所在目录
* templates:生成的html代码所在目录
* dist:目录代码所在目录

### 文件说明

* src/index.js：项目入口文件
* templates/index.ejs：项目主页面html模版。

### 命令

* npm run dev：启动开发环境，可以在浏览器中查看效果。<http://127.0.0.1:3000>
* npm run build：生成目标代码

### 快速开始

使用以下命令快速帮你开始搭建开发环境：

1. `git clone https://github.com/zsea/react-webpack-dev.git [dist]`    *//dist为你在本地所需要命名用的目录，为的话使用仓库名称。*

2. `cd [dist]`  *//进入刚才生成的目录*

3. 若你的开发环境不使用git进行管理，可以直接删除`.git`目录，若你只使用本地仓库，可以移除远程仓库：`git remote rm origin`，若你要把代码push到自己的远程仓库，可以修改远程仓库地址：`git remote set-url origin git@localhost:/srv/**.git`。

**设置完后，你可以使用`git push`命令。**

### 参考资料

* [手把手教你基于ES6架构自己的React Boilerplate项目](https://segmentfault.com/a/1190000005037309)

***pageake.json中所包含的文件随时保持更新***
