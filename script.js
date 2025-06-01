document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Efeito de bolhas no hero
    const heroBubbles = document.querySelector('.hero-bubbles');
    if (heroBubbles) {
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('li');
            const size = Math.random() * 60 + 10;
            const posX = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 10;
            
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${posX}%`;
            bubble.style.animationDelay = `${delay}s`;
            bubble.style.animationDuration = `${duration}s`;
            
            heroBubbles.appendChild(bubble);
        }
    }

    // Galeria dinâmica (exemplo)
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        const galleryItems = [
 
            // Adicione mais itens conforme necessário
        ];

        galleryItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${item.category}`;
            galleryItem.innerHTML = `
                <img src="imagens/${item.img}" alt="Pintura facial">
                <div class="overlay">${item.category === 'princess' ? 'Princesa' : 'Herói'}</div>
            `;
            galleryContainer.appendChild(galleryItem);
        });

        // Filtro da galeria
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona active no botão clicado
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                const items = document.querySelectorAll('.gallery-item');
                
                items.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Efeito de aparecer ao rolar
    const fadeElements = document.querySelectorAll('.about, .gallery-preview, .testimonials, .contact');
    
    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configura inicialmente os elementos como invisíveis
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Executa uma vez ao carregar

    // Carrossel de depoimentos automático
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let scrollAmount = 0;
        const scrollStep = 320; // Largura do card + gap
        
        setInterval(() => {
            scrollAmount += scrollStep;
            if (scrollAmount > testimonialSlider.scrollWidth - testimonialSlider.clientWidth) {
                scrollAmount = 0;
            }
            testimonialSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000);
    }
});

// Efeito de navbar ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(179, 153, 212, 0.95)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.background = 'var(--purple-light)';
        navbar.style.padding = '1.5rem 5%';
    }
});

function filterGallery(category) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        // Mantém sempre visível se tiver a classe permanent-show
        if (item.classList.contains('permanent-show')) {
            item.style.display = 'block';
            return; // Sai da função para esta imagem
        }
        
        // Filtra as demais imagens normalmente
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = getRandomColor();
    });
});

function getRandomColor() {
    const colors = ['#FF9BB3', '#FFDE59', '#7EC8FF', '#A0E8AF'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.floating-elements');
    
    // Cria mais bolhas dinamicamente
    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'paint-bubble';
        bubble.style.cssText = `
            --delay: ${Math.random() * 2}s;
            --size: ${30 + Math.random() * 30}px;
            --color: hsl(${Math.random() * 360}, 80%, 70%);
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        container.appendChild(bubble);
    }
});

