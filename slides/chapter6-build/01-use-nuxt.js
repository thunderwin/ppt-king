module.exports = {
    title: '使用 Nuxt3 构建现代网站',
    description: 'Nuxt3 安装、运行和常见问题解答',
    theme: 'sky',
    content: `
    <section>
        <h2 class="r-fit-text">使用 Nuxt3 构建现代网站</h2>
        <h3>从安装到运行的完整指南</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>开始之前：检查你的电脑</h2>
            <p>就像做菜之前要准备食材一样</p>
        </section>
        
        <section>
            <h3>第0步：检查 Node.js</h3>
            <p>Nuxt3 需要 Node.js 版本 16.10.0 或更高</p>
            <pre><code data-language="bash">node --version</code></pre>
            <p>如果显示类似 <code>v18.17.0</code> 就说明已安装</p>
            <p><small>没有的话需要先去 nodejs.org 下载安装</small></p>
        </section>

        <section>
            <h3>检查 npm（包管理器）</h3>
            <pre><code data-language="bash">npm --version</code></pre>
            <p>这个通常和 Node.js 一起安装</p>
            <p>看到版本号就说明一切正常！</p>
        </section>

        <section>
            <h3>选择一个合适的位置</h4>
            <ul>
                <li>在桌面创建一个 <strong>projects</strong> 文件夹</li>
                <li>或者在文档里创建 <strong>我的网站项目</strong> 文件夹</li>
                <li>总之找个你能记住的地方</li>
            </ul>
            <p><small>就像整理房间，东西要放在固定位置</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>第一步：创建 Nuxt3 项目</h2>
            <p>现在开始真正的安装过程</p>
        </section>
        
        <section>
            <h3>打开终端</h3>
            <ul>
                <li><strong>Windows</strong>：按 Win+R，输入 cmd 或使用 PowerShell</li>
                <li><strong>Mac</strong>：按 Cmd+空格，搜索 "终端" 或 "Terminal"</li>
                <li><strong>Linux</strong>：Ctrl+Alt+T</li>
            </ul>
            <p>别怕黑屏幕，它只是看起来酷一点 😎</p>
        </section>

        <section>
            <h3>进入你的项目文件夹</h3>
            <pre><code data-language="bash">cd Desktop/projects</code></pre>
            <p>或者你创建的其他文件夹</p>
            <p><small>cd 就是 "change directory" 的缩写，意思是换文件夹</small></p>
        </section>
        
        <section>
            <h3>运行创建命令</h3>
            <pre><code data-language="bash">npx nuxi@latest init my-nuxt-app</code></pre>
            <p>这个命令做了什么？</p>
            <ul>
                <li><strong>npx</strong>：运行工具（不用安装到电脑上）</li>
                <li><strong>nuxi</strong>：Nuxt3 的命令行工具</li>
                <li><strong>init</strong>：创建新项目</li>
                <li><strong>my-nuxt-app</strong>：你的项目名字（可以改）</li>
            </ul>
        </section>

        <section>
            <h3>npx 到底是什么？</h3>
            <p>让我用一个生活中的例子来解释：</p>
            <ul>
                <li><strong>npm</strong>：像是去商店<strong>买</strong>工具回家存着</li>
                <li><strong>npx</strong>：像是去五金店<strong>借</strong>工具用完就还</li>
            </ul>
            <p>你不需要修水管，为什么要买扳手？用完就还更合理！</p>
        </section>

        <section>
            <h3>npx 的好处</h3>
            <ul>
                <li>🚀 <strong>总是最新版</strong>：每次都下载最新的工具</li>
                <li>💾 <strong>节省空间</strong>：用完就删，不占硬盘</li>
                <li>🔒 <strong>避免冲突</strong>：不会和其他版本打架</li>
                <li>⚡ <strong>即用即走</strong>：需要什么工具就临时下载</li>
            </ul>
            <p><small>就像叫外卖，不用自己买菜做饭！</small></p>
        </section>

        <section>
            <h3>完整命令拆解</h3>
            <pre><code data-language="bash">npx nuxi@latest init my-nuxt-app</code></pre>
            <div style="text-align: left; margin: 20px;">
                <p>📦 <strong>npx</strong> = "我要临时借个工具"</p>
                <p>🔧 <strong>nuxi</strong> = "工具名叫 nuxi"</p>
                <p>✨ <strong>@latest</strong> = "要最新版本的"</p>
                <p>🏗️ <strong>init</strong> = "用这个工具创建项目"</p>
                <p>📁 <strong>my-nuxt-app</strong> = "项目叫这个名字"</p>
            </div>
        </section>

        <section>
            <h3>等待下载...</h3>
            <p>你会看到类似这样的输出：</p>
            <pre><code>✨ Creating Nuxt 3 project...
📁 Creating project folder: my-nuxt-app
🎉 Project created successfully!</code></pre>
            <p>这个过程可能需要 1-3 分钟</p>
            <p><small>取决于你的网络速度，喝口水放松一下 💧</small></p>
        </section>

        <section>
            <h3>进入新创建的项目</h3>
            <pre><code data-language="bash">cd my-nuxt-app</code></pre>
            <p>现在你在项目文件夹里了</p>
            <p>可以用 <code>ls</code>（Mac/Linux）或 <code>dir</code>（Windows）看看里面有什么</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第二步：安装项目依赖</h2>
            <p>下载项目需要的所有"配件"</p>
        </section>

        <section>
            <h3>运行安装命令</h3>
            <pre><code data-language="bash">npm install</code></pre>
            <p>你会看到很多下载信息滚动</p>
            <p>这是正常的！npm 在下载几百个小工具</p>
            <p><small>就像买了一台电脑，还要装各种软件</small></p>
        </section>

        <section>
            <h3>安装过程中可能看到的内容</h3>
            <pre><code>npm WARN deprecated...
added 1247 packages, and audited 1248 packages
✅ Installation completed!</code></pre>
            <p><strong>WARN</strong> 提示不用担心，通常只是版本兼容提醒</p>
            <p>看到 <strong>Installation completed</strong> 就成功了！</p>
        </section>

        <section>
            <h3>常见问题：网络太慢怎么办？</h3>
            <p>可以使用国内的镜像源：</p>
            <pre><code data-language="bash">npm install --registry=https://registry.npmmirror.com</code></pre>
            <p>这就像换一个离你更近的商店买东西 🏪</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第三步：启动项目</h2>
            <p>让我们把网站跑起来！</p>
        </section>
        
        <section>
            <h3>启动开发服务器</h3>
            <pre><code data-language="bash">npm run dev</code></pre>
            <p>你会看到类似这样的输出：</p>
            <pre><code>Nuxt 3.8.0 with Nitro 2.7.2
  ➜ Local:   http://localhost:3000/
  ➜ Network: http://192.168.1.100:3000/

✔ Vite server built in 1234ms
ℹ Ready in 2.3s</code></pre>
        </section>

        <section>
            <h3>打开浏览器测试</h3>
            <ol>
                <li>打开你的浏览器（Chrome、Safari、Firefox 都可以）</li>
                <li>在地址栏输入：<strong>http://localhost:3000</strong></li>
                <li>按回车键</li>
            </ol>
            <p>🎉 看到 Nuxt 欢迎页面就说明成功了！</p>
        </section>

        <section>
            <h3>如果 3000 端口被占用怎么办？</h3>
            <p>Nuxt 会自动选择其他端口，比如 3001</p>
            <pre><code>Port 3000 is already in use
➜ Local:   http://localhost:3001/</code></pre>
            <p>用显示的端口号就行，不用担心</p>
        </section>
    </section>

    <section>
        <section>
            <h2>安装完成！检查清单</h2>
            <p>确认一下是否一切正常</p>
        </section>

        <section>
            <h3>✅ 安装成功的标志</h3>
            <ul>
                <li>终端显示 "Ready in X.Xs"</li>
                <li>浏览器能正常访问 localhost:3000</li>
                <li>看到 Nuxt 的欢迎页面和绿色对勾</li>
                <li>页面上有 "Welcome to Nuxt!" 字样</li>
            </ul>
        </section>

        <section>
            <h3>如果遇到问题...</h3>
            <ul>
                <li><strong>端口错误</strong>：重启终端，重新运行</li>
                <li><strong>权限错误</strong>：在命令前加 sudo（Mac/Linux）</li>
                <li><strong>网络错误</strong>：检查网络连接或使用镜像源</li>
                <li><strong>Node.js 版本太低</strong>：升级到最新版本</li>
            </ul>
            <p><small>99% 的问题都能通过重启解决 🔄</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>为什么选择 Nuxt3？</h2>
            <p>让我来解答一些常见疑问</p>
        </section>
        
        <section>
            <h3>疑问1：为什么不是普通的 HTML/CSS/JS？</h3>
            <ul>
                <li>Nuxt3 其实还是包含 HTML、CSS、JavaScript</li>
                <li>只是把它们组织得更加优雅和直观</li>
                <li>就像把散装的乐高积木装进了收纳盒</li>
            </ul>
        </section>

        <section>
            <h3>Vue vs Nuxt 的区别</h3>
            <ul>
                <li><strong>Vue</strong>：只能做单页应用（SPA），类似管理后台</li>
                <li><strong>Nuxt</strong>：既能做单页应用，又能做多页网站</li>
                <li>Nuxt 就是 Vue 的"升级豪华版"</li>
            </ul>
        </section>

        <section>
            <h3>为什么直接学 Nuxt？</h3>
            <ul>
                <li>商业项目需要 SEO 友好的网站</li>
                <li>加载速度更快，用户体验更好</li>
                <li>就像学开车直接学自动挡，而不是手动挡</li>
            </ul>
        </section>

        <section>
            <h3>Nuxt 更直观的原因</h3>
            <ul>
                <li><strong>pages</strong> 文件夹 = 网站页面</li>
                <li><strong>components</strong> 文件夹 = 可重用组件</li>
                <li><strong>assets</strong> 文件夹 = 图片、样式等资源</li>
                <li>英文不好也没关系，看文件夹名就知道用途！</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>关于 AI 编程的说明</h2>
            <p>你可能会疑惑...</p>
        </section>
        
        <section>
            <h3>为什么不一开始就用 AI？</h3>
            <ul>
                <li>学会看懂代码比让 AI 写代码更重要</li>
                <li>如果不理解基础，AI 写的代码你也看不懂</li>
                <li>就像学数学，你得先会加减法，再学乘除法</li>
            </ul>
        </section>

        <section>
            <h3>我们的学习策略</h3>
            <ol>
                <li>先让项目跑起来（有成就感）</li>
                <li>再慢慢理解每个部分的作用</li>
                <li>最后用 AI 加速开发效率</li>
            </ol>
            <p>这样学习不会"晕头转向"</p>
        </section>
    </section>

    <section>
        <section>
            <h2>接下来做什么？</h2>
            <p>项目已经跑起来了，让我们继续探索</p>
        </section>
        
        <section>
            <h3>下节课预告</h3>
            <ul>
                <li>理解 Nuxt3 的文件结构</li>
                <li>创建你的第一个页面</li>
                <li>添加样式让页面更美观</li>
                <li>开始用 AI 辅助开发</li>
            </ul>
        </section>

        <section>
            <h2>谢谢大家！</h2>
            <p>记住：编程就像学骑自行车</p>
            <p>一开始可能会摔跤，但掌握了就再也不会忘记</p>
            <p>💪 加油，未来的全栈工程师们！</p>
        </section>
    </section>
    `
}; 







