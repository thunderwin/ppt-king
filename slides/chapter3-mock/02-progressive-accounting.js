module.exports = {
    title: '渐进式编程：个人记账本',
    description: '从5行代码到模块化项目的编程之旅',
    theme: 'blood',
    content: `
    <section>
        <h2>渐进式编程实战</h2>
        <h3>个人记账本项目</h3>
        <p>从5行代码开始，体验编程的演进之旅</p>
        <p>
            <small>讲师：nathan</small>
        </p>
    </section>

    <section>
        <section>
            <h2>今天的学习目标</h2>
            <ul>
                <li>📝 从最简单的代码开始</li>
                <li>😵 体验代码重复的痛苦</li>
                <li>💡 发现函数的神奇</li>
                <li>📦 学会使用别人的工具</li>
                <li>🏗️ 掌握代码整理技巧</li>
            </ul>
            <p><strong>让痛点推动学习，让需求催生解决方案！</strong></p>
        </section>

        <section>
            <h3>为什么选择记账本？</h3>
            <ul>
                <li>🤑 人人都要管钱，贴近生活</li>
                <li>🧮 加减法简单，容易理解</li>
                <li>📈 功能可以一步步增加</li>
                <li>😊 看到自己的钱很有成就感</li>
            </ul>
            <p>生活中最实用的编程项目！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第一步：超简单开始</h2>
            <h3>只有3行代码！</h3>
        </section>

        <section>
            <h3>记录一笔收入</h3>
            <pre><code>let money = 1000;
console.log("收入1000元，工资");
console.log("余额：1000元");</code></pre>
            <p>运行结果：</p>
            <pre><code>收入1000元，工资
余额：1000元</code></pre>
            <p><strong>这也太简单了！</strong></p>
        </section>
    </section>

    <section>
        <section>
            <h2>第二步：加个支出</h2>
            <h3>代码开始重复了...</h3>
        </section>

        <section>
            <h3>既要记收入，也要记支出</h3>
            <pre><code>let balance = 0;

// 收入
balance = balance + 5000;
console.log("收入5000元，工资");
console.log("余额：" + balance + "元");

// 支出
balance = balance - 1200;
console.log("支出1200元，房租");
console.log("余额：" + balance + "元");</code></pre>
            <p><strong>还行，但有点重复...</strong></p>
        </section>
    </section>

    <section>
        <section>
            <h2>第三步：一个月的账单</h2>
            <h3>重复代码很烦！</h3>
        </section>

        <section>
            <h3>需要记录30笔收支</h3>
            <pre><code>let balance = 0;

// 第1笔
balance = balance + 5000;
console.log("收入5000元，工资");
console.log("余额：" + balance + "元");

// 第2笔
balance = balance - 1200;
console.log("支出1200元，房租");
console.log("余额：" + balance + "元");

// 第3笔
balance = balance - 300;
console.log("支出300元，买菜");
console.log("余额：" + balance + "元");

// ... 还有27笔，都是重复的代码！</code></pre>
        </section>

        <section>
            <h3>问题来了！</h3>
            <ul>
                <li>😫 <strong>复制粘贴累死人</strong>：同样的代码写30遍</li>
                <li>😰 <strong>容易改错</strong>：复制时忘记改数字</li>
                <li>😵 <strong>想改格式要改30个地方</strong></li>
                <li>😤 <strong>老板说再加20笔...</strong></li>
            </ul>
            <p><strong>学员感受：天哪，这样下去会疯掉！</strong></p>
        </section>

        <section>
            <h2>🤔 思考时间</h2>
            <p>如果老板让你记录一整年的账单...</p>
            <p><strong>365笔记录，你还愿意复制粘贴吗？</strong></p>
            <p class="fragment">肯定有更好的办法！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第四步：函数拯救世界</h2>
            <h3>重复代码消失了！</h3>
        </section>

        <section>
            <h3>把重复的代码变成函数</h3>
            <pre><code>let balance = 0;

// 函数：记录收入
function addIncome(amount, description) {
    balance = balance + amount;
    console.log("收入" + amount + "元，" + description);
    console.log("余额：" + balance + "元");
}

// 函数：记录支出  
function addExpense(amount, description) {
    balance = balance - amount;
    console.log("支出" + amount + "元，" + description);
    console.log("余额：" + balance + "元");
}</code></pre>
        </section>

        <section>
            <h3>使用函数超级简单</h3>
            <pre><code>// 一行代码搞定一笔记录
addIncome(5000, "工资");
addExpense(1200, "房租");
addExpense(300, "买菜");
addIncome(500, "兼职");
addExpense(200, "交通");</code></pre>
            <p>输出结果：</p>
            <pre><code>收入5000元，工资
余额：5000元
支出1200元，房租
余额：3800元
支出300元，买菜
余额：3500元
...</code></pre>
        </section>

        <section>
            <h3>函数的神奇之处</h3>
            <ul>
                <li>✨ <strong>50行代码变成5行</strong></li>
                <li>🎯 <strong>一眼看懂在干什么</strong></li>
                <li>🛠️ <strong>改格式只需改一个地方</strong></li>
                <li>🚀 <strong>添加记录只需一行</strong></li>
                <li>🎉 <strong>不会复制错了</strong></li>
            </ul>
            <p><strong>哇！函数太神奇了！</strong></p>
        </section>

        <section>
            <h2>🎯 什么是函数？</h2>
            <p><strong>函数 = 给常用操作起个名字</strong></p>
            <p>就像手机里的<strong>快捷键</strong>一样</p>
            <ul>
                <li>📝 <strong>定义一次</strong>：把重复的代码写好</li>
                <li>♻️ <strong>想用就用</strong>：调用函数名就行</li>
                <li>🎛️ <strong>可以传参数</strong>：每次传不同的数字</li>
            </ul>
            <p><strong>比喻</strong>：就像遥控器的按钮，按一下执行一套动作！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第五步：遇到复杂功能</h2>
            <h3>日期处理太难了</h3>
        </section>

        <section>
            <h3>老板要求：每笔账都要记录日期</h3>
            <pre><code>function getCurrentDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    
    // 月份小于10要补0
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    return year + "-" + month + "-" + day;
}

// 还要处理：
// - 计算两个日期相差多少天
// - 判断是不是月末
// - 处理闰年
// ... 又是几十行复杂代码</code></pre>
        </section>

        <section>
            <h3>日期处理的痛苦</h3>
            <ul>
                <li>😵 <strong>格式化麻烦</strong>：月份要补0，各种格式</li>
                <li>🤯 <strong>计算复杂</strong>：两个日期差几天？</li>
                <li>😰 <strong>边界情况多</strong>：月末、年末、闰年...</li>
                <li>🐛 <strong>容易出错</strong>：一个小bug调试半天</li>
            </ul>
            <p><strong>学员感受：日期处理好复杂！能不能用现成的？</strong></p>
        </section>

        <section>
            <h2>💡 又一个发现</h2>
            <p>肯定有程序员已经解决过日期问题！</p>
            <p>为什么要自己重新写？</p>
            <p><strong>包（Package）</strong>闪亮登场！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第六步：使用别人的包</h2>
            <h3>站在巨人的肩膀上</h3>
        </section>

        <section>
            <h3>安装日期处理包</h3>
            <pre><code>// 在命令行运行一下
npm install moment</code></pre>
            <p>然后在代码中使用：</p>
            <pre><code>// 导入moment包
const moment = require('moment');

function addIncome(amount, description) {
    // 用moment处理日期，一行搞定！
    let date = moment().format('YYYY-MM-DD');
    balance = balance + amount;
    console.log(date + " 收入" + amount + "元，" + description);
}</code></pre>
        </section>

        <section>
            <h3>包的威力</h3>
            <ul>
                <li>🚀 <strong>几十行代码变成1行</strong></li>
                <li>🛡️ <strong>久经考验</strong>：被千万个项目使用</li>
                <li>🐛 <strong>bug很少</strong>：专业团队维护</li>
                <li>📚 <strong>功能丰富</strong>：什么日期操作都有</li>
                <li>⚡ <strong>免费使用</strong>：开源社区的礼物</li>
            </ul>
            <p><strong>用别人的包太爽了！</strong></p>
        </section>

        <section>
            <h2>🎯 什么是包？</h2>
            <p><strong>包 = 别人写好的工具箱</strong></p>
            <p>就像去超市买现成的调料</p>
            <ul>
                <li>🏪 <strong>npm商店</strong>：程序员的超市</li>
                <li>📦 <strong>一键安装</strong>：npm install 包名</li>
                <li>📥 <strong>导入使用</strong>：require('包名')</li>
            </ul>
            <p><strong>比喻</strong>：就像用现成的轮子，不用自己造！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第七步：项目变大了</h2>
            <h3>一个文件装不下了</h3>
        </section>

        <section>
            <h3>功能越来越多</h3>
            <pre><code>// app.js 文件变得超级长
let balance = 0;
let records = [];

// 账户功能
function addIncome() { ... }
function addExpense() { ... }

// 统计功能  
function showSummary() { ... }
function getMonthlyReport() { ... }

// 报表功能
function exportToExcel() { ... }
function generateChart() { ... }

// 预算功能
function setBudget() { ... }
function checkBudget() { ... }

// ... 200多行代码都挤在一个文件里</code></pre>
        </section>

        <section>
            <h3>单文件地狱</h3>
            <ul>
                <li>😱 <strong>文件超级长</strong>：滚动条像细线</li>
                <li>🔍 <strong>找不到函数</strong>：翻半天才找到</li>
                <li>👥 <strong>多人冲突</strong>：都改同一个文件</li>
                <li>🧩 <strong>功能混乱</strong>：账户、统计、报表混在一起</li>
            </ul>
            <p><strong>代码又乱了！找个函数要翻半天！</strong></p>
        </section>

        <section>
            <h2>💡 最后的发现</h2>
            <p>我们需要把<strong>相关的功能</strong>分开放</p>
            <p>就像整理房间，把东西分类</p>
            <p><strong>模块化</strong>闪亮登场！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>第八步：模块化整理</h2>
            <h3>井井有条的项目</h3>
        </section>

        <section>
            <h3>重新整理项目结构</h3>
            <pre><code>记账项目/
├── app.js                    ← 主程序（很短）
├── modules/                  ← 我们的模块
│   ├── account.js            ← 账户管理
│   ├── statistics.js         ← 统计计算  
│   └── reports.js            ← 报表生成
└── node_modules/             ← 外部包
    └── moment/               ← 日期处理包</code></pre>
        </section>

        <section>
            <h3>主程序 app.js（超级简洁）</h3>
            <pre><code>// 导入我们的模块
const account = require('./modules/account');
const statistics = require('./modules/statistics');

// 使用模块功能
account.addIncome(5000, '工资');
account.addExpense(1200, '房租');
account.addExpense(300, '买菜');

// 查看统计
statistics.showSummary();</code></pre>
        </section>

        <section>
            <h3>账户模块 account.js</h3>
            <pre><code>// 只管账户相关的事情
let balance = 0;

function addIncome(amount, description) {
    balance += amount;
    console.log(\`收入\${amount}元，\${description}\`);
}

function addExpense(amount, description) {
    balance -= amount;
    console.log(\`支出\${amount}元，\${description}\`);
}

// 导出功能给别人用
module.exports = {
    addIncome,
    addExpense
};</code></pre>
        </section>

        <section>
            <h3>模块化的好处</h3>
            <ul>
                <li>🗂️ <strong>分工明确</strong>：每个文件负责一类事情</li>
                <li>🔍 <strong>容易找到</strong>：知道去哪个文件找功能</li>
                <li>👥 <strong>团队合作</strong>：不同人负责不同模块</li>
                <li>🛠️ <strong>容易改</strong>：改统计功能只改统计文件</li>
                <li>♻️ <strong>可以复用</strong>：其他项目也能用</li>
            </ul>
            <p><strong>整个项目清清楚楚！太舒服了！</strong></p>
        </section>

        <section>
            <h2>🎯 什么是模块？</h2>
            <p><strong>模块 = 把相关功能放一起</strong></p>
            <p>就像整理衣柜，同类衣服放一个格子</p>
            <ul>
                <li>📁 <strong>分类存放</strong>：相关函数放同一文件</li>
                <li>📤 <strong>导出功能</strong>：module.exports</li>
                <li>📥 <strong>导入使用</strong>：require('./文件名')</li>
            </ul>
            <p><strong>比喻</strong>：就像乐高积木，不同形状组装成大作品！</p>
        </section>
    </section>

    <section>
        <section>
            <h2>三大神器总结</h2>
        </section>

        <section>
            <h3>从乱到整的演进过程</h3>
            <table style="font-size: 0.8em;">
                <tr>
                    <th>阶段</th>
                    <th>问题</th>
                    <th>解决方案</th>
                </tr>
                <tr>
                    <td>简单开始</td>
                    <td>功能简单</td>
                    <td>直接写代码</td>
                </tr>
                <tr>
                    <td>功能增加</td>
                    <td>代码重复</td>
                    <td>👉 使用函数</td>
                </tr>
                <tr>
                    <td>复杂功能</td>
                    <td>实现困难</td>
                    <td>👉 使用别人的包</td>
                </tr>
                <tr>
                    <td>项目变大</td>
                    <td>代码混乱</td>
                    <td>👉 模块化整理</td>
                </tr>
            </table>
        </section>

        <section>
            <h3>编程三大神器</h3>
            <div style="display: flex; justify-content: space-around;">
                <div style="text-align: center;">
                    <h4>🎯 函数</h4>
                    <p><strong>消除重复</strong></p>
                    <p>遥控器按钮</p>
                </div>
                <div style="text-align: center;">
                    <h4>📦 包</h4>
                    <p><strong>解决复杂</strong></p>
                    <p>现成的轮子</p>
                </div>
                <div style="text-align: center;">
                    <h4>🗂️ 模块</h4>
                    <p><strong>整理代码</strong></p>
                    <p>分类整理</p>
                </div>
            </div>
        </section>

        <section>
            <h3>什么时候用什么？</h3>
            <ul>
                <li><strong>代码重复</strong> → 写函数</li>
                <li><strong>功能复杂</strong> → 找个包</li>
                <li><strong>文件太乱</strong> → 拆成模块</li>
            </ul>
            <p><strong>记住</strong>：程序员都是懒人，能偷懒就偷懒！</p>
        </section>
    </section>

    <section>
        <h2>恭喜你！🎉</h2>
        <h3>你已经掌握了编程的核心思想</h3>
        <ul>
            <li>🎯 <strong>函数</strong> - 不写重复代码</li>
            <li>📦 <strong>包</strong> - 用别人的成果</li>
            <li>🗂️ <strong>模块</strong> - 把代码整理好</li>
        </ul>
        <p><strong>编程金句</strong>：</p>
        <p>好程序员不是写代码最多的，是写重复代码最少的！</p>
        <p><small>下节课我们用这些思想搭建真正的网站</small></p>
    </section>
    `
}; 