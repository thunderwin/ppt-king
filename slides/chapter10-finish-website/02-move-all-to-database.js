module.exports = {
    title: '数据迁移 - 从文件到数据库',
    description: '完成博客系统的最后一步',
    theme: 'sky',
    content: `
    <section>
        <h2>数据迁移</h2>
        <h3>从文件系统到数据库的华丽转身</h3>
        <p>
            <small>讲师：nathan</small>
        </p>
        <p><i class="fas fa-database"></i> 让我们的博客彻底"专业化"！</p>
    </section>

    <section>
        <section>
            <h2>为什么要迁移数据？</h2>
            <p>告别"原始时代"，拥抱现代化 🚀</p>
        </section>
        
        <section>
            <h3>文件存储的问题</h3>
            <p>现在的博客就像"手工作坊" 🔨</p>
            <ul>
                <li class="fragment">文章都写在JSON文件里</li>
                <li class="fragment">想改内容要修改代码</li>
                <li class="fragment">数据分散，难以管理</li>
                <li class="fragment">无法实现动态功能</li>
                <li class="fragment">扩展性很差</li>
            </ul>
        </section>

        <section>
            <h3>数据库存储的优势</h3>
            <p>升级到"现代化工厂" 🏭</p>
            <ul>
                <li class="fragment"><i class="fas fa-edit"></i> <strong>动态管理</strong> - 随时增删改查</li>
                <li class="fragment"><i class="fas fa-search"></i> <strong>快速查询</strong> - 复杂条件搜索</li>
                <li class="fragment"><i class="fas fa-sort"></i> <strong>灵活排序</strong> - 按时间、热度等排序</li>
                <li class="fragment"><i class="fas fa-users"></i> <strong>多用户支持</strong> - 并发操作无压力</li>
                <li class="fragment"><i class="fas fa-shield-alt"></i> <strong>数据安全</strong> - 事务保证一致性</li>
            </ul>
        </section>
    </section>

    <section>
        <section>
            <h2>迁移策略</h2>
            <p>制定我们的"搬家计划" 📦</p>
        </section>
        
        <section>
            <h3>迁移步骤</h3>
            <p>就像搬家一样，要有条不紊</p>
            <ol class="text-left">
                <li class="fragment"><strong>数据备份</strong> - 先把原来的数据保存好</li>
                <li class="fragment"><strong>数据清理</strong> - 整理和标准化数据格式</li>
                <li class="fragment"><strong>批量导入</strong> - 通过管理后台批量添加</li>
                <li class="fragment"><strong>前端改造</strong> - 修改数据获取方式</li>
                <li class="fragment"><strong>测试验证</strong> - 确保功能正常</li>
                <li class="fragment"><strong>上线切换</strong> - 正式启用新系统</li>
            </ol>
        </section>
    </section>

    <section>
        <section>
            <h2>第一步：准备现有数据</h2>
            <p>整理我们的"旧家当" 📂</p>
        </section>
        
        <section>
            <h3>查看现有数据结构</h3>
            <pre><code class="json" data-trim>
// data/posts.json (示例)
[
  {
    "id": 1,
    "title": "我的第一篇博客",
    "content": "这是我第一次写博客...",
    "author": "张三",
    "createTime": "2024-01-01",
    "tags": ["生活", "随想"]
  },
  {
    "id": 2,
    "title": "学习前端开发",
    "content": "今天学习了Vue.js...",
    "author": "李四", 
    "createTime": "2024-01-05",
    "tags": ["技术", "前端"]
  }
]
            </code></pre>
            <p class="fragment"><small>这些数据需要"搬进"数据库</small></p>
        </section>

        <section>
            <h3>数据清理和转换</h3>
            <pre><code class="javascript" data-trim>
// utils/dataTransform.js
export function transformPostData(fileData) {
  return fileData.map(post => ({
    title: post.title.trim(),
    content: post.content.trim(),
    author: post.author || '未知作者',
    createdAt: new Date(post.createTime),
    status: 'published',
    tags: Array.isArray(post.tags) ? post.tags.join(',') : '',
    // 添加缺失的字段
    slug: generateSlug(post.title),
    excerpt: generateExcerpt(post.content),
    viewCount: 0
  }))
}

function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
}

function generateExcerpt(content, length = 150) {
  return content.substring(0, length) + '...'
}
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>第二步：批量导入数据</h2>
            <p>通过管理后台"搬家" 🚚</p>
        </section>
        
        <section>
            <h3>创建数据导入页面</h3>
            <pre><code class="vue" data-trim>
&lt;!-- pages/admin/import.vue --&gt;
&lt;template&gt;
  &lt;div class="max-w-4xl mx-auto p-6"&gt;
    &lt;h1 class="text-3xl font-bold mb-8"&gt;数据导入&lt;/h1&gt;
    
    &lt;div class="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6"&gt;
      &lt;h3 class="font-bold text-yellow-800"&gt;⚠️ 注意&lt;/h3&gt;
      &lt;p class="text-yellow-700"&gt;此操作将导入所有历史文章到数据库，请确保数据备份完成&lt;/p&gt;
    &lt;/div&gt;
    
    &lt;div class="space-y-4"&gt;
      &lt;button 
        @click="importPosts"
        :disabled="importing"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      &gt;
        {{ importing ? '导入中...' : '开始导入文章' }}
      &lt;/button&gt;
      
      &lt;div v-if="importResult" class="mt-4 p-4 rounded-lg"
           :class="importResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'"&gt;
        {{ importResult.message }}
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
            </code></pre>
        </section>

        <section>
            <h3>实现导入逻辑</h3>
            <pre><code class="javascript" data-trim>
// pages/admin/import.vue 的 script 部分
&lt;script setup&gt;
const importing = ref(false)
const importResult = ref(null)

const importPosts = async () =&gt; {
  importing.value = true
  importResult.value = null
  
  try {
    const response = await $fetch('/api/admin/import-posts', {
      method: 'POST'
    })
    
    importResult.value = {
      success: true,
      message: \`成功导入 \${response.count} 篇文章！\`
    }
    
  } catch (error) {
    importResult.value = {
      success: false,
      message: '导入失败：' + error.message
    }
  } finally {
    importing.value = false
  }
}
&lt;/script&gt;
            </code></pre>
        </section>

        <section>
            <h3>创建导入接口</h3>
            <pre><code class="javascript" data-trim>
// server/api/admin/import-posts.post.js
import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) =&gt; {
  try {
    // 验证管理员权限
    const user = await getCurrentUser(event)
    if (!user || user.role !== 'admin') {
      throw createError({
        statusCode: 403,
        statusMessage: '需要管理员权限'
      })
    }
    
    // 读取JSON文件
    const dataPath = path.join(process.cwd(), 'data/posts.json')
    const fileData = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    
    // 转换数据格式
    const transformedData = transformPostData(fileData)
    
    // 批量插入数据库
    const results = await prisma.post.createMany({
      data: transformedData,
      skipDuplicates: true // 跳过重复数据
    })
    
    return {
      success: true,
      count: results.count,
      message: \`成功导入 \${results.count} 篇文章\`
    }
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '导入失败：' + error.message
    })
  }
})
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>第三步：修改前端页面</h2>
            <p>让页面从数据库"取货" 🛒</p>
        </section>
        
        <section>
            <h3>修改首页文章列表</h3>
            <pre><code class="vue" data-trim>
&lt;!-- pages/index.vue --&gt;
&lt;script setup&gt;
// ❌ 旧方式：从文件读取
// import postsData from '~/data/posts.json'

// ✅ 新方式：从数据库获取
const { data: response } = await useFetch('/api/posts', {
  query: {
    limit: 6,
    status: 'published'
  }
})

const posts = computed(() =&gt; response.value?.posts || [])
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="container mx-auto px-4 py-8"&gt;
    &lt;h1 class="text-4xl font-bold text-center mb-8"&gt;最新文章&lt;/h1&gt;
    
    &lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
      &lt;article 
        v-for="post in posts" 
        :key="post.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      &gt;
        &lt;div class="p-6"&gt;
          &lt;h2 class="text-xl font-bold mb-2"&gt;
            &lt;NuxtLink :to="\`/posts/\${post.id}\`" class="hover:text-blue-600"&gt;
              {{ post.title }}
            &lt;/NuxtLink&gt;
          &lt;/h2&gt;
          
          &lt;p class="text-gray-600 mb-4"&gt;
            {{ post.excerpt || post.content.substring(0, 150) + '...' }}
          &lt;/p&gt;
          
          &lt;div class="flex justify-between items-center text-sm text-gray-500"&gt;
            &lt;span&gt;作者：{{ post.author?.name || post.author }}&lt;/span&gt;
            &lt;span&gt;{{ formatDate(post.createdAt) }}&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/article&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
            </code></pre>
        </section>

        <section>
            <h3>修改文章详情页</h3>
            <pre><code class="vue" data-trim>
&lt;!-- pages/posts/[id].vue --&gt;
&lt;script setup&gt;
const route = useRoute()
const postId = route.params.id

// ❌ 旧方式：从文件查找
// const post = postsData.find(p =&gt; p.id === parseInt(postId))

// ✅ 新方式：从数据库获取
const { data: post } = await useFetch(\`/api/posts/\${postId}\`)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '文章不存在'
  })
}

// 增加浏览量
await $fetch(\`/api/posts/\${postId}/view\`, { method: 'POST' })
&lt;/script&gt;

&lt;template&gt;
  &lt;article class="max-w-4xl mx-auto px-4 py-8"&gt;
    &lt;header class="mb-8"&gt;
      &lt;h1 class="text-4xl font-bold mb-4"&gt;{{ post.title }}&lt;/h1&gt;
      
      &lt;div class="flex items-center justify-between text-gray-600 border-b pb-4"&gt;
        &lt;div class="flex items-center space-x-4"&gt;
          &lt;span&gt;作者：{{ post.author?.name || post.author }}&lt;/span&gt;
          &lt;span&gt;发布时间：{{ formatDate(post.createdAt) }}&lt;/span&gt;
        &lt;/div&gt;
        &lt;span&gt;浏览量：{{ post.viewCount }}&lt;/span&gt;
      &lt;/div&gt;
    &lt;/header&gt;
    
    &lt;div class="prose prose-lg max-w-none"&gt;
      &lt;div v-html="formatContent(post.content)"&gt;&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;footer class="mt-8 pt-4 border-t"&gt;
      &lt;div v-if="post.tags" class="flex flex-wrap gap-2"&gt;
        &lt;span 
          v-for="tag in post.tags.split(',')" 
          :key="tag"
          class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
        &gt;
          #{{ tag.trim() }}
        &lt;/span&gt;
      &lt;/div&gt;
    &lt;/footer&gt;
  &lt;/article&gt;
&lt;/template&gt;
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>第四步：完善功能</h2>
            <p>添加现代化博客必备功能 ✨</p>
        </section>
        
        <section>
            <h3>添加浏览量统计</h3>
            <pre><code class="javascript" data-trim>
// server/api/posts/[id]/view.post.js
export default defineEventHandler(async (event) =&gt; {
  try {
    const postId = parseInt(getRouterParam(event, 'id'))
    
    // 更新浏览量
    await prisma.post.update({
      where: { id: postId },
      data: {
        viewCount: {
          increment: 1
        }
      }
    })
    
    return { success: true }
    
  } catch (error) {
    // 静默处理错误，不影响用户体验
    console.error('更新浏览量失败:', error)
    return { success: false }
  }
})
            </code></pre>
        </section>

        <section>
            <h3>添加搜索功能</h3>
            <pre><code class="javascript" data-trim>
// server/api/posts/search.get.js
export default defineEventHandler(async (event) =&gt; {
  try {
    const query = getQuery(event)
    const keyword = query.q?.trim()
    
    if (!keyword) {
      return { posts: [], total: 0 }
    }
    
    const posts = await prisma.post.findMany({
      where: {
        AND: [
          { status: 'published' },
          {
            OR: [
              { title: { contains: keyword } },
              { content: { contains: keyword } },
              { tags: { contains: keyword } }
            ]
          }
        ]
      },
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { name: true, avatar: true }
        }
      }
    })
    
    return {
      posts,
      total: posts.length,
      keyword
    }
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '搜索失败'
    })
  }
})
            </code></pre>
        </section>

        <section>
            <h3>添加分类和标签</h3>
            <pre><code class="javascript" data-trim>
// server/api/posts/categories.get.js
export default defineEventHandler(async (event) =&gt; {
  try {
    // 获取所有标签并统计使用次数
    const posts = await prisma.post.findMany({
      where: { status: 'published' },
      select: { tags: true }
    })
    
    const tagCount = {}
    
    posts.forEach(post =&gt; {
      if (post.tags) {
        post.tags.split(',').forEach(tag =&gt; {
          const trimmedTag = tag.trim()
          if (trimmedTag) {
            tagCount[trimmedTag] = (tagCount[trimmedTag] || 0) + 1
          }
        })
      }
    })
    
    // 按使用次数排序
    const sortedTags = Object.entries(tagCount)
      .sort(([,a], [,b]) =&gt; b - a)
      .map(([tag, count]) =&gt; ({ tag, count }))
    
    return { tags: sortedTags }
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '获取标签失败'
    })
  }
})
            </code></pre>
        </section>
    </section>

    <section>
        <section>
            <h2>完整的博客系统</h2>
            <p>我们的"作品"完成了！ 🎊</p>
        </section>
        
        <section>
            <h3>系统架构图</h3>
            <div class="text-left">
                <h4>🎨 前端层 (Nuxt.js)</h4>
                <ul class="text-sm mb-4">
                    <li>• 首页 - 文章列表展示</li>
                    <li>• 详情页 - 文章内容阅读</li>
                    <li>• 管理后台 - 内容管理</li>
                    <li>• 搜索页 - 内容搜索</li>
                </ul>
                
                <h4>🔧 后端层 (API Routes)</h4>
                <ul class="text-sm mb-4">
                    <li>• 文章CRUD - 增删改查</li>
                    <li>• 用户认证 - 登录授权</li>
                    <li>• 搜索接口 - 全文搜索</li>
                    <li>• 统计接口 - 数据分析</li>
                </ul>
                
                <h4>💾 数据层 (Database)</h4>
                <ul class="text-sm">
                    <li>• 文章表 - 存储文章内容</li>
                    <li>• 用户表 - 存储用户信息</li>
                    <li>• 关系维护 - 数据一致性</li>
                </ul>
            </div>
        </section>

        <section>
            <h3>功能特色</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h4 class="font-bold mb-2">👤 用户功能</h4>
                    <ul>
                        <li>• 浏览文章列表</li>
                        <li>• 阅读文章详情</li>
                        <li>• 搜索文章内容</li>
                        <li>• 按标签分类</li>
                        <li>• 响应式设计</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-2">👨‍💼 管理功能</h4>
                    <ul>
                        <li>• 发布新文章</li>
                        <li>• 编辑已有文章</li>
                        <li>• 批量数据导入</li>
                        <li>• 权限控制</li>
                        <li>• 数据统计</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3>技术栈总结</h3>
            <div class="grid grid-cols-3 gap-4 text-sm">
                <div class="bg-blue-50 p-4 rounded">
                    <h4 class="font-bold text-blue-800 mb-2">前端技术</h4>
                    <ul class="text-blue-700">
                        <li>• Nuxt.js 3</li>
                        <li>• Vue.js 3</li>
                        <li>• Tailwind CSS</li>
                        <li>• TypeScript</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-4 rounded">
                    <h4 class="font-bold text-green-800 mb-2">后端技术</h4>
                    <ul class="text-green-700">
                        <li>• Node.js</li>
                        <li>• Nitro Engine</li>
                        <li>• Prisma ORM</li>
                        <li>• SQLite</li>
                    </ul>
                </div>
                <div class="bg-purple-50 p-4 rounded">
                    <h4 class="font-bold text-purple-800 mb-2">其他工具</h4>
                    <ul class="text-purple-700">
                        <li>• JWT 认证</li>
                        <li>• File Upload</li>
                        <li>• SEO 优化</li>
                        <li>• PWA 支持</li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section>
        <h2>🎉 恭喜完成！</h2>
        <p class="text-xl mb-6">你已经完成了一个<strong>完整的全栈博客系统</strong>！</p>
        
        <div class="text-left">
            <h3 class="mb-4">✅ 你学会了什么：</h3>
            <ul class="space-y-2">
                <li><i class="fas fa-check text-green-500"></i> 前端页面开发和组件化</li>
                <li><i class="fas fa-check text-green-500"></i> 后端API设计和开发</li>
                <li><i class="fas fa-check text-green-500"></i> 数据库设计和操作</li>
                <li><i class="fas fa-check text-green-500"></i> 用户认证和权限管理</li>
                <li><i class="fas fa-check text-green-500"></i> 数据迁移和系统整合</li>
                <li><i class="fas fa-check text-green-500"></i> 全栈项目的完整开发流程</li>
            </ul>
        </div>
        
        <p class="mt-6 text-lg">
            <strong>下一步：</strong>可以继续添加评论、点赞、分享等高级功能！ 🚀
        </p>
    </section>
    `
};