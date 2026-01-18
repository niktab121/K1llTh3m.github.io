// ============================================
// APP.JS - Dynamic Content Loader & Navigation
// ============================================

class K1llTh3mApp {
    constructor() {
        this.currentPage = 'home';
        this.isMobile = window.innerWidth <= 768;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupMobileMenu();
        this.loadContent('home');
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 768;
        
        const menuToggle = document.querySelector('#menu-toggle');
        if (this.isMobile && !wasMobile) {
            menuToggle.style.display = 'flex';
        } else if (!this.isMobile && wasMobile) {
            menuToggle.style.display = 'none';
            document.querySelector('#sidebar').classList.remove('active');
        }
    }

    setupMobileMenu() {
        const menuToggle = document.querySelector('#menu-toggle');
        const sidebar = document.querySelector('#sidebar');
        
        // Show menu toggle on mobile
        if (this.isMobile) {
            menuToggle.style.display = 'flex';
        }

        // Toggle menu on button click
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }

        // Close menu when clicking on a nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (this.isMobile) {
                    sidebar.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMobile && 
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target) &&
                sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }

    setupEventListeners() {
        // Navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                this.loadContent(page);
                this.updateActiveNav(item);
            });
        });
    }

    loadContent(page) {
        const data = pageData[page];
        if (!data) return;

        // Update header
        document.querySelector('.header h2').textContent = data.title;

        // Update active nav
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        // Check if it's a full page (like CTF guide or Portfolio)
        if (data.isFullPage && page === 'ctf') {
            this.loadPost('ctf-guide', 'ctf-page');
        } else if (data.isFullPage && page === 'portfolio') {
            this.loadPost('portfolio-profile', 'portfolio-page');
        } else if (data.isFullPage && page === 'machines') {
            this.loadPost('machines-overview', 'machines-page');
        } else {
            // Generate and load content as cards
            this.renderArticles(data.content);
        }

        this.currentPage = page;

        // Scroll to top
        document.querySelector('.content-area').scrollTop = 0;
    }

    renderArticles(articles) {
        const contentArea = document.querySelector('#content-area');
        
        let html = '<div class="article-grid">';
        
        articles.forEach((article, index) => {
            html += `
                <div class="article-card" onclick="app.loadPost('${article.link}', '${article.id}')">
                    <div class="article-icon">${article.icon}</div>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-description">${article.description}</p>
                    <span class="article-date">${article.date}</span>
                </div>
            `;
        });
        
        html += '</div>';
        contentArea.innerHTML = html;
        
        // Add fade-in animation
        contentArea.style.opacity = '0';
        contentArea.style.animation = 'none';
        setTimeout(() => {
            contentArea.style.animation = 'fadeIn 0.5s ease-out';
            contentArea.style.opacity = '1';
        }, 10);
    }

    loadPost(link, postId) {
        // Extract post key from link
        const postKey = link.split('/').pop().replace('.html', '');
        const post = fullPosts[postKey];
        
        if (!post) {
            console.warn('Post not found:', postKey);
            return;
        }

        const contentArea = document.querySelector('#content-area');
        
        // Check if it's a profile page (no header with icon/date)
        if (post.isProfile) {
            let html = `
                <div class="post-container">
                    <div class="post-content">
                        ${post.content}
                    </div>
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 0, 110, 0.3);">
                        <button onclick="app.goBack()" class="back-button" style="
                            background-color: transparent;
                            border: 1px solid #ff006e;
                            color: #ff006e;
                            padding: 10px 20px;
                            border-radius: 5px;
                            cursor: pointer;
                            font-family: 'Courier New', monospace;
                            font-size: 13px;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.backgroundColor='rgba(255, 0, 110, 0.1)'" onmouseout="this.style.backgroundColor='transparent'">
                            ← Retour
                        </button>
                    </div>
                </div>
            `;
            contentArea.innerHTML = html;
        } else {
            // Regular post with header
            let html = `
                <div class="post-container">
                    <div class="post-header">
                        <span class="article-icon" style="font-size: 32px; margin-bottom: 15px; display: block;">
                            ${post.icon}
                        </span>
                        <h1 class="post-title">${post.title}</h1>
                        <div class="post-meta">
                            <span>📅 ${post.date}</span>
                            <span>📁 ${post.category}</span>
                            ${post.difficulty !== 'N/A' ? `<span>⚙️ Difficulté: ${post.difficulty}</span>` : ''}
                        </div>
                    </div>
                    <div class="post-content">
                        ${post.content}
                    </div>
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 0, 110, 0.3);">
                        <button onclick="app.goBack()" class="back-button" style="
                            background-color: transparent;
                            border: 1px solid #ff006e;
                            color: #ff006e;
                            padding: 10px 20px;
                            border-radius: 5px;
                            cursor: pointer;
                            font-family: 'Courier New', monospace;
                            font-size: 13px;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.backgroundColor='rgba(255, 0, 110, 0.1)'" onmouseout="this.style.backgroundColor='transparent'">
                        ← Retour
                    </button>
                    </div>
                </div>
            `;
            contentArea.innerHTML = html;
        }
        
        // Add fade-in animation
        contentArea.style.opacity = '0';
        contentArea.style.animation = 'none';
        setTimeout(() => {
            contentArea.style.animation = 'fadeIn 0.5s ease-out';
            contentArea.style.opacity = '1';
        }, 10);

        // Scroll to top
        contentArea.scrollTop = 0;
    }

    goBack() {
        this.loadContent(this.currentPage);
    }

    updateActiveNav(item) {
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        item.classList.add('active');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new K1llTh3mApp();
});

// Smooth animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
