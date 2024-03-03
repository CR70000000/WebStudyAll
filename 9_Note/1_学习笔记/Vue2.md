### Vue入门
  #### Vue 是什么
  - 概念：Vue是一个用于 构建用户界面 的渐进式 JavaScript框架。
  - Vue的两种使用方式：
    1. Vue核心包开发
    - 场景：局部模块改造
    2. Vue核心包&Vue插件工程化开发
    - 场景：整站开发

  #### 创建Vue实例，初始化渲染
  ![Vue使用](../../4_Vue/2_images/Vue使用.png)
  1. 准备容器（Vue所管理的范围）
  2. 引包（开发版本包/生产版本包）官网
  3. 创建实例
  4. 添加配置项 -> 完成渲染
      ```js
      // 一旦引入了VueJS核心包，在全局环境，就有了Vue构造函数
      const app = new Vue({
        // 通过el配置选择器，指定Vue管理的是哪个盒子
        el: '#app',
        // 通过data提供数据
        data: {
          msg: 'Hello Vue!'
        }
      })
      ```

  #### 插值表达式
  - 概念：插值表达式是Vue模板中最常见的语法，用于向页面输出数据。
  - 语法：`{{ 表达式 }}`
    ```html
    <div id="app">
      {{ msg }}
    </div>

    <script>
      data:{
        msg: 'Hello Vue!'
      }
    </script>
    ```
  - 注意：
    1. 使用的数据必须存在（data）
    2. 支持的是表达式，而非语句
    3. 不能在标签属性中使用插值表达式

  #### Vue 核心特性：响应式
  - 响应式：数据变化，视图自动更新
  - 如何访问 or 修改？data中的数据, 最终会被添加到实例上
    1. 访问数据： "实例.属性名"
    2. 修改数据： "实例.属性名" = "值"

### Vue指令
  #### Vue指令
  - Vue 会根据不同的【指令】，针对标签实现不同的【功能】
  - 指令：带有 v- 前缀 的 特殊 标签属性

  #### Vue 指令 v-show vs v-if
  - v-show
    1. 作用： 控制元素显示隐藏
    2. 语法： v-show = "表达式" 表达式值 true 显示， false 隐藏
    3. 原理： 切换 display:none 控制显示隐藏
    4. 场景： 频繁切换显示隐藏的场景
  - v-if
    1. 作用： 控制元素显示隐藏（条件渲染）
    2. 语法： v-if = "表达式" 表达式值 true 显示， false 隐藏
    3. 原理： 基于条件判断，是否 创建 或 移除 元素节点
    4. 场景： 要么显示，要么隐藏，不频繁切换的场景

  #### Vue 指令 v-else v-else-if
  1. 作用： 辅助 v-if 进行判断渲染
  2. 语法： v-else v-else-if = "表达式"
  3. 注意： 需要紧挨着 v-if 一起使用

  #### Vue 指令 v-on
  1. 作用： 注册事件 = 添加监听 + 提供处理逻辑
  2. 语法：
     - `v-on:事件名 = "内联语句"`
     - `v-on:事件名 = "methods中的函数名"`
  3. 简写：`@事件名`
  4. 注意：methods函数内的 this 指向 Vue 实例

  #### Vue 指令 v-on 调用传参
  ```html
  <button @click="btnClick(10)">按钮</button>
  <button @click="btnClick(5)">按钮</button>

  <script>
    data:{
      price: 100
    },
    methods:{
      btnClick(num){
        this.price -= num
      }
    }
  </script>
  ```

  #### Vue 指令 v-bind
  1. 作用： 动态的设置html的标签属性 → src url title ... 
  2. 语法： `v-bind:属性名="表达式"`
  3. 注意： 简写形式 `:属性名="表达式"`

  #### v-bind 对于样式控制的增强
  - 为了方便开发者进行样式控制， Vue 扩展了 v-bind 的语法，可以针对 class 类名 和 style 行内样式进行控制。
  - 语法 :class = "对象/数组"
    1. 对象 → 键就是类名，值是布尔值。如果值为 true，有这个类，否则没有这个类
        ```html
        <div class="box" :class="{ 类名:布尔值, 类名:布尔值, ...}"></div>
        ```
    - 适用场景：一个类名，来回切换
    2. 数组 → 数组中所有的类，都会添加到盒子上，本质就是一个 class 列表
        ```html
        <div class="box" :class="[ 类名1,类名2,...]"></div>
        ```
    - 适用场景：批量添加或删除类

  #### v-bind 对于样式控制的增强 - 操作style
  - 语法 :style = "样式对象"
    ```html
    <div class="box" :style="{ CSS属性名1: CSS属性值, CSS属性名2: CSS属性值 }"></div>
    ```
  - 适用场景：某个具体属性的动态设置

  #### Vue 指令 v-for
  1. 作用： 基于数据循环， 多次渲染整个元素 → 数组、对象、数字...
  2. 遍历数组语法：
     - `v-for = "(item, index) in 数组"`
     - item 每一项， index 下标
     - 省略 index: `v-for = "item in 数组"`

  #### v-for 中的 key
  - v-for 的默认行为会尝试 原地修改元素 （就地复用）
  - key作用：给元素添加的唯一标识，便于Vue进行列表项的正确排序复用。
  - 注意点：
    1. key 的值只能是 字符串 或 数字类型
    2. key 的值必须具有 唯一性
    3. 推荐使用 id 作为 key（唯一），不推荐使用 index 作为 key（会变化，不对应）

  #### Vue 指令 v-model
  - 作用: 给 表单元素 使用, 双向数据绑定 → 可以快速 获取 或 设置 表单元素内容
    1. 数据变化 → 视图自动更新
    2. 视图变化 → 数据自动更新
  - 语法: `v-model = '变量'`

  #### v-model 应用于其他表单元素
  - 常见的表单元素都可以用 v-model 绑定关联 → 快速 获取 或 设置 表单元素的值
  - 它会根据 控件类型 自动选取 正确的方法 来更新元素
    ```txt
    输入框 input:text → value
    文本域 textarea → checked
    复选框 input:checkbox → value
    单选框 input:radio → value
    下拉菜单 select → value
    ...
    ```

  #### 综合案例 - 小黑记事本 - 功能总结：
  1. 列表渲染：
     - v-for key 的设置 {{ }} 插值表达式
  2. 删除功能
     - v-on 调用传参 filter 过滤 覆盖修改原数组
  3. 添加功能
     - v-model 绑定 unshift 修改原数组添加
  4. 底部统计 和 清空
     - 数组.length累计长度
     - 覆盖数组清空列表
     - v-show 控制隐藏

  #### 指令修饰符
  - 通过 "." 指明一些指令 后缀，不同 后缀 封装了不同的处理操作 → 简化代码
  1. 按键修饰符
     - `@keyup.enter` → 键盘回车监听
  2. v-model修饰符
     - `v-model.trim` → 去除首尾空格
     - `v-model.number` → 转数字
  3. 事件修饰符
     - `@事件名.stop` → 阻止冒泡
     - `@事件名.prevent` → 阻止默认行为

