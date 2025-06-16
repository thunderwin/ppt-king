module.exports = {
    title: '后端部署 - 让全世界访问你的网站',
    description: 'DigitalOcean App Platform 云部署指南',
    theme: 'sky',
    content: `
    <section>
        <h2>后端部署</h2>
        <h3>让全世界都能访问你的网站</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
        <p><i class="fas fa-cloud"></i> 从本地电脑到云端的飞跃！</p>
    </section>

    <section>
        <section>
            <h2>什么是部署？</h2>
            <p>让你的网站"搬家"到互联网上 🏠➡️🌍</p>
        </section>
        
        <section>
            <h3>现在的问题</h3>
            <p>我们的网站还住在"家里" 😅</p>
            <ul>
                <li class="fragment">只能在你的电脑上访问</li>
                <li class="fragment">关机了网站就没了</li>
                <li class="fragment">朋友想看还得跑到你家</li>
                <li class="fragment">这样怎么让全世界看到？</li>
            </ul>
        </section>

        <section>
            <h3>部署后的效果</h3>
            <p>网站搬到"公寓大楼"里 🏢</p>
            <ul>
                <li class="fragment"><i class="fas fa-globe"></i> <strong>全球访问</strong> - 任何人都能看到</li>
                <li class="fragment"><i class="fas fa-clock"></i> <strong>24/7在线</strong> - 永远不下班</li>
                <li class="fragment"><i class="fas fa-rocket"></i> <strong>访问飞快</strong> - 专业服务器性能</li>
                <li class="fragment"><i class="fas fa-shield-alt"></i> <strong>安全可靠</strong> - 专业的保安系统</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>认识 DigitalOcean</h2>
            <p>云服务界的"五星级酒店" ⭐⭐⭐⭐⭐</p>
        </section>
        
        <section>
            <h3>DigitalOcean 是什么？</h3>
            <p>想象一下超级豪华的"云端公寓楼" 🏢</p>
            <ul>
                <li class="fragment">全球都有"分店"（数据中心）</li>
                <li class="fragment">专业的"物业管理"（运维团队）</li>
                <li class="fragment">各种房型可选（不同配置）</li>
                <li class="fragment">按月收租金（按需付费）</li>
                <li class="fragment">搬家超简单（一键部署）</li>
            </ul>
        </section>

        <section>
            <h3>App Platform 是什么？</h3>
            <p>DigitalOcean的"精装修公寓" ✨</p>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h4>传统方式（毛坯房）</h4>
                    <ul class="text-red-600">
                        <li>• 自己装修服务器</li>
                        <li>• 自己安装软件</li>
                        <li>• 自己配置环境</li>
                        <li>• 自己监控维护</li>
                    </ul>
                </div>
                <div>
                    <h4>App Platform（精装房）</h4>
                    <ul class="text-green-600">
                        <li>• 拎包入住</li>
                        <li>• 自动配置</li>
                        <li>• 自动更新</li>
                        <li>• 自动监控</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>部署的好处</h2>
            <p>为什么选择云端"豪宅"？ 🏰</p>
        </section>
        
        <section>
            <h3>性能优势</h3>
            <ul>
                <li class="fragment"><i class="fas fa-tachometer-alt"></i> <strong>超快速度</strong> - 专业级SSD硬盘</li>
                <li class="fragment"><i class="fas fa-network-wired"></i> <strong>高速网络</strong> - 万兆光纤连接</li>
                <li class="fragment"><i class="fas fa-server"></i> <strong>强大CPU</strong> - 企业级处理器</li>
                <li class="fragment"><i class="fas fa-memory"></i> <strong>充足内存</strong> - 再多用户也不卡</li>
            </ul>
            <p class="fragment"><small>比你家电脑快100倍！💨</small></p>
        </section>

        <section>
            <h3>安全保障</h3>
            <ul>
                <li class="fragment"><i class="fas fa-lock"></i> <strong>防火墙保护</strong> - 24小时保安巡逻</li>
                <li class="fragment"><i class="fas fa-shield-virus"></i> <strong>防病毒攻击</strong> - 专业安保团队</li>
                <li class="fragment"><i class="fas fa-backup"></i> <strong>自动备份</strong> - 数据永不丢失</li>
                <li class="fragment"><i class="fas fa-certificate"></i> <strong>SSL证书</strong> - 数据传输加密</li>
            </ul>
            <p class="fragment"><small>比银行金库还安全！🔒</small></p>
        </section>

        <section>
            <h3>便利性</h3>
            <ul>
                <li class="fragment"><i class="fas fa-mouse-pointer"></i> <strong>一键部署</strong> - 5分钟上线</li>
                <li class="fragment"><i class="fas fa-sync"></i> <strong>自动更新</strong> - 推送代码即部署</li>
                <li class="fragment"><i class="fas fa-chart-line"></i> <strong>实时监控</strong> - 随时了解网站状态</li>
                <li class="fragment"><i class="fas fa-expand-arrows-alt"></i> <strong>自动扩容</strong> - 访问量大了自动升级</li>
            </ul>
            <p class="fragment"><small>比雇个专职运维还省心！👨‍💻</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>价格说明</h2>
            <p>租金比你想象的便宜多了！ 💰</p>
        </section>
        
        <section>
            <h3>App Platform 定价</h3>
            <div class="bg-blue-50 p-6 rounded-lg">
                <h4 class="text-2xl font-bold text-blue-800 mb-4">基础套餐</h4>
                <div class="text-4xl font-bold text-green-600 mb-2">$5/月</div>
                <p class="text-blue-700 mb-4">约等于35元人民币</p>
                
                <div class="text-left">
                    <h5 class="font-bold mb-2">包含什么？</h5>
                    <ul class="text-sm">
                        <li>✅ 1个应用部署</li>
                        <li>✅ 512MB内存</li>
                        <li>✅ 自动SSL证书</li>
                        <li>✅ 自动备份</li>
                        <li>✅ 全球CDN加速</li>
                        <li>✅ 24/7技术支持</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3>性价比对比</h3>
            <div class="grid grid-cols-3 gap-4 text-xs">
                <div class="bg-red-50 p-4 rounded">
                    <h4 class="font-bold text-red-800">自己搭建</h4>
                    <ul class="text-red-700">
                        <li>• 服务器：200元/月</li>
                        <li>• 域名：100元/年</li>
                        <li>• SSL证书：300元/年</li>
                        <li>• 运维时间：无价</li>
                    </ul>
                    <div class="font-bold mt-2">总计：≥250元/月</div>
                </div>
                <div class="bg-green-50 p-4 rounded">
                    <h4 class="font-bold text-green-800">DigitalOcean</h4>
                    <ul class="text-green-700">
                        <li>• 服务器：✅ 包含</li>
                        <li>• 域名：需单独购买</li>
                        <li>• SSL证书：✅ 免费</li>
                        <li>• 运维时间：✅ 自动化</li>
                    </ul>
                    <div class="font-bold mt-2">总计：35元/月</div>
                </div>
                <div class="bg-blue-50 p-4 rounded">
                    <h4 class="font-bold text-blue-800">额外价值</h4>
                    <ul class="text-blue-700">
                        <li>• 节省时间：无价</li>
                        <li>• 学习成本：无价</li>
                        <li>• 稳定性：无价</li>
                        <li>• 专业性：无价</li>
                    </ul>
                    <div class="font-bold mt-2">真的很划算！</div>
                </div>
            </div>
        </section>

        <section>
            <h3>免费试用</h3>
            <div class="bg-yellow-50 border border-yellow-200 rounded p-4">
                <h4 class="font-bold text-yellow-800 mb-2">🎁 新用户福利</h4>
                <ul class="text-yellow-700">
                    <li>• 注册送 $200 额度</li>
                    <li>• 可以免费使用 40 个月</li>
                    <li>• 无需信用卡验证</li>
                    <li>• 随时可以取消</li>
                </ul>
            </div>
            <p class="fragment mt-4"><strong>相当于3年多的免费使用！</strong> 🎉</p>
        </section>
    </section>

    <section>
        <section>
            <h2>部署步骤预览</h2>
            <p>搬家其实很简单！📦</p>
        </section>
        
        <section>
            <h3>部署流程</h3>
            <ol class="text-left">
                <li class="fragment"><strong>准备代码</strong> - 把项目上传到GitHub</li>
                <li class="fragment"><strong>注册账号</strong> - 在DigitalOcean创建账户</li>
                <li class="fragment"><strong>创建应用</strong> - 连接GitHub仓库</li>
                <li class="fragment"><strong>配置环境</strong> - 设置数据库和环境变量</li>
                <li class="fragment"><strong>一键部署</strong> - 系统自动完成部署</li>
                <li class="fragment"><strong>测试访问</strong> - 获得专属域名</li>
            </ol>
            <p class="fragment mt-4"><small>整个过程不超过10分钟！⏰</small></p>
        </section>

        <section>
            <h3>需要准备什么？</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h4 class="font-bold mb-2">技术准备</h4>
                    <ul class="text-sm">
                        <li>✅ GitHub账号</li>
                        <li>✅ 完成的项目代码</li>
                        <li>✅ package.json文件</li>
                        <li>✅ 环境变量配置</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-2">个人准备</h4>
                    <ul class="text-sm">
                        <li>✅ 邮箱地址</li>
                        <li>✅ 信用卡（可选）</li>
                        <li>✅ 10分钟时间</li>
                        <li>✅ 一杯咖啡 ☕</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <section>
            <h2>部署后的收益</h2>
            <p>投资回报超乎想象！📈</p>
        </section>
        
        <section>
            <h3>技能提升</h3>
            <ul>
                <li class="fragment"><i class="fas fa-graduation-cap"></i> <strong>云计算经验</strong> - 紧跟技术潮流</li>
                <li class="fragment"><i class="fas fa-tools"></i> <strong>DevOps技能</strong> - 运维开发一体化</li>
                <li class="fragment"><i class="fas fa-chart-bar"></i> <strong>监控调优</strong> - 性能优化能力</li>
                <li class="fragment"><i class="fas fa-bug"></i> <strong>问题排查</strong> - 生产环境调试</li>
            </ul>
        </section>

        <section>
            <h3>作品展示</h3>
            <ul>
                <li class="fragment"><i class="fas fa-portfolio"></i> <strong>在线作品集</strong> - 面试加分项</li>
                <li class="fragment"><i class="fas fa-share"></i> <strong>便于分享</strong> - 随时给别人看</li>
                <li class="fragment"><i class="fas fa-mobile-alt"></i> <strong>移动友好</strong> - 手机电脑都能访问</li>
                <li class="fragment"><i class="fas fa-search"></i> <strong>SEO优化</strong> - 搜索引擎可以找到</li>
            </ul>
        </section>

        <section>
            <h3>商业可能</h3>
            <ul>
                <li class="fragment"><i class="fas fa-store"></i> <strong>在线业务</strong> - 可以接真实订单</li>
                <li class="fragment"><i class="fas fa-users"></i> <strong>用户积累</strong> - 建立用户基础</li>
                <li class="fragment"><i class="fas fa-chart-line"></i> <strong>数据分析</strong> - 了解用户行为</li>
                <li class="fragment"><i class="fas fa-dollar-sign"></i> <strong>变现可能</strong> - 广告、付费服务等</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>常见担心</h2>
            <p>让我们消除这些顾虑 😰➡️😊</p>
        </section>
        
        <section>
            <h3>"我是新手，会不会很复杂？"</h3>
            <div class="bg-green-50 p-4 rounded">
                <p class="text-green-800"><strong>不用担心！</strong></p>
                <ul class="text-green-700 text-sm">
                    <li>• DigitalOcean界面非常友好</li>
                    <li>• 每一步都有详细提示</li>
                    <li>• 出错了可以重新来</li>
                    <li>• 有详细的文档和教程</li>
                    <li>• 社区很活跃，问题都能解决</li>
                </ul>
            </div>
        </section>

        <section>
            <h3>"费用会不会失控？"</h3>
            <div class="bg-blue-50 p-4 rounded">
                <p class="text-blue-800"><strong>绝对可控！</strong></p>
                <ul class="text-blue-700 text-sm">
                    <li>• 明确的固定价格：$5/月</li>
                    <li>• 可以设置消费提醒</li>
                    <li>• 随时可以暂停或删除</li>
                    <li>• 新用户有 $200 免费额度</li>
                    <li>• 比一顿火锅还便宜</li>
                </ul>
            </div>
        </section>

        <section>
            <h3>"数据安全吗？"</h3>
            <div class="bg-purple-50 p-4 rounded">
                <p class="text-purple-800"><strong>比银行还安全！</strong></p>
                <ul class="text-purple-700 text-sm">
                    <li>• DigitalOcean是全球知名云服务商</li>
                    <li>• 通过了各种安全认证</li>
                    <li>• 自动备份，数据不会丢失</li>
                    <li>• 24/7安全监控</li>
                    <li>• 很多大公司都在用</li>
                </ul>
            </div>
        </section>
    </section>

    <section>
        <h2>准备开始部署！</h2>
        <div class="text-left">
            <h3 class="mb-4">🚀 接下来我们将：</h3>
            <ul class="space-y-2">
                <li><i class="fas fa-check text-green-500"></i> 注册DigitalOcean账号</li>
                <li><i class="fas fa-check text-green-500"></i> 连接GitHub仓库</li>
                <li><i class="fas fa-check text-green-500"></i> 配置部署环境</li>
                <li><i class="fas fa-check text-green-500"></i> 一键部署应用</li>
                <li><i class="fas fa-check text-green-500"></i> 测试线上访问</li>
                <li><i class="fas fa-check text-green-500"></i> 配置自定义域名</li>
            </ul>
        </div>
        
        <p class="mt-6 text-xl">
            <strong>10分钟后，你的网站就能在全世界访问了！</strong> 🌍
        </p>
        
        <p class="mt-4">
            <small>准备好了吗？让我们开始这激动人心的"搬家"之旅！</small>
        </p>
    </section>
    `
};


