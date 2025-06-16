module.exports = {
    title: 'Nuxt.js前端显示后端内容',
    description: '学会在前端页面显示后端数据',
    theme: 'sky',
    content: `
    <section>
        <h2>🌐 Nuxt.js前端显示后端内容</h2>
        <h3>让数据在页面上活起来</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>📋 今天要学什么？</h2>
            <ul>
                <li>🔄 回顾上节课的后端</li>
                <li>🎯 前端如何获取后端数据</li>
                <li>💻 实际代码演示</li>
                <li>🚀 让数据显示在页面上</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🔄 回顾上节课</h2>
        </section>
        
        <section>
            <h3>🎯 我们做了什么？</h3>
            <ul>
                <li>📝 搭建了一个简单的后端</li>
                <li>💾 写了一些测试内容</li>
                <li>🔧 配置好了数据接口</li>
                <li>✅ 后端已经可以正常工作</li>
            </ul>
        </section>

        <section>
            <h3>🤔 现在的问题</h3>
            <ul>
                <li>后端有数据，但用户看不到</li>
                <li>需要在前端页面显示这些数据</li>
                <li>让用户可以直接在网页上看到内容</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🌟 好消息！</h2>
        </section>
        
        <section>
            <h3>🎉 在Nuxt.js中超级简单</h3>
            <ul>
                <li>💡 不需要复杂的配置</li>
                <li>🔧 几行代码就搞定</li>
                <li>🚀 自动处理数据获取</li>
                <li>✨ 页面自动更新</li>
            </ul>
        </section>

        <section>
            <h3>🎯 核心概念</h3>
            <ul>
                <li><strong>📡 数据获取</strong> - 从后端拿数据</li>
                <li><strong>🖼️ 数据显示</strong> - 在页面上显示</li>
                <li><strong>🔄 自动更新</strong> - 数据改变页面跟着变</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>💻 代码演示</h2>
            <h3>看看有多简单</h3>
        </section>
        
        <section>
            <h3>📄 基础页面结构</h3>
            <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;我的内容页面&lt;/h1&gt;
    &lt;div v-for="item in content" :key="item.id"&gt;
      &lt;h2&gt;{{ item.title }}&lt;/h2&gt;
      &lt;p&gt;{{ item.description }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </section>
        
        <section>
            <h3>📡 获取数据的代码</h3>
            <pre><code>&lt;script setup&gt;
// 从后端获取数据
const { data: content } = await $fetch('/api/content')

// 就这么简单！数据就拿到了
&lt;/script&gt;</code></pre>
        </section>
        
        <section>
            <h3>🔄 完整的页面代码</h3>
            <pre><code>&lt;template&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;📚 我的内容库&lt;/h1&gt;
    
    &lt;div v-if="pending"&gt;
      ⏳ 加载中...
    &lt;/div&gt;
    
    &lt;div v-else&gt;
      &lt;article v-for="item in content" :key="item.id"&gt;
        &lt;h2&gt;{{ item.title }}&lt;/h2&gt;
        &lt;p&gt;{{ item.description }}&lt;/p&gt;
        &lt;small&gt;📅 {{ item.date }}&lt;/small&gt;
      &lt;/article&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const { data: content, pending } = await $fetch('/api/content')
&lt;/script&gt;</code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 代码解释</h2>
        </section>
        
        <section>
            <h3>📄 模板部分 (template)</h3>
            <ul>
                <li><strong>🏗️ 结构</strong> - 定义页面长什么样</li>
                <li><strong>🔄 v-for</strong> - 循环显示每条数据</li>
                <li><strong>🔧 v-if</strong> - 根据条件显示不同内容</li>
                <li><strong>📝 {{ }}</strong> - 显示数据内容</li>
            </ul>
        </section>
        
        <section>
            <h3>⚙️ 脚本部分 (script)</h3>
            <ul>
                <li><strong>📡 $fetch</strong> - 从后端获取数据</li>
                <li><strong>⏳ pending</strong> - 加载状态</li>
                <li><strong>💾 data</strong> - 获取到的数据</li>
                <li><strong>🔄 await</strong> - 等待数据加载完成</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🚀 实际效果</h2>
        </section>
        
        <section>
            <h3>👁️ 用户看到什么？</h3>
            <ul>
                <li>📚 页面标题：我的内容库</li>
                <li>⏳ 加载时：显示"加载中..."</li>
                <li>📄 加载完成：显示所有内容</li>
                <li>🎨 每条内容包含：标题、描述、日期</li>
            </ul>
        </section>
        
        <section>
            <h3>✨ 自动化的好处</h3>
            <ul>
                <li>🔄 数据自动获取</li>
                <li>⚡ 页面自动更新</li>
                <li>🛡️ 错误自动处理</li>
                <li>📱 响应式设计</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 核心知识点</h2>
        </section>
        
        <section>
            <h3>📡 数据获取</h3>
            <ul>
                <li><strong>$fetch</strong> - Nuxt.js内置的数据获取工具</li>
                <li><strong>await</strong> - 等待异步操作完成</li>
                <li><strong>API路径</strong> - 指向后端数据接口</li>
            </ul>
        </section>
        
        <section>
            <h3>🖼️ 数据显示</h3>
            <ul>
                <li><strong>v-for</strong> - 循环显示数据列表</li>
                <li><strong>v-if</strong> - 条件显示元素</li>
                <li><strong>{{ }}</strong> - 插值表达式显示数据</li>
            </ul>
        </section>
        
        <section>
            <h3>🔄 状态管理</h3>
            <ul>
                <li><strong>pending</strong> - 加载状态</li>
                <li><strong>data</strong> - 数据内容</li>
                <li><strong>error</strong> - 错误信息</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>💡 为什么这么简单？</h2>
        </section>
        
        <section>
            <h3>🎯 Nuxt.js的魔法</h3>
            <ul>
                <li>🤖 自动处理数据获取</li>
                <li>⚡ 自动优化性能</li>
                <li>🛡️ 自动错误处理</li>
                <li>📱 自动响应式设计</li>
            </ul>
        </section>
        
        <section>
            <h3>🔧 背后的工作</h3>
            <ul>
                <li>📡 网络请求优化</li>
                <li>💾 数据缓存管理</li>
                <li>🔄 状态自动更新</li>
                <li>🛠️ 开发体验优化</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🎉 总结</h2>
        </section>
        
        <section>
            <h3>✅ 今天学到了</h3>
            <ul>
                <li>📡 如何从后端获取数据</li>
                <li>🖼️ 如何在前端显示数据</li>
                <li>⚡ Nuxt.js让这一切变得简单</li>
                <li>🔄 数据和页面的自动同步</li>
            </ul>
        </section>
        
        <section>
            <h3>🚀 下一步</h3>
            <ul>
                <li>🎨 美化页面样式</li>
                <li>📝 添加更多功能</li>
                <li>🔧 处理更复杂的数据</li>
                <li>🌐 发布到线上</li>
            </ul>
        </section>
    </section>

    <section>
        <h2>🎓 恭喜大家！</h2>
        <h3>前后端打通了！</h3>
        <p>现在你的数据可以在页面上完美显示</p>
        <p><small>❓ 有问题随时问哦～</small></p>
    </section>
    `
};