### computed 计算属性
  #### 计算属性
  - 概念：基于现有的数据，计算出来的新属性。 依赖的数据变化，自动重新计算。
  - 语法：
    1. 声明在 computed 配置项中，一个计算属性对应一个函数
    2. 使用起来和普通属性一样使用` {{ 计算属性名 }}`
        ```js
        computed: {
          计算属性名 () {
            基于现有数据，编写求值逻辑
            return 结果
          }
        }
        ```

  #### computed 计算属性 vs methods 方法
  - computed 计算属性：
    - 作用：封装了一段对于数据的处理，求得一个结果。
    - 语法：
      1. 写在 computed 配置项中
      2. 作为属性，直接使用 → this.计算属性 {{ 计算属性 }}
  - methods 方法：
    - 作用：给实例提供一个方法，调用以处理业务逻辑。
    - 语法：
      1. 写在 methods 配置项中
      2. 作为方法，需要调用 → this.方法名( ) {{ 方法名() }} @事件名="方法名"
  - computed 计算属性 有 缓存特性（提升性能）：
    - 计算属性会对计算出来的结果缓存，再次使用直接读取缓存，
    - 依赖项变化了，会自动重新计算 → 并再次缓存

  #### 计算属性完整写法
  - 计算属性默认的简写，只能读取访问，不能 "修改"。
  - 如果要 "修改" → 需要写计算属性的完整写法。
    ```js
    computed: {
      计算属性名: {
        get() {
          一段代码逻辑（计算逻辑）
          return 结果
        },
        set(修改的值) {
          一段代码逻辑（修改逻辑）
        }
      }
    }
    ```

### watch 侦听器
  #### watch 侦听器
  - 作用：监视数据变化，执行一些 业务逻辑 或 异步操作。
  - 语法：
    1. 简单写法 → 简单类型数据，直接监视
        ```js
        data: { 
          words: '苹果',
          obj: {
            words: '苹果'
          }
        },
        watch: {
          // 该方法会在数据变化时，触发执行
          数据属性名 (newValue, oldValue) {
            一些业务逻辑 或 异步操作。
          },
          '对象.属性名' (newValue, oldValue) {
            一些业务逻辑 或 异步操作。
          }
        }
        ```
    2. 完整写法 → 添加额外配置项
       1. `deep: true` 对复杂类型深度监视
       2. `immediate: true` 初始化立刻执行一次handler方法
        ```js
        data: {
          obj: {
            words: '苹果',
            lang: 'italy'
          },
        },
        watch: {// watch 完整写法
          数据属性名: {

            deep: true, // 深度监视
            immediate: true, // 是否立刻执行一次handler
            
            handler (newValue) {
              console.log(newValue)
            }
          }
        }
        ```

### 生命周期
  #### Vue 生命周期 和 生命周期的四个阶段
  - Vue生命周期：一个Vue实例从 创建 到 销毁 的整个过程。
  - 生命周期四个阶段：① 创建 -> ② 挂载 -> ③ 更新 -> ④ 销毁

  #### Vue 生命周期函数（钩子函数）
  - Vue生命周期过程中，会自动运行一些函数，被称为【生命周期钩子】→ 让开发者可以在【特定阶段】运行自己的代码。
  - 生命周期钩子函数：
    1. 创建阶段（响应式数据...）：`beforeCreate`、`created`、
    2. 挂载阶段（渲染模板）：`beforeMount`、`mounted`
    3. 更新阶段（修改数据，更新视图）：`beforeUpdate`、`updated`
    4. 销毁阶段（销毁实例）：`beforeDestroy`、`destroyed`
  - `created` ：发送初始化渲染请求
  - `mounted` ：操作DOM
  - `beforeDestroy` ：释放Vue以外的资源（清除定时器，延时器...）
  ![Vue生命周期](../../4_Vue/2_images/Vue生命周期.png)

