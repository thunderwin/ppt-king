const fs = require('fs');
const path = require('path');

// 从模板文件读取模板
const headerTemplate = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'footer.html'), 'utf8');
const indexTemplate = fs.readFileSync(path.join(__dirname, 'index-template.html'), 'utf8');

// 存储所有PPT的信息，用于生成导航页
let chapters = {};

// 工具函数：复制目录及其内容
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// 复制必要的资源文件（CSS、JS等）
function copyResources() {
    console.log('🎨 正在复制资源文件...');
    
    const resourcePaths = [
        { src: 'css', dest: 'ppt/dist/css' },
        { src: 'js', dest: 'ppt/dist/js' },
        { src: 'plugin', dest: 'ppt/plugin' },
        { src: 'dist', dest: 'ppt/dist' },
        { src: 'effect', dest: 'ppt/effect' },
        { src: 'media', dest: 'ppt/media' }
    ];

    for (let { src, dest } of resourcePaths) {
        const srcPath = path.join(__dirname, src);
        const destPath = path.join(__dirname, dest);
        
        if (fs.existsSync(srcPath)) {
            copyDir(srcPath, destPath);
            console.log(`  ✅ 已复制 ${src} 到 ${dest}`);
        } else {
            console.log(`  ⚠️  跳过不存在的目录: ${src}`);
        }
    }
    
    console.log('✨ 资源文件复制完成！');
}

// 构建单个PPT的核心函数
function buildPresentation(config, outputFile, chapterInfo) {
    const themeoptions = [ 'white','sky','blood'];
    const randomTheme = themeoptions[Math.floor(Math.random() * themeoptions.length)];
    const { title, description, theme = randomTheme, content } = config;
    
    console.log(`  📄 正在构建: ${title}`);
    
    // 替换模板中的变量
    let header = headerTemplate
        .replace(/\{\{title\}\}/g, title)
        .replace(/\{\{description\}\}/g, description)
        .replace(/\{\{theme\}\}/g,randomTheme);

    // 组合完整的HTML：header + content + footer
    const fullHtml = header + content + footerTemplate;

    // 确保输出目录存在
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 写入文件
    fs.writeFileSync(outputFile, fullHtml, 'utf8');

    // 保存PPT信息用于生成导航页
    const relativePath = path.relative(path.join(__dirname, 'ppt'), outputFile);
    if (!chapters[chapterInfo.chapter]) {
        chapters[chapterInfo.chapter] = {
            title: chapterInfo.chapterTitle,
            lectures: []
        };
    }
    chapters[chapterInfo.chapter].lectures.push({
        title,
        description,
        path: relativePath
    });
}

// 从文件路径解析章节信息
function getChapterInfo(filePath) {
    const relativePath = path.relative(path.join(__dirname, 'slides'), filePath);
    const parts = relativePath.split(path.sep);
    
    if (parts.length >= 2 && parts[0].includes('chapter')) {
        // 处理章节目录格式：chapter1-intro
        const chapterDir = parts[0];
        const chapterMatch = chapterDir.match(/chapter(\d+)-(.+)/);
        if (chapterMatch) {
            const chapterNum = chapterMatch[1];
            const chapterName = chapterMatch[2]
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
                chapter: chapterNum,
                chapterTitle: `第${chapterNum}章：${chapterName}`
            };
        }
    }
    
    // 从文件名推测章节信息
    const fileName = path.basename(filePath, '.js');
    const fileMatch = fileName.match(/ppt(\d+)/);
    if (fileMatch) {
        const num = fileMatch[1];
        return {
            chapter: num,
            chapterTitle: `第${num}章：课程内容`
        };
    }
    
    // 如果不在章节目录中，放在根目录
    return {
        chapter: '0',
        chapterTitle: '🎯 基础课程'
    };
}

