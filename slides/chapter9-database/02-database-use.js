module.exports = {
    title: '第九课：数据库基础概念',
    description: '数据库入门 - 表、字段和关系',
    theme: 'sky',
    content: `
    <section>
        <h2>数据库基础概念</h2>
        <h3>表、字段和关系详解</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
        <p><i class="fas fa-database"></i> 让我们一起探索数据的世界</p>
    </section>

    <section>
        <section>
            <h2>什么是数据库？</h2>
            <p>把数据库想象成一个超级整理柜 📁</p>
            <ul>
                <li class="fragment">就像图书馆管理所有书籍</li>
                <li class="fragment">有序地存储大量信息</li>
                <li class="fragment">可以快速查找和管理数据</li>
                <li class="fragment">多人同时使用也不会乱</li>
            </ul>
        </section>
        
        <section>
            <h3>数据库的作用</h3>
            <p>为什么我们需要数据库呢？</p>
            <ul>
                <li><i class="fas fa-save"></i> <strong>持久化存储</strong> - 数据不会丢失</li>
                <li><i class="fas fa-search"></i> <strong>快速查询</strong> - 瞬间找到需要的信息</li>
                <li><i class="fas fa-users"></i> <strong>并发访问</strong> - 多人同时操作</li>
                <li><i class="fas fa-shield-alt"></i> <strong>数据安全</strong> - 保护重要信息</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>表的概念</h2>
            <p>数据库中的表就像Excel表格 📊</p>
        </section>
        
        <section>
            <h3>表是什么？</h3>
            <p>把表想象成一张巨大的表格</p>
            <ul>
                <li class="fragment">横行竖列，整整齐齐</li>
                <li class="fragment">每一行代表一条记录（比如一个用户）</li>
                <li class="fragment">每一列代表一个属性（比如姓名、年龄）</li>
                <li class="fragment">就像学生花名册一样清晰明了</li>
            </ul>
        </section>

        <section>
            <h3>表的例子</h3>
            <p>用户信息表 👥</p>
            <table style="font-size: 0.8em;">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>邮箱</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>张三</td>
                        <td>25</td>
                        <td>zhangsan@email.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>李四</td>
                        <td>30</td>
                        <td>lisi@email.com</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </section>

    <section>
        <section>
            <h2>字段的概念</h2>
            <p>字段就是表格中的每一列 📋</p>
        </section>
        
        <section>
            <h3>字段是什么？</h3>
            <p>字段就像身份证上的每个信息项</p>
            <ul>
                <li class="fragment"><strong>姓名字段</strong> - 存储人的名字</li>
                <li class="fragment"><strong>年龄字段</strong> - 存储人的年龄</li>
                <li class="fragment"><strong>邮箱字段</strong> - 存储电子邮箱</li>
                <li class="fragment">每个字段都有自己的"专业领域"</li>
            </ul>
        </section>

        <section>
            <h3>字段的特点</h3>
            <p>每个字段都很"专一" 💪</p>
            <ul>
                <li><i class="fas fa-tag"></i> <strong>有固定的名称</strong> - 比如"用户名"</li>
                <li><i class="fas fa-cog"></i> <strong>有特定的类型</strong> - 比如文字、数字</li>
                <li><i class="fas fa-exclamation-triangle"></i> <strong>有约束条件</strong> - 比如不能为空</li>
                <li><i class="fas fa-info-circle"></i> <strong>有描述说明</strong> - 解释这个字段的用途</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>字段的类型</h2>
            <p>不同的数据需要不同的"容器" 🎭</p>
        </section>
        
        <section>
            <h3>文本类型 📝</h3>
            <ul>
                <li><strong>VARCHAR</strong> - 变长文本（比如姓名、地址）</li>
                <li><strong>TEXT</strong> - 长文本（比如文章内容）</li>
                <li><strong>CHAR</strong> - 固定长度文本（比如身份证号）</li>
            </ul>
            <p class="fragment"><small>就像不同大小的文件夹，装不同长度的文件</small></p>
        </section>

        <section>
            <h3>数字类型 🔢</h3>
            <ul>
                <li><strong>INT</strong> - 整数（比如年龄、数量）</li>
                <li><strong>DECIMAL</strong> - 小数（比如价格、工资）</li>
                <li><strong>BIGINT</strong> - 大整数（比如手机号）</li>
            </ul>
            <p class="fragment"><small>数学老师最爱的分类方式！</small></p>
        </section>

        <section>
            <h3>日期时间类型 📅</h3>
            <ul>
                <li><strong>DATE</strong> - 日期（2024-01-01）</li>
                <li><strong>TIME</strong> - 时间（14:30:00）</li>
                <li><strong>DATETIME</strong> - 日期时间（2024-01-01 14:30:00）</li>
            </ul>
            <p class="fragment"><small>比闹钟还精确的时间管理大师</small></p>
        </section>

        <section>
            <h3>布尔类型 ✅</h3>
            <ul>
                <li><strong>BOOLEAN</strong> - 真或假（是/否）</li>
                <li>只有两个选择：TRUE 或 FALSE</li>
                <li>比如：是否激活、是否VIP</li>
            </ul>
            <p class="fragment"><small>简单粗暴，非黑即白！</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>字段之间的关系</h2>
            <p>字段们也需要"社交" 🤝</p>
        </section>
        
        <section>
            <h3>主键 (Primary Key)</h3>
            <p>每张表的"身份证号码" 🆔</p>
            <ul>
                <li class="fragment">唯一标识每一行数据</li>
                <li class="fragment">不能重复，不能为空</li>
                <li class="fragment">通常是ID字段</li>
                <li class="fragment">就像每个人的身份证号一样独特</li>
            </ul>
        </section>

        <section>
            <h3>外键 (Foreign Key)</h3>
            <p>建立表与表之间的"友谊桥梁" 🌉</p>
            <ul>
                <li class="fragment">连接不同表的数据</li>
                <li class="fragment">引用另一张表的主键</li>
                <li class="fragment">保证数据的一致性</li>
                <li class="fragment">比如：订单表引用用户表的用户ID</li>
            </ul>
        </section>

        <section>
            <h3>关系的例子</h3>
            <p>用户和订单的关系 📦</p>
            <div style="display: flex; justify-content: space-around; font-size: 0.7em;">
                <div>
                    <h4>用户表</h4>
                    <table>
                        <tr><th>用户ID(主键)</th><th>姓名</th></tr>
                        <tr><td>1</td><td>张三</td></tr>
                        <tr><td>2</td><td>李四</td></tr>
                    </table>
                </div>
                <div>
                    <h4>订单表</h4>
                    <table>
                        <tr><th>订单ID(主键)</th><th>用户ID(外键)</th><th>商品</th></tr>
                        <tr><td>101</td><td>1</td><td>手机</td></tr>
                        <tr><td>102</td><td>1</td><td>耳机</td></tr>
                    </table>
                </div>
            </div>
            <p class="fragment"><small>这样就能知道张三买了什么东西啦！</small></p>
        </section>
    </section>

    <section>
        <h2>总结回顾</h2>
        <ul>
            <li><i class="fas fa-database"></i> <strong>数据库</strong> - 数据的超级整理柜</li>
            <li><i class="fas fa-table"></i> <strong>表</strong> - 结构化的数据表格</li>
            <li><i class="fas fa-columns"></i> <strong>字段</strong> - 表格中的每一列</li>
            <li><i class="fas fa-tags"></i> <strong>字段类型</strong> - 不同数据的专用容器</li>
            <li><i class="fas fa-link"></i> <strong>字段关系</strong> - 连接数据的纽带</li>
        </ul>
        <p class="fragment"><strong>下节课我们将学习如何实际操作数据库！</strong> 🚀</p>
    </section>
    `
};