### 工程化开发入门
  #### 工程化开发 & 脚手架 Vue CLI
  - 开发 Vue 的两种方式：
    1. 核心包传统开发模式：基于 html / css / js 文件，直接引入核心包，开发 Vue。
    2. 工程化开发模式：基于构建工具（例如：webpack ） 的环境中开发 Vue。
  - 基本介绍：
    - Vue CLI 是 Vue 官方提供的一个全局命令工具。
    - 可以帮助我们快速创建一个开发 Vue 项目的标准化基础架子。【集成了 webpack 配置】
    ![脚手架目录文件介绍](../../4_Vue/2_images/脚手架目录文件介绍.png)
    ![项目运行流程](../../4_Vue/2_images/项目运行流程.png)

  #### 组件化开发 & 根组件
  - 组件化：一个页面可以拆分成一个个组件，每个组件有着自己独立的结构、样式、行为。
    - 好处：便于维护，利于复用 → 提升开发效率。
    - 组件分类：普通组件、根组件。
  - 根组件：整个应用最上层的组件，包裹所有普通小组件。

  #### App.vue 文件（单文件组件）的三个组成部分
  - 三部分组成：
    - template：结构 （有且只能一个根元素）
    - script: js逻辑
    - style： 样式 (可支持less，需要装包)
  - 让组件支持 less
    1. style标签，lang="less" 开启less功能
    2. 装包: yarn add less less-loader

  #### 普通组件的注册使用
  - 组件注册的两种方式：
    - 局部注册：只能在注册的组件内使用
      1. 创建 .vue 文件 (三个组成部分)
      2. 在使用的组件内导入并注册
    - 全局注册：所有组件内都能使用
      1. 创建 .vue 文件 (三个组成部分)
      2. main.js 中进行全局注册
  - 使用：
    - 当成 html 标签使用 `<组件名></组件名>`
  - 注意: 
    - 组件名规范 → 大驼峰命名法，如：HmHeader
  - 技巧：
    - 一般都用局部注册，如果发现确实是通用组件，再定义到全局。
  ![局部组件的注册使用](../../4_Vue/2_images/局部组件的注册使用.png)
  ![全局组件的注册使用](../../4_Vue/2_images/全局组件的注册使用.png)

  #### 组件的三大组成部分 - 注意点说明
  - 结构 `<template>` 只能有一个根元素
  - 样式 `<style>` 
    - 全局样式(默认)：影响所有组件
    - 局部样式：scoped下样式，只作用于
  - 逻辑 `<script>` 
    - el 根实例独有
    - data是一个函数
    - 其他配置项一致

  #### 组件的样式冲突 scoped
  - 默认情况：写在组件中的样式会 全局生效 → 因此很容易造成多个组件之间的样式冲突问题。
    1. 全局样式: 默认组件中的样式会作用到全局
    2. 局部样式: 可以给组件加上 scoped 属性, 可以让样式只作用于当前组件
  - scoped原理？
    1. 当前组件内标签都被添加 data-v-hash值 的属性
    2. css选择器都被添加 [data-v-hash值] 的属性选择器
    - 最终效果: 必须是当前组件的元素, 才会有这个自定义属性, 才会被这个样式作用到

  #### data 是一个函数
  - 一个组件的 data 选项必须是一个函数。→ 保证每个组件实例，维护独立的一份数据对象。
  - 每次创建新的组件实例，都会新执行一次 data 函数，得到一个新对象。
  - 语法：
    ```js
    data () {
      return {
        count: 100
      }
    },
    ```

### 组件通信
  #### 什么是组件通信
  - 组件通信, 就是指 组件与组件 之间的数据传递。
  - 组件的数据是独立的，无法直接访问其他组件的数据。
  - 想用其他组件的数据 → 组件通信
  
  #### 不同的组件关系 和 组件通信方案分类
  - 组件关系分类：
    1. 父子关系: `props` 和 `$emit`
    2. 非父子关系 
       1. provide & inject
       2. eventbus
  - 通用解决方案：Vuex （适合复杂业务场景）
  
  #### 父子通信流程图：
  1. 父组件通过 props 将数据传递给子组件
  2. 子组件利用 $emit 通知父组件修改更新
  ![Vue父子通信流程图](../../4_Vue/2_images/Vue父子通信流程图.png)
  - 父传子props：
    - ① 父中给子添加属性传值 ② 子props 接收 ③ 子组件使用
  - 子传父$emit：
    - ① 子$emit 发送消息 ②父中给子添加消息监听 ③ 父中实现处理函数
  - 父（数据） → 子（视图） 【父传子】
    - 父组件页面：`data(){return{msg:'前端学习'}}` → 子组件注册 `:msg="msg" `
    - 子组件页面：`props:['title']` → 子组件页面：`{{title}}`
  - 子 → 父
    - 子组件页面：注册点击事件：`@click="sendMsg" methods: {sendMsg(){this.$emit('事件名',事件内容)}}`
    - 父组件页面：注册监听：`@事件名="getMsg" methods: {getMsg(newValue){console.log(newValue)}}` （newValue = 事件内容）

  #### 什么是 prop
  - Prop 定义：组件上 注册的一些 自定义属性
  - Prop 作用：向子组件传递数据
  - 特点：
    - 可以传递任意 数量 的prop
    - 可以传递任意 类型 的prop
  - 例子：
  ![Vue-props传递多类型数据](../../4_Vue/2_images/Vue-props传递多类型数据.png)

  #### props 校验
  - 作用：为组件的 prop 指定验证要求，不符合要求，控制台就会有错误提示 → 帮助开发者，快速发现错误
  - 语法：
    - ① 类型校验
    - ② 非空校验
    - ③ 默认值
    - ④ 自定义校验
  - 语法：
    ```js
    props: {
      校验的属性名: {
        type: 类型, // Number String Boolean ...
        required: true, // 是否必填
        default: 默认值, // 默认值
        validator (value) {
          // 自定义校验逻辑
          return 是否通过校验
        }
      }
    },
    ```

  #### prop & data、单向数据流
  - 共同点：都可以给组件提供数据。
  - 区别：
    - data 的数据是自己的 → 随便改
    - prop 的数据是外部的 → 不能直接改，要遵循 单向数据流
  - 单向数据流：父级 prop 的数据更新，会向下流动，影响子组件。这个数据流动是单向的。

  #### 非父子通信 (拓展) - event bus 事件总线
  - 作用：非父子组件之间，进行简易消息传递。(复杂场景 → Vuex)
  - 步骤：
    1. 创建一个都能访问到的事件总线 (空 Vue 实例) → utils/EventBus.js
        ```js
        import Vue from 'vue'
        const Bus = new Vue()
        export default Bus
        ```
    2. A 组件(接收方)，监听 Bus 实例的事件
        ```js
        created () {
          Bus.$on('sendMsg', (msg) => {
            this.msg = msg
          })
        }
        ```
    3. B 组件(发送方)，触发 Bus 实例的事件
    -  `Bus.$emit('sendMsg', '这是一个消息')`

  #### 非父子通信 (拓展) - provide & inject
  - provide & inject 作用：跨层级共享数据。
  - 步骤：
    1. 父组件 provide 提供数据
        ```js
        export default {
          provide () {
            return {
              // 普通类型【非响应式】
              color: this.color, 
              // 复杂类型【响应式】
              userInfo: this.userInfo, 
            }
          }
        }
        ```
    2. 子/孙组件 inject 取值使用
        ```js
        export default {
          inject: ['color','userInfo'],
          created () {
            console.log(this.color, this.userInfo)
          }
        }
        ```

