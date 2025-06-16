module.exports = {
    title: '注册和登录的秘密',
    description: '揭秘网站如何认识你 - 注册登录原理',
    theme: 'sky',
    content: `
    <section>
        <h2>注册和登录的秘密</h2>
        <h3>网站是如何认识你的？</h3>
        <ul>
            <li>🆔 什么是注册和登录</li>
            <li>🔐 为什么需要注册登录</li>
            <li>⚙️ 背后的工作原理</li>
            <li>🛡️ 安全性保护</li>
        </ul>
        <p>
            <small>讲师：Nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>生活中的身份验证</h2>
            <p>其实你每天都在"注册"和"登录"</p>
            <ul>
                <li>🏦 <strong>银行开户</strong> - 注册账户</li>
                <li>💳 <strong>ATM取钱</strong> - 输入密码登录</li>
                <li>🏢 <strong>办公室门禁</strong> - 刷卡进入</li>
                <li>📱 <strong>手机解锁</strong> - 指纹/密码验证</li>
            </ul>
        </section>
        
        <section>
            <h3>网站的身份验证</h3>
            <p>网站也需要知道你是谁</p>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 45%;">
                    <h4>🏦 现实世界</h4>
                    <ul>
                        <li>身份证</li>
                        <li>银行卡</li>
                        <li>会员卡</li>
                        <li>工作证</li>
                    </ul>
                </div>
                <div style="width: 45%;">
                    <h4>🌐 网络世界</h4>
                    <ul>
                        <li>用户名</li>
                        <li>密码</li>
                        <li>邮箱</li>
                        <li>手机号</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>什么是注册？</h2>
            <p>注册就像办理身份证</p>
            <ul>
                <li>📝 <strong>填写信息</strong> - 告诉网站你是谁</li>
                <li>🆔 <strong>创建账户</strong> - 网站给你分配一个身份</li>
                <li>💾 <strong>保存记录</strong> - 网站记住你的信息</li>
                <li>✅ <strong>激活账户</strong> - 确认你的身份有效</li>
            </ul>
        </section>
        
        <section>
            <h3>注册需要什么信息？</h3>
            <div style="text-align: left;">
                <h4>🎯 必需信息：</h4>
                <ul>
                    <li><strong>用户名</strong> - 你的网络昵称</li>
                    <li><strong>密码</strong> - 你的秘密钥匙</li>
                    <li><strong>邮箱</strong> - 联系你的方式</li>
                </ul>
                
                <h4>📋 可选信息：</h4>
                <ul>
                    <li>真实姓名</li>
                    <li>手机号码</li>
                    <li>生日年龄</li>
                    <li>个人头像</li>
                </ul>
            </div>
        </section>
        
        <section>
            <h3>为什么要邮箱验证？</h3>
            <p>就像邮局要确认你的地址一样</p>
            <ul>
                <li>📧 <strong>发送验证邮件</strong> - 确认邮箱是真的</li>
                <li>🔗 <strong>点击验证链接</strong> - 证明你能收到邮件</li>
                <li>✅ <strong>激活账户</strong> - 完成身份确认</li>
                <li>🛡️ <strong>安全保障</strong> - 防止别人冒用你的邮箱</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>什么是登录？</h2>
            <p>登录就像用钥匙开门</p>
            <ul>
                <li>🔑 <strong>输入用户名</strong> - 告诉网站你是谁</li>
                <li>🔐 <strong>输入密码</strong> - 证明你真的是你</li>
                <li>🔍 <strong>系统验证</strong> - 检查密码是否正确</li>
                <li>🚪 <strong>允许进入</strong> - 欢迎回来！</li>
            </ul>
        </section>
        
        <section>
            <h3>登录的比喻</h3>
            <p>想象登录就像...</p>
            <div style="display: flex; justify-content: space-around;">
                <div style="width: 30%;">
                    <h4>🏠 回家</h4>
                    <ul>
                        <li>用钥匙开门</li>
                        <li>进入自己的家</li>
                        <li>使用家里的东西</li>
                    </ul>
                </div>
                <div style="width: 30%;">
                    <h4>🏢 上班</h4>
                    <ul>
                        <li>刷工作证</li>
                        <li>进入办公室</li>
                        <li>使用办公设备</li>
                    </ul>
                </div>
                <div style="width: 30%;">
                    <h4>🏦 取钱</h4>
                    <ul>
                        <li>插入银行卡</li>
                        <li>输入密码</li>
                        <li>取出自己的钱</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>登录后网站如何记住你？</h2>
            <p>这里有个神奇的东西叫Cookie</p>
            <ul>
                <li>🍪 <strong>Cookie</strong> - 就像一张临时通行证</li>
                <li>💾 <strong>存在浏览器</strong> - 放在你的电脑里</li>
                <li>⏰ <strong>有效期限</strong> - 过期就要重新登录</li>
                <li>🔐 <strong>包含信息</strong> - 告诉网站你是已登录用户</li>
            </ul>
        </section>
        
        <section>
            <h3>Cookie的工作原理</h3>
            <div style="text-align: left;">
                <h4>🎯 登录成功后：</h4>
                <ol>
                    <li>网站生成一张"临时身份证"</li>
                    <li>把这张证放到你的浏览器里</li>
                    <li>每次访问都会出示这张证</li>
                    <li>网站看到证就知道你是谁</li>
                </ol>
                
                <h4>💡 就像游乐园：</h4>
                <ul>
                    <li>买票进园（登录）</li>
                    <li>手上盖章（Cookie）</li>
                    <li>凭章玩游戏（访问功能）</li>
                    <li>当天有效（有效期）</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>为什么需要注册登录？</h2>
            <p>保护你的个人空间和数据</p>
            <ul>
                <li>🏠 <strong>个人空间</strong> - 你的专属区域</li>
                <li>💾 <strong>数据保存</strong> - 记住你的设置和内容</li>
                <li>🛡️ <strong>隐私保护</strong> - 别人看不到你的信息</li>
                <li>🎯 <strong>个性化服务</strong> - 根据你的喜好推荐</li>
            </ul>
        </section>
        
        <section>
            <h3>没有登录会怎样？</h3>
            <p>就像是个"路人甲"</p>
            <ul>
                <li>😐 <strong>匿名状态</strong> - 网站不知道你是谁</li>
                <li>🔒 <strong>功能受限</strong> - 很多功能用不了</li>
                <li>💔 <strong>数据丢失</strong> - 关闭浏览器就什么都没了</li>
                <li>📝 <strong>无法互动</strong> - 不能评论、点赞、收藏</li>
            </ul>
        </section>
        
        <section>
            <h3>登录后的好处</h3>
            <div style="text-align: left;">
                <h4>🎉 你可以：</h4>
                <ul>
                    <li>💬 发表评论和互动</li>
                    <li>❤️ 点赞和收藏内容</li>
                    <li>📋 保存购物车和愿望单</li>
                    <li>📱 同步多设备数据</li>
                    <li>🎯 获得个性化推荐</li>
                    <li>🔔 接收重要通知</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>密码的安全性</h2>
            <p>你的数字钥匙有多安全？</p>
            <ul>
                <li>🔐 <strong>复杂度很重要</strong> - 长一点，杂一点</li>
                <li>🙈 <strong>不要重复使用</strong> - 一个网站一个密码</li>
                <li>🤐 <strong>保密很关键</strong> - 不要告诉别人</li>
                <li>🔄 <strong>定期更换</strong> - 老密码要退休</li>
            </ul>
        </section>
        
        <section>
            <h3>什么是好密码？</h3>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 45%;">
                    <h4>❌ 糟糕的密码</h4>
                    <ul>
                        <li>123456</li>
                        <li>password</li>
                        <li>你的生日</li>
                        <li>你的姓名</li>
                    </ul>
                </div>
                <div style="width: 45%;">
                    <h4>✅ 好的密码</h4>
                    <ul>
                        <li>MyDog@2024</li>
                        <li>Coffee&Rain99</li>
                        <li>SunShine#8848</li>
                        <li>Music+Love=Life</li>
                    </ul>
                </div>
            </div>
            <p style="margin-top: 20px;">
                <em>💡 记忆技巧：用一句话的首字母加符号和数字</em>
            </p>
        </section>
        
        <section>
            <h3>网站如何保护你的密码？</h3>
            <p>他们不会直接保存你的密码</p>
            <ul>
                <li>🔒 <strong>加密存储</strong> - 把密码变成乱码保存</li>
                <li>🎭 <strong>哈希算法</strong> - 像密码的"指纹"</li>
                <li>🔍 <strong>验证时对比</strong> - 比较"指纹"是否一致</li>
                <li>🛡️ <strong>即使被盗</strong> - 黑客也看不懂原密码</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>现代登录方式</h2>
            <p>除了密码，还有更多选择</p>
            <ul>
                <li>📱 <strong>短信验证码</strong> - 手机收验证码</li>
                <li>👆 <strong>指纹识别</strong> - 手指就是密码</li>
                <li>👁️ <strong>面部识别</strong> - 刷脸登录</li>
                <li>🔗 <strong>第三方登录</strong> - 用微信QQ等账号</li>
            </ul>
        </section>
        
        <section>
            <h3>第三方登录的原理</h3>
            <p>就像用身份证办其他证件</p>
            <div style="text-align: left;">
                <h4>🎯 工作流程：</h4>
                <ol>
                    <li>点击"微信登录"</li>
                    <li>跳转到微信确认页面</li>
                    <li>微信问：允许XX网站获取基本信息吗？</li>
                    <li>你确认同意</li>
                    <li>微信告诉网站：这个人是合法用户</li>
                    <li>网站自动为你创建账户</li>
                </ol>
            </div>
        </section>
        
        <section>
            <h3>第三方登录的好处</h3>
            <ul>
                <li>⚡ <strong>快速便捷</strong> - 不用重新注册</li>
                <li>🔐 <strong>安全可靠</strong> - 大公司的安全保障</li>
                <li>🧠 <strong>好记忆</strong> - 不用记新密码</li>
                <li>📱 <strong>手机验证</strong> - 微信本身就很安全</li>
            </ul>
            <p style="margin-top: 20px;">
                <em>⚠️ 但要注意隐私授权范围</em>
            </p>
        </section>
    </section>

    <section>
        <section>
            <h2>常见问题解答</h2>
            <p>你可能会遇到的困惑</p>
        </section>
        
        <section>
            <h3>Q: 忘记密码怎么办？</h3>
            <div style="text-align: left;">
                <h4>🔧 解决方法：</h4>
                <ol>
                    <li>点击"忘记密码"链接</li>
                    <li>输入注册时的邮箱</li>
                    <li>查收重设密码邮件</li>
                    <li>点击邮件中的链接</li>
                    <li>设置新密码</li>
                </ol>
                
                <h4>💡 预防措施：</h4>
                <ul>
                    <li>用密码管理器记录</li>
                    <li>绑定多个联系方式</li>
                    <li>定期备份重要账户信息</li>
                </ul>
            </div>
        </section>
        
        <section>
            <h3>Q: 为什么有时候要重新登录？</h3>
            <div style="text-align: left;">
                <h4>🤔 可能的原因：</h4>
                <ul>
                    <li><strong>Cookie过期</strong> - 临时通行证到期了</li>
                    <li><strong>清理浏览器</strong> - 通行证被删除了</li>
                    <li><strong>换设备</strong> - 在新设备上没有通行证</li>
                    <li><strong>安全检查</strong> - 网站发现异常活动</li>
                    <li><strong>长时间未用</strong> - 网站自动注销</li>
                </ul>
                
                <h4>✅ 这是正常的安全机制</h4>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>注册登录的技术原理</h2>
            <p>背后的技术是怎样的？</p>
            <ul>
                <li>💾 <strong>数据库存储</strong> - 用户信息保存在哪里</li>
                <li>🔐 <strong>加密传输</strong> - 密码在网络中的保护</li>
                <li>🍪 <strong>会话管理</strong> - Cookie和Session的配合</li>
                <li>🛡️ <strong>安全防护</strong> - 防止恶意攻击</li>
            </ul>
        </section>
        
        <section>
            <h3>数据库中的用户表</h3>
            <p>就像一个巨大的通讯录</p>
            <div style="text-align: left; font-size: 0.8em;">
                <table style="width: 100%; border: 1px solid #ccc;">
                    <tr style="background: #f0f0f0;">
                        <th>用户ID</th>
                        <th>用户名</th>
                        <th>密码(加密)</th>
                        <th>邮箱</th>
                        <th>注册时间</th>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>小明</td>
                        <td>$2y$10$...</td>
                        <td>ming@example.com</td>
                        <td>2024-01-15</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>小红</td>
                        <td>$2y$10$...</td>
                        <td>hong@example.com</td>
                        <td>2024-01-16</td>
                    </tr>
                </table>
                <p style="margin-top: 10px;">
                    <em>💡 密码都是加密的乱码，即使程序员也看不懂</em>
                </p>
            </div>
        </section>
    </section>

    <section>
        <h2>课程总结</h2>
        <div style="text-align: left;">
            <h3>今天我们揭秘了：</h3>
            <ul>
                <li>🆔 <strong>注册</strong> - 就像办身份证，建立你的网络身份</li>
                <li>🔐 <strong>登录</strong> - 就像用钥匙开门，证明你的身份</li>
                <li>🍪 <strong>Cookie</strong> - 就像临时通行证，让网站记住你</li>
                <li>🛡️ <strong>安全性</strong> - 密码加密保护，多种登录方式</li>
                <li>🎯 <strong>个性化</strong> - 登录后享受专属服务</li>
            </ul>
            <p style="margin-top: 30px;">
                <em>🌟 现在你知道为什么需要注册登录，以及它们是如何工作的了！</em>
            </p>
        </div>
    </section>
    `
};