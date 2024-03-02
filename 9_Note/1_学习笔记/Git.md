### Git
  #### Git配置用户信息
  - 配置：用户名和邮箱，应用在每次提交代码版本时表面自己的身份
  - 命令：
    ```
    git config --global user.name "Your Name"
    git config --global user.email "email@example.com"
    ```
  - 注意：
    - 配置的用户信息，对当前用户的所有仓库有效
    - 如果要对特定仓库配置用户信息，则去掉--global参数
    - 配置的用户信息，在提交代码时会自动添加到版本信息中
  
  #### 掌握Git仓库
  - Git仓库（repository）：记录文件状态内容的地方，存储着修改的历史记录
  - 创建
    1. 把本地文件转换成Git仓库：命令 `git init`
    2. 从其他服务器上克隆Git仓库
  
  #### Git的三个区域
  - Git使用时：
    - 工作区：实际开发时操作的文件夹
    - 暂存区：保存之前的准备区域
    - 版本库：提交并保存暂存区中的内容，产生一个版本记录
  - 三个区域的关系：
    - 工作区 -`git add`-> 暂存区 -`git commit`-> 版本库
  - 命令
  ![Git的三个区域的命令](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git的三个区域的命令.png)

  #### Git 文件状态
  - Git文件2种状态：
    - 未跟踪：新文件，从未被Git管理过
    - 已跟踪：Git已经知道和管理的文件
  - 文件状态：
  ![Git文件状态](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git文件状态.png)
  - 查看文件状态：
    - 命令：`git status`
    - 结果：
      - 红色：未跟踪
      - 绿色：已跟踪
  
  #### Git暂存区使用
  - 暂存区：暂时存储，可以临时恢复代码内容，与版本库解耦
  - 查看暂存区：`git ls-files -s`
  - 暂存区 --> 覆盖 --> 工作区，命令： `git restore 目标文件` （注意：完全确认覆盖时使用）
  - 从暂存区移除：命令：`git rm --cached 目标文件`
  - Git各个区域关系图：
  ![Git各个区域关系图](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git各个区域关系图.png)
  
  #### Git版本库使用
  - 版本库：保存文件状态内容，提交并保存暂存区中的内容，产生一个版本记录
  - 查看提交历史：`git log --oneline` 和 `git reflog --oneline`
  - 回退命令：
    - `git reset --soft 版本号（其他文件未跟踪）`
    - `git reset --hard 版本号`
    - `git reset --mixed 版本号（与 git reset 等价）`

  #### 忽略文件
  - 概念：.gitignore 文件可以让 git 彻底忽略跟踪指定文件
  - 目的：让 git 仓库更小更快，避免重复无意义的文件管理
  - 例如：
    1. 系统或软件自动生成的文件
    2. 编译产生的结果文件
    3. 运行时生成的日志文件，缓存文件，临时文件等
    4. 涉密文件，密码，秘钥等文件
  - 创建：
    1. 项目根目录新建 .gitignore 文件
    2. 填入相应配置来忽略指定文件
  - 注意：如果文件已经被暂存区跟踪过，可以从暂存区移除即可
  ![Git忽略文件](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git忽略文件.png)

  #### 分支
  - 概念：本质上是指向提交节点的可变指针，默认名字是 master
  - 查看分支: `git branch`
  - 注意：HEAD 指针影响工作区/暂存区的代码状态
  - 场景：开发新需求 / 修复 Bug，保证主线代码随时可用，多人协同开发提高效率
  - 例如：
    - 在现有代码上创建新分支完成内容列表业务
    - 突然需要紧急修复 Bug - 单独创建分支解决 Bug

  #### 分支例子： 
  - 需求：创建内容列表 content 分支，并产生 3 次提交记录
  - 步骤：
    1. 创建分支命令：`git branch 分支名`
    2. 切换分支命令：`git checkout 分支名`
    3. 工作区准备代码并暂存提交，重复 3 次

  #### 分支-合并与删除
  - 需求：把 login-bug 合并回到 master 分支并删除 login-bug 分支
  - 步骤：
    1. 切回到要合入的分支上：`git checkout master`
    2. 合并其他分支过来：`git merge login-bug`
    3. 删除合并后的分支指针：`git branch -d login-bug`

  #### 分支-合并与提交
  - 合并提交：发生于原分支产生了新的提交记录后，再合并回去时发生，自动使用多个快照记录合并后产生一次新的提交
  - 步骤：
    1. 切回到要合入的分支上：`git checkout master`
    2. 合并其他分支过来：`git merge content`
    3. 删除合并后的分支：`git branch -d content`

  #### Git远程仓库
  - 需求：创建远程版本库，并把本地 Git 仓库推送上去保存
  - 步骤：
    1. 注册第三方托管平台网站账号
    2. 新建仓库得到远程仓库 Git 地址
    3. 本地 Git 仓库添加远程仓库原点地址
       - 命令：`git remote add 远程仓库别名 远程仓库地址`
       - 例如：`git remote add origin https://gitee.com/lidongxu/work.git`
    4. 本地 Git 仓库推送版本记录到远程仓库
       - 命令：`git push -u 远程仓库别名 本地和远程分支名`
       - 例如：`git push -u origin master`
       - 完整写法：`git push --set-upstream origin master:master`

  #### Git 远程仓库-克隆
  - 克隆：拷贝一个 Git 仓库到本地，进行使用
  - 命令：git clone 远程仓库地址，例如：git clone https://gitee.com/lidongxu/work.git
  - 效果：在运行命令所在文件夹，生成 work 项目文件夹（包含版本库，并映射到暂存区和工作区）
  - 注意1：Git 本地仓库已经建立好和远程仓库的链接
  - 注意2：仓库公开随意克隆，推送需要身为仓库团队成员

### 常用命令
  - 常用命令
  ![Git](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git.png)
  ![Git](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git-1.png)
  - 远程仓库
  ![Git远程仓库](../../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git远程仓库.png)