### 进阶语法
  #### v-model 原理
  - 原理：v-model本质上是一个语法糖。例如应用在输入框上，就是 value属性 和 input事件 的合写。
  - 作用：提供数据的双向绑定
    1. 数据变，视图跟着变 :value 
    2. 视图变，数据跟着变 @input
        ```vue
        <template>
          <div id="app" >
            <input v-model="msg" type="text">

            <input :value="msg" @input="msg = $event.target.value" type="text">
          </div>
        </template>
        ```
  - 注意：$event 用于在模板中，获取事件的形参

  #### 表单类组件封装 & v-model 简化代码
  1. 表单类组件 封装 → 实现 子组件 和 父组件数据 的双向绑定
     - ① 父传子：数据 应该是父组件 props 传递 过来的，拆解 v-model 绑定数据
     - ② 子传父：监听输入，子传父传值给父组件修改
     ![表单类组件封装](../../4_Vue/2_images/表单类组件封装.png)
  2. 父组件 v-model 简化代码，实现 子组件 和 父组件数据 双向绑定
     - ① 子组件中：props 通过 value 接收，事件触发 input
     - ② 父组件中：v-model 给组件直接绑数据 ( :value + @input )
     ![v-model简化代码](../../4_Vue/2_images/v-model简化代码.png)

  #### .sync 修饰符
  - 作用：可以实现 子组件 与 父组件数据 的 双向绑定，简化代码
  - 特点：prop属性名，可以自定义，非固定为 value
  - 场景：封装弹框类的基础组件， visible属性 true显示 false隐藏
  - 本质：就是 :属性名 和 @update:属性名 合写
  ![.sync修饰符](../../4_Vue/2_images/.sync修饰符.png)

  #### ref 和 $refs
  - 作用：利用 ref 和 $refs 可以用于 获取 dom 元素, 或 组件实例
  - 特点：查找范围 → 当前组件内 (更精确稳定)
  - 步骤：
    - ① 获取 dom：
      1. 目标标签 – 添加 ref 属性
      - <div ref="chartRef">我是渲染图表的容器</div>
      1. 恰当时机, 通过 this.$refs.xxx, 获取目标标签
          ```js
          mounted () {
          console.log(this.$refs.chartRef)
          },
          ```
    - ② 获取组件：
      1. 目标组件 – 添加 ref 属性
      -  `<BaseForm ref="baseForm"></BaseForm>`
      1. 恰当时机, 通过 this.$refs.xxx, 获取目标组件，就可以调用组件对象里面的方法
      - `this.$refs.baseForm.组件方法()`

  #### Vue异步更新、$nextTick
  - Vue 是 异步更新 DOM (提升性能)
  - $nextTick：等 DOM 更新后, 才会触发执行此方法里的函数体
  - 语法: this.$nextTick(函数体)
    ```js
    this.$nextTick(() => {
      // 业务逻辑
    })
    ```

### 自定义指令
  #### 自定义指令
  - 自定义指令：自己定义的指令, 可以封装一些 dom 操作， 扩展额外功能
  - 语法：
    - 全局指令：`Vue.directive(指令名, 配置对象)`
      ```js
      Vue.directive('指令名', {
        "inserted" (el) {
          // 可以对 el 标签，扩展额外功能
          el.focus()
        }
      })
      ```
    - 局部指令：`directives: { 指令名: 配置对象 }`
      ```js
      directives: {
        指令名: {
          "inserted" (el) {
            // 可以对 el 标签，扩展额外功能
            el.focus()
          }
        }
      }
      ```
  - inserted：当指令绑定到元素上时，会立即执行 inserted 函数体
    - 参数：el 表示 指令所绑定的元素
    - 参数：binding 表示 指令对象， 包含 指令名、指令值 等信息
  - update：当指令所绑定的元素的 内容发生变化时，会立即执行 update 函数体
    - 参数：el 表示 指令所绑定的元素， newVal 表示 新的值
    - 参数：binding 表示 指令对象， 包含 指令名、指令值 等信息

  #### 自定义指令 - 指令的值
  - 语法：在绑定指令时，可以通过“等号”的形式为指令 绑定 具体的参数值
    - `<div v-color="color">我是内容</div>`
  - 通过 binding.value 可以拿到指令值，指令值修改会 触发 update 函数。
    ```js
    directives: {
      color: {
        inserted (el, binding) {
          el.style.color = binding.value
        },
        update (el, binding) {
          el.style.color = binding.value
        }
      }
    }
    ```

