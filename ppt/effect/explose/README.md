# 🔥 超级爆炸特效库

专业级好莱坞爆炸特效，支持零代码魔法属性！

## 📁 文件结构

```
/reveal.js/effect/explose/
├── explosion-effects.css     # 爆炸特效样式文件
├── explosion-effects.js      # 爆炸特效JavaScript库
├── README.md                 # 使用说明（本文件）
└── examples/                 # 示例文件夹（未来扩展）
```

## 🚀 快速开始

### 1. 引入文件

```html
<!-- 必需：GSAP动画库 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<!-- 爆炸特效文件 -->
<link rel="stylesheet" href="effect/explose/explosion-effects.css">
<script src="effect/explose/explosion-effects.js"></script>
```

### 2. 开始使用

#### 方式一：零代码魔法属性 🪄
```html
<!-- 页面加载后自动爆炸 -->
<div data-auto-explosion="mega" data-explosion-delay="2000">
    2秒后自动超级爆炸！
</div>

<!-- 点击触发爆炸 -->
<button data-click-explosion="mega">点击我爆炸！</button>

<!-- 鼠标悬停触发 -->
<div data-hover-explosion="mini">悬停触发小爆炸</div>

<!-- 元素进入视口时触发 -->
<div data-visible-explosion="mega">滚动看到我就爆炸！</div>
```

#### 方式二：JavaScript调用
```javascript
// 超级大爆炸
ExplosionEffects.createMegaExplosion();

// 指定位置爆炸
ExplosionEffects.createMegaExplosion(400, 300);

// 迷你爆炸
ExplosionEffects.createMiniExplosion(200, 200);
```

## 🎯 魔法属性详解

| 属性 | 值 | 说明 |
|------|------|------|
| `data-auto-explosion` | `mega\|mini\|random\|chain` | 页面加载后自动触发 |
| `data-click-explosion` | `mega\|mini\|random` | 点击时触发 |
| `data-hover-explosion` | `mini` | 鼠标悬停时触发 |
| `data-visible-explosion` | `mega\|mini\|random` | 元素进入视口时触发 |
| `data-explosion-delay` | `数字（毫秒）` | 延迟触发时间 |
| `data-explosion-x` | `数字（像素）` | 自定义爆炸X坐标 |
| `data-explosion-y` | `数字（像素）` | 自定义爆炸Y坐标 |

## 💥 爆炸类型

- **`mega`** - 超级大爆炸（冲击波+火焰+烟雾+火花+震动）
- **`mini`** - 迷你爆炸（小范围粒子效果）
- **`random`** - 随机位置爆炸
- **`chain`** - 连环爆炸（一发大的+几发小的）

## 🎮 在 Reveal.js 中使用

### Slide级别触发
```html
<section data-auto-explosion="mega">
    <h2>进入这个slide就爆炸！</h2>
</section>
```

### Fragment级别触发
```html
<section>
    <h2>分步爆炸演示</h2>
    <ul>
        <li class="fragment" data-visible-explosion="mini">第一步</li>
        <li class="fragment" data-visible-explosion="mega">第二步</li>
    </ul>
</section>
```

## 🛠️ API 参考

### 核心方法
```javascript
// 创建爆炸
ExplosionEffects.createMegaExplosion(x, y)
ExplosionEffects.createMiniExplosion(x, y)

// 触发指定类型爆炸
ExplosionEffects.triggerExplosion(type, element)

// 工具方法
ExplosionEffects.createExplosionButton(text, onClick)
ExplosionEffects.startAutoDemo(interval)
ExplosionEffects.enableClickExplosions()

// 获取库信息
ExplosionEffects.getInfo()
```

## 🎨 自定义样式

可以通过CSS覆盖默认样式：

```css
/* 自定义火焰颜色 */
.flame-particle {
    background: radial-gradient(circle, #00ffff, #0088ff, #0044ff);
}

/* 自定义冲击波样式 */
.shockwave {
    border-color: #00ff00;
    border-width: 5px;
}
```

## 📝 版本历史

- **v2.0** - 添加零代码魔法属性系统
- **v1.0** - 基础爆炸特效功能

## 🔧 兼容性

- ✅ 现代浏览器（Chrome、Firefox、Safari、Edge）
- ✅ 移动端浏览器
- ⚠️ 需要支持 CSS3 和 ES6

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

💡 **提示**: 这个库会自动扫描页面中的魔法属性，无需手动初始化！ 