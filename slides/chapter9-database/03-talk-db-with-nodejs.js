module.exports = {
    title: 'Node.js操作数据库',
    description: 'Node.js与数据库的完美结合',
    theme: 'sky',
    content: `
    <section>
        <h2>Node.js操作数据库</h2>
        <h3>让程序和数据库对话</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
        <p><i class="fab fa-node-js"></i> + <i class="fas fa-database"></i> = <i class="fas fa-magic"></i></p>
    </section>

    <section>
        <section>
            <h2>Node.js为什么要操作数据库？</h2>
            <p>想象一下没有数据库的网站... 😱</p>
            <ul>
                <li class="fragment">用户注册后，关机就忘记了</li>
                <li class="fragment">购物车商品，刷新就没了</li>
                <li class="fragment">文章发布了，重启就消失</li>
                <li class="fragment">这样的网站还有什么用？</li>
            </ul>
        </section>
        
        <section>
            <h3>数据库是程序的"记忆"</h3>
            <p>Node.js + 数据库 = 有记忆的智能程序</p>
            <ul>
                <li><i class="fas fa-save"></i> <strong>持久化存储</strong> - 数据永远不丢失</li>
                <li><i class="fas fa-sync"></i> <strong>实时交互</strong> - 随时读取和更新</li>
                <li><i class="fas fa-users"></i> <strong>多用户共享</strong> - 大家看到同样的数据</li>
                <li><i class="fas fa-chart-line"></i> <strong>数据分析</strong> - 了解用户行为</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>最简单的数据库包 - sqlite3</h2>
            <p>新手程序员的好朋友 🤝</p>
        </section>
        
        <section>
            <h3>为什么选择 sqlite3？</h3>
            <p>就像学自行车，先从最简单的开始</p>
            <ul>
                <li class="fragment"><i class="fas fa-feather"></i> <strong>轻量级</strong> - 只是一个文件</li>
                <li class="fragment"><i class="fas fa-plug"></i> <strong>免安装</strong> - 不需要启动服务器</li>
                <li class="fragment"><i class="fas fa-rocket"></i> <strong>快速上手</strong> - 几分钟就能用</li>
                <li class="fragment"><i class="fas fa-laptop"></i> <strong>本地开发</strong> - 完美的学习工具</li>
            </ul>
        </section>

        <section>
            <h3>安装 sqlite3</h3>
            <pre><code class="bash" data-trim>
# 就像去商店买工具一样简单
npm install sqlite3
            </code></pre>
            <p class="fragment">一行命令，搞定！🎉</p>
        </section>
    </section>

    <section>
        <section>
            <h2>如何使用 sqlite3 包？</h2>
            <p>三步曲：连接 → 操作 → 关闭</p>
        </section>
        
        <section>
            <h3>第一步：引入和连接</h3>
            <pre><code class="javascript" data-trim>
// 引入 sqlite3 包
const sqlite3 = require('sqlite3').verbose();

// 连接数据库（如果不存在会自动创建）
const db = new sqlite3.Database('myapp.db');

console.log('数据库连接成功！');
            </code></pre>
            <p class="fragment"><small>就像打开一个文件柜的抽屉</small></p>
        </section>

        <section>
            <h3>第二步：创建表格</h3>
            <pre><code class="javascript" data-trim>
// 创建用户表
db.run(\`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        age INTEGER
    )
\`);

console.log('用户表创建成功！');
            </code></pre>
            <p class="fragment"><small>搭建好数据的"房子框架"</small></p>
        </section>

        <section>
            <h3>第三步：插入数据</h3>
            <pre><code class="javascript" data-trim>
// 插入一个用户
db.run(
    "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
    ['张三', 'zhangsan@email.com', 25],
    function(err) {
        if (err) {
            console.log('出错了:', err.message);
        } else {
            console.log('新用户ID:', this.lastID);
        }
    }
);
            </code></pre>
            <p class="fragment"><small>往文件柜里放入新档案</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>实际操作数据库</h2>
            <p>增删改查 - 数据库的四大天王 👑</p>
        </section>
        
        <section>
            <h3>增加数据 (CREATE)</h3>
            <pre><code class="javascript" data-trim>
// 批量插入多个用户
const users = [
    ['李四', 'lisi@email.com', 30],
    ['王五', 'wangwu@email.com', 28],
    ['赵六', 'zhaoliu@email.com', 35]
];

const stmt = db.prepare("INSERT INTO users (name, email, age) VALUES (?, ?, ?)");

users.forEach(user => {
    stmt.run(user, function(err) {
        if (!err) console.log(\`添加用户成功，ID: \${this.lastID}\`);
    });
});

stmt.finalize();
            </code></pre>
        </section>

        <section>
            <h3>查询数据 (READ)</h3>
            <pre><code class="javascript" data-trim>
// 查询所有用户
db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
        console.log('查询出错:', err.message);
    } else {
        console.log('所有用户:');
        rows.forEach(user => {
            console.log(\`\${user.id}: \${user.name} (\${user.age}岁)\`);
        });
    }
});

// 查询特定用户
db.get("SELECT * FROM users WHERE email = ?", ['zhangsan@email.com'], (err, row) => {
    if (row) {
        console.log('找到用户:', row.name);
    }
});
            </code></pre>
        </section>

        <section>
            <h3>更新数据 (UPDATE)</h3>
            <pre><code class="javascript" data-trim>
// 更新用户年龄
db.run(
    "UPDATE users SET age = ? WHERE email = ?",
    [26, 'zhangsan@email.com'],
    function(err) {
        if (err) {
            console.log('更新失败:', err.message);
        } else {
            console.log(\`更新了 \${this.changes} 条记录\`);
        }
    }
);
            </code></pre>
            <p class="fragment"><small>就像修改档案里的信息</small></p>
        </section>

        <section>
            <h3>删除数据 (DELETE)</h3>
            <pre><code class="javascript" data-trim>
// 删除特定用户
db.run(
    "DELETE FROM users WHERE email = ?",
    ['unwanted@email.com'],
    function(err) {
        if (err) {
            console.log('删除失败:', err.message);
        } else {
            console.log(\`删除了 \${this.changes} 条记录\`);
        }
    }
);
            </code></pre>
            <p class="fragment"><small>小心使用，删除了就找不回来了！⚠️</small></p>
        </section>
    </section>

    <section>
        <section>
            <h2>完整的示例程序</h2>
            <p>把所有知识点串起来 🔗</p>
        </section>
        
        <section>
            <h3>完整代码示例</h3>
            <pre><code class="javascript" data-trim>
const sqlite3 = require('sqlite3').verbose();

// 创建数据库连接
const db = new sqlite3.Database('blog.db');

// 创建文章表
db.serialize(() => {
    // 创建表
    db.run(\`CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        author TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )\`);
    
    // 插入示例文章
    db.run("INSERT INTO articles (title, content, author) VALUES (?, ?, ?)",
        ['我的第一篇博客', '今天学会了用Node.js操作数据库！', '张三']);
    
    // 查询所有文章
    db.all("SELECT * FROM articles", [], (err, rows) => {
        if (!err) {
            console.log('博客文章列表:');
            rows.forEach(article => {
                console.log(\`- \${article.title} (作者: \${article.author})\`);
            });
        }
    });
});

// 关闭数据库连接
db.close((err) => {
    if (err) console.error(err.message);
    console.log('数据库连接已关闭');
});
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>最佳实践建议</h2>
            <p>写出更好的数据库代码 ✨</p>
        </section>
        
        <section>
            <h3>安全第一 🛡️</h3>
            <ul>
                <li class="fragment"><strong>使用参数化查询</strong> - 防止SQL注入攻击</li>
                <li class="fragment"><strong>验证输入数据</strong> - 不要相信用户输入</li>
                <li class="fragment"><strong>处理错误</strong> - 程序崩溃不是好体验</li>
            </ul>
            <pre class="fragment"><code class="javascript" data-trim>
// ✅ 好的做法 - 使用参数化查询
db.run("SELECT * FROM users WHERE email = ?", [userEmail]);

// ❌ 危险的做法 - 直接拼接字符串
db.run("SELECT * FROM users WHERE email = '" + userEmail + "'");
            </code></pre>
        </section>

        <section>
            <h3>性能优化 🚀</h3>
            <ul>
                <li><strong>使用事务</strong> - 批量操作更快</li>
                <li><strong>关闭连接</strong> - 释放系统资源</li>
                <li><strong>索引优化</strong> - 让查询飞起来</li>
            </ul>
            <pre class="fragment"><code class="javascript" data-trim>
// 使用事务批量插入
db.serialize(() => {
    db.run("BEGIN TRANSACTION");
    
    users.forEach(user => {
        stmt.run(user);
    });
    
    db.run("COMMIT");
});
            </code></pre>
        </section>
    </section>

    <section>
        <h2>总结回顾</h2>
        <ul>
            <li><i class="fab fa-node-js"></i> <strong>Node.js + 数据库</strong> - 程序有了记忆</li>
            <li><i class="fas fa-feather"></i> <strong>sqlite3</strong> - 最适合新手的数据库包</li>
            <li><i class="fas fa-code"></i> <strong>基本操作</strong> - 连接、创建、增删改查</li>
            <li><i class="fas fa-shield-alt"></i> <strong>安全实践</strong> - 参数化查询防注入</li>
            <li><i class="fas fa-rocket"></i> <strong>性能优化</strong> - 事务和索引</li>
        </ul>
        <p class="fragment"><strong>恭喜！你已经掌握了数据库编程的基础！</strong> 🎉</p>
        <p class="fragment"><small>下节课我们将学习更高级的数据库操作技巧</small></p>
    </section>
    `
};