### 插槽
  #### 插槽 - 分类
  - 插槽分类：
    1. 默认插槽(组件内定制一处结构)
    2. 具名插槽(组件内定制多处结构)
  - 作用域插槽：是插槽的一个传参语法

  #### 插槽 - 默认插槽
  - 作用：让组件内部的一些 结构 支持 自定义
  - 插槽基本语法：
    1. 组件内需要定制的结构部分，改用`<slot></slot>`占位
    2. 使用组件时, `<MyDialog></MyDialog>`标签内部填入内容, 传入结构替换slot
  ![Vue插槽语法](../../4_Vue/2_images/Vue插槽语法.png)

  #### 插槽 - 后备内容（默认值）
  - 插槽后备内容：封装组件时，可以为预留的 `<slot>` 插槽提供后备内容（默认内容）。
  - 语法: 在 <slot> 标签内，放置内容, 作为默认显示内容
  ![Vue插槽（设置默认内容）](../../4_Vue/2_images/Vue插槽（设置默认内容）.png)

  #### 插槽 - 具名插槽
  - 作用：让预留的插槽 支持 多个
  - 语法：
    1. 为`<slot>` 标签增加 name 属性
    2. 使用`<template>`标签，设置不同的`v-slot`指令等于`name`的值，来设置不同的插槽
  ![Vue插槽（具名插槽）](../../4_Vue/2_images/Vue插槽（具名插槽）.png)
  - 简写：`v-slot:插槽名` 简写为 `#插槽名`

  #### 插槽 - 作用域插槽
  - 作用域插槽: 定义 slot 插槽的同时, 是可以传值的。给 插槽 上可以 绑定数据，将来 使用组件时可以用。
  - 场景：封装表格组件
    1. 父传子，动态渲染表格内容
    2. 利用默认插槽，定制操作列
    3. 删除或查看都需要用到 当前项的 id，属于 组件内部的数据 通过 作用域插槽 传值绑定，进而使用
  - 基本使用步骤：
    1. 给 slot 标签, 以 添加属性的方式传值
      - `<slot :id="item.id" msg="测试文本"></slot>`
    2. 所有添加的属性, 都会被收集到一个对象中
      - `{ id: 3, msg: '测试文本' }`
    3. 在template中, 通过 ` #插槽名= "obj" ` 接收，默认插槽名为 default
        ```vue
        <MyTable :list="list">
          <template #default="obj">
            <button @click="del(obj.id)">删除</button>
          </template>
        </MyTable>
        ```

### 路由入门
  #### 单页应用程序: SPA - Single Page Application
  - 单页面应用(SPA): 所有功能在 一个html页面 上实现
  - 多页应用程序(MPA): 每个功能对应一个html页面
  ![单页-多页-应用程序](../../4_Vue/2_images/单页-多页-应用程序.png)

  #### 路由的介绍
  - 生活中的路由：设备和ip的映射关系
  - Vue中路由：路径 和 组件 的 映射 关系
  ![路由的介绍](../../4_Vue/2_images/路由的介绍.png)

  #### VueRouter 的 介绍
  - 目标：认识插件 VueRouter，掌握 VueRouter 的基本使用步骤
  - 作用：修改地址栏路径时，切换显示匹配的组件
  - 说明：Vue 官方的一个路由插件，是一个第三方包
  - 官网：https://v3.router.vuejs.org/zh/

  #### VueRouter 的 使用 (5 + 2)
  - 版本介绍
    - Vue2-VueRouter3.x-Vuex3.x
    - Vue3-VueRouter4.x-Vuex4.x
  - 5个基础步骤 (固定)
    1. 下载： 下载 VueRouter 模块到当前工程，版本3.6.5 `yarn add vue-router@3.6.5`
    2. 引入 `import VueRouter from 'vue-router' `
    3.  安装注册 `Vue.use(VueRouter)`
    4. 创建路由对象 `const router = new VueRouter()`
    5. 注入，将路由对象注入到new Vue实例中，建立关联
        ```js
        new Vue({
          render: h => h(App),
          router
        }).$mount('#app')
        ```
  - 2 个核心步骤
    1. 创建需要的组件 (views目录)，配置路由规则
    ![VueRouter使用核心步骤1](../../4_Vue/2_images/VueRouter使用核心步骤1.png)
    2. 配置导航，配置路由出口(路径匹配的组件显示的位置)
    ![VueRouter使用核心步骤2](../../4_Vue/2_images/VueRouter使用核心步骤2.png)

