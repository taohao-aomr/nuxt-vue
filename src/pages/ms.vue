<template>
    <h1>面试总结</h1>
    <MsItem v-for="(item, index) in tutorials" :key="index" :title="item.title" :desc="item.desc"  />
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const tutorials = reactive([
    {
        title: 'less和sass的区别',
        desc: `
            相同之处:  <br />
            都属于 CSS 预处理器 <br />
            目的是使得 CSS 开发更灵活和更强大 <br />
            扩展的 CSS 功能特性基本相同 <br />
            区别之处:  <br />
            Sass 是在服务端处理的，以前是 Ruby，现在是 Dart-Sass 或 Node-Sass，而 Less 是在客户端处理 <br />
            变量符不一样，Less 是 @，而 Sass 是 $ <br />
            Sass 支持条件语句，可以使用 if...else.../for...while...each循环等，Less 不支持。 <br />
            Sass 引用的外部文件命名必须以 _ 开头，Sass 会认为以 _ 文件是一个引用文件，不会将其编译为 CSS 文件。Less 引用外部文件和 CSS 中的 @import 没什么差异。 <br />
            Less 中的变量运算可以带或不带单位，Sass 需要带单位。 <br />
            Less 相对 Sass 清晰明了，安装便捷，易于上手，对编译环境要求比较宽松，适合小型项目。Sass 更适用于复杂或大型项目。 <br />
        `
    },
    {
        title: 'es6的map',
        desc: `
            Map这一数据结构允许使用任何值作为键。 <br />
            Map常用方法:  <br />
            "调用set(key <br />value)方法向Map中添加一个键值对：map.set(name <br />张三)" <br />
            "调用get(key)方法根据提供的键名返回对应的值，如果不存在该键名则返回undefined：map.get(name)" <br />
            "调用has(key)方法可以检查是否包含指定的键：如果包含就返回true，如果不包含就返回false。" <br />
            调用delete(key)方法可以删除指定的键值对 <br />
            调用clear()方法可以删除所有键值对： <br />
            Map的属性size可以返回键值对数量 <br />
            Map的遍历方法:  <br />
            keys() <br />values() <br />entries() <br />
            "遍历Map的方法: " <br />
            forEach <br /> for...of
        `
    },
    {
        title: '知道WeakMap嘛',
        desc: `
            'WeakMap和Map也非常相似，但是也是有一些不同：',
            '键的类型：WeakMap的键类型只能是对象和Symbol值；Map的键类型可以是任意数据类型',
            '引用类型：WeakMap是弱引用；Map是强引用。',
            '方法和属性：WeakMap不支持迭代，所以没有forEach, values, keys, entries方法，并且也没有size属性；Map有forEach, values, keys, entries方法，也有size属性',
            '作用：WeakMap也可以实现自动清理回收；Map提供需要高效键值对的操作。'
        `
    },
    {
        title: 'provide和inject的原理',
        desc: `
            'Vue 可以使用 provide和 inject实现跨组件数据传递，其中：',
            'provide提供的数据保存在组件的 provides对象上，创建 provides的时候，将父组件的 provide作为自己的原型，因此会形成原型链；',
            'inject使用数据时，会沿着 provides的原型上去查找这个 key，本质是利用了 JavaScript中原型链查找方式；'
        `
    },
    {
        title: '.env中的变量在其他地方如何使用',
        desc: `// 在 vite 程序中获取
              console.log(import.meta.env.VITE_APP_BASE_API); // /dev-api,
              // 在 vue2 项目中获取
              console.log(process.env.VUE_APP_BASE_API); // /dev-api`
    },
    {
        title: 'git代码回滚, --hard是什么意思',
        desc: `
            'git revert 命令用于创建一个新的提交，该提交包含了要回滚的提交所引入的更改的相反操作，这样就可以撤销这些更改。这个新提交将成为项目历史记录中的一部分，并且需要被推送到远程仓库以应用这些更改。相较于 git reset 命令，git revert 命令更加安全，因为它不会删除任何提交，而是创建新的提交（如果想完全撤销更改，需要使用 git reset 命令。）。该命令通常用于回滚已经推送到远程仓库的提交。',
            'git reset的三种形式的区别: ',
            '--mixed.回退一个版本，而且会将暂存区的内容和本地已经提交的内容全部恢复到未暂存的状态。不影响原来的本地文件，未提交的也不会受到影响。这个就是它的好处，你可以不用先提交，再回滚。但是个人强烈建议你还是提交之后再去回滚。',
            '--sort.回退一个版本,不清空暂存区,将已提交的内容恢复到暂存区,不影响原来本地的文件(未提交的也不受影响)',
            '--hard.回退一个版本，清空暂存区，将已提交的内容的版本恢复到本地，本地的文件也将被恢复的版本替换，这里就是为什么建议你在回滚之前务必先提交自己的代码，这是非常有必要的（因为你如果使用--hard的话，同时你又没有提交的话，真的回不去了，别问我为什么知道）'
        `
    },
    {
        title: 'qiankun微前端，主基页面定义一个全局参数，其他页面如何访问',
        desc: `
            '使用 props 进行通信',
            '使用 qiankun 提供的 API initGlobalState 进行通信',
            '注册 MicroAppStateActions 实例, actions.onGlobalStateChange',
            'storage通信'
        `
    },
    {
        title: '小程序和h5以及app如何通讯',
        desc: `
            "src：webview 指向网页的链接,
              bindmessage： 网页向小程序 postMessage 时，会在以下特定时机触发并收到消息 引入weixin-js-sdk通过wx.miniProgram.postMessage",
            "H5 跳转回小程序:  ",
            "wx.miniProgram.navigateTo({url: /pages/my/my?name=12313})",
            'APP与H5通信-JsBridge, postMessage '
        `
    }
]);


</script>

<style lang="scss" scoped>
.bg {
    background-color: black;
    color: #fff;
}
</style>