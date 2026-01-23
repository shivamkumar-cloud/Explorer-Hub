// ====== DELHI PLACES DATABASE ======
const delhiPlaces = {
    temples: [
        {
            id: 1,
            name: "Akshardham Temple",
            category: "temple",
            type: "hindu",
            rating: 4.8,
            reviews: 24500,
            description: "The world's largest comprehensive Hindu temple, showcasing millennia of Indian culture, spirituality, and architecture through exhibitions, musical fountain shows, and boat rides.",
            timings: "9:30 AM - 7:30 PM (Closed on Monday)",
            entryFee: "₹250 (Indians), ₹500 (Foreigners)",
            bestTime: "October to March",
            duration: "4-5 hours",
            location: "Noida Mor, Pandav Nagar, New Delhi",
            metro: "Akshardham Metro Station",
            highlights: ["Musical Fountain Show", "Boat Ride", "Garden of India", "Cultural Exhibitions"],
            tips: ["Book tickets online", "No mobile phones inside", "Wear comfortable shoes"],
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Lotus Temple",
            category: "temple",
            type: "bahai",
            rating: 4.9,
            reviews: 18900,
            description: "A Bahá'í House of Worship famous for its flowerlike architecture, open to all religions. Known as the 'Taj Mahal of Modern India', it symbolizes unity and peace.",
            timings: "9:00 AM - 6:00 PM (Closed on Monday)",
            entryFee: "Free",
            bestTime: "October to March",
            duration: "1-2 hours",
            location: "Kalkaji, South Delhi",
            metro: "Kalkaji Mandir Metro Station",
            highlights: ["Architectural Marvel", "Peaceful Environment", "All Religions Welcome"],
            tips: ["Maintain silence inside", "Photography allowed outside only", "Visit on weekdays"],
            image: "https://images.unsplash.com/photo-1586769852042-1e8e93b5d5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "ISKCON Temple",
            category: "temple",
            type: "iskcon",
            rating: 4.7,
            reviews: 12400,
            description: "One of the largest temple complexes of the International Society for Krishna Consciousness, featuring beautiful deities, cultural exhibitions, and spiritual discourses.",
            timings: "4:30 AM - 9:00 PM (Open all days)",
            entryFee: "Free",
            bestTime: "All year",
            duration: "2-3 hours",
            location: "Hare Krishna Hill, East of Kailash",
            metro: "Nehru Place Metro Station",
            highlights: ["Govinda's Restaurant", "Vedic Expo", "Daily Aarti", "Festival Celebrations"],
            tips: ["Try vegetarian food", "Attend evening aarti", "Visit during Janmashtami"],
            image: "https://images.unsplash.com/photo-1567446537710-0c5e821ff014?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    monuments: [
        {
            id: 4,
            name: "India Gate",
            category: "monument",
            type: "war-memorial",
            rating: 4.6,
            reviews: 35600,
            description: "A war memorial dedicated to the British Indian Army soldiers who died in World War I. An iconic landmark in the heart of Delhi, surrounded by lush green lawns.",
            timings: "Open 24 hours",
            entryFee: "Free",
            bestTime: "Evening (5-9 PM)",
            duration: "1-2 hours",
            location: "Rajpath, India Gate, New Delhi",
            metro: "Central Secretariat Metro Station",
            highlights: ["Evening Lighting", "Republic Day Parade", "Street Food", "Family Picnic"],
            tips: ["Visit in evening for lighting", "Try street food", "Weekends crowded"],
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            name: "Red Fort",
            category: "monument",
            type: "fort",
            rating: 4.7,
            reviews: 28900,
            description: "A historic fort that served as the main residence of Mughal Emperors for nearly 200 years. UNESCO World Heritage Site and site of India's Independence Day celebrations.",
            timings: "9:30 AM - 4:30 PM (Closed Monday)",
            entryFee: "₹35 (Indians), ₹500 (Foreigners)",
            bestTime: "October to March",
            duration: "3-4 hours",
            location: "Netaji Subhash Marg, Chandni Chowk",
            metro: "Chandni Chowk Metro Station",
            highlights: ["Light & Sound Show", "Mughal Museum", "Architecture", "Historical Significance"],
            tips: ["Attend light show", "Hire guide", "Visit nearby Chandni Chowk"],
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    gardens: [
        {
            id: 6,
            name: "Lodi Garden",
            category: "garden",
            type: "historical",
            rating: 4.5,
            reviews: 9800,
            description: "Spread over 90 acres, housing tombs of Sayyid and Lodi rulers. Perfect for morning walks, jogging, picnics, and photography amidst historical monuments.",
            timings: "6:00 AM - 8:00 PM",
            entryFee: "Free",
            bestTime: "Morning or Evening",
            duration: "2-3 hours",
            location: "Lodi Road, Near Khan Market",
            metro: "Jor Bagh Metro Station",
            highlights: ["Morning Walks", "Historical Tombs", "Bird Watching", "Photography"],
            tips: ["Best for morning walks", "Carry water", "Weekends crowded"],
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    markets: [
        {
            id: 7,
            name: "Chandni Chowk",
            category: "market",
            type: "bazaar",
            rating: 4.6,
            reviews: 42300,
            description: "One of the oldest and busiest markets in Old Delhi. Famous for street food, wholesale markets, historical landmarks, and vibrant atmosphere.",
            timings: "10:00 AM - 8:00 PM",
            entryFee: "Free",
            bestTime: "Evening (5-8 PM)",
            duration: "3-4 hours",
            location: "Chandni Chowk Road, Old Delhi",
            metro: "Chandni Chowk Metro Station",
            highlights: ["Paranthe Wali Gali", "Jama Masjid", "Spice Market", "Street Food"],
            tips: ["Try parathas", "Bargain while shopping", "Be careful with belongings"],
            image: "https://images.unsplash.com/photo-1591134217227-6e7b6b8f6444?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    food: [
        {
            id: 8,
            name: "Paranthe Wali Gali",
            category: "food",
            type: "street-food",
            rating: 4.8,
            reviews: 15600,
            description: "Famous lane in Chandni Chowk known for its paratha shops. Serving delicious stuffed parathas since the 1870s, a must-visit for food lovers.",
            timings: "8:00 AM - 11:00 PM",
            entryFee: "Free (Pay for food)",
            bestTime: "All day",
            duration: "1-2 hours",
            location: "Chandni Chowk, Old Delhi",
            metro: "Chandni Chowk Metro Station",
            highlights: ["Stuffed Parathas", "Traditional Recipes", "Historic Shops", "Local Experience"],
            tips: ["Try different fillings", "Visit during non-peak hours", "Cash only"],
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ]
};

// ====== APPLICATION INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initSearch();
    initFilters();
    initModal();
    initTripPlanner();
    initAnimations();
    initBackToTop();
    
    // Load initial places
    loadPlaces('temples', 'templesGrid');
    loadPlaces('monuments', 'monumentsGrid');
    loadPlaces('gardens', 'gardensGrid');
    loadPlaces('markets', 'marketsGrid');
    loadPlaces('food', 'foodGrid');
    
    // Initialize counters
    initCounters();
    
    // Initialize map interactions
    initMap();
});

// ====== THEME MANAGEMENT ======
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add transition effect
        document.body.classList.add('theme-transition');
        setTimeout(() => document.body.classList.remove('theme-transition'), 300);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ====== NAVIGATION ======
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close notification alert
    document.querySelector('.close-alert').addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
}

// ====== SEARCH FUNCTIONALITY ======
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchPlaces(query);
        displaySearchResults(results);
        
        if (results.length > 0) {
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }, 300));
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

function searchPlaces(query) {
    const results = [];
    
    // Search through all places
    for (const category in delhiPlaces) {
        delhiPlaces[category].forEach(place => {
            if (place.name.toLowerCase().includes(query) || 
                place.description.toLowerCase().includes(query) ||
                place.location.toLowerCase().includes(query)) {
                results.push(place);
            }
        });
    }
    
    return results.slice(0, 5); // Return top 5 results
}

function displaySearchResults(results) {
    const searchResults = document.querySelector('.search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No places found</div>';
        return;
    }
    
    searchResults.innerHTML = results.map(place => `
        <div class="search-result" onclick="showPlaceDetails(${place.id})">
            <div class="result-image">
                <img src="${place.image}" alt="${place.name}">
            </div>
            <div class="result-info">
                <h4>${place.name}</h4>
                <p>${place.category} • ${place.rating} ★</p>
                <small>${place.location.split(',')[0]}</small>
            </div>
        </div>
    `).join('');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====== LOAD PLACES ======
function loadPlaces(category, containerId) {
    const container = document.getElementById(containerId);
    const places = delhiPlaces[category] || [];
    
    container.innerHTML = places.map(place => createPlaceCard(place)).join('');
}

function createPlaceCard(place) {
    return `
        <div class="place-card" data-id="${place.id}" data-category="${place.category}" data-type="${place.type}">
            <div class="place-badge">${place.category}</div>
            <div class="place-image">
                <img src="${place.image}" alt="${place.name}">
                <div class="place-overlay">
                    <div class="place-rating">
                        <i class="fas fa-star"></i>
                        <span>${place.rating}</span>
                        <span>(${place.reviews.toLocaleString()})</span>
                    </div>
                </div>
            </div>
            <div class="place-content">
                <h3 class="place-title">${place.name}</h3>
                <p class="place-description">${place.description.substring(0, 120)}...</p>
                <div class="place-meta">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${place.timings.split('(')[0]}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-rupee-sign"></i>
                        <span>${place.entryFee.split('(')[0]}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-subway"></i>
                        <span>${place.metro.split(' ')[0]}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-hourglass-half"></i>
                        <span>${place.duration}</span>
                    </div>
                </div>
                <div class="place-actions">
                    <button class="btn-primary" onclick="showPlaceDetails(${place.id})">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <button class="btn-secondary" onclick="saveToItinerary(${place.id})">
                        <i class="fas fa-heart"></i> Save
                    </button>
                    <button class="btn-tertiary" onclick="getDirections(${place.id})">
                        <i class="fas fa-directions"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ====== FILTERS ======
function initFilters() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter places
            const filter = this.getAttribute('data-filter');
            const container = this.closest('.places-section').querySelector('.places-grid');
            filterPlaces(container, filter);
        });
    });
    
    // Sort select
    document.querySelectorAll('.sort-select').forEach(select => {
        select.addEventListener('change', function() {
            const sortBy = this.value;
            const container = this.closest('.places-section').querySelector('.places-grid');
            sortPlaces(container, sortBy);
        });
    });
    
    // Load more buttons
    document.querySelectorAll('.btn-load-more').forEach(button => {
        button.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            // Simulate loading more places
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Loaded All';
                this.style.background = 'var(--secondary-color)';
                this.disabled = true;
            }, 1500);
        });
    });
}

function filterPlaces(container, filter) {
    const places = container.querySelectorAll('.place-card');
    
    places.forEach(place => {
        if (filter === 'all' || place.getAttribute('data-type') === filter) {
            place.style.display = 'block';
            setTimeout(() => {
                place.style.opacity = '1';
                place.style.transform = 'translateY(0)';
            }, 100);
        } else {
            place.style.opacity = '0';
            place.style.transform = 'translateY(20px)';
            setTimeout(() => {
                place.style.display = 'none';
            }, 300);
        }
    });
}

function sortPlaces(container, sortBy) {
    const places = Array.from(container.querySelectorAll('.place-card'));
    
    places.sort((a, b) => {
        const aRating = parseFloat(a.querySelector('.place-rating span').textContent);
        const bRating = parseFloat(b.querySelector('.place-rating span').textContent);
        const aName = a.querySelector('.place-title').textContent;
        const bName = b.querySelector('.place-title').textContent;
        
        switch(sortBy) {
            case 'rating':
                return bRating - aRating;
            case 'name':
                return aName.localeCompare(bName);
            default: // popular
                return 0;
        }
    });
    
    // Reorder places
    places.forEach(place => container.appendChild(place));
}

// ====== MODAL SYSTEM ======
function initModal() {
    const modal = document.getElementById('placeModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function showPlaceDetails(placeId) {
    const modal = document.getElementById('placeModal');
    const modalBody = modal.querySelector('.modal-body');
    
    // Find place by ID
    let place = null;
    for (const category in delhiPlaces) {
        place = delhiPlaces[category].find(p => p.id === placeId);
        if (place) break;
    }
    
    if (!place) return;
    
    // Create modal content
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${place.name}</h2>
            <div class="modal-rating">
                <div class="stars">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(place.rating))}
                    ${place.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                </div>
                <span>${place.rating}/5 • ${place.reviews.toLocaleString()} reviews</span>
            </div>
        </div>
        
        <div class="modal-content-grid">
            <div class="modal-image">
                <img src="${place.image}" alt="${place.name}">
            </div>
            
            <div class="modal-details">
                <div class="detail-section">
                    <h3><i class="fas fa-info-circle"></i> About</h3>
                    <p>${place.description}</p>
                </div>
                
                <div class="detail-grid">
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Timings</strong>
                            <p>${place.timings}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-rupee-sign"></i>
                        <div>
                            <strong>Entry Fee</strong>
                            <p>${place.entryFee}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Location</strong>
                            <p>${place.location}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-subway"></i>
                        <div>
                            <strong>Nearest Metro</strong>
                            <p>${place.metro}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-calendar-alt"></i>
                        <div>
                            <strong>Best Time to Visit</strong>
                            <p>${place.bestTime}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-hourglass-half"></i>
                        <div>
                            <strong>Time Required</strong>
                            <p>${place.duration}</p>
                        </div>
                    </div>
                </div>
                
                ${place.highlights ? `
                <div class="detail-section">
                    <h3><i class="fas fa-star"></i> Highlights</h3>
                    <div class="highlights-list">
                        ${place.highlights.map(h => `<span class="highlight">${h}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${place.tips ? `
                <div class="detail-section">
                    <h3><i class="fas fa-lightbulb"></i> Visitor Tips</h3>
                    <ul class="tips-list">
                        ${place.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
        </div>
        
        <div class="modal-actions">
            <button class="btn-primary" onclick="getDirections(${place.id})">
                <i class="fas fa-directions"></i> Get Directions
            </button>
            <button class="btn-secondary" onclick="saveToItinerary(${place.id})">
                <i class="fas fa-heart"></i> Add to Itinerary
            </button>
            <button class="btn-tertiary" onclick="sharePlace(${place.id})">
                <i class="fas fa-share-alt"></i> Share
            </button>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Show nearby places notification after 30 seconds
    setTimeout(() => {
        showNearbyNotification(place);
    }, 30000);
}

// ====== TRIP PLANNER ======
function initTripPlanner() {
    const savedPlaces = JSON.parse(localStorage.getItem('savedPlaces') || '[]');
    updateSavedPlaces(savedPlaces);
    
    // Add day functionality
    document.querySelector('.add-day').addEventListener('click', function() {
        const daysContainer = document.querySelector('.itinerary-days');
        const dayCount = document.querySelectorAll('.day').length + 1;
        
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.setAttribute('data-day', dayCount);
        dayElement.innerHTML = `
            <span>Day ${dayCount}</span>
            <button class="remove-day">&times;</button>
        `;
        
        daysContainer.insertBefore(dayElement, this);
        
        // Add click event for new day
        dayElement.addEventListener('click', function() {
            document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            updateDayContent(dayCount);
        });
        
        // Add remove event
        dayElement.querySelector('.remove-day').addEventListener('click', function(e) {
            e.stopPropagation();
            if (document.querySelectorAll('.day').length > 1) {
                this.parentElement.remove();
            }
        });
    });
    
    // Initialize first day
    document.querySelector('.day').addEventListener('click', function() {
        document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        updateDayContent(1);
    });
}

function saveToItinerary(placeId) {
    let savedPlaces = JSON.parse(localStorage.getItem('savedPlaces') || '[]');
    
    // Find place
    let place = null;
    for (const category in delhiPlaces) {
        place = delhiPlaces[category].find(p => p.id === placeId);
        if (place) break;
    }
    
    if (!place) return;
    
    // Check if already saved
    if (!savedPlaces.find(p => p.id === placeId)) {
        savedPlaces.push(place);
        localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
        showNotification(`Added ${place.name} to your itinerary!`, 'success');
        updateSavedPlaces(savedPlaces);
    } else {
        showNotification(`${place.name} is already saved!`, 'info');
    }
}

function updateSavedPlaces(savedPlaces) {
    const savedList = document.querySelector('.saved-list');
    
    if (savedPlaces.length === 0) {
        savedList.innerHTML = '<p class="empty-message">No saved places yet</p>';
        return;
    }
    
    savedList.innerHTML = savedPlaces.map(place => `
        <div class="saved-place" data-id="${place.id}">
            <img src="${place.image}" alt="${place.name}">
            <div class="saved-info">
                <h5>${place.name}</h5>
                <p>${place.category}</p>
            </div>
            <button class="remove-saved" onclick="removeFromItinerary(${place.id})">&times;</button>
        </div>
    `).join('');
}

function removeFromItinerary(placeId) {
    let savedPlaces = JSON.parse(localStorage.getItem('savedPlaces') || '[]');
    savedPlaces = savedPlaces.filter(p => p.id !== placeId);
    localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
    updateSavedPlaces(savedPlaces);
    showNotification('Removed from itinerary', 'info');
}

function updateDayContent(dayNumber) {
    const dayTitle = document.querySelector('.planner-day h3');
    dayTitle.textContent = `Day ${dayNumber}: Custom Itinerary`;
}

// ====== MAP FUNCTIONALITY ======
function initMap() {
    const mapAreas = document.querySelectorAll('.map-area');
    
    mapAreas.forEach(area => {
        area.addEventListener('click', function() {
            const placeName = this.getAttribute('data-place');
            // In real implementation, this would show place details
            showNotification(`Showing details for ${placeName}`, 'info');
        });
    });
    
    // Legend filter
    document.querySelectorAll('.legend-item').forEach(item => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            // In real implementation, this would filter map markers
            showNotification(`Filtering by ${type}`, 'info');
        });
    });
}

// ====== UTILITY FUNCTIONS ======
function getDirections(placeId) {
    // Find place
    let place = null;
    for (const category in delhiPlaces) {
        place = delhiPlaces[category].find(p => p.id === placeId);
        if (place) break;
    }
    
    if (!place) return;
    
    // In real implementation, this would open Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ', ' + place.location)}`;
    window.open(url, '_blank');
}

function sharePlace(placeId) {
    // Find place
    let place = null;
    for (const category in delhiPlaces) {
        place = delhiPlaces[category].find(p => p.id === placeId);
        if (place) break;
    }
    
    if (!place) return;
    
    if (navigator.share) {
        navigator.share({
            title: place.name,
            text: `Check out ${place.name} on Explorer Hub!`,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(`${place.name} - ${window.location.href}`);
        showNotification('Link copied to clipboard!', 'info');
    }
}

function showNearbyNotification(place) {
    // Find nearby places (same category)
    const nearby = delhiPlaces[place.category]?.filter(p => p.id !== place.id).slice(0, 3) || [];
    
    if (nearby.length === 0) return;
    
    const notification = document.createElement('div');
    notification.className = 'floating-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <button class="close-notification">&times;</button>
            <h4><i class="fas fa-map-marker-alt"></i> Nearby Places You Might Like</h4>
            <div class="nearby-list">
                ${nearby.map(p => `
                    <div class="nearby-item" onclick="showPlaceDetails(${p.id}); this.parentElement.parentElement.parentElement.remove();">
                        <img src="${p.image}" alt="${p.name}">
                        <div>
                            <h5>${p.name}</h5>
                            <p>${p.rating} ★ • ${p.duration}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.close-notification').addEventListener('click', function() {
        notification.remove();
    });
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.remove();
        }
    }, 10000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="toast-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Close button
    notification.querySelector('.toast-close').addEventListener('click', function() {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 300);
    });
}

// ====== ANIMATIONS ======
function initAnimations() {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 16);
    });
}

// ====== BACK TO TOP ======
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ====== CONTACT FORM ======
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // In real implementation, this would send data to server
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    this.reset();
});

// ====== EXPORT FUNCTIONS FOR HTML ======
window.showPlaceDetails = showPlaceDetails;
window.saveToItinerary = saveToItinerary;
window.getDirections = getDirections;
window.sharePlace = sharePlace;
window.removeFromItinerary = removeFromItinerary;