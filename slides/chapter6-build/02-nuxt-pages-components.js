module.exports = {
    title: '第二课：Nuxt页面与组件实战',
    description: '前端开发的两大核心：页面与组件',
    theme: 'sky',
    content: `
    <section>
        <h2>Nuxt页面与组件实战</h2>
        <h3>前端开发的两大核心元素</h3>
        <p>
            <small>讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>🧩 前端的基本组成</h2>
            <p>就像搭积木一样简单</p>
            <div style="display: flex; justify-content: space-around; margin-top: 50px;">
                <div class="fragment">
                    <h3>📄 页面 (Pages)</h3>
                    <p>网站的各个界面</p>
                    <small>首页、关于我们、联系我们...</small>
                </div>
                <div class="fragment">
                    <h3>🔧 组件 (Components)</h3>
                    <p>可重复使用的部件</p>
                    <small>导航栏、按钮、卡片...</small>
                </div>
            </div>
            <p class="fragment" style="margin-top: 40px;">
                <strong>💡 不管什么前端框架，都是这两个核心元素组成的！</strong>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>📁 Nuxt项目结构探索</h2>
            <p>初来乍到，这些文件夹都是什么？</p>
        </section>
        
        <section>
            <h3>项目目录初印象</h3>
            <div style="text-align: left;">
                <p class="fragment">🤔 看到一堆陌生的文件夹？</p>
                <p class="fragment">😅 作为新手，先别慌！</p>
                <p class="fragment">📚 详细用途可以去官方网站查看</p>
                <p class="fragment" style="color: #e74c3c;">
                    <strong>🎯 我们只关注要做的东西！</strong>
                </p>
            </div>
        </section>

        <section>
            <h3>创建核心文件夹</h3>
            <p>在根目录创建两个重要文件夹</p>
            <div style="display: flex; justify-content: space-around; margin-top: 40px;">
                <div class="fragment">
                    <h4>📁 pages</h4>
                    <p>存放页面文件</p>
                    <small>英文：页面的意思</small>
                </div>
                <div class="fragment">
                    <h4>📁 components</h4>
                    <p>存放组件文件</p>
                    <small>英文：组件的意思</small>
                </div>
            </div>
            <p class="fragment" style="margin-top: 30px;">
                <small>💡 英文好的朋友看名字就知道了对不对！</small>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>📄 创建我们的第一个页面</h2>
            <p>让网站有内容可看</p>
        </section>
        
        <section>
            <h3>规划网站页面</h3>
            <p>你希望你的网站有几个页面呢？</p>
            <div class="fragment">
                <h4>🏠 首页 (index.vue)</h4>
                <p>网站的门面，第一印象很重要</p>
            </div>
            <div class="fragment">
                <h4>📞 联系我们 (contact.vue)</h4>
                <p>让访客能够联系到你</p>
            </div>
        </section>

        <section>
            <h3>实际操作步骤</h3>
            <ol style="text-align: left;">
                <li class="fragment">在 <code>pages</code> 文件夹下创建 <code>index.vue</code></li>
                <li class="fragment">写一些简单的首页内容</li>
                <li class="fragment">再创建 <code>contact.vue</code> 联系我们页面</li>
                <li class="fragment">在浏览器中查看两个页面</li>
            </ol>
            <p class="fragment" style="color: #27ae60; margin-top: 30px;">
                <strong>🎉 很好！是不是非常简单？我们已经有两个页面了！</strong>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>🤔 咦，少了点什么？</h2>
            <p>经常使用网站的小朋友们都知道...</p>
        </section>
        
        <section>
            <h3>网站还缺什么？</h3>
            <div style="text-align: left;">
                <p class="fragment">🧭 <strong>导航栏</strong> - 帮助用户在页面间跳转</p>
                <p class="fragment">🏷️ <strong>Logo</strong> - 品牌标识</p>
                <p class="fragment">📋 <strong>菜单</strong> - 各个页面的链接</p>
            </div>
            <div class="fragment" style="margin-top: 40px;">
                <h4>💭 这些应该属于什么呢？</h4>
                <p class="fragment" style="color: #3498db;">
                    <strong>💡 当然是组件！因为它们是重复使用的</strong>
                </p>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>🔧 创建导航组件</h2>
            <p>让AI帮我们写个专业的导航</p>
        </section>
        
        <section>
            <h3>组件创建步骤</h3>
            <ol style="text-align: left;">
                <li class="fragment">在 <code>components</code> 文件夹下新建文件</li>
                <li class="fragment">比如叫 <code>Header.vue</code> 或 <code>Navigation.vue</code></li>
                <li class="fragment">让AI帮我们写导航代码</li>
                <li class="fragment">包含到我们两个页面的链接</li>
            </ol>
            <p class="fragment" style="color: #f39c12; margin-top: 30px;">
                <strong>🤖 AI写出来了！看起来很专业对吧？</strong>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔗 引入组件到页面</h2>
            <p>最后一步：让组件出现在网站上</p>
        </section>
        
        <section>
            <h3>如何引入组件？</h3>
            <p>在 <code>app.vue</code> 文件中引入我们的头部组件</p>
            <div class="fragment" style="background: #2c3e50; color: white; padding: 20px; border-radius: 10px;">
                <pre><code>
&lt;template&gt;
  &lt;Header /&gt;
  &lt;NuxtPage /&gt;
&lt;/template&gt;
                </code></pre>
            </div>
            <p class="fragment" style="color: #27ae60; margin-top: 30px;">
                <strong>🎉 然后就完事了，对就这么简单！</strong>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>🎯 总结回顾</h2>
            <p>我们都学会了什么？</p>
        </section>
        
        <section>
            <h3>今天的成果</h3>
            <ul style="text-align: left;">
                <li class="fragment">📁 <strong>理解了项目结构</strong> - pages 和 components</li>
                <li class="fragment">📄 <strong>创建了页面</strong> - 首页和联系我们页面</li>
                <li class="fragment">🔧 <strong>制作了组件</strong> - 导航栏组件</li>
                <li class="fragment">🔗 <strong>学会了引入</strong> - 在app.vue中使用组件</li>
            </ul>
        </section>

        <section>
            <h3>核心概念巩固</h3>
            <div style="display: flex; justify-content: space-around;">
                <div class="fragment">
                    <h4>📄 页面 (Pages)</h4>
                    <ul style="font-size: 0.8em;">
                        <li>独立的网页界面</li>
                        <li>用户可以直接访问</li>
                        <li>有自己的URL路径</li>
                    </ul>
                </div>
                <div class="fragment">
                    <h4>🔧 组件 (Components)</h4>
                    <ul style="font-size: 0.8em;">
                        <li>可重复使用的部件</li>
                        <li>在多个页面中使用</li>
                        <li>提高代码复用性</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <h2>🚀 下一步</h2>
        <p>继续完善我们的网站</p>
        <ul>
            <li class="fragment">🎨 美化页面样式</li>
            <li class="fragment">➕ 添加更多页面</li>
            <li class="fragment">🔧 创建更多有用的组件</li>
            <li class="fragment">⚡ 添加交互功能</li>
        </ul>
        <p class="fragment" style="margin-top: 40px;">
            <strong>记住：从简单开始，逐渐完善！</strong>
        </p>
    </section>
    `
};

