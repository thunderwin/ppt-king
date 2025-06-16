# 🎨 Reveal.js 特效库

这是一个专门为 Reveal.js 设计的特效库集合，让你的演示文稿充满魔法！

## 📁 目录结构

```
/reveal.js/effect/
├── README.md                 # 总说明文件（本文件）
├── explose/                  # 🔥 爆炸特效
│   ├── explosion-effects.css
│   ├── explosion-effects.js
│   └── README.md
└── [未来的特效]/              # 🚀 更多特效即将到来...
```

## 🎯 已有特效

### 🔥 爆炸特效 (`/explose/`)
- **功能**: 专业级好莱坞爆炸特效
- **特色**: 零代码魔法属性，支持多种触发方式
- **版本**: v2.0
- **文档**: [爆炸特效说明](./explose/README.md)

#### 快速使用
```html
<!-- 引入文件 -->
<link rel="stylesheet" href="effect/explose/explosion-effects.css">
<script src="effect/explose/explosion-effects.js"></script>

<!-- 使用魔法属性 -->
<div data-auto-explosion="mega">自动爆炸！</div>
<button data-click-explosion="mega">点击爆炸！</button>
```

## 🚀 即将到来的特效

计划中的特效库：

- 🌟 **粒子特效** (`/particles/`) - 星空、雪花、烟花等粒子系统
- ⚡ **闪电特效** (`/lightning/`) - 酷炫的闪电和电流效果
- 🌈 **彩虹特效** (`/rainbow/`) - 绚丽的彩虹和光谱效果
- 🔮 **魔法特效** (`/magic/`) - 魔法阵、光环、传送门等
- 💧 **水波特效** (`/water/`) - 水波纹、液体流动效果
- 🔥 **火焰特效** (`/fire/`) - 火焰、岩浆、燃烧效果
- ❄️ **冰雪特效** (`/ice/`) - 冰晶、雪花、结冰效果
- 🌪️ **风暴特效** (`/storm/`) - 龙卷风、暴风雨效果

## 🛠️ 开发规范

为了保持一致性，所有特效库都应该遵循以下规范：

### 文件结构
```
/effect/[特效名]/
├── [特效名]-effects.css      # 样式文件
├── [特效名]-effects.js       # JavaScript文件
├── README.md                 # 使用说明
└── examples/                 # 示例文件（可选）
```

### 命名约定
- **CSS类名**: `.特效名-particle`, `.特效名-container` 等
- **JavaScript对象**: `特效名Effects`（如 `ExplosionEffects`）
- **魔法属性**: `data-auto-特效名`, `data-click-特效名` 等

### 必需功能
- ✅ 零代码魔法属性支持
- ✅ JavaScript API调用
- ✅ 自动初始化
- ✅ 版本信息
- ✅ 详细文档

## 🎯 使用建议

### 性能优化
- 特效不要同时使用太多
- 在移动设备上适当降低粒子数量
- 使用完毕后清理DOM元素

### 最佳实践
- 在演示的关键节点使用特效
- 根据内容主题选择合适的特效
- 测试不同屏幕尺寸的效果

## 🤝 贡献指南

想要添加新的特效？欢迎提交 Pull Request！

1. Fork 本项目
2. 在 `/effect/` 下创建新的特效目录
3. 按照开发规范编写代码
4. 编写详细的文档和示例
5. 提交 Pull Request

## 📄 许可证

MIT License

---

✨ **让每个演示都充满魔法！** ✨ 