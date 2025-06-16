module.exports = {
    title: '域名和链接是怎么工作的',
    description: '分别深入理解域名系统和链接结构',
    theme: 'blood',
    content: `
    <section>
        <h2>🌐 域名和链接是怎么工作的</h2>
        <h3>分别深入理解域名系统和链接结构</h3>
        <p>
            <small>👨‍🏫 讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>📋 今天的学习内容</h2>
            <ul>
                <li>🌐 <strong>第一部分：域名系统</strong></li>
                <li>🔗 <strong>第二部分：链接结构</strong></li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h1>🌐 第一部分</h1>
            <h2>域名系统</h2>
        </section>
    </section>

    <section>
        <section>
            <h2>🤔 什么是域名？为什么需要域名？</h2>
        </section>
        
        <section>
            <h3>🆔 网站的身份证号码</h3>
            <p>🌐 每个网站都有一个真正的"身份证号码"</p>
            <p>📍 这个号码叫做IP地址</p>
            <p>🔢 比如：192.168.1.1</p>
        </section>

        <section>
            <h3>🤯 IP地址太难记了！</h3>
            <ul>
                <li>🛒 淘宝：140.205.94.189</li>
                <li>🛍️ 京东：106.39.171.130</li>
                <li>🔍 百度：39.156.66.10</li>
            </ul>
            <p>😵‍💫 能记住吗？肯定记不住对吧！</p>
            <p>💡 就像记朋友的身份证号码一样困难</p>
        </section>

        <section>
            <h3>💡 聪明的解决方案</h3>
            <p>🧠 工程师们发明了域名系统</p>
            <p>✨ 用简单好记的名字来访问网站</p>
            <ul>
                <li>🛒 taobao.com</li>
                <li>🛍️ jd.com</li>
                <li>🔍 baidu.com</li>
            </ul>
            <p>🏷️ 就像给每个网站起了好听的名字！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🏗️ 域名的结构</h2>
        </section>
        
        <section>
            <h3>🌐 域名示例</h3>
            <p>🏷️ 域名：www.taobao.com</p>
        </section>

        <section>
            <h3>🏠 域名的层级结构</h3>
            <p>🌐 www.taobao.com 拆分：</p>
            <ul>
                <li>🌍 <strong>www</strong>：子域名（网站主页）</li>
                <li>🏢 <strong>taobao</strong>：主域名（核心名称）</li>
                <li>🏷️ <strong>com</strong>：顶级域名（商业网站）</li>
            </ul>
        </section>

        <section>
            <h3>📍 就像地址系统</h3>
            <p>🇨🇳 中国.北京市.朝阳区.某某街道.某某小区.某栋楼.某个房间号</p>
            <hr>
            <p>🌐 域名也是层级结构</p>
            <p>➡️ 从右到左，范围越来越小，越来越具体</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🗂️ 域名翻译服务器（DNS）</h2>
        </section>
        
        <section>
            <h3>❓ 电脑怎么找到网站？</h3>
            <p>🤔 当你输入 www.taobao.com</p>
            <p>💻 电脑怎么知道要去找哪个IP地址呢？</p>
        </section>

        <section>
            <h3>👨‍💼 需要一个翻译官</h3>
            <p>🌐 这个翻译官叫做 <strong>DNS</strong></p>
            <p>📞 DNS就像一个巨大的电话簿</p>
            <p>📋 里面记录着每个域名对应的IP地址</p>
        </section>

        <section>
            <h3>📖 DNS电话簿示例</h3>
            <ul>
                <li>🛒 www.taobao.com → 140.205.94.189</li>
                <li>🛍️ www.jd.com → 106.39.171.130</li>
                <li>🔍 www.baidu.com → 39.156.66.10</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🔍 DNS查询的完整过程</h2>
        </section>
        
        <section>
            <h3>👥 生动的比喻</h3>
            <p>🎭 假设你要去找一个朋友</p>
            <p>🏷️ 但你只知道他的名字</p>
            <p>❓ 不知道他的具体地址</p>
            <p>🤔 你会怎么办呢？</p>
        </section>

        <section>
            <h3>🎯 步骤1：问本地的"熟人"</h3>
            <p>🧠 电脑首先问自己的"记忆"（本地DNS缓存）</p>
            <p>❓ "我之前有没有查过这个网站的地址？"</p>
            <p>⚡ 如果最近查过，直接用之前记住的地址</p>
            <p>🚀 这样最快！</p>
        </section>

        <section>
            <h3>🎯 步骤2：问"小区管理员"</h3>
            <p>📡 如果本地没有记录</p>
            <p>📞 电脑问网络服务商的DNS服务器</p>
            <ul>
                <li>📱 中国电信</li>
                <li>📶 中国移动</li>
                <li>🌐 中国联通</li>
            </ul>
            <p>❓ "你知道 www.taobao.com 在哪里吗？"</p>
        </section>

        <section>
            <h3>🎯 步骤3：问"区政府"</h3>
            <p>🔄 如果网络服务商也不知道</p>
            <p>🏛️ 它就会去问更高级的DNS服务器</p>
            <p>📋 这个过程是层层递进的</p>
        </section>

        <section>
            <h3>🔍 详细查询流程</h3>
            <ol>
                <li>❓ 问根域名服务器："谁管理.com域名？"</li>
                <li>👉 根服务器回答："去问.com管理服务器"</li>
                <li>❓ 问.com服务器："谁管理taobao.com？"</li>
                <li>👉 回答："去问淘宝公司的DNS服务器"</li>
                <li>❓ 问淘宝DNS："www.taobao.com的IP是？"</li>
                <li>✅ 淘宝服务器回答："是140.205.94.189"</li>
            </ol>
        </section>

        <section>
            <h3>🎯 步骤4：记住答案</h3>
            <p>📝 拿到IP地址后</p>
            <p>🧠 电脑会把这个信息记住一段时间</p>
            <p>⚡ 下次访问同一个网站就不用再问一遍了</p>
            <p>🎯 这样提高访问速度！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🤔 为什么需要这么复杂的系统？</h2>
        </section>
        
        <section>
            <h3>🎯 原因1：规模太大了</h3>
            <p>🌍 全世界有几十亿个网站</p>
            <p>📚 如果都放在一个"电话簿"里</p>
            <p>😵‍💫 会大得无法想象</p>
            <p>🐌 查询速度会非常慢</p>
        </section>

        <section>
            <h3>🎯 原因2：管理权限</h3>
            <p>🏢 每个公司都应该有权管理自己的域名</p>
            <p>🛒 比如淘宝公司应该能够决定</p>
            <p>📍 www.taobao.com 指向哪个服务器</p>
            <p>🙅‍♂️ 而不需要去求别人</p>
        </section>

        <section>
            <h3>🎯 原因3：可靠性</h3>
            <p>⚠️ 如果只有一个中央服务器</p>
            <p>💥 一旦它出故障</p>
            <p>🌍 全世界的网站都访问不了了</p>
            <p>🛡️ 分布式的系统更安全可靠</p>
        </section>

        <section>
            <h3>🎯 原因4：速度优化</h3>
            <p>🌍 在世界各地部署DNS服务器</p>
            <p>📍 让用户就近查询</p>
            <p>🚀 提高访问速度</p>
        </section>
    </section>

    <section>
        <section>
            <h2>📋 域名部分总结</h2>
        </section>
        
        <section>
            <h3>🌐 域名系统 = 互联网的电话簿</h3>
            <p>📞 让我们用简单好记的名字访问网站</p>
            <p>🚫 而不需要记住复杂的IP地址</p>
        </section>

        <section>
            <h3>🎯 系统设计很巧妙</h3>
            <ul>
                <li>🏗️ 分层管理，各司其职</li>
                <li>🌍 分布式部署，提高可靠性</li>
                <li>🧠 缓存机制，提升访问速度</li>
                <li>⚙️ 灵活配置，便于管理</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h1>🔗 第二部分</h1>
            <h2>链接结构</h2>
        </section>
    </section>

    <section>
        <section>
            <h2>🔍 完整链接的拆解</h2>
        </section>
        
        <section>
            <h3>📄 完整链接示例</h3>
            <p>🔗 https://www.taobao.com/shoes?size=xl</p>
        </section>

        <section>
            <h3>🧩 链接的三个组成部分</h3>
            <ul>
                <li>🌐 <strong>域名</strong>：www.taobao.com</li>
                <li>📂 <strong>路径</strong>：/shoes</li>
                <li>🔍 <strong>参数</strong>：?size=xl</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📂 路径：准确定位内容</h2>
        </section>
        
        <section>
            <h3>🤔 为什么需要路径？</h3>
            <p>📚 一个网站有那么多页面</p>
            <p>🎯 你得说清楚要看哪个页面的内容</p>
        </section>

        <section>
            <h3>📂 路径示例</h3>
            <ul>
                <li>👠 www.taobao.com<strong>/shoes</strong> → 鞋子页面</li>
                <li>👕 www.taobao.com<strong>/cloth</strong> → 衣服页面</li>
                <li>📱 www.taobao.com<strong>/phones</strong> → 手机页面</li>
            </ul>
        </section>

        <section>
            <h3>📁 多层路径</h3>
            <p>📂 如果内容特别多，后面可以加无数层</p>
            <p>👠 www.taobao.com/shoes/nike/women</p>
            <ul>
                <li>👠 <strong>shoes</strong> - 鞋子分类</li>
                <li>✔️ <strong>nike</strong> - 耐克品牌</li>
                <li>👩 <strong>women</strong> - 女款</li>
            </ul>
            <p>📈 不怕不够用，可以无限嵌套！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>❓ 参数：筛选和过滤内容</h2>
        </section>
        
        <section>
            <h3>🔍 参数的作用</h3>
            <p>🔗 www.taobao.com/shoes<strong>?size=xl</strong></p>
            <hr>
            <p>🎯 想直接看特定尺码的鞋子</p>
            <p>📏 size=xl 表示尺码等于XL</p>
        </section>

        <section>
            <h3>❓ 参数的标识</h3>
            <ul>
                <li>❓ <strong>?</strong> - 告诉你接下来是参数了</li>
                <li>📏 <strong>size=xl</strong> - 具体的筛选条件</li>
            </ul>
            <p>🚫 "?" 之后就不是路径了，而是参数！</p>
        </section>

        <section>
            <h3>🔢 多个参数</h3>
            <p>🔗 www.taobao.com/shoes?size=xl&color=red&brand=nike</p>
            <ul>
                <li>📏 size=xl - 尺码XL</li>
                <li>🔴 color=red - 红色</li>
                <li>✔️ brand=nike - 耐克品牌</li>
            </ul>
            <p>🔗 用 <strong>&</strong> 连接多个参数</p>
        </section>

        <section>
            <h3>⭐ 参数很重要</h3>
            <p>💡 这个用法很重要，后面会经常用到！</p>
            <p>🎯 特别是在做搜索、筛选功能时</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔄 从输入链接到看到网页</h2>
        </section>
        
        <section>
            <h3>🎯 阶段1：域名解析</h3>
            <ol>
                <li>⌨️ 你输入完整链接</li>
                <li>🌐 浏览器提取域名部分</li>
                <li>❓ 通过DNS查询IP地址</li>
                <li>✅ 获得服务器的真实地址</li>
            </ol>
        </section>

        <section>
            <h3>🎯 阶段2：发送请求</h3>
            <ol start="5">
                <li>📤 浏览器向服务器发送请求</li>
                <li>📂 请求中包含路径信息</li>
                <li>🔍 请求中包含参数信息</li>
                <li>💬 "我要这个页面的这些内容"</li>
            </ol>
        </section>

        <section>
            <h3>🎯 阶段3：获取内容</h3>
            <ol start="9">
                <li>🔍 服务器根据路径找到对应页面</li>
                <li>📊 服务器根据参数筛选数据</li>
                <li>📦 服务器发送HTML、CSS、图片等文件</li>
                <li>🏗️ 浏览器组装成你看到的网页</li>
            </ol>
        </section>
    </section>

    <section>
        <section>
            <h2>💻 对编程学习的意义</h2>
        </section>
        
        <section>
            <h3>🚀 作为全栈程序员需要知道</h3>
            <ul>
                <li>🌐 <strong>域名配置</strong> - 买域名，配置DNS</li>
                <li>🗂️ <strong>路由设计</strong> - 设计网站的路径结构</li>
                <li>🔍 <strong>参数处理</strong> - 处理用户的筛选条件</li>
                <li>⚡ <strong>性能优化</strong> - 使用CDN加速</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📋 总结</h2>
        </section>
        
        <section>
            <h3>🔗 链接的三部分</h3>
            <ol>
                <li>🌐 <strong>域名</strong> - 找到服务器（通过DNS翻译）</li>
                <li>📂 <strong>路径</strong> - 定位具体页面内容</li>
                <li>🔍 <strong>参数</strong> - 筛选和过滤数据</li>
            </ol>
        </section>

        <section>
            <h3>🎯 各部分的作用</h3>
            <ul>
                <li>🌐 域名 → 会被翻译为IP地址</li>
                <li>📂 路径 → 用来准确定位内容</li>
                <li>🔍 参数 → 一般用来筛选内容</li>
            </ul>
        </section>

        <section>
            <h3>✨ 精妙的设计</h3>
            <p>🌍 这个设计保证互联网上任何角落的内容</p>
            <p>🎯 都可以被一个链接精确找到！</p>
            <p>🏆 真的很棒，不是吗？</p>
        </section>
    </section>

    <section>
        <h2>🎉 谢谢大家！</h2>
        <p>🏆 现在你们都理解域名和链接系统了！</p>
        <p>🌐 下节课学习前端是怎么工作的</p>
        <p>❓ 有问题随时提问！</p>
    </section>
    `
};