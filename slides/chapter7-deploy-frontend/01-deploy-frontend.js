module.exports = {
    title: '前端部署 - 静态网站的魅力',
    description: 'Nuxt3 + Cloudflare Pages 完美组合',
    theme: 'sky',
    content: `
    <section>
        <h2>前端部署</h2>
        <h3>让你的网站飞得更快更远</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
        <p><i class="fas fa-rocket"></i> 静态网站 + 全球CDN = 超音速体验！</p>
    </section>

    <section>
        <section>
            <h2>什么是静态网站生成？</h2>
            <p>把动态网站变成"罐头食品" 🥫</p>
        </section>
        
        <section>
            <h3>动态 vs 静态</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="bg-red-50 p-4 rounded">
                    <h4 class="font-bold text-red-800 mb-2">动态网站（现做现卖）</h4>
                    <ul class="text-red-700">
                        <li>用户访问时现场制作</li>
                        <li>需要服务器运算</li>
                        <li>速度受服务器影响</li>
                        <li>容易出故障</li>
                        <li>成本较高</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-4 rounded">
                    <h4 class="font-bold text-green-800 mb-2">静态网站（预制罐头）</h4>
                    <ul class="text-green-700">
                        <li>提前制作好所有页面</li>
                        <li>直接发送文件</li>
                        <li>超快加载速度</li>
                        <li>几乎不会坏</li>
                        <li>成本超低</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3>Nuxt3 的 generate 命令</h3>
            <p>一个神奇的"罐头制作机" 🏭</p>
            <pre><code class="bash" data-trim>
# 一键生成静态网站
npm run generate

# 或者
nuxt generate
            </code></pre>
            <div class="fragment">
                <p class="mt-4">这个命令会：</p>
                <ul class="text-left text-sm">
                    <li>🔍 扫描所有页面路由</li>
                    <li>⚡ 预渲染每个页面</li>
                    <li>📦 打包所有资源文件</li>
                    <li>🎯 优化代码和图片</li>
                    <li>📁 生成 dist 文件夹</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>静态网站的好处</h2>
            <p>为什么大家都爱"罐头食品"？ 🌟</p>
        </section>
        
        <section>
            <h3>速度超快 ⚡</h3>
            <ul>
                <li class="fragment"><strong>秒开体验</strong> - 无需服务器计算</li>
                <li class="fragment"><strong>全球加速</strong> - 就近访问服务器</li>
                <li class="fragment"><strong>缓存友好</strong> - 浏览器记忆功能强</li>
                <li class="fragment"><strong>节省流量</strong> - 文件压缩优化</li>
            </ul>
            <div class="fragment bg-blue-50 p-4 rounded mt-4">
                <p class="text-blue-800"><strong>对比数据：</strong></p>
                <p class="text-blue-700 text-sm">• 动态网站：2-5秒加载<br>• 静态网站：0.5-1秒加载</p>
            </div>
        </section>

        <section>
            <h3>安全可靠 🛡️</h3>
            <ul>
                <li class="fragment"><strong>无服务器攻击</strong> - 没有后端可攻击</li>
                <li class="fragment"><strong>无数据库风险</strong> - 纯网页文件</li>
                <li class="fragment"><strong>攻击抗性强</strong> - 天然防护能力</li>
                <li class="fragment"><strong>故障率极低</strong> - 文件服务很稳定</li>
            </ul>
            <p class="fragment"><small>就像把钱放在保险柜里，而不是钱包里</small></p>
        </section>

        <section>
            <h3>成本超低 💰</h3>
            <ul>
                <li class="fragment"><strong>无服务器费用</strong> - 不需要运行服务器</li>
                <li class="fragment"><strong>流量成本低</strong> - 全球网络分担流量</li>
                <li class="fragment"><strong>维护成本零</strong> - 无需专人维护</li>
                <li class="fragment"><strong>扩容免费</strong> - 访问量再大也不怕</li>
            </ul>
            <div class="fragment bg-green-50 p-4 rounded mt-4">
                <p class="text-green-800"><strong>很多平台甚至免费！</strong></p>
            </div>
        </section>

        <section>
            <h3>SEO友好 📈</h3>
            <ul>
                <li class="fragment"><strong>搜索机器人友好</strong> - 纯网页易解析</li>
                <li class="fragment"><strong>手机优化</strong> - 响应速度佳</li>
                <li class="fragment"><strong>移动优化</strong> - 响应速度佳</li>
                <li class="fragment"><strong>结构清晰</strong> - 利于搜索引擎理解</li>
            </ul>
            <p class="fragment"><small>搜索引擎会把你的网站排得更靠前！</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>认识 Cloudflare</h2>
            <p>互联网界的"顺丰快递" 📦</p>
        </section>
        
        <section>
            <h3>Cloudflare 是什么？</h3>
            <p>全球最大的CDN和云安全公司</p>
            <ul class="text-left text-sm">
                <li class="fragment"><i class="fas fa-globe"></i> <strong>覆盖全球</strong> - 320多个城市有服务器</li>
                <li class="fragment"><i class="fas fa-shield-alt"></i> <strong>安全专家</strong> - 每天阻挡数十亿次攻击</li>
                <li class="fragment"><i class="fas fa-rocket"></i> <strong>性能优化</strong> - 让网站提速30-60%</li>
                <li class="fragment"><i class="fas fa-heart"></i> <strong>开发者友好</strong> - 丰富的免费服务</li>
            </ul>
            <div class="fragment mt-4">
                <p class="bg-yellow-50 p-3 rounded text-yellow-800 text-sm">
                    <strong>知名客户：</strong>Discord、Shopify、Canva、路透社等
                </p>
            </div>
        </section>

        <section>
            <h3>为什么选择 Cloudflare Pages？</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h4 class="font-bold mb-2">🆓 完全免费</h4>
                    <ul>
                        <li>无限流量</li>
                        <li>无限访问量</li>
                        <li>无限项目数</li>
                        <li>免费安全证书</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-2">🚀 超级快速</h4>
                    <ul>
                        <li>全球网络加速</li>
                        <li>边缘计算优化</li>
                        <li>智能路由选择</li>
                        <li>最新协议支持</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-2">🔧 开发友好</h4>
                    <ul>
                        <li>代码库自动部署</li>
                        <li>预览环境</li>
                        <li>自定义域名</li>
                        <li>部署历史</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-2">🛡️ 安全可靠</h4>
                    <ul>
                        <li>攻击防护</li>
                        <li>网站应用防火墙</li>
                        <li>自动加密传输</li>
                        <li>99.9%可用性</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3>Cloudflare vs 其他平台</h3>
            <div class="text-xs">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border p-2">功能</th>
                            <th class="border p-2 bg-orange-100">Cloudflare</th>
                            <th class="border p-2">Vercel</th>
                            <th class="border p-2">Netlify</th>
                            <th class="border p-2">GitHub Pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2 font-bold">免费额度</td>
                            <td class="border p-2 bg-green-50">无限制</td>
                            <td class="border p-2">100GB/月</td>
                            <td class="border p-2">100GB/月</td>
                            <td class="border p-2">1GB</td>
                        </tr>
                        <tr>
                            <td class="border p-2 font-bold">部署速度</td>
                            <td class="border p-2 bg-green-50">超快</td>
                            <td class="border p-2">快</td>
                            <td class="border p-2">中等</td>
                            <td class="border p-2">慢</td>
                        </tr>
                        <tr>
                            <td class="border p-2 font-bold">全球加速网络</td>
                            <td class="border p-2 bg-green-50">320多个节点</td>
                            <td class="border p-2">有</td>
                            <td class="border p-2">有</td>
                            <td class="border p-2">无</td>
                        </tr>
                        <tr>
                            <td class="border p-2 font-bold">自定义域名</td>
                            <td class="border p-2 bg-green-50">免费</td>
                            <td class="border p-2">免费</td>
                            <td class="border p-2">免费</td>
                            <td class="border p-2">免费</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>部署到 Cloudflare Pages</h2>
            <p>五分钟让你的网站飞起来！ 🛸</p>
        </section>
        
        <section>
            <h3>第一步：准备项目</h3>
            <pre><code class="bash" data-trim>
# 1. 配置 Nuxt3 为静态生成
# nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/'] // 可以添加更多路由
    }
  },
  // 或者使用 ssr: false 完全静态化
  ssr: false
})

# 2. 生成静态文件
npm run generate

# 3. 检查 dist 文件夹
ls dist/
            </code></pre>
            <p class="fragment"><small>确保所有页面都正确生成了</small></p>
        </section>

        <section>
            <h3>第二步：上传到 GitHub</h3>
            <pre><code class="bash" data-trim>
# 初始化代码仓库（如果还没有）
git init
git add .
git commit -m "Initial commit"

# 创建 GitHub 仓库并推送
git remote add origin https://github.com/你的用户名/项目名.git
git branch -M main
git push -u origin main
            </code></pre>
            <div class="fragment bg-blue-50 p-4 rounded mt-4">
                <p class="text-blue-800"><strong>💡 小贴士：</strong></p>
                <p class="text-blue-700 text-sm">确保 dist 文件夹不在 .gitignore 中，或者配置 Cloudflare 自动构建</p>
            </div>
        </section>

        <section>
            <h3>第三步：连接 Cloudflare Pages</h3>
            <ol class="text-left text-sm">
                <li class="fragment"><strong>访问</strong> dash.cloudflare.com</li>
                <li class="fragment"><strong>登录</strong> 或注册账号</li>
                <li class="fragment"><strong>点击</strong> "Pages" → "Create a project"</li>
                <li class="fragment"><strong>连接</strong> GitHub 账号</li>
                <li class="fragment"><strong>选择</strong> 你的项目仓库</li>
                <li class="fragment"><strong>配置</strong> 构建设置</li>
            </ol>
            <div class="fragment mt-4">
                <img src="/api/placeholder/600/300" alt="Cloudflare Pages 界面截图" class="rounded shadow">
            </div>
        </section>

        <section>
            <h3>第四步：配置构建设置</h3>
            <div class="bg-gray-50 p-4 rounded text-left text-sm">
                <h4 class="font-bold mb-2">构建配置：</h4>
                <ul>
                    <li><strong>框架预设：</strong> Nuxt.js</li>
                    <li><strong>构建命令：</strong> npm run generate</li>
                    <li><strong>构建输出目录：</strong> dist</li>
                    <li><strong>Node.js 版本：</strong> 18</li>
                </ul>
            </div>
            <div class="fragment mt-4">
                <p class="text-green-600"><strong>点击 "Save and Deploy" 开始部署！</strong></p>
            </div>
        </section>

        <section>
            <h3>第五步：等待部署完成</h3>
            <div class="text-left">
                <p class="mb-4">部署过程：</p>
                <ul class="text-sm space-y-2">
                    <li class="fragment">🔄 <strong>克隆代码</strong> - 从 GitHub 获取最新代码</li>
                    <li class="fragment">📦 <strong>安装依赖</strong> - npm install</li>
                    <li class="fragment">🏗️ <strong>构建项目</strong> - npm run generate</li>
                    <li class="fragment">🚀 <strong>部署到网络</strong> - 分发到全球节点</li>
                    <li class="fragment">✅ <strong>完成！</strong> - 获得访问链接</li>
                </ul>
                <div class="fragment mt-4 bg-green-50 p-3 rounded">
                    <p class="text-green-800 text-sm">通常 2-3 分钟就能完成！</p>
                </div>
            </div>
        </section>

        <section>
            <h3>第六步：测试和优化</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h4 class="font-bold mb-2">✅ 检查清单</h4>
                    <ul>
                        <li>所有页面都能正常访问</li>
                        <li>图片和资源正确加载</li>
                        <li>页面加载速度测试</li>
                    </ul>
                </div>
              
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>自动化部署</h2>
            <p>推送代码，自动上线！ 🎯</p>
        </section>
        
        <section>
            <h3>代码推送工作流</h3>
            <div class="text-left">
                <ol class="space-y-3">
                    <li class="fragment">
                        <strong>🔧 本地开发</strong>
                        <pre><code class="bash">npm run dev</code></pre>
                    </li>
                    <li class="fragment">
                        <strong>✅ 测试构建</strong>
                        <pre><code class="bash">npm run generate</code></pre>
                    </li>
                    <li class="fragment">
                        <strong>📤 推送代码</strong>
                        <pre><code class="bash">git add . && git commit -m "Update" && git push</code></pre>
                    </li>
                    <li class="fragment">
                        <strong>🚀 自动部署</strong>
                        <p class="text-sm text-gray-600">Cloudflare 自动检测到推送，开始新的部署</p>
                    </li>
                    <li class="fragment">
                        <strong>🎉 上线完成</strong>
                        <p class="text-sm text-gray-600">几分钟后新版本自动上线</p>
                    </li>
                </ol>
            </div>
        </section>

       
    </section>

    <section>
        <section>
            <h2>高级功能</h2>
            <p>让你的网站更专业！ ⭐</p>
        </section>
        
        <section>
            <h3>自定义域名</h3>
            <div class="text-left text-sm">
                <p class="mb-3"><strong>步骤：</strong></p>
                <ol class="space-y-2">
                    <li>1. 在域名注册商购买域名</li>
                    <li>2. Pages 设置中添加自定义域名</li>
                    <li>3. 配置域名解析记录指向 Cloudflare</li>
                    <li>4. 等待安全证书自动配置</li>
                </ol>
                <div class="bg-green-50 p-3 rounded mt-3">
                    <p class="text-green-800"><strong>结果：</strong> www.你的域名.com</p>
                </div>
            </div>
        </section>

      

       
    </section>

    <section>
        <h2>🎉 前端部署完成！</h2>
        <div class="text-left">
            <h3 class="mb-4">✅ 你已经掌握了：</h3>
            <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-green-500"></i> Nuxt3 静态网站生成</li>
                <li><i class="fas fa-check text-green-500"></i> Cloudflare Pages 部署</li>
                <li><i class="fas fa-check text-green-500"></i> 自动化流程</li>
                <li><i class="fas fa-check text-green-500"></i> 性能优化技巧</li>
                <li><i class="fas fa-check text-green-500"></i> 安全防护配置</li>
                <li><i class="fas fa-check text-green-500"></i> 自定义域名设置</li>
            </ul>
        </div>
        
        <div class="mt-6 bg-blue-50 p-4 rounded">
            <p class="text-blue-800"><strong>🚀 你的网站现在：</strong></p>
            <ul class="text-blue-700 text-sm">
                <li>全球访问速度超快</li>
                <li>安全性企业级别</li>
                <li>运行成本几乎为零</li>
                <li>部署流程全自动</li>
            </ul>
        </div>
        
        <p class="mt-4 text-lg">
            <strong>下一步：部署后端，实现全栈上线！</strong> 🌟
        </p>
    </section>
    `
};








