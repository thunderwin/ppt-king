/**
 * 🔥 超级爆炸特效 JavaScript 库
 * 专业级好莱坞特效，可在任何项目中重复使用
 * 
 * 文件位置: /reveal.js/effect/explose/explosion-effects.js
 * 作者: AI助手
 * 版本: 2.0
 * 最后更新: 2024
 * 
 * 使用方法：
 * 1. 引入 GSAP 库
 * 2. 引入 explosion-effects.css
 * 3. 引入 explosion-effects.js
 * 4. 在HTML元素上添加属性即可自动触发！
 * 
 * 🪄 魔法属性：
 * - data-auto-explosion="mega|mini|random|chain" - 元素加载后自动触发
 * - data-click-explosion="mega|mini|random" - 点击时触发
 * - data-hover-explosion="mini" - 鼠标悬停时触发
 * - data-visible-explosion="mega" - 元素进入视口时触发
 * - data-explosion-delay="1000" - 延迟触发（毫秒）
 * - data-explosion-x="300" data-explosion-y="200" - 自定义位置
 */

const ExplosionEffects = {
    version: '2.0',
    author: 'AI助手',
    
    // 初始化爆炸舞台
    initStage: function() {
        let stage = document.getElementById('explosion-stage');
        if (!stage) {
            stage = document.createElement('div');
            stage.id = 'explosion-stage';
            document.body.appendChild(stage);
        }
        return stage;
    },

    // 创建超级爆炸特效
    createMegaExplosion: function(x = null, y = null) {
        const stage = this.initStage();
        const centerX = x || window.innerWidth / 2;
        const centerY = y || window.innerHeight / 2;
        
        // 清理之前的爆炸残留
        stage.innerHTML = '';
        
        // 创建时间线 - 就像导演安排剧情一样
        const timeline = gsap.timeline();
        
        // 第一波：冲击波
        this.createShockwaves(stage, centerX, centerY, timeline);
        
        // 第二波：火焰爆炸
        this.createFlameExplosion(stage, centerX, centerY, timeline);
        
        // 第三波：烟雾效果
        this.createSmokeEffect(stage, centerX, centerY, timeline);
        
        // 第四波：火花四溅
        this.createSparks(stage, centerX, centerY, timeline);
        
        // 屏幕震动效果
        this.addScreenShake(timeline);
        
        return timeline;
    },

    // 创建冲击波
    createShockwaves: function(stage, x, y, timeline) {
        for (let i = 0; i < 5; i++) {
            const wave = document.createElement('div');
            wave.className = 'shockwave';
            wave.style.left = x + 'px';
            wave.style.top = y + 'px';
            stage.appendChild(wave);
            
            timeline.to(wave, {
                scale: 50,  // 增加冲击波规模，确保覆盖全屏
                opacity: 0,
                duration: 2,
                ease: "power2.out",
                delay: i * 0.15
            }, i * 0.1);
        }
    },

    // 创建火焰爆炸
    createFlameExplosion: function(stage, x, y, timeline) {
        const flameCount = 120;  // 增加火焰粒子数量
        const flames = [];
        
        for (let i = 0; i < flameCount; i++) {
            const flame = document.createElement('div');
            flame.className = 'flame-particle';
            
            const size = gsap.utils.random(12, 30);  // 增加粒子大小
            flame.style.width = size + 'px';
            flame.style.height = size + 'px';
            flame.style.left = x + 'px';
            flame.style.top = y + 'px';
            
            stage.appendChild(flame);
            flames.push(flame);
        }
        
        flames.forEach((flame, index) => {
            const angle = (index / flameCount) * Math.PI * 2;
            // 计算到屏幕边缘的最大距离，确保覆盖全屏
            const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.8;
            const distance = gsap.utils.random(200, maxDistance);
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            timeline.to(flame, {
                x: endX,
                y: endY,
                scale: gsap.utils.random(1, 4),
                opacity: 0,
                duration: gsap.utils.random(1.2, 2.5),
                ease: "power3.out"
            }, 0.2);
        });
    },

    // 创建烟雾效果
    createSmokeEffect: function(stage, x, y, timeline) {
        const smokeCount = 40;  // 增加烟雾粒子数量
        
        for (let i = 0; i < smokeCount; i++) {
            const smoke = document.createElement('div');
            smoke.className = 'smoke-particle';
            
            const size = gsap.utils.random(40, 120);  // 增加烟雾大小
            smoke.style.width = size + 'px';
            smoke.style.height = size + 'px';
            smoke.style.left = x + 'px';
            smoke.style.top = y + 'px';
            
            stage.appendChild(smoke);
            
            // 烟雾向四面八方扩散，覆盖更大范围
            const maxSpread = Math.max(window.innerWidth, window.innerHeight) * 0.6;
            
            timeline.to(smoke, {
                x: gsap.utils.random(-maxSpread/2, maxSpread/2),
                y: gsap.utils.random(-maxSpread/2, maxSpread/4),
                scale: gsap.utils.random(3, 8),
                opacity: 0,
                duration: gsap.utils.random(3, 6),
                ease: "power1.out"
            }, 0.5);
        }
    },

    // 创建火花
    createSparks: function(stage, x, y, timeline) {
        const sparkCount = 200;  // 大幅增加火花数量
        
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark-particle';
            
            const size = gsap.utils.random(3, 8);
            spark.style.width = size + 'px';
            spark.style.height = size + 'px';
            spark.style.left = x + 'px';
            spark.style.top = y + 'px';
            
            stage.appendChild(spark);
            
            // 火花扩散到屏幕的每个角落
            const maxSparkRange = Math.max(window.innerWidth, window.innerHeight);
            
            timeline.to(spark, {
                x: gsap.utils.random(-maxSparkRange, maxSparkRange),
                y: gsap.utils.random(-maxSparkRange, maxSparkRange/2),
                scale: 0,
                duration: gsap.utils.random(0.8, 3),
                ease: "power2.out"
            }, 0.1);
        }
    },

    // 屏幕震动
    addScreenShake: function(timeline) {
        timeline.to('body', {
            x: 20,
            duration: 0.05,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 10
        }, 0)
        .to('body', {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    },

    // 迷你爆炸效果
    createMiniExplosion: function(x, y) {
        const stage = this.initStage();
        const particles = [];
        
        // 创建迷你爆炸粒子
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#ff4444';
            particle.style.borderRadius = '50%';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            stage.appendChild(particle);
            particles.push(particle);
        }
        
        // 爆炸动画
        particles.forEach(particle => {
            gsap.to(particle, {
                x: gsap.utils.random(-100, 100),
                y: gsap.utils.random(-100, 100),
                scale: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    particle.remove();
                }
            });
        });
    },

    // 🎯 执行指定类型的爆炸
    triggerExplosion: function(type, element = null) {
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        
        // 如果指定了元素，计算元素的中心位置
        if (element) {
            // 检查是否有自定义坐标（优先级最高）
            const customX = element.getAttribute('data-explosion-x');
            const customY = element.getAttribute('data-explosion-y');
            
            if (customX && customY) {
                x = parseInt(customX);
                y = parseInt(customY);
            } else {
                // 计算元素的实际中心位置
                x = this.getElementCenterX(element);
                y = this.getElementCenterY(element);
            }
        }
        
        switch(type) {
            case 'mega':
                this.createMegaExplosion(x, y);
                break;
            case 'mini':
                this.createMiniExplosion(x, y);
                break;
            case 'random':
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                this.createMegaExplosion(randomX, randomY);
                break;
            case 'chain':
                // 连环爆炸
                this.createMegaExplosion(x, y);
                setTimeout(() => this.createMiniExplosion(x - 100, y - 100), 800);
                setTimeout(() => this.createMiniExplosion(x + 100, y + 100), 1200);
                setTimeout(() => this.createMiniExplosion(x, y - 150), 1600);
                break;
        }
    },

    // 📍 获取元素中心X坐标（兼容Reveal.js缩放）
    getElementCenterX: function(element) {
        const rect = element.getBoundingClientRect();
        let centerX = rect.left + rect.width / 2;
        
        // 在 Reveal.js 环境中，考虑缩放因子
        if (typeof Reveal !== 'undefined') {
            const revealElement = document.querySelector('.reveal');
            if (revealElement) {
                const revealRect = revealElement.getBoundingClientRect();
                const scale = this.getRevealScale();
                
                // 计算相对于 reveal 容器的位置，然后应用缩放
                const relativeX = (rect.left - revealRect.left) / scale + rect.width / (2 * scale);
                centerX = revealRect.left + relativeX * scale;
            }
        }
        
        return centerX;
    },

    // 📍 获取元素中心Y坐标（兼容Reveal.js缩放）
    getElementCenterY: function(element) {
        const rect = element.getBoundingClientRect();
        let centerY = rect.top + rect.height / 2;
        
        // 在 Reveal.js 环境中，考虑缩放因子
        if (typeof Reveal !== 'undefined') {
            const revealElement = document.querySelector('.reveal');
            if (revealElement) {
                const revealRect = revealElement.getBoundingClientRect();
                const scale = this.getRevealScale();
                
                // 计算相对于 reveal 容器的位置，然后应用缩放
                const relativeY = (rect.top - revealRect.top) / scale + rect.height / (2 * scale);
                centerY = revealRect.top + relativeY * scale;
            }
        }
        
        return centerY;
    },

    // 🔍 获取 Reveal.js 的缩放比例
    getRevealScale: function() {
        if (typeof Reveal === 'undefined') return 1;
        
        const revealElement = document.querySelector('.reveal');
        if (!revealElement) return 1;
        
        // 尝试从 transform 样式中获取 scale
        const transform = window.getComputedStyle(revealElement).transform;
        if (transform && transform !== 'none') {
            const matrix = transform.match(/matrix\(([^)]+)\)/);
            if (matrix) {
                const values = matrix[1].split(',').map(v => parseFloat(v.trim()));
                return values[0]; // scaleX
            }
        }
        
        // 备用方案：比较容器大小
        const rect = revealElement.getBoundingClientRect();
        const originalWidth = revealElement.offsetWidth;
        if (originalWidth > 0) {
            return rect.width / originalWidth;
        }
        
        return 1;
    },

    // 🪄 自动扫描页面并绑定爆炸效果
    autoBindExplosions: function() {
        console.log('🪄 开始扫描页面中的爆炸魔法属性...');
        
        // 1. 自动触发爆炸 (页面加载完成后)
        const autoElements = document.querySelectorAll('[data-auto-explosion]');
        autoElements.forEach(element => {
            const type = element.getAttribute('data-auto-explosion');
            const delay = parseInt(element.getAttribute('data-explosion-delay')) || 500;
            
            setTimeout(() => {
                console.log(`🎬 自动触发 ${type} 爆炸`);
                this.triggerExplosion(type, element);
            }, delay);
        });
        
        // 2. 点击触发爆炸
        const clickElements = document.querySelectorAll('[data-click-explosion]');
        clickElements.forEach(element => {
            const type = element.getAttribute('data-click-explosion');
            element.style.cursor = 'pointer';
            element.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(`👆 点击触发 ${type} 爆炸`);
                this.triggerExplosion(type, element);
            });
        });
        
        // 3. 鼠标悬停触发爆炸
        const hoverElements = document.querySelectorAll('[data-hover-explosion]');
        hoverElements.forEach(element => {
            const type = element.getAttribute('data-hover-explosion');
            element.addEventListener('mouseenter', () => {
                console.log(`🐭 悬停触发 ${type} 爆炸`);
                this.triggerExplosion(type, element);
            });
        });
        
        // 4. 元素进入视口时触发爆炸 - 改进版本
        this.setupVisibilityExplosions();
        
        console.log(`✨ 魔法绑定完成！发现 ${autoElements.length + clickElements.length + hoverElements.length} 个爆炸元素`);
    },

    // 🎯 改进的可见性爆炸系统
    setupVisibilityExplosions: function() {
        const visibleElements = document.querySelectorAll('[data-visible-explosion]');
        if (visibleElements.length === 0) return;

        // 检查是否在 Reveal.js 环境中
        const isRevealjs = typeof Reveal !== 'undefined';
        
        if (isRevealjs) {
            // 等待 Reveal.js 初始化完成
            if (Reveal.isReady()) {
                this.bindRevealEvents(visibleElements);
            } else {
                Reveal.on('ready', () => {
                    this.bindRevealEvents(visibleElements);
                });
            }
        } else {
            // 在普通页面中，使用标准的 IntersectionObserver
            visibleElements.forEach(element => {
                this.observeElementVisibility(element);
            });
        }
    },

    // 🎭 绑定 Reveal.js 事件
    bindRevealEvents: function(visibleElements) {
        // 监听 fragment 显示事件
        Reveal.on('fragmentshown', (event) => {
            const fragment = event.fragment;
            if (fragment && fragment.hasAttribute('data-visible-explosion')) {
                const type = fragment.getAttribute('data-visible-explosion');
                const delay = parseInt(fragment.getAttribute('data-explosion-delay')) || 0;
                
                setTimeout(() => {
                    console.log(`🎭 Fragment显示触发 ${type} 爆炸`);
                    this.triggerExplosion(type, fragment);
                }, delay);
            }
        });

        // 对于非 fragment 元素，使用改进的 IntersectionObserver
        visibleElements.forEach(element => {
            if (!element.classList.contains('fragment')) {
                this.observeElementVisibility(element);
            }
        });
    },

    // 🔍 观察元素可见性
    observeElementVisibility: function(element) {
        // 创建更严格的 IntersectionObserver 配置
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // 要求元素至少50%可见才触发
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const type = entry.target.getAttribute('data-visible-explosion');
                    const delay = parseInt(entry.target.getAttribute('data-explosion-delay')) || 0;
                    
                    setTimeout(() => {
                        console.log(`👁️ 进入视口触发 ${type} 爆炸 (可见度: ${Math.round(entry.intersectionRatio * 100)}%)`);
                        this.triggerExplosion(type, entry.target);
                    }, delay);
                    
                    // 只触发一次
                    observer.unobserve(entry.target);
                }
            });
        }, {
            // 设置更严格的触发条件
            threshold: 0.5,           // 元素至少50%可见
            rootMargin: '-10px'       // 元素完全进入视口内10px才触发
        });
        
        observer.observe(element);
    },

    // 创建爆炸按钮
    createExplosionButton: function(text = '🔥 超级大爆炸！ 🔥', onClick = null) {
        const button = document.createElement('button');
        button.className = 'mega-explosion-btn';
        button.innerHTML = text;
        button.onclick = onClick || (() => this.createMegaExplosion());
        document.body.appendChild(button);
        return button;
    },

    // 启动自动演示模式
    startAutoDemo: function(interval = 8000) {
        return setInterval(() => {
            this.createMegaExplosion();
        }, interval);
    },

    // 启用点击爆炸
    enableClickExplosions: function() {
        document.addEventListener('click', (e) => {
            // 避免在特定元素上触发
            if (!e.target.closest('.reveal') && !e.target.closest('.mega-explosion-btn')) {
                this.createMiniExplosion(e.clientX, e.clientY);
            }
        });
    },

    // 获取版本信息
    getInfo: function() {
        return {
            name: '超级爆炸特效库',
            version: this.version,
            author: this.author,
            path: '/reveal.js/effect/explose/'
        };
    }
};

// 🚀 页面加载完成后自动初始化
if (typeof window !== 'undefined') {
    // 等待页面完全加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            ExplosionEffects.autoBindExplosions();
        });
    } else {
        // 页面已经加载完成
        setTimeout(() => {
            ExplosionEffects.autoBindExplosions();
        }, 100);
    }
    
    // 向后兼容的全局函数
    window.createMegaExplosion = function(x, y) {
        return ExplosionEffects.createMegaExplosion(x, y);
    };
    
    window.createMiniExplosion = function(x, y) {
        return ExplosionEffects.createMiniExplosion(x, y);
    };
    
    // 打印版本信息
    console.log('🔥 爆炸特效库已加载:', ExplosionEffects.getInfo());
}

// 导出模块（如果支持）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExplosionEffects;
} 