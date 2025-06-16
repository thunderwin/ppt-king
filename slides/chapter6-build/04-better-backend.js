module.exports = {
    title: '后端是怎么工作的',
    description: '深入理解后端路由和数据库的工作原理',
    theme: 'moon',
    content: `
    <section>
        <h2>⚙️ 后端是怎么工作的</h2>
        <h3>深入理解后端路由和数据库的工作原理</h3>
        <p>
            <small>👨‍🏫 讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>📋 回顾上节课</h2>
        </section>
        
        <section>
            <h3>✅ 我们已经学会了什么</h3>
            <p>🔧 创建了一个最简单的后端接口</p>
            <p>📤 可以返回我们想要的内容</p>
        </section>

        <section>
            <h3>🤔 发现了什么问题？</h3>
            <ul>
                <li>📝 内容是直接写在代码里面的</li>
                <li>🔢 只有一个接口</li>
                <li>📄 实际项目不可能只有一篇文章</li>
                <li>🔒 返回的内容不可能是固定的</li>
            </ul>
            <hr>
            <p>❓ 那么怎么处理呢？</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🆕 今天要学习的新概念</h2>
        </section>
        
        <section>
            <h3>📚 两个重要概念</h3>
            <ul>
                <li>🛣️ <strong>路由</strong></li>
                <li>🗃️ <strong>数据库</strong></li>
            </ul>
            <hr>
            <p>😱 终于我们提到数据库了</p>
            <p>💪 也是很多人望而生畏的部分，但其实很简单！</p>
        </section>
    </section>

    <section>
        <section>
            <h1>🛣️ 路由概念</h1>
        </section>
    </section>

    <section>
        <section>
            <h2>🛣️ 什么是路由？</h2>
        </section>
        
        <section>
            <h3>🎯 路由很简单</h3>
            <p>💡 不同的URL，我给你返回不同内容</p>
            <p>🎯 这就是路由，特别简单！</p>
        </section>

        <section>
            <h3>🌐 前端也有路由</h3>
            <p>💭 如果大家还记得的话</p>
            <p>🎯 前端的路由是自己处理的</p>
            <p>📄 我们创建一个页面，就自动分配了一个路由</p>
        </section>

        <section>
            <h3>❓ 怎么创建路由呢？</h3>
            <p>🤔 很简单呀！</p>
            <p>🔗 根据用户访问的不同URL</p>
            <p>📤 给他返回或者分配到不同的功能</p>
            <p>✅ 不就好了吗？</p>
            <hr>
            <p>🎯 对啊，这就是路由！</p>
        </section>
    </section>

    <section>
        <section>
            <h1>🗃️ 数据库概念</h1>
        </section>
    </section>

    <section>
        <section>
            <h2>🗃️ 什么是数据库？</h2>
        </section>
        
        <section>
            <h3>🌱 先做一个草根数据库</h3>
            <p>💡 我们今天先不用专业的数据库</p>
            <p>🛠️ 我们先来自己做一个草根数据库</p>
        </section>

        <section>
            <h3>📁 创建文件夹结构</h3>
            <p>📂 在当前目录下，创建一个文件夹</p>
            <p>🏷️ 叫做 <strong>JSON</strong></p>
            <p>📄 这个文件夹里面有一个一个的文件</p>
            <p>📰 JSON文件里面，一个文件就是一篇文章</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔑 JSON文件格式</h2>
        </section>
        
        <section>
            <h3>📄 JSON文件的理解</h3>
            <p>📋 大家把JSON文件理解为文档也行</p>
            <p>📊 只不过里面的数据格式是特定的</p>
            <hr>
            <p>🔑 这种我们称之为 <strong>键值对</strong></p>
        </section>

        <section>
            <h3>❓ 为什么要这样设计呢？</h3>
            <p>🤔 大家想一想我们平时接收到的数据是什么样</p>
        </section>

        <section>
            <h3>📊 键值对的例子</h3>
            <p>✅ 一定是先有键再有值的，比方说：</p>
            <ul>
                <li>🎂 年龄：30</li>
                <li>📏 身高：175</li>
                <li>👤 性别：男</li>
                <li>🏠 籍贯：北京</li>
            </ul>
            <hr>
            <p>💡 我们接收到的数据大部分都是这样子</p>
            <p>🔑 必须前面有键，后面有值</p>
        </section>

        <section>
            <h3>⭐ JSON是最常见的数据格式</h3>
            <p>🏆 这种JSON数据是我们做开发中</p>
            <p>📊 使用的最最最常见的数据格式</p>
        </section>
    </section>

    <section>
        <section>
            <h2>📰 文章的JSON结构</h2>
        </section>
        
        <section>
            <h3>📝 对于一篇文章来说</h3>
            <ul>
                <li>📰 标题</li>
                <li>📄 标题内容</li>
                <li>📅 发表日期</li>
                <li>👤 作者</li>
                <li>📖 核心内容</li>
            </ul>
            <p>📚 还有很多这种信息</p>
        </section>

        <section>
            <h3>💡 使用JSON格式很方便</h3>
            <p>📂 使用这种文件格式来存放就显得很方便</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔍 数据库的本质</h2>
        </section>
        
        <section>
            <h3>🗂️ 数据库很简单</h3>
            <p>💡 就是理解为一个文件夹</p>
            <p>📄 里面存了很多种这样的键值对的JSON文件</p>
        </section>

        <section>
            <h3>⚙️ 后端的重要任务</h3>
            <p>🎯 根据用户请求的URL来判断</p>
            <p>🤔 用户要获取哪部分内容：</p>
            <ul>
                <li>📂 整个文件夹？</li>
                <li>📄 某个文件里面的内容？</li>
                <li>📅 某一个时间之后的内容？</li>
                <li>👤 作者为某个人的内容？</li>
            </ul>
        </section>

        <section>
            <h3>💻 这些都是代码需要处理的</h3>
            <p>🎯 这就是我们平常所说的</p>
            <p>⚙️ <strong>后端所做的工作</strong></p>
        </section>
    </section>

    <section>
        <section>
            <h2>💡 理解了吗？</h2>
        </section>
        
        <section>
            <h3>😊 这样说，大家是不是非常容易理解？</h3>
        </section>
    </section>

    <section>
        <section>
            <h2>📱 生活中的例子</h2>
        </section>
        
        <section>
            <h3>🤔 大家想象一下</h3>
            <p>📱 平时大家在刷手机的时候主要在刷什么？</p>
        </section>

        <section>
            <h3>📸 以小红书为例</h3>
            <p>🔥 你刷的是什么？应该是：</p>
            <ul>
                <li>👀 浏览量最高的内容</li>
                <li>❤️ 作者在你的关注列表里的人发表的内容</li>
                <li>🆕 最新发表的内容</li>
            </ul>
        </section>

        <section>
            <h3>🎯 现在你明白了</h3>
            <p>💡 知道了这个之后</p>
            <p>🚀 你是不是就可以自己也写个后端？</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🛠️ 实践环节</h2>
        </section>
        
        <section>
            <h3>💻 这堂课的代码我们就来完善一下</h3>
            <ul>
                <li>🛣️ 一方面加上路由</li>
                <li>🔗 一方面把路由和数据库给接上</li>
                <li>🌐 对我们的前端提供接口</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📋 总结</h2>
        </section>
        
        <section>
            <h3>🎯 后端的核心工作</h3>
            <ol>
                <li>🛣️ <strong>路由</strong> - 根据不同URL返回不同内容</li>
                <li>🗃️ <strong>数据库</strong> - 存储和管理数据</li>
                <li>🔍 <strong>数据处理</strong> - 根据条件筛选和返回数据</li>
            </ol>
        </section>

        <section>
            <h3>💡 关键理解</h3>
            <ul>
                <li>🗂️ 数据库 = 文件夹 + JSON文件</li>
                <li>🔑 JSON = 键值对数据格式</li>
                <li>🛣️ 路由 = URL → 不同功能</li>
                <li>🔍 后端 = 数据的智能管家</li>
            </ul>
        </section>

        <section>
            <h3>🚀 下一步</h3>
            <p>💻 开始动手实践</p>
            <p>🔧 完善我们的后端代码</p>
            <p>🌐 为前端提供强大的数据支持</p>
        </section>
    </section>

    <section>
        <h2>🎉 谢谢大家！</h2>
        <p>🏆 现在你们都理解后端的工作原理了！</p>
        <p>💻 开始构建你的后端系统吧！</p>
        <p>❓ 有问题随时提问！</p>
    </section>
    `
};