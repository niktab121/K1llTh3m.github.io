// Node Network Background Animation
class NodeNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Canvas not found:', canvasId);
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.nodeCount = 50;
        this.connectionDistance = 150;
        this.colors = ['#ff006e', '#00d9ff', '#00ff88', '#ffb703', '#9d4edd'];
        this.animationId = null;
        this.time = 0;
        
        this.resize();
        this.initNodes();
        this.startAnimation();
        
        window.addEventListener('resize', () => this.resize());
        
        console.log('NodeNetwork initialized');
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    initNodes() {
        this.nodes = [];
        for (let i = 0; i < this.nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                radius: Math.random() * 3 + 1.5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            });
        }
    }
    
    update() {
        this.time++;
        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > this.canvas.width) {
                node.vx *= -1;
                node.x = Math.max(0, Math.min(this.canvas.width, node.x));
            }
            if (node.y < 0 || node.y > this.canvas.height) {
                node.vy *= -1;
                node.y = Math.max(0, Math.min(this.canvas.height, node.y));
            }
        });
    }
    
    draw() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(10, 10, 20, 0.08)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw connections
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    const alpha = (1 - distance / this.connectionDistance) * 0.4;
                    this.ctx.strokeStyle = `rgba(255, 0, 110, ${alpha})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        // Draw nodes with glow
        this.nodes.forEach(node => {
            // Glow background
            const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius + 4);
            gradient.addColorStop(0, node.color);
            gradient.addColorStop(1, 'rgba(255, 0, 110, 0)');
            this.ctx.fillStyle = gradient;
            this.ctx.globalAlpha = 0.2;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
            
            // Node core
            this.ctx.fillStyle = node.color;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    startAnimation() {
        const animate = () => {
            this.update();
            this.draw();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize immediately when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.nodeNetwork = new NodeNetwork('node-canvas');
    });
} else {
    window.nodeNetwork = new NodeNetwork('node-canvas');
}

// Keep animation running
window.addEventListener('beforeunload', () => {
    if (window.nodeNetwork) window.nodeNetwork.stop();
});