### 路由进阶
  #### 路由的封装抽离
  - 目标：将路由模块抽离出来。 
  - 好处：拆分模块，利于维护
  ![路由的封装抽离](../../4_Vue/2_images/路由的封装抽离.png)

  #### 声明式导航 - 导航链接
  - vue-router 提供了一个全局组件 router-link (取代 a 标签)
  - 语法： `<router-link to="/路径值" ></router-link>`
    1. 能跳转，配置 to 属性指定路径(必须) 。本质还是 a 标签 ，to 无需 #
    2. 能高亮，默认就会提供高亮类名，可以直接设置高亮样式
  ![声明式导航-导航链接](../../4_Vue/2_images/声明式导航-导航链接.png)

  #### 声明式导航 - 两个类名
  - router-link 自动给当前导航添加了 两个高亮类名
    1. `router-link-active` 模糊匹配 (用的多) to="/my" 可以匹配 /my /my/a /my/b .... 
    2. `router-link-exact-active` 精确匹配 to="/my" 仅可以匹配 /my
        ```js
        const router = new VueRouter({
          // route 一条路由规则
          // routes 多条路由规则
          routes: [
            {path:'/A', component: A},
            {path:'/B', component: B}
          ],
          // linkActiveClass 默认高亮类名
          linkActiveClass: 'active',
          // linkExactActiveClass 精确匹配高亮类名
          linkExactActiveClass: 'exact-active'
        })
        ```

  #### 声明式导航 - 跳转传参
  - 目标：在跳转路由时, 进行传值
  - 查询参数传参
    1. 语法格式如下 `to="/path?参数名=值"`
    2. 对应页面组件接收传递过来的值 `$route.query.参数名`
  - 动态路由传参
    1. 配置动态路由
        ```js
        const router = new VueRouter({
          routes: [
            ...,
            {
              path: '/search/:words',
              component: Search
            }
          ]
        })
        ```
    2. 配置导航链接 `to="/path/参数值"`
    3. 对应页面组件接收传递过来的值 `$route.params.参数名`

  #### 动态路由参数可选符
  - 语法格式如下 `to="/path/:参数名?`
  - 原因： /search/:words 表示，必须要传参数。如果不传参数，也希望匹配，可以加个可选符 "?"
  ![动态路由参数可选符](../../4_Vue/2_images/动态路由参数可选符.png)

  #### Vue路由 - 重定向 和 404页面
  - 重定向说明：重定向 → 匹配path后, 强制跳转path路径
  - 语法： `{ path: 匹配路径, redirect: 重定向到的路径 }` 
  - 404页面说明：当所有路由规则都无法匹配时，会显示404页面
  - 语法： `{ path: '*', component: 404页面组件 }` （配在路由最后）
    ```js
    const router = new VueRouter({
      routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home },
        { path: '/search/:words', component: Search },
        { path: '*', component: NotFind }
      ]
    })
    ```

  #### Vue路由 - 模式设置
  - 默认模式：hash模式
    - 语法： `const router = new VueRouter({ mode: 'hash' })`
    - 特点：路径带有#号
  - history模式：history模式
    - 语法： `const router = new VueRouter({ mode: 'history' })`
    - 特点：路径不带#号

  #### 编程式导航 - 基本跳转
  - 编程式导航：用JS代码来进行跳转
  - 两种语法:
    1. path 路径跳转 (简易方便)
        ```js    
        this.$router.push('路由路径')
        this.$router.push({
          path: '路由路径'
        })
        ```
    2. name 命名路由跳转 (适合 path 路径长的场景)
        ```js
        this.$router.push({
          name: '路由名'
        })

        { name: '路由名', path: '/path/xxx', component: XXX },
        ```

  #### 编程式导航 - 路由传参
  - 两种传参方式：查询参数 + 动态路由传参
  - 两种跳转方式，对于两种传参方式都支持：
    - path 路径跳转传参
      1. query传参
        - 接收参数  `$route.query.参数名1`
          ```js
          // 写法1
          this.$router.push('/路径?参数名1=参数值1&参数2=参数值2')
          // 写法2
          this.$router.push({
            path: '/路径',
            query: {
              参数名1: '参数值1',
              参数名2: '参数值2'
            }
          })
          ```
      2. 动态路由传参
        - 接收参数  `$route.params.参数名1`
          ```js
          this.$router.push('/路径/参数值')
          this.$router.push({
            path: '/路径/参数值'
          })
          ```
    - name 命名路由跳转传参
      1. query传参
        - 接收参数  `$route.query.参数名1`
          ```js
          this.$router.push({
            name: '路由名字',
            query: {
              参数名1: '参数值1',
              参数名2: '参数值2'
            }
          })
          ```
      2. 动态路由传参
        - 接收参数  `$route.params.参数名1`
          ```js
          this.$router.push({
            name: '路由名字',
            params: {
              参数名: '参数值',
            }
          })
          ```

  #### 组件缓存 keep-alive
  1. keep-alive是什么
    - keep-alive 是 Vue 的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
    - keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM 元素，也不会出现在父组件链中。
  2. keep-alive的优点
     - 在组件切换过程中 把切换出去的组件保留在内存中，防止重复渲染DOM，
     - 减少加载时间及性能消耗，提高用户体验性。
        ```vue
        <template>
          <div class="h5-wrapper">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </template>
        ```
     - 问题：缓存了所有被切换的组件
  
  3. keep-alive的三个属性
     - include ： 组件名数组，只有匹配的组件会被缓存
     - exclude ： 组件名数组，任何匹配的组件都不会被缓存
     - max ： 最多可以缓存多少组件实例
        ```vue
        <template>
          <div class="h5-wrapper" :include="['LayoutPage']">
            <keep-alive >
              <router-view></router-view>
            </keep-alive>
          </div>
        </template>
        ```
  4. keep-alive的使用会触发两个生命周期函数
     - activated 当组件被激活（使用）的时候触发 → 进入这个页面的时候触发
     - deactivated 当组件不被使用的时候触发 → 离开这个页面的时候触发
     - 组件缓存后就不会执行组件的created, mounted, destroyed 等钩子了
     - 所以其提供了actived 和 deactived钩子，帮我们实现业务需求。
        ```js
        activated () {
          console.log('actived 激活 → 进入页面');
        },
        deactivated() {
          console.log('deactived 失活 → 离开页面');
        }
        ```

