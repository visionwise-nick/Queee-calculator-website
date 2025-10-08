# Queee Calculator 官方网站

这是Queee Calculator的官方网站，展示AI驱动的个性化计算器的功能和特性。

## 网站结构

```
website/
├── index.html          # 主页
├── privacy.html        # 隐私政策
├── terms.html          # 用户协议
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── assets/
│   └── icon/
│       └── app_icon.png # 应用图标
└── README.md           # 说明文档
```

## 功能特性

### 主页 (index.html)
- 响应式设计，支持移动端和桌面端
- 产品介绍和核心功能展示
- AI功能设计师、图像生成工坊等特性介绍
- 多平台下载链接
- 现代化UI设计，参考Send To Myself网站风格

### 隐私政策 (privacy.html)
- 详细的数据收集和使用说明
- 用户权利和保护措施
- 本地存储和云端同步说明
- 联系方式和投诉渠道

### 用户协议 (terms.html)
- 服务使用条款和条件
- 知识产权说明
- 付费服务条款
- 责任限制和争议解决

## 技术特点

- **响应式设计**: 适配各种屏幕尺寸
- **现代CSS**: 使用Flexbox和Grid布局
- **平滑动画**: CSS过渡和JavaScript交互
- **SEO优化**: 语义化HTML和meta标签
- **性能优化**: 压缩图片和优化代码

## 部署说明

### GitHub Pages部署

1. 在GitHub仓库设置中启用Pages功能
2. 选择"GitHub Actions"作为部署源
3. 网站将自动部署到 `https://[username].github.io/Queee-Calculator/`

### 本地开发

1. 克隆仓库到本地
2. 进入website目录
3. 使用本地服务器运行（如Python的`python -m http.server 8000`）
4. 在浏览器中访问 `http://localhost:8000`

## 自定义配置

### 修改联系信息
在以下文件中更新联系信息：
- `privacy.html` - 隐私政策联系信息
- `terms.html` - 用户协议联系信息
- `index.html` - 页脚联系信息

### 更新下载链接
在`index.html`的下载区域更新各平台的应用商店链接。

### 修改样式
编辑`styles.css`文件来自定义网站外观和颜色主题。

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

本网站内容受版权保护，归Queee Calculator所有。
