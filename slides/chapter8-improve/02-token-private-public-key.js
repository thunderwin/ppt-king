module.exports = {
    title: 'Token令牌与数据安全',
    description: '网站的身份证和钥匙 - 访问控制原理',
    theme: 'sky',
    content: `
    <section>
        <h2>Token令牌与数据安全</h2>
        <h3>网站的身份证和钥匙系统</h3>
        <ul>
            <li>🎫 什么是Token令牌</li>
            <li>🔐 访问控制原理</li>
            <li>🔑 公钥私钥机制</li>
            <li>🛡️ 数据安全保护</li>
        </ul>
        <p>
            <small>讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>现实中的访问控制</h2>
            <p>生活中到处都有权限管理</p>
            <ul>
                <li>🏢 <strong>公司大楼</strong> - 员工卡刷不同楼层</li>
                <li>🏥 <strong>医院科室</strong> - 医生能进手术室，病人不能</li>
                <li>🏦 <strong>银行金库</strong> - 只有特定人员才能进入</li>
                <li>📱 <strong>手机相册</strong> - 私密照片需要密码</li>
            </ul>
        </section>
        
        <section>
            <h3>网站的数据分级</h3>
            <p>不是所有数据都能给所有人看</p>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 30%;">
                    <h4>🌍 公开数据</h4>
                    <ul>
                        <li>网站首页</li>
                        <li>产品介绍</li>
                        <li>新闻资讯</li>
                        <li>联系方式</li>
                    </ul>
                </div>
                <div style="width: 30%;">
                    <h4>🔒 私密数据</h4>
                    <ul>
                        <li>个人资料</li>
                        <li>购买记录</li>
                        <li>聊天消息</li>
                        <li>银行信息</li>
                    </ul>
                </div>
                <div style="width: 30%;">
                    <h4>👑 特权数据</h4>
                    <ul>
                        <li>管理后台</li>
                        <li>用户列表</li>
                        <li>财务报表</li>
                        <li>系统设置</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>问题来了：如何判断权限？</h2>
            <p>网站怎么知道该给你看什么？</p>
            <ul>
                <li>🤔 <strong>困惑</strong> - 链接谁都可以访问</li>
                <li>❓ <strong>问题</strong> - 怎么区分不同用户</li>
                <li>🎯 <strong>需求</strong> - 要有身份识别机制</li>
                <li>💡 <strong>解决</strong> - 引入Token令牌系统</li>
            </ul>
        </section>
        
        <section>
            <h3>传统方式的问题</h3>
            <div style="text-align: left;">
                <h4>😅 想象一下：</h4>
                <ul>
                    <li>每次都要输用户名密码</li>
                    <li>频繁验证很麻烦</li>
                    <li>密码在网络中传输不安全</li>
                    <li>服务器压力大</li>
                </ul>
                
                <h4>🎯 我们需要更好的方法</h4>
                <p>就像活动现场的入场券一样...</p>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>什么是Token令牌？</h2>
            <p>就像活动现场的入场票根</p>
            <ul>
                <li>🎫 <strong>活动门票</strong> - 验票后盖章或贴标</li>
                <li>🔖 <strong>临时标识</strong> - 证明你已经验证过身份</li>
                <li>🚪 <strong>自由进出</strong> - 凭标识可以重复进入</li>
                <li>⏰ <strong>有效期限</strong> - 过期需要重新验证</li>
            </ul>
        </section>
        
        <section>
            <h3>Token的工作流程</h3>
            <div style="text-align: left;">
                <h4>🎯 就像去游乐园：</h4>
                <ol>
                    <li><strong>买票入园</strong> - 登录验证身份</li>
                    <li><strong>手腕盖章</strong> - 服务器发放Token</li>
                    <li><strong>凭章游玩</strong> - 用Token访问各种功能</li>
                    <li><strong>重复使用</strong> - 不需要重新买票</li>
                    <li><strong>当日有效</strong> - Token有过期时间</li>
                </ol>
                
                <h4>💡 核心优势：</h4>
                <ul>
                    <li>一次验证，多次使用</li>
                    <li>不需要传输密码</li>
                    <li>可以设置权限级别</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>Token的实际工作原理</h2>
            <p>背后的技术是怎样的？</p>
            <ul>
                <li>🔐 <strong>首次登录</strong> - 验证用户名密码</li>
                <li>🎫 <strong>生成Token</strong> - 服务器创建临时凭证</li>
                <li>📱 <strong>返回给用户</strong> - 存储在浏览器中</li>
                <li>🔄 <strong>后续请求</strong> - 每次都带上Token</li>
            </ul>
        </section>
        
        <section>
            <h3>Token包含什么信息？</h3>
            <div style="text-align: left;">
                <h4>🆔 基本信息：</h4>
                <ul>
                    <li>用户ID - 你是谁</li>
                    <li>权限级别 - 你能做什么</li>
                    <li>过期时间 - 有效期到什么时候</li>
                    <li>签名验证 - 防止被篡改</li>
                </ul>
                
                <h4>🔒 安全特性：</h4>
                <ul>
                    <li>加密存储，无法直接读取</li>
                    <li>有数字签名，无法伪造</li>
                    <li>有时间限制，定期失效</li>
                    <li>可以随时撤销</li>
                </ul>
            </div>
        </section>
        
        <section>
            <h3>Token vs Cookie</h3>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 45%;">
                    <h4>🍪 Cookie</h4>
                    <ul>
                        <li>浏览器自动管理</li>
                        <li>域名绑定</li>
                        <li>容易被攻击</li>
                        <li>功能相对简单</li>
                    </ul>
                </div>
                <div style="width: 45%;">
                    <h4>🎫 Token</h4>
                    <ul>
                        <li>开发者手动管理</li>
                        <li>跨域友好</li>
                        <li>安全性更高</li>
                        <li>功能更强大</li>
                    </ul>
                </div>
            </div>
            <p style="margin-top: 20px;">
                <em>💡 现代网站更多使用Token方式</em>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>权限控制规则</h2>
            <p>后端如何决定你能看什么？</p>
            <ul>
                <li>👤 <strong>角色定义</strong> - 管理员、会员、游客</li>
                <li>📋 <strong>权限列表</strong> - 每个角色能做什么</li>
                <li>🔍 <strong>实时检查</strong> - 每次请求都验证</li>
                <li>⚠️ <strong>拒绝访问</strong> - 权限不足时阻止</li>
            </ul>
        </section>
        
        <section>
            <h3>权限矩阵示例</h3>
            <div style="font-size: 0.8em;">
                <table style="width: 100%; border: 1px solid #ccc;">
                    <tr style="background: #f0f0f0;">
                        <th>角色</th>
                        <th>查看内容</th>
                        <th>发表评论</th>
                        <th>删除内容</th>
                        <th>管理用户</th>
                    </tr>
                    <tr>
                        <td>游客</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>会员</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>管理员</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                </table>
                <p style="margin-top: 10px;">
                    <em>💡 这些规则都是用代码写的</em>
                </p>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>公钥私钥机制</h2>
            <p>更高级的安全保护</p>
            <ul>
                <li>🔐 <strong>非对称加密</strong> - 两把不同的钥匙</li>
                <li>🔑 <strong>私钥</strong> - 自己保管的秘密钥匙</li>
                <li>🗝️ <strong>公钥</strong> - 可以公开的钥匙</li>
                <li>🛡️ <strong>数字签名</strong> - 证明消息的真实性</li>
            </ul>
        </section>
        
        <section>
            <h3>公私钥的比喻</h3>
            <p>想象一个神奇的邮箱系统</p>
            <div style="text-align: left;">
                <h4>📮 邮箱的两把钥匙：</h4>
                <ul>
                    <li><strong>公钥（投递钥匙）</strong> - 任何人都可以用它往邮箱里投信</li>
                    <li><strong>私钥（取信钥匙）</strong> - 只有你有，只有你能取出信件</li>
                </ul>
                
                <h4>🎯 神奇之处：</h4>
                <ul>
                    <li>别人可以给你写信（用公钥加密）</li>
                    <li>但只有你能读（用私钥解密）</li>
                    <li>即使公钥被人知道也不怕</li>
                    <li>私钥绝对不能泄露</li>
                </ul>
            </div>
        </section>
        
        <section>
            <h3>数字签名的原理</h3>
            <p>就像古代的印章</p>
            <div style="text-align: left;">
                <h4>📜 古代的印章：</h4>
                <ul>
                    <li>皇帝有独一无二的玉印</li>
                    <li>盖在圣旨上证明真伪</li>
                    <li>别人无法伪造</li>
                    <li>看到印章就知道是真的</li>
                </ul>
                
                <h4>💻 数字签名：</h4>
                <ul>
                    <li>用私钥给消息"盖章"</li>
                    <li>别人用公钥验证真伪</li>
                    <li>无法伪造和篡改</li>
                    <li>确保消息来源可靠</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>JWT - 现代Token标准</h2>
            <p>JSON Web Token的强大功能</p>
            <ul>
                <li>📦 <strong>自包含</strong> - 信息都在Token里</li>
                <li>🔐 <strong>数字签名</strong> - 防止篡改</li>
                <li>⏰ <strong>过期机制</strong> - 自动失效</li>
                <li>🌐 <strong>跨平台</strong> - 到处都能用</li>
            </ul>
        </section>
        
        <section>
            <h3>JWT的结构</h3>
            <div style="text-align: left; font-size: 0.9em;">
                <h4>🧩 三个部分：</h4>
                <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
                    <strong>Header（头部）</strong><br>
                    <code>{"alg": "HS256", "typ": "JWT"}</code><br>
                    <em>说明加密算法和类型</em>
                </div>
                
                <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
                    <strong>Payload（载荷）</strong><br>
                    <code>{"userId": 123, "role": "admin", "exp": 1640995200}</code><br>
                    <em>包含用户信息和权限</em>
                </div>
                
                <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
                    <strong>Signature（签名）</strong><br>
                    <code>HMACSHA256(base64(header) + "." + base64(payload), secret)</code><br>
                    <em>防止数据被篡改</em>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>Token的安全最佳实践</h2>
            <p>如何让Token更安全？</p>
            <ul>
                <li>⏰ <strong>短期有效</strong> - 定期过期更新</li>
                <li>🔄 <strong>刷新机制</strong> - 无感知续期</li>
                <li>🚫 <strong>黑名单</strong> - 可以主动撤销</li>
                <li>🌐 <strong>HTTPS传输</strong> - 加密通道保护</li>
            </ul>
        </section>
        
        <section>
            <h3>Token存储安全</h3>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 45%;">
                    <h4>❌ 不安全的做法</h4>
                    <ul>
                        <li>存在localStorage</li>
                        <li>明文传输</li>
                        <li>永不过期</li>
                        <li>泄露后无法撤销</li>
                    </ul>
                </div>
                <div style="width: 45%;">
                    <h4>✅ 安全的做法</h4>
                    <ul>
                        <li>存在HttpOnly Cookie</li>
                        <li>HTTPS传输</li>
                        <li>短期过期</li>
                        <li>支持主动注销</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section>
            <h3>常见安全威胁</h3>
            <div style="text-align: left;">
                <h4>⚠️ 主要威胁：</h4>
                <ul>
                    <li><strong>Token劫持</strong> - 被恶意获取</li>
                    <li><strong>重放攻击</strong> - 重复使用旧Token</li>
                    <li><strong>中间人攻击</strong> - 传输过程被截获</li>
                    <li><strong>XSS攻击</strong> - 通过脚本窃取</li>
                </ul>
                
                <h4>🛡️ 防护措施：</h4>
                <ul>
                    <li>使用HTTPS加密传输</li>
                    <li>设置合理的过期时间</li>
                    <li>实施Token轮换机制</li>
                    <li>加强前端安全防护</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>实际应用场景</h2>
            <p>Token在哪些地方被使用？</p>
            <ul>
                <li>📱 <strong>移动应用</strong> - App登录状态管理</li>
                <li>🔗 <strong>API接口</strong> - 服务间身份验证</li>
                <li>🌐 <strong>单点登录</strong> - 一次登录多系统使用</li>
                <li>🏛️ <strong>微服务</strong> - 分布式系统认证</li>
            </ul>
        </section>
        
        <section>
            <h3>微信小程序的Token</h3>
            <div style="text-align: left;">
                <h4>🎯 工作流程：</h4>
                <ol>
                    <li>小程序获取微信授权</li>
                    <li>向后端发送授权码</li>
                    <li>后端验证并生成Token</li>
                    <li>小程序保存Token</li>
                    <li>后续请求都带Token</li>
                </ol>
                
                <h4>💡 这样做的好处：</h4>
                <ul>
                    <li>不需要用户输入密码</li>
                    <li>微信保证身份真实性</li>
                    <li>开发者专注业务逻辑</li>
                    <li>用户体验更好</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <h2>课程总结</h2>
        <div style="text-align: left;">
            <h3>今天我们学到了：</h3>
            <ul>
                <li>🎫 <strong>Token令牌</strong> - 就像活动入场券，一次验证多次使用</li>
                <li>🔐 <strong>访问控制</strong> - 根据身份决定能看什么数据</li>
                <li>🔑 <strong>公私钥</strong> - 像神奇邮箱的两把钥匙</li>
                <li>🛡️ <strong>数字签名</strong> - 像古代印章保证真实性</li>
                <li>📦 <strong>JWT标准</strong> - 现代Token的最佳实践</li>
                <li>⚠️ <strong>安全考虑</strong> - 如何防范各种威胁</li>
            </ul>
            <p style="margin-top: 30px;">
                <em>🌟 现在你知道网站是如何安全地管理用户身份和权限的了！</em>
            </p>
        </div>
    </section>
    `
};