// 生成导航页面
function generateIndexPage() {
    console.log('📋 正在生成导航页面...');
    
    let chapterContent = '';
    
    // 按章节号排序
    const sortedChapters = Object.keys(chapters).sort((a, b) => parseInt(a) - parseInt(b));
    
    sortedChapters.forEach(chapterNum => {
        const chapter = chapters[chapterNum];
        chapterContent += `
        <div class="chapter">
            <h2 class="chapter-title">${chapter.title}</h2>
            <ul class="lecture-list">
        `;
        
        // 按文件名排序课程
        chapter.lectures.sort((a, b) => a.path.localeCompare(b.path));
        
        chapter.lectures.forEach(lecture => {
            chapterContent += `
                <li class="lecture-item">
                    <a href="${lecture.path}" class="lecture-link">${lecture.title}</a>
                    <div class="lecture-description">${lecture.description}</div>
                </li>
            `;
        });
        
        chapterContent += `
            </ul>
        </div>
        `;
    });
    
    // 生成完整的导航页面
    const indexContent = indexTemplate.replace('{{chapter_content}}', chapterContent);
    const indexPath = path.join(__dirname, 'ppt', 'index.html');
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('  ✅ 已生成导航页面: ppt/index.html');
}

// 递归遍历 slides 目录并构建所有PPT
function buildAllPresentations(dir = path.join(__dirname, 'slides')) {
    console.log(`🔍 正在扫描目录: ${path.relative(__dirname, dir)}`);
    
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // 如果是目录，递归处理
            buildAllPresentations(fullPath);
        } else if (item.endsWith('.js')) {
            try {
                // 清除require缓存，确保重新加载
                delete require.cache[require.resolve(fullPath)];
                
                // 如果是.js文件，加载配置并构建PPT
                const slideConfig = require(fullPath);
                
                // 验证配置格式
                if (!slideConfig.title || !slideConfig.content) {
                    console.log(`  ⚠️  跳过无效配置文件: ${item}`);
                    return;
                }
                
                // 获取章节信息
                const chapterInfo = getChapterInfo(fullPath);
                
                // 生成输出文件路径，放在ppt目录下
                const relativePath = path.relative(path.join(__dirname, 'slides'), fullPath);
                const outputFile = path.join(
                    __dirname, 
                    'ppt',
                    relativePath.replace('.js', '.html')
                );
                
                // 构建PPT
                buildPresentation(slideConfig, outputFile, chapterInfo);
                
            } catch (error) {
                console.error(`  ❌ 构建失败 ${item}:`, error.message);
            }
        }
    });
}

// 清理ppt目录
function cleanPpt() {
    const pptPath = path.join(__dirname, 'ppt');
    if (fs.existsSync(pptPath)) {
        fs.rmSync(pptPath, { recursive: true, force: true });
        console.log('🧹 已清理 ppt 目录');
    }
    fs.mkdirSync(pptPath, { recursive: true });
}

// 主要的构建流程
function main() {
    console.log('🚀 === 开始构建 AI全栈课程 PPT 演示文稿 ===\n');
    
    try {
        // 1. 清理输出目录
        cleanPpt();
        
        // 2. 复制必要的资源文件
        copyResources();
        
        // 3. 构建所有PPT
        console.log('\n📚 正在构建PPT文件...');
        buildAllPresentations();
        
        // 4. 生成导航页面
        console.log('\n');
        generateIndexPage();
        
        const totalPPTs = Object.values(chapters).reduce((sum, ch) => sum + ch.lectures.length, 0);
        console.log('\n🎉 === 构建完成！===');
        console.log(`📊 总共生成了 ${totalPPTs} 个PPT文件`);
        console.log('🌐 你可以打开 ppt/index.html 查看所有的演示文稿');
        console.log('💡 提示：建议使用本地服务器打开文件以获得最佳体验');
        
    } catch (error) {
        console.error('❌ 构建过程中出现错误:', error);
        process.exit(1);
    }
}

// 执行构建
if (require.main === module) {
    main();
}

module.exports = {
    buildPresentation,
    buildAllPresentations,
    generateIndexPage,
    cleanPpt,
    copyResources
};
