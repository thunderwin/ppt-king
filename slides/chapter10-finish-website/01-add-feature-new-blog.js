module.exports = {
    title: '完善网站功能 - 添加博客发布',
    description: '给Nuxt3博客添加管理员发布功能',
    theme: 'sky',
    content: `
    <section>
        <h2>完善网站功能</h2>
        <h3>给博客添加发布新文章功能</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
        <p><i class="fas fa-blog"></i> 让我们的博客变得更完整！</p>
    </section>

    <section>
        <section>
            <h2>我们要实现什么功能？</h2>
            <p>把博客变成真正可用的发布平台 📝</p>
        </section>
        
        <section>
            <h3>目前的问题</h3>
            <p>我们的博客还不够"智能" 🤔</p>
            <ul>
                <li class="fragment">文章都是写死在代码里的</li>
                <li class="fragment">想发新文章还要改代码</li>
                <li class="fragment">普通人根本用不了</li>
                <li class="fragment">这哪里像个真正的博客？</li>
            </ul>
        </section>

        <section>
            <h3>我们要实现的目标</h3>
            <p>像微信公众号一样方便 ✨</p>
            <ul>
                <li class="fragment"><i class="fas fa-user-shield"></i> <strong>管理员后台</strong> - 只有管理员能发文章</li>
                <li class="fragment"><i class="fas fa-edit"></i> <strong>在线编辑</strong> - 网页上直接写文章</li>
                <li class="fragment"><i class="fas fa-save"></i> <strong>一键发布</strong> - 填表单就能发布</li>
                <li class="fragment"><i class="fas fa-eye"></i> <strong>即时预览</strong> - 发布后立即可见</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>第一步：创建管理员页面</h2>
            <p>搭建我们的"编辑部" 🏢</p>
        </section>
        
        <section>
            <h3>为什么需要管理员页面？</h3>
            <p>就像报社的编辑部一样</p>
            <ul>
                <li class="fragment">不是任何人都能发文章</li>
                <li class="fragment">需要有个专门的工作区域</li>
                <li class="fragment">要与普通读者页面区分开</li>
                <li class="fragment">保证内容质量和安全性</li>
            </ul>
        </section>

        <section>
            <h3>创建 admin 页面</h3>
            <pre><code class="bash" data-trim>
# 在 pages 目录下创建 admin 文件夹
mkdir pages/admin

# 创建管理员首页
touch pages/admin/index.vue

# 创建写文章页面
touch pages/admin/new-post.vue
            </code></pre>
            <p class="fragment"><small>就像在办公楼里开辟一个编辑部</small></p>
        </section>

        <section>
            <h3>设置登录验证</h3>
            <p>门口要有保安 🔐</p>
            <pre><code class="vue" data-trim>
&lt;script setup&gt;
// 检查是否已登录
const { data: user } = await useFetch('/api/user/me')

// 如果没有登录，跳转到登录页
if (!user.value) {
  await navigateTo('/login')
}

// 如果不是管理员，拒绝访问
if (user.value.role !== 'admin') {
  throw createError({
    statusCode: 403,
    statusMessage: '访问被拒绝：需要管理员权限'
  })
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;管理员控制台&lt;/h1&gt;
    &lt;p&gt;欢迎回来，{{ user.name }}！&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>第二步：创建文章发布表单</h2>
            <p>设计我们的"投稿箱" 📋</p>
        </section>
        
        <section>
            <h3>表单需要哪些字段？</h3>
            <p>就像填写投稿表一样</p>
            <ul>
                <li class="fragment"><i class="fas fa-heading"></i> <strong>文章标题</strong> - 吸引读者的第一要素</li>
                <li class="fragment"><i class="fas fa-align-left"></i> <strong>文章内容</strong> - 主要内容区域</li>
                <li class="fragment"><i class="fas fa-tags"></i> <strong>文章标签</strong> - 分类和搜索用</li>
                <li class="fragment"><i class="fas fa-image"></i> <strong>封面图片</strong> - 提高颜值</li>
                <li class="fragment"><i class="fas fa-eye"></i> <strong>发布状态</strong> - 草稿还是发布</li>
            </ul>
        </section>

        <section>
            <h3>创建发布表单</h3>
            <pre><code class="vue" data-trim>
&lt;template&gt;
  &lt;div class="max-w-4xl mx-auto p-6"&gt;
    &lt;h1 class="text-3xl font-bold mb-8"&gt;发布新文章&lt;/h1&gt;
    
    &lt;form @submit.prevent="publishPost"&gt;
      &lt;!-- 文章标题 --&gt;
      &lt;div class="mb-6"&gt;
        &lt;label class="block text-sm font-medium mb-2"&gt;文章标题&lt;/label&gt;
        &lt;input 
          v-model="post.title"
          type="text" 
          class="w-full p-3 border rounded-lg"
          placeholder="请输入吸引人的标题..."
          required
        &gt;
      &lt;/div&gt;

      &lt;!-- 文章内容 --&gt;
      &lt;div class="mb-6"&gt;
        &lt;label class="block text-sm font-medium mb-2"&gt;文章内容&lt;/label&gt;
        &lt;textarea 
          v-model="post.content"
          rows="15"
          class="w-full p-3 border rounded-lg"
          placeholder="在这里写下你的精彩内容..."
          required
        &gt;&lt;/textarea&gt;
      &lt;/div&gt;

      &lt;!-- 提交按钮 --&gt;
      &lt;button 
        type="submit"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      &gt;
        发布文章
      &lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;
&lt;/template&gt;
            </code></pre>
        </section>

        <section>
            <h3>添加表单验证</h3>
            <p>质量控制很重要 ✅</p>
            <pre><code class="javascript" data-trim>
&lt;script setup&gt;
const post = ref({
  title: '',
  content: '',
  tags: [],
  status: 'draft'
})

// 表单验证
const validatePost = () =&gt; {
  if (!post.value.title.trim()) {
    alert('请输入文章标题')
    return false
  }
  
  if (post.value.title.length &gt; 100) {
    alert('标题太长了，请控制在100字以内')
    return false
  }
  
  if (!post.value.content.trim()) {
    alert('文章内容不能为空')
    return false
  }
  
  if (post.value.content.length &lt; 50) {
    alert('文章内容太短了，至少要50字哦')
    return false
  }
  
  return true
}
&lt;/script&gt;
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>第三步：创建后端接口</h2>
            <p>搭建数据处理中心 🔧</p>
        </section>
        
        <section>
            <h3>我们需要哪些接口？</h3>
            <p>像邮局的不同服务窗口</p>
            <ul>
                <li class="fragment"><i class="fas fa-plus"></i> <strong>POST /api/posts</strong> - 发布新文章</li>
                <li class="fragment"><i class="fas fa-list"></i> <strong>GET /api/posts</strong> - 获取文章列表</li>
                <li class="fragment"><i class="fas fa-eye"></i> <strong>GET /api/posts/[id]</strong> - 获取单篇文章</li>
                <li class="fragment"><i class="fas fa-edit"></i> <strong>PUT /api/posts/[id]</strong> - 修改文章</li>
                <li class="fragment"><i class="fas fa-trash"></i> <strong>DELETE /api/posts/[id]</strong> - 删除文章</li>
            </ul>
        </section>

        <section>
            <h3>创建发布文章接口</h3>
            <pre><code class="javascript" data-trim>
// server/api/posts/index.post.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) =&gt; {
  try {
    // 获取请求数据
    const body = await readBody(event)
    
    // 验证用户权限
    const user = await getCurrentUser(event)
    if (!user || user.role !== 'admin') {
      throw createError({
        statusCode: 403,
        statusMessage: '没有权限发布文章'
      })
    }
    
    // 创建新文章
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: user.id,
        status: body.status || 'published',
        createdAt: new Date()
      }
    })
    
    return {
      success: true,
      message: '文章发布成功！',
      post: newPost
    }
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '发布文章失败：' + error.message
    })
  }
})
            </code></pre>
        </section>

        <section>
            <h3>创建获取文章列表接口</h3>
            <pre><code class="javascript" data-trim>
// server/api/posts/index.get.js
export default defineEventHandler(async (event) =&gt; {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page) || 1
    const limit = parseInt(query.limit) || 10
    
    // 获取文章列表（只返回已发布的）
    const posts = await prisma.post.findMany({
      where: {
        status: 'published'
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        author: {
          select: {
            name: true,
            avatar: true
          }
        }
      }
    })
    
    // 获取总数
    const total = await prisma.post.count({
      where: { status: 'published' }
    })
    
    return {
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    }
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '获取文章列表失败'
    })
  }
})
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>第四步：完成整个流程</h2>
            <p>把所有部件组装起来 🔗</p>
        </section>
        
        <section>
            <h3>前端提交表单</h3>
            <pre><code class="javascript" data-trim>
// 在 pages/admin/new-post.vue 中
const publishPost = async () =&gt; {
  // 验证表单
  if (!validatePost()) return
  
  try {
    // 显示加载状态
    const loading = ref(true)
    
    // 发送请求到后端
    const { data } = await $fetch('/api/posts', {
      method: 'POST',
      body: {
        title: post.value.title,
        content: post.value.content,
        tags: post.value.tags,
        status: post.value.status
      }
    })
    
    // 成功提示
    alert('文章发布成功！')
    
    // 跳转到文章详情页
    await navigateTo(\`/posts/\${data.post.id}\`)
    
  } catch (error) {
    // 错误处理
    alert('发布失败：' + error.message)
  } finally {
    loading.value = false
  }
}
            </code></pre>
        </section>

        <section>
            <h3>更新首页显示</h3>
            <pre><code class="vue" data-trim>
&lt;!-- pages/index.vue --&gt;
&lt;script setup&gt;
// 获取最新文章列表
const { data: postsData } = await useFetch('/api/posts', {
  query: {
    limit: 6
  }
})

const posts = computed(() =&gt; postsData.value?.posts || [])
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;最新文章&lt;/h1&gt;
    
    &lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
      &lt;article 
        v-for="post in posts" 
        :key="post.id"
        class="bg-white rounded-lg shadow-md p-6"
      &gt;
        &lt;h2 class="text-xl font-bold mb-2"&gt;
          &lt;NuxtLink :to="\`/posts/\${post.id}\`"&gt;
            {{ post.title }}
          &lt;/NuxtLink&gt;
        &lt;/h2&gt;
        
        &lt;p class="text-gray-600 mb-4"&gt;
          {{ post.content.substring(0, 150) }}...
        &lt;/p&gt;
        
        &lt;div class="flex justify-between text-sm text-gray-500"&gt;
          &lt;span&gt;作者：{{ post.author.name }}&lt;/span&gt;
          &lt;span&gt;{{ formatDate(post.createdAt) }}&lt;/span&gt;
        &lt;/div&gt;
      &lt;/article&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
            </code></pre>
        </section>

        <section>
            <h3>完整的工作流程</h3>
            <p>从想法到发布的完整路径 🛤️</p>
            <ol class="text-left">
                <li class="fragment"><strong>管理员登录</strong> → 访问后台管理页面</li>
                <li class="fragment"><strong>填写表单</strong> → 输入标题、内容等信息</li>
                <li class="fragment"><strong>提交发布</strong> → 前端验证后发送到后端</li>
                <li class="fragment"><strong>后端处理</strong> → 验证权限，保存到数据库</li>
                <li class="fragment"><strong>更新展示</strong> → 首页自动显示新文章</li>
                <li class="fragment"><strong>用户浏览</strong> → 普通用户可以看到新内容</li>
            </ol>
        </section>
    </section>

    <section>
        <section>
            <h2>优化和扩展功能</h2>
            <p>让博客更加专业 ⭐</p>
        </section>
        
        <section>
            <h3>用户体验优化</h3>
            <ul>
                <li class="fragment"><i class="fas fa-save"></i> <strong>自动保存草稿</strong> - 避免内容丢失</li>
                <li class="fragment"><i class="fas fa-eye"></i> <strong>实时预览</strong> - 边写边看效果</li>
                <li class="fragment"><i class="fas fa-upload"></i> <strong>图片上传</strong> - 支持拖拽上传</li>
                <li class="fragment"><i class="fas fa-markdown"></i> <strong>Markdown支持</strong> - 更方便的格式化</li>
            </ul>
        </section>

        <section>
            <h3>功能扩展</h3>
            <ul>
                <li class="fragment"><i class="fas fa-comments"></i> <strong>评论系统</strong> - 读者互动</li>
                <li class="fragment"><i class="fas fa-heart"></i> <strong>点赞功能</strong> - 内容反馈</li>
                <li class="fragment"><i class="fas fa-search"></i> <strong>搜索功能</strong> - 快速找文章</li>
                <li class="fragment"><i class="fas fa-rss"></i> <strong>RSS订阅</strong> - 内容分发</li>
                <li class="fragment"><i class="fas fa-chart-bar"></i> <strong>访问统计</strong> - 了解读者行为</li>
            </ul>
        </section>
    </section>

    <section>
        <h2>总结回顾</h2>
        <ul>
            <li><i class="fas fa-user-shield"></i> <strong>管理员后台</strong> - 安全的内容管理区域</li>
            <li><i class="fas fa-edit"></i> <strong>发布表单</strong> - 友好的内容创作界面</li>
            <li><i class="fas fa-server"></i> <strong>后端接口</strong> - 强大的数据处理能力</li>
            <li><i class="fas fa-sync"></i> <strong>完整流程</strong> - 从创作到发布的闭环</li>
            <li><i class="fas fa-rocket"></i> <strong>功能扩展</strong> - 无限的可能性</li>
        </ul>
        <p class="fragment"><strong>恭喜！你的博客现在已经是一个真正可用的发布平台了！</strong> 🎉</p>
        <p class="fragment"><small>接下来我们可以继续添加更多酷炫的功能</small></p>
    </section>
    `
};