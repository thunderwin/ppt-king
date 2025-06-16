module.exports = {
    title: '创建我们的第一个后端接口',
    description: '从零开始理解后端服务器的工作原理',
    theme: 'sky',
    content: `
    <section>
        <h2>🎯 创建我们的第一个后端接口</h2>
        <h3>🚀 从零开始理解后端服务器</h3>
        <p>
            <small>讲师：Nathan</small>
        </p>
        <p>📝 让普通人也能听懂的后端开发课程</p>
    </section>

    <section>
        <section>
            <h2>🎯 今天我们要学什么？</h2>
            <p>✨ 创建一个最简单的后端接口</p>
            <ul>
                <li>🧠 理解后端的独立性</li>
                <li>🔧 什么是HTTP模块</li>
                <li>⚙️ 如何创建服务器</li>
                <li>💬 请求和响应的对话</li>
                <li>🔍 调试工具console.log</li>
                <li>🚪 端口号的概念</li>
                <li>📊 状态码的作用</li>
            </ul>
        </section>
        
        <section>
            <h3>😊 别紧张！</h3>
            <p>💭 "后端"听起来很高大上</p>
            <p>✅ 实际上比你想象的简单得多</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🏗️ 重要概念：后端的独立性</h2>
            <h3>🌟 后端是一个独立的软件</h3>
        </section>
        
    

        <section>
            <h3>🏢 独立运行的软件</h3>
            <ul>
                <li>📱 <strong>前端</strong>：运行在用户的浏览器里</li>
                <li>🖥️ <strong>后端</strong>：运行在服务器上，24小时不间断</li>
                <li>🌐 通过网络进行通信</li>
            </ul>
        </section>

        <section>
            <h3>🔄 分离的好处</h3>
            <ul>
                <li>🛠️ <strong>可以独立维护</strong>：前端坏了不影响后端</li>
                <li>🔧 <strong>可以独立升级</strong>：后端更新不影响前端</li>
                <li>👥 <strong>团队分工</strong>：不同的人负责不同部分</li>
                <li>⚡ <strong>性能更好</strong>：各自优化各自的部分</li>
            </ul>
            <p>🎯 这就是为什么要分开做的原因！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🧰 第一步：准备工具包</h2>
            <h3>🔧 引入HTTP模块</h3>
        </section>
        
        <section>
            <h3>🛠️ 引入HTTP工具包</h3>
            <pre><code class="javascript">
const http = require("http");
            </code></pre>
            <p>🔧 HTTP就是我们做网站后端必须要准备的"厨具"</p>
        </section>

      

        <section>
            <h3>🤔 HTTP模块到底是什么？</h3>
            <ul>
                <li>📚 <strong>Node.js自带的功能包</strong></li>
                <li>🌐 <strong>专门处理网络请求</strong></li>
                <li>🏗️ <strong>帮我们创建Web服务器</strong></li>
                <li>🆓 <strong>免费的，不用额外安装</strong></li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>🏪 第二步：创建服务器</h2>
            <h3>🏗️ 开一家小餐馆</h3>
        </section>
        
        <section>
            <h3>⚙️ 创建服务器函数</h3>
            <pre><code class="javascript">
const server = http.createServer((请求, 响应) => {
    // 这里写服务器的逻辑
});
            </code></pre>
            <p>💡 注意：平时用英文request和response</p>
            <p>📚 今天用中文是为了让大家更容易理解</p>
        </section>

        <section>
            <h3>🔍 深入理解createServer</h3>
            <ul>
                <li>🏭 <strong>createServer</strong>：创建服务器的工厂函数</li>
                <li>📋 <strong>回调函数</strong>：每次有人访问就会执行</li>
                <li>📥 <strong>请求参数</strong>：客户端发来的信息</li>
                <li>📤 <strong>响应参数</strong>：我们要回复的内容</li>
            </ul>
            <p>🎯 这就是后端服务的核心逻辑！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>💬 第三步：理解请求和响应</h2>
            <h3>🍽️ 就像餐厅服务员和顾客的对话</h3>
        </section>
        
        <section>
            <h3>🙋‍♂️ 什么是"请求"？</h3>
            <p>💭 想象你去餐厅吃饭，服务员会问：</p>
            <ul>
                <li>"👋 先生您好，请问几位用餐？"</li>
                <li>"🍽️ 想吃点什么？"</li>
                <li>"🚫 有什么忌口的吗？"</li>
                <li>"💳 您是我们的会员吗？"</li>
                <li>"🪑 喜欢坐哪个位置？"</li>
            </ul>
            <p>📝 这些都是服务员需要了解的"请求信息"</p>
        </section>

        <section>
            <h3>🌐 浏览器的"请求"</h3>
            <p>💻 当你在浏览器输入网址，浏览器会"敲门"问：</p>
            <ul>
                <li>"🌍 我要访问哪个网址？"</li>
                <li>"🧭 我用的什么浏览器？"</li>
                <li>"🌏 我希望看到中文还是英文？"</li>
                <li>"📱 我是用手机还是电脑访问的？"</li>
                <li>"🍪 我之前有没有来过（Cookie）？"</li>
                <li>"🔐 我有没有登录权限？"</li>
            </ul>
        </section>

        <section>
            <h3>💬 什么是"响应"？</h3>
            <p>🍽️ 餐厅服务员的回复：</p>
            <ul>
                <li>"✅ 好的，今天有这些菜"</li>
                <li>"🍜 您的菜来了，请慢用"</li>
                <li>"💰 一共是88块钱"</li>
                <li>"🎁 今天有优惠活动哦"</li>
            </ul>
        </section>

        <section>
            <h3>🌐 网站的"响应"</h3>
            <p>💻 后端服务器的回复：</p>
            <ul>
                <li>"📄 我给你什么类型的内容"</li>
                <li>"🌏 用什么语言显示"</li>
                <li>"📊 具体的网页内容是什么"</li>
                <li>"✅ 请求处理成功还是失败"</li>
                <li>"🍪 给你一些记忆信息（Cookie）"</li>
            </ul>
            <p>✨ 就是一个完整的问答过程！</p>
        </section>

        <section>
            <h3>📋 请求和响应详细对比表</h3>
            <table style="width:100%; font-size:0.7em;">
                <tr>
                    <th>🙋‍♂️ 客户请求</th>
                    <th>💬 服务器响应</th>
                    <th>🍽️ 餐厅类比</th>
                </tr>
                <tr>
                    <td>📍 请求的URL地址</td>
                    <td>📄 返回的内容</td>
                    <td>点什么菜 → 上菜</td>
                </tr>
                <tr>
                    <td>🔧 请求方法(GET/POST)</td>
                    <td>📊 状态码(200/404)</td>
                    <td>堂食/外卖 → 成功/失败</td>
                </tr>
                <tr>
                    <td>🏷️ 请求头信息</td>
                    <td>🏷️ 响应头信息</td>
                    <td>客户要求 → 服务说明</td>
                </tr>
                <tr>
                    <td>📦 请求体数据</td>
                    <td>📦 响应体数据</td>
                    <td>特殊要求 → 实际菜品</td>
                </tr>
            </table>
        </section>
    </section>

    <section>
        <section>
            <h2>🔍 第四步：调试工具console.log</h2>
            <h3>🗣️ 程序员的"自言自语"</h3>
        </section>
        
        <section>
            <h3>📝 console.log是什么？</h3>
            <pre><code class="javascript">
console.log(请求.url);     // 📍 请求的URL
console.log(请求.method);  // 🔧 请求的方法
console.log(请求.headers); // 🏷️ 请求的头信息
            </code></pre>
            <p>🔍 这是程序员的"透视眼"</p>
        </section>

        <section>
            <h3>🍳 就像厨房里的自言自语</h3>
            <ul>
                <li>"🔥 哎呀，这个火候差不多了"</li>
                <li>"🧂 嗯，这个调料加得刚好"</li>
                <li>"⏰ 还要炒2分钟就好了"</li>
                <li>"👨‍🍳 这道菜看起来不错"</li>
            </ul>
            <p>🔧 专门给程序员看的调试工具</p>
            <p>👤 用户不需要听到我们的内心独白</p>
        </section>

        <section>
            <h3>🎯 console.log的实际作用</h3>
            <ul>
                <li>🐛 <strong>调试程序</strong>：找出哪里出错了</li>
                <li>📊 <strong>监控数据</strong>：看看接收到什么信息</li>
                <li>📈 <strong>性能分析</strong>：程序运行快不快</li>
                <li>📚 <strong>学习理解</strong>：搞清楚程序在干什么</li>
            </ul>
            <p>💡 就像医生的听诊器，帮我们"听"程序的心跳</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🚪 第五步：端口号的概念</h2>
            <h3>🏠 服务器的不同门牌</h3>
        </section>
        
        <section>
            <h3>🏠 想象你家的地址</h3>
            <p>📍 "解放路123号" = 网站的域名</p>
            <p>🚪 但你家有前门、后门、侧门</p>
            <p>✨ 端口就像这些不同的门</p>
            <p>🎯 不同的门有不同的用途</p>
        </section>

        <section>
            <h3>🏢 服务器就像一栋大楼</h3>
            <table style="width:100%; font-size:0.8em;">
                <tr>
                    <th>🚪 端口号</th>
                    <th>🎯 用途</th>
                    <th>🏠 类比</th>
                </tr>
                <tr>
                    <td>80</td>
                    <td>🌐 普通网站</td>
                    <td>🚪 前门（正门）</td>
                </tr>
                <tr>
                    <td>443</td>
                    <td>🔒 安全网站(HTTPS)</td>
                    <td>🛡️ 安全通道，有x光机</td>
                </tr>
                <tr>
                    <td>8000</td>
                    <td>🧪 我们的测试网站</td>
                    <td>🔧 后门（员工通道）</td>
                </tr>
                <tr>
                    <td>3306</td>
                    <td>🗃️ 数据库服务</td>
                    <td>📦 货物通道</td>
                </tr>
            </table>
            <p>😊 为什么选8000？就是觉得这个数字顺眼！</p>
        </section>

        <section>
            <h3>🤔 为什么需要端口号？</h3>
            <ul>
                <li>🏗️ <strong>一台服务器</strong>可以运行多个程序</li>
                <li>🎯 <strong>不同端口</strong>对应不同服务</li>
                <li>🚦 <strong>避免冲突</strong>：各走各的道</li>
                <li>🔧 <strong>便于管理</strong>：知道哪个门是干什么的</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>📊 第六步：状态码</h2>
            <h3>📦 像快递的状态信息</h3>
        </section>
        
        <section>
            <h3>📮 快递状态码</h3>
            <table style="width:100%; font-size:0.8em;">
                <tr>
                    <th>📊 状态码</th>
                    <th>📦 快递状态</th>
                    <th>🌐 网站含义</th>
                </tr>
                <tr>
                    <td>200</td>
                    <td>✅ 包裹完好送达</td>
                    <td>🎉 请求成功，一切正常</td>
                </tr>
                <tr>
                    <td>404</td>
                    <td>❌ 地址不存在</td>
                    <td>🔍 页面不存在</td>
                </tr>
                <tr>
                    <td>500</td>
                    <td>💥 快递公司内部出错</td>
                    <td>🐛 服务器内部错误</td>
                </tr>
                <tr>
                    <td>403</td>
                    <td>🚫 收件人拒收</td>
                    <td>🔐 没有访问权限</td>
                </tr>
            </table>
        </section>

        <section>
            <h3>🌐 浏览器通过状态码知道</h3>
            <ul>
                <li>📄 <strong>404</strong> → 显示"页面不存在"</li>
                <li>✅ <strong>200</strong> → 正常显示内容</li>
                <li>🔐 <strong>403</strong> → 显示"权限不足"</li>
                <li>💥 <strong>500</strong> → 显示"服务器错误"</li>
            </ul>
            <p>😊 简单吧？就像看快递单号一样！</p>
        </section>

        <section>
            <h3>🎯 常见状态码分类</h3>
            <ul>
                <li>🎉 <strong>2xx</strong>：成功系列（200-299）</li>
                <li>🔄 <strong>3xx</strong>：重定向系列（300-399）</li>
                <li>❌ <strong>4xx</strong>：客户端错误系列（400-499）</li>
                <li>💥 <strong>5xx</strong>：服务器错误系列（500-599）</li>
            </ul>
            <p>💡 记住这个规律，看到状态码就知道大概是什么情况</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🏷️ 第七步：Headers</h2>
            <h3>📦 像包裹上的标签</h3>
        </section>
        
        <section>
            <h3>📦 Headers告诉浏览器</h3>
            <ul>
                <li>📄 <strong>里面装的是什么东西</strong></li>
                <li>🌏 <strong>用什么语言写的说明书</strong></li>
                <li>👤 <strong>是给谁的</strong></li>
                <li>📅 <strong>什么时候打包的</strong></li>
                <li>💾 <strong>有多大</strong></li>
            </ul>
        </section>

        <section>
            <h3>🔧 设置Content-Type</h3>
            <pre><code class="javascript">
'Content-Type': 'text/plain; charset=utf-8'
            </code></pre>
            <p>💬 告诉浏览器："我给你的是纯文本，用的是中文编码"</p>
        </section>

        <section>
            <h3>📋 常见的Content-Type类型</h3>
            <table style="width:100%; font-size:0.7em;">
                <tr>
                    <th>🏷️ Content-Type</th>
                    <th>📄 内容类型</th>
                    <th>📦 包裹类比</th>
                </tr>
                <tr>
                    <td>text/plain</td>
                    <td>📝 纯文本</td>
                    <td>📄 普通信件</td>
                </tr>
                <tr>
                    <td>text/html</td>
                    <td>🌐 网页代码</td>
                    <td>📰 带格式的报纸</td>
                </tr>
                <tr>
                    <td>application/json</td>
                    <td>📊 JSON数据</td>
                    <td>📋 结构化表格</td>
                </tr>
                <tr>
                    <td>image/jpeg</td>
                    <td>🖼️ JPEG图片</td>
                    <td>📸 照片</td>
                </tr>
            </table>
        </section>
    </section>

    <section>
        <section>
            <h2>🚀 第八步：启动服务器</h2>
            <h3>🏪 正式开门营业</h3>
        </section>
        
        <section>
            <h3>⚡ 开始监听端口</h3>
            <pre><code class="javascript">
server.listen(8000);
            </code></pre>
            <p>🏪 就像开店一样</p>
            <p>🚪 把店门打开，挂上"营业中"的牌子</p>
            <p>⏳ 等着客人上门</p>
        </section>

        <section>
            <h3>📋 开店营业全流程对比</h3>
            <table style="width:100%; font-size:0.7em;">
                <tr>
                    <th>🏪 开实体店</th>
                    <th>💻 开后端服务</th>
                    <th>📝 代码实现</th>
                </tr>
                <tr>
                    <td>🧰 准备工具设备</td>
                    <td>🔧 引入HTTP模块</td>
                    <td>require('http')</td>
                </tr>
                <tr>
                    <td>📋 制定服务流程</td>
                    <td>⚙️ 创建服务器函数</td>
                    <td>createServer()</td>
                </tr>
                <tr>
                    <td>🤝 学会接待客人</td>
                    <td>📥 处理请求</td>
                    <td>request参数</td>
                </tr>
                <tr>
                    <td>💬 学会回复客人</td>
                    <td>📤 发送响应</td>
                    <td>response.end()</td>
                </tr>
                <tr>
                    <td>🏪 开门营业</td>
                    <td>⚡ 启动服务器</td>
                    <td>server.listen()</td>
                </tr>
                <tr>
                    <td>📞 留下电话号码</td>
                    <td>🚪 监听端口号</td>
                    <td>listen(8000)</td>
                </tr>
            </table>
        </section>

        <section>
            <h3>🎯 启动成功的标志</h3>
            <ul>
                <li>✅ <strong>没有报错信息</strong></li>
                <li>🔄 <strong>程序没有自动退出</strong></li>
                <li>📝 <strong>可以看到console.log输出</strong></li>
                <li>🌐 <strong>浏览器能正常访问</strong></li>
            </ul>
            <p>💡 就像店铺正常营业，客人可以正常进店消费</p>
        </section>
    </section>

    <section>
        <section>
            <h2>📝 总结：开店营业完整流程</h2>
            <p>创建后端服务就像开了一家小餐馆</p>
        </section>
        
        <section>
            <h3>🛠️ 后端服务六步法</h3>
            <ol>
                <li>🧰 <strong>准备好工具</strong>：引入HTTP包</li>
                <li>📋 <strong>制定服务流程</strong>：创建服务器函数</li>
                <li>🤝 <strong>学会接待客人</strong>：处理请求</li>
                <li>💬 <strong>学会回复客人</strong>：发送响应</li>
                <li>🏷️ <strong>看人下菜</strong>：设置Headers和状态码</li>
                <li>🏪 <strong>开门营业</strong>：启动服务器监听端口</li>
            </ol>
        </section>

        <section>
            <h3>✨ 是不是很简单？</h3>
            <p>🌐 所有后端服务的基本套路</p>
            <p>🏗️ 再复杂的网站，本质都是这个流程的扩展</p>
            <p>💭 想象后面有个"数字小餐馆老板"在服务你</p>
        </section>
    </section>

    <section>
        <section>
            <h2>🔍 完整代码示例</h2>
            <h3>我们的第一个后端服务器</h3>
        </section>
        
        <section>
            <h3>🧰 引入HTTP模块</h3>
            <pre><code class="javascript">
// 引入Node.js自带的http模块
const http = require('http');
console.log('✅ HTTP模块加载成功！');
            </code></pre>
        </section>

        <section>
            <h3>🏗️ 创建服务器</h3>
            <pre><code class="javascript">
const server = http.createServer((请求, 响应) => {
    // 🔍 打印请求信息（调试用）
    console.log('📍 访问地址:', 请求.url);
    console.log('🔧 请求方法:', 请求.method);
    console.log('🌐 用户浏览器:', 请求.headers['user-agent']);
    
    // 🏷️ 设置响应头
    响应.setHeader('Content-Type', 'text/plain; charset=utf-8');
    响应.statusCode = 200;
    
    // 📤 发送响应
    响应.end('🎉 你好！欢迎来到我们的后端服务器！\n这是你的第一个后端接口！');
});
            </code></pre>
        </section>

        <section>
            <h3>🚀 启动服务器</h3>
            <pre><code class="javascript">
const 端口 = 8000;
server.listen(端口, () => {
    console.log('🎉 服务器已经启动啦！');
    console.log('📍 访问地址：http://localhost:8000');
    console.log('🌐 或者：http://127.0.0.1:8000');
    console.log('💡 想要停止服务器？按 Ctrl+C');
    console.log('🏪 数字小店正式开张！');
});
            </code></pre>
        </section>

        <section>
            <h3>🎯 运行结果预览</h3>
            <ul>
                <li>🖥️ <strong>终端显示</strong>：服务器启动信息</li>
                <li>🌐 <strong>浏览器显示</strong>：欢迎消息</li>
                <li>📝 <strong>控制台输出</strong>：每次访问的详细信息</li>
            </ul>
            <p>🎪 恭喜！你的第一个后端服务器诞生了！</p>
        </section>
    </section>

    <section>
        <h2>🎯 下节课预告</h2>
        <p>🚀 如何让这个后端接口更加强大</p>
       
    </section>
    `
};
