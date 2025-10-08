// 平滑滚动到锚点
document.addEventListener('DOMContentLoaded', function() {
    // 为所有导航链接添加平滑滚动
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑固定导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 添加滚动类名
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 功能卡片动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有功能卡片
    const featureCards = document.querySelectorAll('.feature-card, .download-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 添加鼠标悬停效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 移动端菜单切换（如果需要的话）
    const createMobileMenu = () => {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');
        
        // 创建移动端菜单按钮
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.innerHTML = '☰';
        mobileMenuButton.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #1f2937;
            cursor: pointer;
        `;
        
        navContainer.appendChild(mobileMenuButton);
        
        // 移动端菜单切换
        mobileMenuButton.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // 响应式显示/隐藏
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                mobileMenuButton.style.display = 'block';
                navMenu.style.display = 'none';
                navMenu.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    border-top: 1px solid #e5e7eb;
                `;
            } else {
                mobileMenuButton.style.display = 'none';
                navMenu.style.display = 'flex';
                navMenu.style.cssText = '';
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize(); // 初始调用
    };
    
    // 初始化移动端菜单
    createMobileMenu();
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        
        // 添加AI科技感的粒子效果
        createAIParticles();
        
        // 添加鼠标跟随效果
        addMouseFollowEffect();
    });
    
    // 创建AI粒子效果
    function createAIParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'ai-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        document.body.appendChild(particlesContainer);
        
        // 创建粒子
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: linear-gradient(45deg, #667eea, #f093fb);
                border-radius: 50%;
                opacity: 0.6;
                animation: matrixRain ${Math.random() * 10 + 10}s linear infinite;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }
    
    // 添加鼠标跟随效果
    function addMouseFollowEffect() {
        const cursor = document.createElement('div');
        cursor.className = 'ai-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(102, 126, 234, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        // 鼠标悬停时放大光标
        document.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'rgba(240, 147, 251, 0.8)';
        });
        
        document.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(102, 126, 234, 0.5)';
        });
    }
    
    // 添加点击外部关闭移动菜单的功能
    document.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        
        if (window.innerWidth <= 768 && 
            !navMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target)) {
            navMenu.style.display = 'none';
        }
    });
});

// 添加一些实用的工具函数
const Utils = {
    // 防抖函数
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 节流函数
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // 获取元素在页面中的位置
    getElementPosition: function(element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
    }
};

// 导出工具函数供其他脚本使用
window.Utils = Utils;
