module.exports = {
    title: '模块化编程基础概念',
    description: '理解项目、模块、包、函数的核心概念',
    theme: 'sky',
    content: `
    <section>
        <h2>💻 模块化编程基础概念</h2>
        <h3>项目、模块、包、函数</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>📋 今天要学的核心概念</h2>
            <ul>
                <li>📁 什么是项目？</li>
                <li>📄 什么是模块？</li>
                <li>📦 什么是包？</li>
                <li>⚙️ 什么是函数？</li>
                <li>🔄 导入导出怎么用？</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📁 什么是项目？</h2>
        </section>
        
        <section>
            <h3>ℹ️ 项目的定义</h3>
            <ul>
                <li>项目就是一个大文件夹</li>
                <li>里面放着做软件需要的所有文件</li>
                <li>有一个主文件夹和一个开始文件</li>
                <li>开始文件就是程序运行的第一个文件</li>
            </ul>
        </section>

        <section>
            <h3>🗂️ 项目长什么样？</h3>
            <ul>
                <li><strong>📂 主文件夹</strong> - 最大的那个文件夹</li>
                <li><strong>▶️ 开始文件</strong> - 程序第一个运行的文件</li>
                <li><strong>📁 小文件夹</strong> - 把不同功能的代码分开放</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📄 什么是模块？</h2>
        </section>
        
        <section>
            <h3>ℹ️ 模块的定义</h3>
            <ul>
                <li>把代码分成很多个小文件</li>
                <li>每个小文件负责一个功能</li>
                <li>这样代码看起来更整齐</li>
                <li>不用把所有代码都写在一个文件里</li>
            </ul>
        </section>

        <section>
            <h3>🔄 怎么用别的文件？</h3>
            <ul>
                <li><strong>⬆️ 导出</strong> - 把功能分享给别人用</li>
                <li><strong>⬇️ 导入</strong> - 拿别人的功能来用</li>
                <li><strong>🔗 require</strong> - 另一种拿功能的方法</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📦 什么是包？</h2>
        </section>
        
        <section>
            <h3>ℹ️ 包的定义</h3>
            <ul>
                <li>别人写好的代码，分享给大家用</li>
                <li>你可以直接在自己的项目里用</li>
                <li>不用重复写相同的功能</li>
                <li>有专门的工具帮你管理这些包</li>
            </ul>
        </section>

        <section>
            <h3>👍 用包有什么好处？</h3>
            <ul>
                <li>⏰ 省时间</li>
                <li>🛡️ 用别人测试过的好代码</li>
                <li>🎯 专心做自己的功能</li>
                <li>👥 大家一起分享代码</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>⚙️ 什么是函数？</h2>
        </section>
        
        <section>
            <h3>ℹ️ 函数的定义</h3>
            <ul>
                <li>把一个功能包装成一个小盒子</li>
                <li>可以给这个盒子传东西进去</li>
                <li>盒子处理完后可以给你结果</li>
                <li>这个盒子可以重复使用</li>
            </ul>
        </section>

        <section>
            <h3>✨ 函数的好处</h3>
            <ul>
                <li><strong>🔄 重复使用</strong> - 写一次，到处用</li>
                <li><strong>👁️ 看得清楚</strong> - 功能分得很清楚</li>
                <li><strong>🐛 好找问题</strong> - 出错了马上知道在哪</li>
                <li><strong>🔧 好修改</strong> - 改一个地方就够了</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>⭐ 为什么要分模块？</h2>
        </section>
        
        <section>
            <h3>💡 模块化的好处</h3>
            <ul>
                <li><strong>🗂️ 代码整齐</strong> - 看起来清清楚楚</li>
                <li><strong>🧩 功能分开</strong> - 不同功能分开做</li>
                <li><strong>♻️ 到处能用</strong> - 写好的代码到处用</li>
                <li><strong>👥 大家一起做</strong> - 不同人做不同功能</li>
                <li><strong>❤️ 好维护</strong> - 改东西不会影响别的</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📝 总结</h2>
        </section>
        
        <section>
            <h3>✅ 四个重要概念</h3>
            <ul>
                <li><strong>📁 项目</strong> - 代码的组织单位</li>
                <li><strong>📄 模块</strong> - 独立功能的代码文件</li>
                <li><strong>📦 包</strong> - 可复用的别人的代码模块</li>
                <li><strong>⚙️ 函数</strong> - 封装逻辑的基本单元</li>
            </ul>
        </section>
        
        <section>
            <h3>🔑 编程的核心思想</h3>
            <ul>
                <li>✂️ 把大问题切成小问题</li>
                <li>🏢 用模块搭建代码结构</li>
                <li>📦 用函数包装具体功能</li>
                <li>🔗 用包复用别人的成果</li>
            </ul>
        </section>
    </section>

    <section>
        <h2>❤️ 谢谢大家！</h2>
        <h3>🎓 模块化编程基础概念</h3>
        <p>理解这些概念是编程的基础</p>
        <p><small>❓ 有问题随时问哦～</small></p>
    </section>
    `
};



