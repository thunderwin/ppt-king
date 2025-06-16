module.exports = {
    title: 'Git与终端基础 - 从代码获取到运行的完整流程',
    description: '学习Git基础操作、终端使用和代码运行环境',
    theme: 'sky',
    content: `
    <section>
        <h1>Git与终端基础</h1>
        <h3>从代码获取到运行的完整流程</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
    </section>

    <section>
        <h2>本节课目标</h2>
        <p>掌握程序员必备的基础技能</p>
        <ul>
            <li>🔧 安装开发必备软件</li>
            <li>📥 获取代码到本地</li>
            <li>⌨️ 学会使用终端命令行</li>
            <li>🚀 运行代码并检查效果</li>
        </ul>
    </section>

    <section>
        <h2>程序怎么跑起来？</h2>
        <p>大家平时用电脑，双击图标就能打开软件，比如微信、游戏，对吧？</p>
        <p class="fragment">这其实是乔布斯老爷子发明的图形界面带来的便利。但这背后，程序运行的原理可不是双击那么简单。</p>
        <p class="fragment">今天我们就来揭秘一下，程序到底是怎么跑起来的，以及如何从网上获取代码。</p>
    </section>

    <section>
        <section>
            <h2>第一步：安装必备软件</h2>
            <p>工欲善其事，必先利其器</p>
            <p>我们需要安装两个核心软件：</p>
            <ul>
                <li>📦 Git - 代码管理工具</li>
                <li>🚀 Node.js - JavaScript运行环境</li>
            </ul>
        </section>

        <section>
            <h3>Mac用户的特别提醒！</h3>
            <p>Mac用户有个"秘密武器" - Homebrew</p>
            <p>它是Mac上最好用的软件管理工具，就像手机上的App Store一样</p>
            <pre><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></pre>
            <p><small>💡 安装完Homebrew后，安装软件就变得超级简单了！</small></p>
            <p class="fragment">当然，你也可以选择直接下载安装包，但用Homebrew更专业、更方便管理版本。</p>
        </section>
    </section>

    <section>
        <section>
            <h2>安装 Git</h2>
            <p>Git 就像是连接你电脑和云端代码仓库的"桥梁"</p>
        </section>

        <section>
            <h3>Windows 用户安装 Git</h3>
            <ul>
                <li>🌐 访问官网：<a href="https://git-scm.com/download/win" target="_blank">git-scm.com/download/win</a></li>
                <li>⬇️ 下载对应版本的安装包</li>
                <li>🖱️ 双击安装包，一路"下一步"</li>
                <li>✅ 安装完成后重启命令行</li>
            </ul>
            <p><small>😄 就像安装微信一样简单，大部分选项用默认的就行</small></p>
        </section>

        <section>
            <h3>Mac 用户安装 Git</h3>
            <p><strong>推荐方式：使用 Homebrew</strong></p>
            <pre><code>brew install git</code></pre>
            <p><strong>备选方式：官网下载</strong></p>
            <p>访问 <a href="https://git-scm.com/download/mac" target="_blank">git-scm.com/download/mac</a> 下载安装包</p>
            <p><small>💡 用Homebrew安装的好处：自动配置环境、方便升级版本</small></p>
        </section>

        <section>
            <h3>验证Git安装</h3>
            <p>打开命令行，输入这个"暗号"：</p>
            <pre><code>git --version</code></pre>
            <p><strong>格式说明：</strong></p>
            <ul>
                <li>git 后面有一个空格</li>
                <li>然后是两个短横线 --</li>
                <li>最后是 version</li>
            </ul>
            <p>如果看到版本号，恭喜你安装成功了！</p>
        </section>

        <section>
            <h3>Git 初始化设置</h3>
            <p>告诉 Git 你是谁（就像实名认证）</p>
            <pre><code>
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
            </code></pre>
            <p><small>💡 这样以后代码提交时就知道是谁改的了</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>安装 Node.js</h2>
            <p>Node.js 是JavaScript的"翻译官"</p>
            <p>就像我们需要翻译把英语翻译成中文，计算机也需要Node.js把JavaScript翻译成机器语言</p>
        </section>

        <section>
            <h3>Windows 用户安装 Node.js</h3>
            <ol>
                <li>访问 <a href="https://nodejs.org" target="_blank">nodejs.org</a> 官网</li>
                <li>网站会自动识别你的系统，下载LTS版本</li>
                <li>双击安装包，一路点击"下一步"</li>
            </ol>
            <p><small>💡 LTS版本最稳定，适合新手使用</small></p>
        </section>

        <section>
            <h3>Mac 用户安装 Node.js</h3>
            <p><strong>推荐方式：使用 Homebrew</strong></p>
            <pre><code>brew install node</code></pre>
            <p><strong>备选方式：官网下载</strong></p>
            <p>访问 <a href="https://nodejs.org" target="_blank">nodejs.org</a> 下载安装包</p>
            <p><small>💡 Homebrew可以自动管理多个Node.js版本</small></p>
        </section>

        <section>
            <h3>验证Node.js安装</h3>
            <pre><code>node -v</code></pre>
            <p><strong>格式说明：</strong></p>
            <ul>
                <li><code>node</code> 后面有一个空格</li>
                <li><code>-v</code> 表示查看版本</li>
                <li>如果显示版本号就说明安装成功了</li>
            </ul>
            <p>比如显示：v18.17.0</p>
        </section>
    </section>

    <section>
        <section>
            <h2>黑客电影里的那些是真的吗？</h2>
            <p>你看黑客电影，高手们都是对着黑乎乎的屏幕敲代码，对吧？那玩意儿叫"命令行"或者"终端"。</p>
            <p>现在软件都安装好了，我们来学学怎么用命令行操作电脑。</p>
        </section>

        <section>
            <p>在苹果电脑上，它叫"终端"(Terminal)。</p>
            <p>在Windows上，它叫"命令提示符"(Command Prompt)或"PowerShell"。</p>
            <p>虽然看起来有点"复古"，但它非常强大，是程序员的必备工具。</p>
            <p class="fragment">讲个笑话：为什么程序员喜欢用黑色的终端？因为亮色主题会亮瞎他们的眼！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>必学的基本命令</h2>
            <p>我们只学最基本的几个，就像学开车只需要会油门刹车方向盘</p>
        </section>

        <section>
            <h3>ls / dir - 看看当前文件夹有什么</h3>
            <p>就像开灯看看房间里有啥</p>
            <pre><code>
ls        # Mac/Linux 用这个
dir       # Windows 用这个
            </code></pre>
            <p>直接输入，回车执行，就能看到当前文件夹里的所有文件和文件夹</p>
        </section>

        <section>
            <h3>cd - 切换到其他文件夹</h3>
            <p>cd 的意思是 "Change Directory"，就是"换个地方"</p>
            <pre><code>cd 文件夹名字</code></pre>
            <p><strong>重要：</strong>cd 和文件夹名之间必须有空格！</p>
            <p>常用例子：</p>
            <ul>
                <li><code>cd Desktop</code> - 进入桌面</li>
                <li><code>cd ..</code> - 返回上一层</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>什么是 Github？</h2>
            <p>程序员的"网盘" - 存放代码的云端仓库</p>
            <ul>
                <li>🏠 代码仓库 - 存放代码的地方</li>
                <li>📥 下载代码 - 把代码拿到本地</li>
                <li>🔓 公开仓库 - 任何人都可以下载</li>
                <li>🔒 私有仓库 - 需要权限才能访问</li>
            </ul>
            <p><small>💡 我们今天用的是公开仓库，不需要注册账户！</small></p>
        </section>

        <section>
            <h3>为什么要用Github？</h3>
            <p>就像你把照片存在云盘里一样，程序员把代码存在Github上。</p>
            <p>这样不管在哪台电脑，都能访问到最新的代码。而且还能和别人分享代码，就像分享网盘链接一样简单。</p>
        </section>
    </section>

    <section>
        <section>
            <h2>获取代码到本地</h2>
            <p>把云端的代码"搬"到你的电脑里</p>
            <a href="https://github.com/thunderwin/full_stock_course_node_demo.git" target="_blank">https://github.com/thunderwin/full_stock_course_node_demo.git</a>
        </section>

        <section>
            <h3>使用 git clone 下载代码</h3>
            <p>就像从网盘下载文件一样简单</p>
            <pre><code>git clone https://github.com/thunderwin/full_stock_course_node_demo.git</code></pre>
            <p><small>💡 公开仓库直接 clone，不需要登录！</small></p>
            <p><small>😄 就像下载免费软件，不用注册会员</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>运行代码</h2>
            <p>让沉睡的代码"活"起来</p>
        </section>

        <section>
            <h3>完整的运行流程</h3>
            <p>来，我们走一遍完整流程：</p>
            <ol>
                <li>打开终端</li>
                <li>用 <code>ls</code> 或 <code>dir</code> 看看现在在哪</li>
                <li>用 <code>cd</code> 进入到你的项目文件夹</li>
                <li>用 <code>node 文件名.js</code> 运行程序！</li>
            </ol>
            <p class="fragment">你看，就这几步，跟学开车一样，熟悉了就好了！</p>
        </section>

        <section>
            <h3>不同项目的启动方式</h3>
            <ul>
                <li><strong>单个JS文件：</strong><code>node 文件名.js</code></li>
                <li><strong>完整项目：</strong>先 <code>npm install</code> 再 <code>npm start</code></li>
            </ul>
            <p><small>😄 就像不同的游戏有不同的启动方式</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>检查运行效果</h2>
            <p>验收成果的时刻到了！</p>
        </section>

        <section>
            <h3>效果检查清单</h3>
            <ul>
                <li>✅ 代码是否成功运行？</li>
                <li>✅ 有没有报错信息？</li>
                <li>✅ 功能是否正常工作？</li>
                <li>✅ 如果是网站，能否在浏览器打开？</li>
            </ul>
            <p><small>💡 如果是web项目，通常会显示类似"Server running on port 3000"的信息</small></p>
        </section>
    </section>

    <section>
        <h2>总结</h2>
        <p>今天我们学会了程序员的基础工具链</p>
        <ul style="font-size: 0.8em;">
            <li>🔧 Git - 代码管理工具</li>
            <li>🚀 Node.js - JavaScript运行环境</li>
            <li>🍺 Homebrew - Mac用户的软件管理神器</li>
            <li>⌨️ 基本终端命令：ls/dir、cd</li>
            <li>📥 <code>git clone</code> - 下载代码</li>
            <li>🏃 <code>node</code> - 运行JavaScript</li>
        </ul>
        <p><small>记住：Mac用户优先使用Homebrew，命令中要注意空格！</small></p>
        <p><small>下节课见！👋</small></p>
    </section>
    `
}; 