module.exports = {
    title: '网络请求如何工作',
    description: 'HTTP请求详解 - GET和POST请求',
    theme: 'sky',
    content: `
    <section>
        <h2>网络请求如何工作</h2>
        <h3>请求通常默认是 http 请求</h3>
        <ul>
            <li>GET请求</li>
            <li>POST请求</li>
            <li>Headers和参数</li>
        </ul>
        <p>
            <small>讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>什么是网络请求？</h2>
            <p>打开网站，就是向服务器发送请求的过程</p>
            <ul>
                <li>🌐 每次访问网站都在发送请求</li>
                <li>📡 请求就像是你和网站的对话</li>
                <li>🔄 网站收到请求后返回内容</li>
            </ul>
        </section>
        
        <section>
            <h3>请求的两种主要类型</h3>
            <div style="display: flex; justify-content: space-around;">
                <div>
                    <h4>📥 GET请求</h4>
                    <p>获取信息</p>
                </div>
                <div>
                    <h4>📤 POST请求</h4>
                    <p>发送信息</p>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>GET请求 - 获取信息</h2>
            <p>Get = 获取的意思</p>
            <ul>
                <li>🔍 在浏览器中输入网址</li>
                <li>📖 获取网页内容</li>
                <li>🔗 所有链接点击都是GET请求</li>
            </ul>
        </section>
        
        <section>
            <h3>GET请求的特点</h3>
            <ul>
                <li>✅ 简单直接</li>
                <li>📏 可以带少量参数</li>
                <li>👀 参数在网址中可见</li>
                <li>🔒 适合获取数据</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>POST请求 - 发送信息</h2>
            <p>当你需要上传东西时...</p>
            <ul>
                <li>📸 上传图片</li>
                <li>🎥 上传视频</li>
                <li>📄 上传文档</li>
                <li>✍️ 提交表单</li>
            </ul>
        </section>
        
        <section>
            <h3>POST请求的Body</h3>
            <p>POST请求有一个"大肚子"叫Body, 和 GET 请求的主要不同就在这里</p>
            <ul>
                <li>🎒 可以装很多东西</li>
                <li>📝 长文字</li>
                <li>🖼️ 图片文件</li>
                <li>🎬 视频文件</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>HTTPS请求</h2>
            <p>请求的全称是HTTP请求， 但是通常我们用 HTTPS 请求</p>
            <ul>
                <li>🌐 HTTP - 网络传输协议</li>
                <li>🔒 HTTPS - 加密版本（更安全）</li>
                <li>🔗 这就是为什么网址前面有http://</li>
            </ul>
        </section>
        
        <section>
            <h3>其他请求类型</h3>
            <p>还有PUT、DELETE等请求</p>
            <ul>
                <li>📝 PUT - 更新数据</li>
                <li>🗑️ DELETE - 删除数据</li>
                <li>⚠️ 用得很少，可以被POST替代</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>请求Headers - 身份标识</h2>
            <p>网站是怎么知道你是谁的？</p>
            <ul>
                <li>🆔 Headers包含你的身份信息</li>
                <li>🌏 语言偏好（中文/英文）</li>
                <li>🔑 登录状态</li>
                <li>📍 位置信息</li>
            </ul>
        </section>
        
        <section>
            <h3>浏览器的自动工作</h3>
            <p>这些信息是浏览器偷偷帮你加上的</p>
            <ul>
                <li>🤖 自动添加Headers</li>
                <li>🌐 根据IP显示对应语言</li>
                <li>💾 记住登录状态</li>
                <li>👤 识别用户身份</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>请求参数</h2>
            <p>向网站发送额外信息的方式</p>
            <ul>
                <li>🔗 GET请求：参数在网址后面</li>
                <li>📦 POST请求：参数在Body里面</li>
                <li>📏 GET参数有长度限制</li>
                <li>💪 POST可以发送大量数据</li>
            </ul>
        </section>
    </section>

    <section>
        <h2>课程总结</h2>
        <div style="text-align: left;">
            <h3>今天我们学到了：</h3>
            <ul>
                <li>🔍 <strong>GET请求</strong> - 获取信息</li>
                <li>📤 <strong>POST请求</strong> - 发送信息</li>
                <li>🆔 <strong>Headers</strong> - 身份标识</li>
                <li>📝 <strong>参数和Body</strong> - 数据传输</li>
            </ul>
            <p style="margin-top: 30px;">
                <em>以后提到"请求"，你就知道是GET还是POST了！</em>
            </p>
        </div>
    </section>
    `
};








