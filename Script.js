// Delhi Attractions Data
const delhiAttractions = [
    {
        id: 1,
        name: "Red Fort",
        category: "historical",
        description: "A magnificent fort where Mughal emperors lived!",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Built by Emperor Shah Jahan in 1639",
        bestFor: "History lovers, Photography",
        ageGroup: "6+ years",
        duration: "2-3 hours"
    },
    {
        id: 2,
        name: "India Gate",
        category: "historical",
        description: "A war memorial that looks amazing in lights!",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Open 24 hours - visit at night for beautiful lighting",
        bestFor: "Evening walks, Picnics",
        ageGroup: "All ages",
        duration: "1-2 hours"
    },
    {
        id: 3,
        name: "National Rail Museum",
        category: "museum",
        description: "See real trains and ride a toy train!",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Has India's oldest steam locomotive",
        bestFor: "Train enthusiasts, Families",
        ageGroup: "3+ years",
        duration: "2-3 hours"
    },
    {
        id: 4,
        name: "National Zoological Park",
        category: "zoo",
        description: "Meet lions, tigers, and bears!",
        image: "https://images.unsplash.com/photo-1574870111867-089858c6f6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Home to over 130 species of animals",
        bestFor: "Animal lovers, Photography",
        ageGroup: "All ages",
        duration: "3-4 hours"
    },
    {
        id: 5,
        name: "Lotus Temple",
        category: "temple",
        description: "A beautiful temple shaped like a lotus flower!",
        image: "https://images.unsplash.com/photo-1586769852042-1e8e93b5d5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Made of 27 marble petals",
        bestFor: "Peace, Photography",
        ageGroup: "All ages",
        duration: "1-2 hours"
    },
    {
        id: 6,
        name: "Qutub Minar",
        category: "historical",
        description: "The tallest brick minaret in the world!",
        image: "https://images.unsplash.com/photo-1590402494682-cd3fb53c-3f61-4d2f-bf3f-6f3c9d8c1a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Built in 1193 - over 800 years old!",
        bestFor: "History, Architecture",
        ageGroup: "6+ years",
        duration: "1-2 hours"
    },
    {
        id: 7,
        name: "Children's Park",
        category: "park",
        description: "Playground with rides and games!",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "Special area just for kids to play",
        bestFor: "Young children, Play",
        ageGroup: "2-10 years",
        duration: "1-2 hours"
    },
    {
        id: 8,
        name: "Akshardham Temple",
        category: "temple",
        description: "Huge temple with boat ride and light show!",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        funFact: "World's largest comprehensive Hindu temple",
        bestFor: "Culture, Light shows",
        ageGroup: "All ages",
        duration: "3-4 hours"
    }
];

// Game Data
const games = {
    puzzle: {
        title: "Delhi Monument Puzzle",
        description: "Drag and drop pieces to complete the picture!",
        instructions: "Click on pieces to select them, then drag to correct position.",
        difficulty: "Easy",
        time: "5 minutes"
    },
    quiz: {
        title: "Delhi Knowledge Quiz",
        description: "Test how much you know about Delhi!",
        instructions: "Select the correct answer for each question.",
        difficulty: "Medium",
        time: "10 minutes"
    },
    find: {
        title: "Find the Monument",
        description: "Can you find all the hidden monuments?",
        instructions: "Click on hidden monuments in the picture.",
        difficulty: "Easy",
        time: "3 minutes"
    },
    color: {
        title: "Color Delhi",
        description: "Color your favorite Delhi monuments!",
        instructions: "Select colors and click on areas to color.",
        difficulty: "Easy",
        time: "Unlimited"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    initTabs();
    initModal();
    initNavigation();
    initBackToTop();
    initMapMarkers();
    initFavoriteSystem();
    
    // Close banner
    document.querySelector('.banner-close').addEventListener('click', function() {
        this.closest('.top-banner').style.display = 'none';
    });
    
    // Adventure buttons
    document.querySelectorAll('.adventure-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const adventure = this.closest('.adventure-card').querySelector('h3').textContent;
            alert(`Starting ${adventure} adventure! Let's go! 🚀`);
        });
    });
    
    // Game buttons are handled via onclick in HTML
});