### 组件存放目录问题 (组件分类)
  - 分类开来 更易维护
  - 页面组件 - 页面展示 - 配合路由用
    - src/views文件夹
  - 复用组件 - 展示数据 - 常用于复用
    - src/components文件夹

### 自定义创建项目
  - 目标：基于 VueCli 自定义创建项目架子
  - 安装脚手架 → 创建项目 → 选择自定义
    - Babel / Router / CSS / Linter
    - Vue2.x
    - VueRouter hash模式
    - CSS预处理 Less
    - ESlint: Standard & Lint on Save
    - 配置文件 dedicated config files
  ![自定义创建项目](../../4_Vue/2_images/自定义创建项目.png)

### ESlint 代码规范
  #### ESlint 代码规范
  - 目标：认识代码规范
  - JavaScript Standard Style 规范说明 https://standardjs.com/rules-zhcn.html
  
  #### 代码规范错误
  - 两种解决方案：
    - 手动修正
      - 根据错误提示来一项一项手动修改纠正。
      - 如果你不认识命令行中的语法报错是什么意思，根据错误代码去 [ESLint 规则表] 中查找其具体含义。
    - 自动修正
      - 基于 vscode 插件 ESLint 高亮错误，并通过配置 自动 帮助我们修复错误。

### VueX 入门
  #### vuex概述
  - 目标：明确 vuex 是什么，应用场景，优势
  1. 是什么：
     - vuex 是一个 vue 的 状态管理工具，状态就是数据。
     - 大白话：vuex 是一个插件，可以帮我们管理 vue 通用的数据 (多组件共享的数据)
  2. 场景：
    - 某个状态 在 很多个组件 来使用 (个人信息)
    - 多个组件 共同维护 一份数据 (购物车)
  3. 优势：
    - 共同维护一份数据，数据集中化管理
    - 响应式变化
    - 操作简洁 (vuex提供了一些辅助函数)

  #### 创建一个空仓库
  - 目标：安装 vuex 插件，初始化一个空仓库
    1. yarn add vuex@3
    2. 新建 store/index.js 专门存放 vuex
    3. Vue.use(Vuex) 创建仓库 new Vuex.Store()
    4. 在 main.js 中导入挂载到 Vue 实例上
    5. 检验：this.$store
   
  #### 核心概念 - state 状态
  - 目标：明确如何给仓库 提供 数据，如何 使用 仓库的数据
  1. 提供数据：
     - State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 中的 State 中存储。
     - 在 state 对象中可以添加我们要共享的数据。
        ```js
        // 创建仓库
        const store = new Vuex.Store({
          // state 状态, 即数据, 类似于vue组件中的data
          // 区别：
          // 1. data 是组件自己的数据
          // 2. state 是所有组件共享的数据
          state: {
            count: 101
          }
        })
        ```
  2. 使用数据：
     - 通过 store 直接访问
       ```js
       获取 store：
       (1) this.$store
       (2) import 导入 store
       
       模板中： {{ $store.state.xxx }}
       组件逻辑中： this.$store.state.xxx
       JS模块中： store.state.xxx
       ``` 

     - 通过辅助函数 (简化)
       - mapState是辅助函数，帮助我们把 store中的数据 自动 映射到 组件的计算属性中
        ```js
        // 导入 mapState
        import { mapState } from 'vuex'
        // 数组方式 引入state
        mapState(['count'])
        // 展开运算 符映射
        computed: {
          ...mapState(['count'])
        }
        ```

  #### 核心概念 - mutations - 修改状态
  - 目标：掌握 mutations 的操作流程，来修改 state 数据。 (state数据的修改只能通过 mutations )
  - 通过 strict: true 可以开启严格模式
  - 步骤：
    1. 定义 mutations 对象，对象中存放修改 state 的方法
        ```js
        const store = new Vuex.Store({
          state: {
          count: 0
          },
          // 定义mutations
          mutations: {
            // 第一个参数是当前store的state属性
            addCount (state) {
              state.count += 1
            }
          }
        })
        ```
    2. 组件中提交调用 mutations
    - `this.$store.commit('addCount')`

  #### 核心概念 - mutations - 传参语法
  - 目标：掌握 mutations 传参语法
  - 提交 mutation 是可以传递参数的 `this.$store.commit( 'xxx', 参数 )` 
    1. 提供 mutation 函数 (带参数 - 提交载荷 payload )
        ```js
        mutations: {
          ...
          addCount (state, n) {
            state.count += n
          }
        },
        ```
    2. 页面中提交调用 mutation
    - `this.$store.commit('addCount', 10)`
  - 提示：提交参数只能一个，如果有多个参数，包装成一个对象传递
    ```js
    this.$store.commit('addCount', {
      count: 10,
      ...
    })
    ```

  #### 辅助函数 - mapMutations
  - 目标：掌握辅助函数 mapMutations，映射方法 mapMutations 和 mapState很像，它是把位于mutations中的方法提取了出来，映射到组件methods中
    ```js
    // 仓库
    mutations: {
      subCount (state, n) {
        state.count -= n
      },
    }
    // 组件
    import { mapMutations } from 'vuex'

    methods: {
    ...mapMutations(['subCount'])
    }
    ```
  
  #### 核心概念 - actions
  - 目标：明确 actions 的基本语法，处理异步操作。
  - 说明：mutations 必须是同步的 (便于监测数据变化，记录调试)
  - 需求: 一秒钟之后, 修改 state 的 count 成 666
  - 步骤：
    1. 提供action 方法
        ```js
        actions: {
          setAsyncCount (context, num) {
            // 一秒后, 给一个数, 去修改 num
            setTimeout(() => {
              context.commit('changeCount', num)
            }, 1000)
          }
        }
        ```
    2. 页面中 dispatch 调用
    - this.$store.dispatch('setAsyncCount', 200)

  #### 辅助函数 - mapActions
  - 目标：掌握辅助函数 mapActions，映射方法 mapActions 是把位于 actions中的方法提取了出来，映射到组件methods中
    ```js
    // 仓库
    actions: {
      changeCountAction (context, num) {
        // 这里是setTimeout模拟异步
        // 以后大部分场景是发请求
        setTimeout(() => {
          context.commit('changeCount', num)
        }, 1000)
      }
    }
    // 组件
    import { mapActions } from 'vuex'

    methods: {
      ...mapActions(['changeCountAction'])
    }
    ```

  #### 核心概念 - getters
  - 说明：除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters
  - 目标：掌握核心概念 getters 的基本语法 (类似于计算属性)
  - 例如：state中定义了list，为 1-10 的数组，组件中，需要显示所有大于5的数据
  - 步骤：
    state: {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    1. 定义 getters
        ```js
        getters: {
          // 注意：
          // (1) getters函数的第一个参数是 state
          // (2) getters函数必须要有返回值
          filterList (state) {
            return state.list.filter(item => item > 5)
          }
        }
        ```
    2. 访问getters
       - ① 通过 store 访问 getters
         - `{{ $store.getters.filterList }}`
       - ② 通过辅助函数 mapGetters 映射
          ```js
          computed: {
            ...mapGetters(['filterList'])
          },
          // 使用
          {{ filterList }}
          ```
### VueX 进阶
  #### 核心概念 - 模块 module (进阶语法)
  - 介绍：
    - 由于 vuex 使用单一状态树，应用的所有状态会集中到一个比较大的对象。
    - 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。(当项目变得越来越大的时候，Vuex会变得越来越难以维护)
  - 目标：掌握核心概念 module 模块的创建
  ![VueX模块化](../../4_Vue/2_images/VueX模块化.png)
  
  #### module 模块的创建
  - 步骤：
    1. 在src的目录下：`store/modules/模块名称.js`
    2. 在模块文件内部
        ```js
        // state 用于存放模块的状态(数据)
        const state = {}
        // mutations 用于存放模块的同步修改状态的方法
        const mutations = {}
        // actions 用于存放模块的异步修改状态的方法
        const actions = {}
        // getters 用于存放模块的计算属性
        const getters = {}
        export default {
          state,
          mutations,
          actions,
          getters
        }
        ```
    3. 在store的index.js文件中引入模块
        ```js
        import 模块名 from './modules/模块名'
        const store = new Vuex.Store({
          modules: {
            模块名
          }
        })
        ```

  #### 模块中 state 的访问语法
  - state的作用：存放模块的状态(数据)
  - 直接通过模块名访问 `$store.state.模块名.xxx`
  - 通过 mapState 映射
    - 默认根级别的映射 `mapState([ 'xxx' ])`
    - 子模块的映射 `mapState('模块名', ['xxx'])` - 需要开启命名空间
      ```js
      export default {
        // 开启命名空间
        namespaced: true,
        state,
        mutations,
        actions,
        getters
      }
      ```
  
  #### 模块中 getters 的访问语法
  - getters的作用：存放模块的计算属性
  - 直接通过模块名访问 `$store.getters['模块名/xxx ']`
  - 通过 mapGetters 映射
    - 默认根级别的映射 `mapGetters([ 'xxx' ])`
    - 子模块的映射 `mapGetters('模块名', ['xxx'])` - 需要开启命名空间

  #### 模块中 mutation 的调用语法
  - mutations的作用：存放模块的同步修改状态的方法
  - 直接通过 store 调用 `$store.commit('模块名/xxx ', 额外参数)`
  - 通过 mapMutations 映射
    - 默认根级别的映射 `mapMutations([ 'xxx' ])`
    - 子模块的映射 `mapMutations('模块名', ['xxx'])` - 需要开启命名空间

  #### 模块中 action 的调用语法
  - actions的作用：存放模块的异步修改状态的方法
  - 直接通过 store 调用 `$store.dispatch('模块名/xxx ', 额外参数)`
  - 通过 mapActions 映射
    - 默认根级别的映射 `mapActions([ 'xxx' ])`
    - 子模块的映射 `mapActions('模块名', ['xxx'])` - 需要开启命名空间

  #### 总结：
  ```js
  // 模块中的访问语法
  // 1. 直接访问
  // state
  $store.state.模块名.xxx
  // getters
  $store.getters['模块名/xxx ']
  // mutations
  $store.commit('模块名/xxx ', 额外参数)
  // actions
  $store.dispatch('模块名/xxx ', 额外参数)
  // 2. 子模块 通过 mapState/mapGetters/mapMutations/mapActions 映射
  // state
  ...mapState('模块名', ['xxx'])
  // getters
  ...mapGetters('模块名', ['xxx'])
  // mutations
  ...mapMutations('模块名', ['xxx'])
  // actions
  ...mapActions('模块名', ['xxx'])
  ```

### json-serve
  - 作用：模拟后端接口服务
  - 目标：基于 json-server 工具，准备后端接口服务环境
    1. 安装全局工具 json-server （全局工具仅需要安装一次）【官网】
       - `yarn global add json-server 或 npm i json-server -g`
    2. 代码根目录新建一个 db 目录
    3. 将资料 index.json 移入 db 目录
    4. 进入 db 目录，执行命令，启动后端接口服务
       - `json-server index.json`
    5. 访问接口测试 http://localhost:3000/cart
  - 推荐： json-server --watch index.json (可以实时监听 json 文件的修改)