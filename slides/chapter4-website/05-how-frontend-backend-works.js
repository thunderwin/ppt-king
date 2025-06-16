module.exports = {
    title: '前端和后端是怎么工作的',
    description: '深入了解前端和后端项目的构成、工作原理及协作关系',
    theme: 'sky',
    content: `
    <section>
        <h2>💻⚙️ 前端和后端是怎么工作的</h2>
        <h3>深入了解前端和后端的构成、工作原理及协作关系</h3>
        <p>
            <small>👨‍🏫 讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h1>🎯 第一部分：前端</h1>
            <h3>用户看得到、摸得着的部分</h3>
        </section>
    </section>

    <section>
        <section>
            <h2>🤔 什么是前端？</h2>
        </section>
        
        <section>
            <h3>📱 重要概念</h3>
            <ul>
                <li>📱 <strong>App是一个前端</strong></li>
                <li>🌐 <strong>网页也是一个前端</strong></li>
                <li>🎯 <strong>小程序也是一个前端</strong></li>
            </ul>
            <hr>
            <p>💡 从技术角度来说，它们都属于前端</p>
        </section>

        <section>
            <h3>🎯 用不同方式打开</h3>
            <ul>
                <li>📱 用手机打开App</li>
                <li>💻 用电脑打开网站</li>
                <li>💬 用微信打开小程序</li>
            </ul>
            <p>✨ 本质都是前端！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>❓ 为什么前端这么重要？</h2>
        </section>
        
        <section>
            <h3>✍️ 写软件，其实主要就是写前端</h3>
            <p>🤔 当我们说要开发一个软件的时候，我们在讨论什么？</p>
            <ul>
                <li>👀 这个界面好不好看？</li>
                <li>🖱️ 用户操作方不方便？</li>
                <li>⚙️ 功能能不能正常使用？</li>
                <li>😊 用户体验怎么样？</li>
            </ul>
            <p>📊 这些讨论的，99%都是前端的内容</p>
        </section>

        <section>
            <h3>👥 用户主要使用的就是前端</h3>
            <ul>
                <li>👀 用户看到的</li>
                <li>👋 用户摸到的</li>
                <li>🖱️ 用户点击的</li>
            </ul>
            <p>🎯 都是前端！</p>
            <hr>
            <p>🔧 后端虽然很重要，但用户根本看不到</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔄 前端的核心作用：信息交互</h2>
        </section>
        
        <section>
            <h3>💬 和用户进行信息交互</h3>
            <p>👥 用户来到我们的前端上，无非就是：</p>
            <ul>
                <li>🖱️ 点点这里，点点那里</li>
                <li>📝 填个表单</li>
                <li>⌨️ 输入一些文字</li>
                <li>📷 上传个图片或者视频</li>
                <li>👀 或者只是浏览浏览</li>
            </ul>
        </section>

        <section>
            <h3>🌉 前端是桥梁</h3>
            <p>🎯 前端的最核心作用：</p>
            <p><strong>让用户能够方便地和我们的系统进行信息交流</strong></p>
            <hr>
            <ul>
                <li>📥 信息从哪里来？→ 后端</li>
                <li>💾 信息存到哪里？→ 后端</li>
            </ul>
            <p>🌉 前端就是用户和后端之间的桥梁！</p>
        </section>
    </section>

    <section>
        <section>
            <h1>🏗️ 前端项目的构成</h1>
            <h3>重点来了！</h3>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 第一层：分类</h2>
        </section>
        
        <section>
            <h3>📱 前端的三大类</h3>
            <ul>
                <li>🌐 <strong>网页</strong>：用浏览器打开的</li>
                <li>📱 <strong>APP</strong>：手机上下载安装的</li>
                <li>🎯 <strong>小程序</strong>：在微信、支付宝里打开的</li>
            </ul>
            <hr>
            <p>💡 虽然形式不同，但本质都是前端</p>
            <p>🎯 都是为了和用户交互</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 第二层：组成部分</h2>
        </section>
        
        <section>
            <h3>📄 1. 页面</h3>
            <p>📚 任何一个前端，都是由一页一页的页面组成的</p>
            <p>📖 就像一本书由很多页组成一样</p>
            <p>📱 一个App或网站也是由很多页面组成的</p>
        </section>

        <section>
            <h3>📄 页面的两种类型</h3>
            <ul>
                <li>🔒 <strong>纯静态页面</strong>：内容是固定的，比如公司介绍页面</li>
                <li>🔄 <strong>动态页面</strong>：内容会变化，比如你的朋友圈，每次刷新内容都不一样</li>
            </ul>
        </section>

        <section>
            <h3>🧩 2. 板块</h3>
            <p>📱 每个页面下面，又分为不同的板块</p>
            <p>🛒 比如你打开手机淘宝，首页就有：</p>
            <ul>
                <li>🔍 搜索栏板块</li>
                <li>🖼️ 轮播图板块</li>
                <li>🛍️ 商品推荐板块</li>
                <li>🧭 底部导航板块</li>
            </ul>
            <p>⚙️ 每个板块负责不同的功能</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 第三层：板块的进一步分类</h2>
        </section>
        
        <section>
            <h3>📝 1. 普通板块</h3>
            <p>✏️ 就是写死在页面里的</p>
            <p>🔄 每个页面都不一样的板块</p>
        </section>

        <section>
            <h3>🧩 2. 组件（重点！）</h3>
            <p>🤔 聪明的小伙伴可能会想：</p>
            <p>💡 有些板块看起来很相似，只是内容不同</p>
            <p>❓ 我可不可以重复使用？</p>
            <hr>
            <p>✅ <strong>你想得对！</strong></p>
        </section>

        <section>
            <h3>♻️ 可重复使用的组件</h3>
            <p>🔧 那些看起来很相似的板块，我们可以做成可以重复使用的"组件"</p>
            <ul>
                <li>🔘 <strong>按钮组件</strong>：样式都差不多，只是文字不同</li>
                <li>🛍️ <strong>商品卡片组件</strong>：格式都一样，只是商品信息不同</li>
                <li>👤 <strong>用户头像组件</strong>：显示方式都一样，只是头像图片不同</li>
            </ul>
        </section>

        <section>
            <h3>🧩 组件组合成页面</h3>
            <p>🔧 <strong>一个页面通常是由好几个组件组合而成的</strong></p>
            <p>🎯 就像积木一样，用不同的组件搭建页面</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 第四层：组件的构成</h2>
        </section>
        
        <section>
            <h3>📄 每个组件里面的两种内容</h3>
            <ul>
                <li>🔒 <strong>纯静态页面</strong>：内容是固定的，不会变化</li>
                <li>🔄 <strong>动态页面 - 接收值</strong>：内容会根据传入的数据而变化</li>
            </ul>
            <hr>
            <p>🛍️ 比如商品卡片组件，可以接收不同的商品信息，然后显示不同的商品</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 第五层：技术构成</h2>
            <h3>页面和组件的核心技术</h3>
        </section>
        
        <section>
            <h3>🦴 1. 骨架（HTML）</h3>
            <p>💀 就像人的骨头一样，决定了这个页面的基本结构</p>
            <ul>
                <li>📝 这里放一个标题</li>
                <li>🔘 那里放一个按钮</li>
                <li>🖼️ 下面放一个图片</li>
            </ul>
        </section>

        <section>
            <h3>💄 2. 化妆（CSS）</h3>
            <p>💅 就像给人化妆一样，决定了页面好不好看</p>
            <ul>
                <li>🎨 背景是什么颜色</li>
                <li>📝 字体多大，什么颜色</li>
                <li>🔘 按钮是什么样式</li>
                <li>📐 整体布局怎么排列</li>
            </ul>
        </section>

        <section>
            <h3>⚡ 3. 动作（JavaScript）</h3>
            <p>🎬 决定了页面能做什么动作，有什么交互</p>
            <ul>
                <li>🖱️ 点击按钮会发生什么</li>
                <li>📤 表单提交后怎么处理</li>
                <li>🚀 页面加载时要做什么</li>
                <li>📜 用户滚动页面时有什么效果</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h1>⚙️ 第二部分：后端</h1>
            <h3>用户看不到但很重要的部分</h3>
        </section>
    </section>

    <section>
        <section>
            <h2>🤔 怎么理解后端呢？</h2>
        </section>
        
        <section>
            <h3>💭 前端的局限</h3>
            <p>📱 刚才我们说前端负责：</p>
            <ul>
                <li>👀 <strong>展示信息</strong></li>
                <li>📝 <strong>收集信息</strong></li>
            </ul>
            <p>❓ 但是这些信息从哪来？存到哪去？</p>
        </section>

        <section>
            <h3>🎯 后端的作用</h3>
            <p>⚙️ 后端主要帮助前端：</p>
            <ul>
                <li>💾 <strong>存储数据</strong></li>
                <li>📤 <strong>提供数据</strong></li>
            </ul>
            <p>🔗 他们通过链接来进行数据交换</p>
        </section>
    </section>

    <section>
        <section>
            <h2>❓ 后端的主要组成部分有哪些？</h2>
        </section>
        
        <section>
            <h3>🤔 数据分类的问题</h3>
            <p>💡 我的后端有各种各样的数据</p>
            <p>❓ 我是不是得有办法把不同的数据给分开？</p>
        </section>

        <section>
            <h3>🌐 解决方案：不同路径</h3>
            <p>💡 在域名后面加上不同的路径</p>
            <p>📂 用 <strong>/</strong> 加上不同的名字来区分</p>
            <p>✅ 这样就能把数据分开了</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🏦 生活中的比喻</h2>
        </section>
        
        <section>
            <h3>🏦 银行窗口的例子</h3>
            <p>💡 这就好比你去银行</p>
            <p>🪟 你办不同的业务要去不同的窗口</p>
            <ul>
                <li>💰 存款业务？→ 1号窗口</li>
                <li>💳 办卡业务？→ 2号窗口</li>
                <li>📄 查询业务？→ 3号窗口</li>
            </ul>
            <p>✅ 对不对？</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🛣️ 路由概念</h2>
        </section>
        
        <section>
            <h3>🎯 什么是路由？</h3>
            <p>⚙️ 负责处理不同路径对应不同数据的功能</p>
            <p>🛣️ 我们称之为 <strong>路由</strong></p>
            <p>📶 不是路由器的那个路由哦</p>
        </section>

        <section>
            <h3>😊 是不是也挺简单的？</h3>
        </section>
    </section>

    <section>
        <section>
            <h2>❓ 为什么不直接连接？</h2>
        </section>
        
        <section>
            <h3>🤔 有同学要问了</h3>
            <p>❓ 为什么这么麻烦？</p>
            <p>🔗 为什么不直接把前端和数据库连起来？</p>
            <p>➕ 为什么中间还要再加一个后端？</p>
        </section>

        <section>
            <h3>💻 单机软件确实可以</h3>
            <p>💼 你电脑上的很多软件就是这么做的：</p>
            <ul>
                <li>📊 Excel、Word</li>
                <li>🎮 单机游戏</li>
            </ul>
            <p>💾 前端直接和数据库连在一起</p>
            <p>📦 一起打包让你下载</p>
            <p>🚫 没有后端这个概念</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🌐 互联网应用的不同</h2>
        </section>
        
        <section>
            <h3>⚠️ 数据需要先处理</h3>
            <p>🌐 但是在绝大部分互联网应用中</p>
            <p>📤 前端传过来的数据</p>
            <p>❌ 我们不是直接就可以存到数据库里面的</p>
            <p>🔧 往往还要先处理一下</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🍽️ 餐馆的比喻</h2>
        </section>
        
        <section>
            <h3>🧊 冰箱存储的例子</h3>
            <p>💡 道理很简单</p>
            <p>🍽️ 想象下你开个餐馆，你有一个冰箱</p>
            <p>🧊 你把东西放进冰箱之前</p>
            <p>🧼 你不得给他洗一下，去掉包装对不对？</p>
            <p>🔧 这些杂七杂八的事儿</p>
        </section>

        <section>
            <h3>⚙️ 这就是后端所干的事儿（后端就是中间商）</h3>
            <p>✅ 明白了吗？</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔐 后端的主要工作</h2>
        </section>
        
        <section>
            <h3>👮‍♂️ 身份验证</h3>
            <p>🔍 判断你小子是谁</p>
            <p>❌ 允不允许访问数据</p>
            <p>🎫 如果允许就给你发一个令牌</p>
            <p>🔑 你后面每次来都得带上</p>
        </section>

        <section>
            <h3>🗂️ 数据管理</h3>
            <p>📋 把数据库里的数据分门别类</p>
            <p>🏷️ 使用不同的标签分类</p>
            <p>🎯 方便你访问</p>
        </section>
    </section>

    <section>
        <section>
            <h1>🤝 第三部分：前端和后端的协作</h1>
            <h3>它们是如何配合工作的</h3>
        </section>
    </section>

    <section>
        <section>
            <h2>🔄 完整的工作流程</h2>
        </section>
        
        <section>
            <h3>📱 用户操作前端</h3>
            <ol>
                <li>👀 用户看到前端界面</li>
                <li>🖱️ 用户点击按钮或填写表单</li>
                <li>📤 前端收集用户的操作和数据</li>
            </ol>
        </section>

        <section>
            <h3>🌐 前端请求后端</h3>
            <ol start="4">
                <li>🔗 前端通过链接向后端发送请求</li>
                <li>📦 请求中包含用户的数据和操作指令</li>
            </ol>
        </section>

        <section>
            <h3>⚙️ 后端处理请求</h3>
            <ol start="6">
                <li>🛣️ 后端路由判断请求类型</li>
                <li>🔐 验证用户身份和权限</li>
                <li>🔧 处理和清洗数据</li>
                <li>💾 存储或读取数据库数据</li>
            </ol>
        </section>

        <section>
            <h3>📤 后端返回结果</h3>
            <ol start="10">
                <li>📋 后端整理好数据</li>
                <li>📤 返回给前端</li>
                <li>📱 前端更新界面显示给用户</li>
            </ol>
        </section>
    </section>

    <section>
        <section>
            <h2>🌟 完整技术架构图</h2>
        </section>
        
        <section>
            <h3>🏗️ 全栈架构一览</h3>
            <pre style="font-size: 0.5em;">
👤 用户
 ↕️
💻 前端（网页/APP/小程序）
├── 📄 页面
│   ├── 🧩 组件
│   │   ├── 🦴 HTML（骨架）
│   │   ├── 💄 CSS（样式）
│   │   └── ⚡ JavaScript（交互）
 ↕️ （通过链接交互）
⚙️ 后端
├── 🛣️ 路由（分发请求）
├── 🔐 身份验证
├── 🔧 数据处理
 ↕️
🗃️ 数据库
            </pre>
        </section>
    </section>

    <section>
        <section>
            <h2>🤖 与AI沟通更清楚</h2>
        </section>
        
        <section>
            <h3>💬 和AI开发前端时的沟通</h3>
            <ul>
                <li>🛍️ "我要一个商品展示的组件"</li>
                <li>📝 "这个组件需要接收商品名称、价格、图片"</li>
                <li>🎨 "样式要简洁大方"</li>
                <li>🔗 "点击后要跳转到商品详情页"</li>
            </ul>
        </section>

        <section>
            <h3>💬 和AI开发后端时的沟通</h3>
            <ul>
                <li>🛣️ "我需要一个商品管理的路由"</li>
                <li>🔐 "需要验证管理员权限"</li>
                <li>💾 "可以增删改查商品信息"</li>
                <li>📋 "返回JSON格式的数据"</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📋 总结</h2>
        </section>
        
        <section>
            <h3>💻 前端核心要点</h3>
            <ul>
                <li>🎯 <strong>分类</strong>：网页、APP、小程序</li>
                <li>📄 <strong>构成</strong>：页面→板块→组件</li>
                <li>🔧 <strong>技术</strong>：HTML（骨架）+ CSS（样式）+ JavaScript（交互）</li>
                <li>👥 <strong>作用</strong>：用户交互的桥梁</li>
            </ul>
        </section>

        <section>
            <h3>⚙️ 后端核心要点</h3>
            <ul>
                <li>🛣️ <strong>路由</strong>：根据不同路径分发数据</li>
                <li>🔐 <strong>验证</strong>：确认用户身份和权限</li>
                <li>🔧 <strong>处理</strong>：清洗和整理数据</li>
                <li>💾 <strong>存储</strong>：管理数据库数据</li>
            </ul>
        </section>

        <section>
            <h3>🤝 协作关系</h3>
            <ul>
                <li>🌉 前端是用户和系统的桥梁</li>
                <li>⚙️ 后端是数据处理的中间商</li>
                <li>🔗 通过链接进行数据交换</li>
                <li>🎯 共同为用户提供完整的服务</li>
            </ul>
        </section>
    </section>

    <section>
        <h2>🎉 谢谢大家！</h2>
        <p>🏆 现在你们都理解前端和后端的工作原理了！</p>
        <p>💡 是不是比想象中简单很多？</p>
        <p>💻⚙️ 开始用AI开发你的全栈项目吧！</p>
        <p>❓ 有问题随时提问！</p>
    </section>
    `
};