// Carousel Functions
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    // Clear existing content
    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create carousel items
    delhiAttractions.forEach((attraction, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <div class="attraction-card">
                <div class="attraction-image">
                    <img src="${attraction.image}" alt="${attraction.name}">
                </div>
                <div class="attraction-content">
                    <h3>${attraction.name}</h3>
                    <p class="attraction-desc">${attraction.description}</p>
                    <div class="attraction-details">
                        <div class="detail">
                            <i class="fas fa-clock"></i>
                            <span>${attraction.duration}</span>
                        </div>
                        <div class="detail">
                            <i class="fas fa-child"></i>
                            <span>${attraction.ageGroup}</span>
                        </div>
                        <div class="detail">
                            <i class="fas fa-star"></i>
                            <span>${attraction.bestFor}</span>
                        </div>
                    </div>
                    <div class="attraction-fact">
                        <i class="fas fa-lightbulb"></i>
                        <p>Fun Fact: ${attraction.funFact}</p>
                    </div>
                    <button class="attraction-btn" onclick="addToFavorites(${attraction.id})">
                        <i class="fas fa-heart"></i> Add to Favorites
                    </button>
                </div>
            </div>
        `;
        track.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Initialize carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Tab Functions
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Modal Functions
function initModal() {
    const modal = document.querySelector('.game-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

function startGame(gameType) {
    const modal = document.querySelector('.game-modal');
    const gameContent = document.getElementById('gameContent');
    const game = games[gameType];
    
    gameContent.innerHTML = `
        <h2>${game.title}</h2>
        <p class="game-description">${game.description}</p>
        
        <div class="game-info">
            <div class="info-item">
                <i class="fas fa-info-circle"></i>
                <span>${game.instructions}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-tachometer-alt"></i>
                <span>Difficulty: ${game.difficulty}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-clock"></i>
                <span>Time: ${game.time}</span>
            </div>
        </div>
        
        <div class="game-area" id="gameArea">
            <!-- Game content will be loaded based on type -->
        </div>
        
        <div class="game-controls">
            <button class="btn-primary" onclick="playGame('${gameType}')">
                <i class="fas fa-play"></i> Start Game
            </button>
            <button class="btn-secondary" onclick="closeModal()">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
    
    // Load game-specific content
    loadGameContent(gameType);
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function loadGameContent(gameType) {
    const gameArea = document.getElementById('gameArea');
    
    switch(gameType) {
        case 'puzzle':
            gameArea.innerHTML = `
                <div class="puzzle-container">
                    <div class="puzzle-pieces">
                        <div class="puzzle-piece" style="background-image: url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80');"></div>
                        <div class="puzzle-piece" style="background-image: url('https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80');"></div>
                        <div class="puzzle-piece" style="background-image: url('https://images.unsplash.com/photo-1586769852042-1e8e93b5d5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80');"></div>
                    </div>
                    <div class="puzzle-board">
                        <div class="puzzle-slot"></div>
                        <div class="puzzle-slot"></div>
                        <div class="puzzle-slot"></div>
                    </div>
                </div>
            `;
            break;
            
        case 'quiz':
            gameArea.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-question">
                        <h4>What is the name of Delhi's famous war memorial?</h4>
                        <div class="quiz-options">
                            <button class="quiz-option">Red Fort</button>
                            <button class="quiz-option correct">India Gate</button>
                            <button class="quiz-option">Qutub Minar</button>
                            <button class="quiz-option">Lotus Temple</button>
                        </div>
                    </div>
                    <div class="quiz-score">
                        Score: <span id="quizScore">0</span>
                    </div>
                </div>
            `;
            break;
            
        case 'find':
            gameArea.innerHTML = `
                <div class="find-container">
                    <div class="find-image">
                        <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w-600&q=80" alt="Delhi Scene">
                        <div class="hidden-object" style="top: 30%; left: 40%;" data-found="false"></div>
                        <div class="hidden-object" style="top: 50%; left: 60%;" data-found="false"></div>
                        <div class="hidden-object" style="top: 70%; left: 30%;" data-found="false"></div>
                    </div>
                    <div class="find-counter">
                        Found: <span id="foundCount">0</span>/3
                    </div>
                </div>
            `;
            break;
            
        case 'color':
            gameArea.innerHTML = `
                <div class="color-container">
                    <div class="color-palette">
                        <div class="color-swatch" style="background: #FF6B6B;"></div>
                        <div class="color-swatch" style="background: #4ECDC4;"></div>
                        <div class="color-swatch" style="background: #FFD166;"></div>
                        <div class="color-swatch" style="background: #2D3047;"></div>
                        <div class="color-swatch" style="background: #F7FFF7;"></div>
                    </div>
                    <div class="color-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png" alt="Color Image">
                    </div>
                    <button class="btn-secondary" onclick="resetColoring()">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                </div>
            `;
            break;
    }
}

function playGame(gameType) {
    switch(gameType) {
        case 'quiz':
            setupQuiz();
            break;
        case 'find':
            setupFindGame();
            break;
        case 'color':
            setupColoring();
            break;
    }
}

function setupQuiz() {
    const options = document.querySelectorAll('.quiz-option');
    const scoreElement = document.getElementById('quizScore');
    let score = 0;
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            if (this.classList.contains('correct')) {
                this.style.background = '#4ECDC4';
                score += 10;
                scoreElement.textContent = score;
                alert('Correct! 🎉');
            } else {
                this.style.background = '#FF6B6B';
                alert('Try again!');
            }
        });
    });
}

function setupFindGame() {
    const objects = document.querySelectorAll('.hidden-object');
    const counter = document.getElementById('foundCount');
    let found = 0;
    
    objects.forEach(obj => {
        obj.addEventListener('click', function() {
            if (this.getAttribute('data-found') === 'false') {
                this.style.background = '#4ECDC4';
                this.setAttribute('data-found', 'true');
                found++;
                counter.textContent = found;
                
                if (found === 3) {
                    alert('Congratulations! You found all monuments! 🏆');
                }
            }
        });
    });
}

function setupColoring() {
    const swatches = document.querySelectorAll('.color-swatch');
    const image = document.querySelector('.color-image img');
    
    swatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            const color = this.style.background;
            image.addEventListener('click', function(e) {
                // In a real implementation, this would color the clicked area
                console.log(`Coloring at ${e.offsetX}, ${e.offsetY} with ${color}`);
            });
        });
    });
}

function resetColoring() {
    const image = document.querySelector('.color-image img');
    image.src = image.src; // Reset image
}

function closeModal() {
    const modal = document.querySelector('.game-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigation Functions
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-toggle') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Back to Top Function
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Map Functions
function initMapMarkers() {
    const markers = document.querySelectorAll('.map-marker');
    
    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            const place = this.getAttribute('data-place');
            const attraction = delhiAttractions.find(a => 
                a.name.toLowerCase().replace(' ', '-') === place
            );
            
            if (attraction) {
                alert(`You clicked on ${attraction.name}!\n\n${attraction.funFact}`);
            }
        });
    });
}

// Favorites System
function initFavoriteSystem() {
    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('delhiFavorites')) || [];
    updateFavoritesList(favorites);
}

function addToFavorites(attractionId) {
    let favorites = JSON.parse(localStorage.getItem('delhiFavorites')) || [];
    const attraction = delhiAttractions.find(a => a.id === attractionId);
    
    if (attraction && !favorites.find(f => f.id === attractionId)) {
        favorites.push(attraction);
        localStorage.setItem('delhiFavorites', JSON.stringify(favorites));
        updateFavoritesList(favorites);
        
        // Show confirmation
        const hearts = document.createElement('div');
        hearts.innerHTML = '💖 💖 💖';
        hearts.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            z-index: 1000;
            animation: fadeOut 1s ease forwards;
        `;
        document.body.appendChild(hearts);
        
        setTimeout(() => {
            hearts.remove();
        }, 1000);
        
        alert(`Added ${attraction.name} to your favorites!`);
    } else if (favorites.find(f => f.id === attractionId)) {
        alert(`${attraction.name} is already in your favorites!`);
    }
}

function updateFavoritesList(favorites) {
    const favoritesList = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-favorites">
                <i class="fas fa-heart"></i>
                <p>No favorites yet!</p>
                <p>Click "Add to Favorites" on attractions</p>
            </div>
        `;
        return;
    }
    
    favoritesList.innerHTML = favorites.map(attraction => `
        <div class="favorite-item">
            <img src="${attraction.image}" alt="${attraction.name}">
            <div class="favorite-info">
                <h5>${attraction.name}</h5>
                <p>${attraction.description}</p>
            </div>
            <button class="remove-favorite" onclick="removeFavorite(${attraction.id})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function removeFavorite(attractionId) {
    let favorites = JSON.parse(localStorage.getItem('delhiFavorites')) || [];
    favorites = favorites.filter(f => f.id !== attractionId);
    localStorage.setItem('delhiFavorites', JSON.stringify(favorites));
    updateFavoritesList(favorites);
}

// Add CSS for fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
    }
`;
document.head.appendChild(style);