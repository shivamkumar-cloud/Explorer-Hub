// ====== DELHI PLACES DATABASE ======
const delhiPlaces = {
    // ====== TEMPLES ======
    temples: [
        {
            id: 1,
            name: "Swaminarayan Akshardham",
            category: "temple",
            subcategory: "hindu",
            rating: 4.8,
            reviews: 24500,
            description: "The world's largest comprehensive Hindu temple, showcasing millennia of Indian culture, spirituality, and architecture through exhibitions, musical fountain shows, and boat rides.",
            history: "Built by the BAPS Swaminarayan Sanstha, the temple was inaugurated in November 2005. It stands as a tribute to Bhagwan Swaminarayan and reflects the essence of India's ancient architecture, traditions, and timeless spiritual messages.",
            architecture: "Built from intricately carved sandstone and marble, the temple complex spans over 100 acres. It features 234 ornately carved pillars, 9 ornate domes, 20 quadrangle spires, and 20,000 statues of India's spiritual personalities.",
            timings: {
                open: "9:30 AM",
                close: "7:30 PM",
                closed: "Monday",
                bestTime: "October to March",
                duration: "4-5 hours"
            },
            entryFees: {
                adult: 250,
                child: 150,
                senior: 150,
                foreigner: 500,
                camera: 200,
                audioGuide: 100
            },
            location: {
                address: "Noida Mor, Pandav Nagar, New Delhi",
                coordinates: { lat: 28.6129, lng: 77.2295 },
                metro: "Akshardham Metro Station (Blue Line)",
                parking: "Available (₹50-100)",
                distance: "8 km from CP"
            },
            facilities: [
                "Free Drinking Water",
                "Wheelchair Accessible",
                "Cloak Room",
                "Food Court",
                "Souvenir Shop",
                "Prayer Hall",
                "Guided Tours",
                "First Aid"
            ],
            highlights: [
                "Musical Fountain Show (7:45 PM)",
                "Boat Ride through Indian History",
                "Garden of India",
                "Neelkanth Darshan",
                "Cultural Exhibitions"
            ],
            tips: [
                "Book tickets online to avoid queues",
                "Don't miss the evening musical fountain show",
                "Mobile phones and cameras not allowed in exhibitions",
                "Wear comfortable shoes as the complex is huge",
                "Best time to visit is weekdays morning"
            ],
            photos: [
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1591134217227-6e7b6b8f6444?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [2, 3, 4],
            tags: ["must-visit", "family-friendly", "photography", "cultural"]
        },
        {
            id: 2,
            name: "Lotus Temple",
            category: "temple",
            subcategory: "bahai",
            rating: 4.9,
            reviews: 18900,
            description: "A Bahá'í House of Worship famous for its flowerlike architecture, open to all religions. Known as the 'Taj Mahal of Modern India', it symbolizes unity and peace.",
            history: "Completed in 1986, the Lotus Temple has won numerous architectural awards. It serves as the Mother Temple of the Indian subcontinent and has drawn more than 100 million visitors, making it one of the most visited buildings in the world.",
            architecture: "Made of pure white marble from Greece, the temple consists of 27 free-standing marble-clad 'petals' arranged in clusters of three to form nine sides. The design is inspired by the lotus flower, a symbol of purity and divinity.",
            timings: {
                open: "9:00 AM",
                close: "6:00 PM",
                closed: "Monday",
                bestTime: "October to March",
                duration: "1-2 hours"
            },
            entryFees: {
                adult: 0,
                child: 0,
                senior: 0,
                foreigner: 0,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi",
                coordinates: { lat: 28.5535, lng: 77.2588 },
                metro: "Kalkaji Mandir Metro Station (Violet Line)",
                parking: "Available (Free)",
                distance: "12 km from CP"
            },
            facilities: [
                "Information Center",
                "Book Store",
                "Prayer Hall",
                "Gardens",
                "Drinking Water",
                "Wheelchair Accessible"
            ],
            highlights: [
                "Silent Prayer Hall",
                "Beautiful Surrounding Gardens",
                "Free Entry",
                "Architectural Photography",
                "Peaceful Atmosphere"
            ],
            tips: [
                "Maintain complete silence inside the prayer hall",
                "Photography allowed only outside the temple",
                "Visit during weekdays to avoid crowds",
                "Best for meditation and peace",
                "Carry water during summer visits"
            ],
            photos: [
                "https://images.unsplash.com/photo-1586769852042-1e8e93b5d5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1567446537710-0c5e821ff014?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [1, 3, 5],
            tags: ["free-entry", "architecture", "peaceful", "meditation"]
        },
        {
            id: 3,
            name: "ISKCON Temple Delhi",
            category: "temple",
            subcategory: "hindu",
            rating: 4.7,
            reviews: 12400,
            description: "One of the largest temple complexes of the International Society for Krishna Consciousness, featuring beautiful deities, cultural exhibitions, and spiritual discourses.",
            history: "Established in 1998, this temple complex is a cultural center dedicated to Lord Krishna. It combines spiritual enlightenment with cultural heritage, offering a unique experience of Vedic culture and philosophy.",
            architecture: "Built in a modern architectural style, the temple features a blend of traditional and contemporary design. The main hall houses beautiful deities of Radha-Krishna, and the complex includes a museum, library, and food court.",
            timings: {
                open: "4:30 AM",
                close: "9:00 PM",
                closed: "None",
                bestTime: "All year",
                duration: "2-3 hours"
            },
            entryFees: {
                adult: 0,
                child: 0,
                senior: 0,
                foreigner: 0,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Hare Krishna Hill, Sant Nagar, Main Road, East of Kailash",
                coordinates: { lat: 28.5495, lng: 77.2663 },
                metro: "Nehru Place Metro Station (Violet Line)",
                parking: "Available (₹30)",
                distance: "10 km from CP"
            },
            facilities: [
                "Govinda's Restaurant",
                "Vedic Library",
                "Museum",
                "Souvenir Shop",
                "Prayer Hall",
                "Garden"
            ],
            highlights: [
                "Daily Aarti and Kirtan",
                "Govinda's Multi-cuisine Restaurant",
                "Vedic Expo",
                "Festival Celebrations",
                "Spiritual Discourses"
            ],
            tips: [
                "Try the vegetarian food at Govinda's",
                "Attend the evening aarti (6:30 PM)",
                "Visit during Janmashtami for grand celebrations",
                "Explore the Vedic museum",
                "Free entry for all"
            ],
            photos: [
                "https://images.unsplash.com/photo-1567446537710-0c5e821ff014?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [2, 4, 6],
            tags: ["free-food", "cultural", "festive", "spiritual"]
        },
        // ... More temples would be added here
    ],

    // ====== MONUMENTS ======
    monuments: [
        {
            id: 4,
            name: "India Gate",
            category: "monument",
            subcategory: "war-memorial",
            rating: 4.6,
            reviews: 35600,
            description: "A war memorial dedicated to the British Indian Army soldiers who died in World War I. An iconic landmark in the heart of Delhi, surrounded by lush green lawns.",
            history: "Designed by Sir Edwin Lutyens, India Gate was built in 1931. Originally called the All India War Memorial, it commemorates 70,000 soldiers of the British Indian Army who died between 1914–1919 in World War I.",
            architecture: "Built from sandstone, the 42-meter tall arch stands on a low base of red Bharatpur stone. The names of over 13,000 soldiers are inscribed on the monument. An eternal flame burns beneath the arch.",
            timings: {
                open: "24 hours",
                close: "24 hours",
                closed: "None",
                bestTime: "Evening (5-9 PM)",
                duration: "1-2 hours"
            },
            entryFees: {
                adult: 0,
                child: 0,
                senior: 0,
                foreigner: 0,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Rajpath, India Gate, New Delhi",
                coordinates: { lat: 28.6129, lng: 77.2295 },
                metro: "Central Secretariat Metro Station (Yellow Line)",
                parking: "Available (₹50/hour)",
                distance: "3 km from CP"
            },
            facilities: [
                "Street Food Stalls",
                "Children's Park",
                "Boat Club",
                "Lighting Display",
                "Security"
            ],
            highlights: [
                "Evening Lighting",
                "Republic Day Parade Route",
                "Street Food Experience",
                "Photography Spot",
                "Family Picnic Area"
            ],
            tips: [
                "Visit in the evening for beautiful lighting",
                "Try ice cream and street food from vendors",
                "Weekends can be very crowded",
                "Great for family picnics",
                "Watch out for security restrictions"
            ],
            photos: [
                "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [5, 6, 7],
            tags: ["free-entry", "historical", "photography", "family"]
        },
        {
            id: 5,
            name: "Red Fort",
            category: "monument",
            subcategory: "fort",
            rating: 4.7,
            reviews: 28900,
            description: "A historic fort that served as the main residence of Mughal Emperors for nearly 200 years. UNESCO World Heritage Site and site of India's Independence Day celebrations.",
            history: "Built by Emperor Shah Jahan in 1639, the Red Fort served as the capital of the Mughal Empire until 1857. It was the palace fort of Shahjahanabad, the new capital of the fifth Mughal Emperor.",
            architecture: "Built with red sandstone, the fort covers 254 acres. Its architectural design is a blend of Persian, Timurid, and Hindu traditions. Key structures include Diwan-i-Aam, Diwan-i-Khas, and Rang Mahal.",
            timings: {
                open: "9:30 AM",
                close: "4:30 PM",
                closed: "Monday",
                bestTime: "October to March",
                duration: "3-4 hours"
            },
            entryFees: {
                adult: 35,
                child: 0,
                senior: 0,
                foreigner: 500,
                camera: 25,
                audioGuide: 100
            },
            location: {
                address: "Netaji Subhash Marg, Chandni Chowk, New Delhi",
                coordinates: { lat: 28.6562, lng: 77.2410 },
                metro: "Chandni Chowk Metro Station (Yellow Line)",
                parking: "Limited (₹100)",
                distance: "5 km from CP"
            },
            facilities: [
                "Audio Guide",
                "Museum",
                "Souvenir Shops",
                "Drinking Water",
                "Wheelchair Access"
            ],
            highlights: [
                "Light & Sound Show (Evenings)",
                "Mughal Museum",
                "Architectural Marvel",
                "Independence Day Celebrations",
                "Historical Significance"
            ],
            tips: [
                "Attend the light and sound show (₹80)",
                "Hire a guide for historical insights",
                "Visit nearby Chandni Chowk for shopping",
                "Carry water and wear comfortable shoes",
                "Avoid weekends for better experience"
            ],
            photos: [
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [4, 6, 8],
            tags: ["unesco", "historical", "architecture", "must-visit"]
        },
        // ... More monuments would be added
    ],

    // ====== GARDENS ======
    gardens: [
        {
            id: 6,
            name: "Lodi Garden",
            category: "garden",
            subcategory: "historical",
            rating: 4.5,
            reviews: 9800,
            description: "Spread over 90 acres, housing tombs of Sayyid and Lodi rulers. Perfect for morning walks, jogging, picnics, and photography amidst historical monuments.",
            history: "Originally a village surrounded by monuments, it was converted into a garden in 1936 and named Lady Willingdon Park. Renamed Lodi Garden after independence, it preserves 15th-century tombs.",
            architecture: "Features architectural monuments from the Sayyid and Lodi periods, including Mohammed Shah's Tomb, Sikander Lodi's Tomb, Sheesh Gumbad, and Bara Gumbad.",
            timings: {
                open: "6:00 AM",
                close: "8:00 PM",
                closed: "None",
                bestTime: "Morning (6-9 AM) or Evening (4-7 PM)",
                duration: "2-3 hours"
            },
            entryFees: {
                adult: 0,
                child: 0,
                senior: 0,
                foreigner: 0,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Lodi Road, Near Khan Market, New Delhi",
                coordinates: { lat: 28.5931, lng: 77.2197 },
                metro: "Jor Bagh Metro Station (Yellow Line)",
                parking: "Available (₹30)",
                distance: "6 km from CP"
            },
            facilities: [
                "Jogging Track",
                "Children's Play Area",
                "Drinking Water",
                "Toilets",
                "Benches",
                "Rose Garden"
            ],
            highlights: [
                "Morning Walkers' Paradise",
                "Historical Tombs",
                "Photography Opportunities",
                "Bird Watching",
                "Peaceful Environment"
            ],
            tips: [
                "Best for morning walks and yoga",
                "Carry your own water bottle",
                "Perfect for photography in golden hours",
                "Watch out for monkeys",
                "Weekends can be crowded"
            ],
            photos: [
                "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [5, 7, 9],
            tags: ["free-entry", "walking", "historical", "nature"]
        },
        // ... More gardens would be added
    ],

    // ====== HIDDEN GEMS ======
    hidden: [
        {
            id: 7,
            name: "Agrasen Ki Baoli",
            category: "hidden",
            subcategory: "stepwell",
            rating: 4.4,
            reviews: 5400,
            description: "A 14th-century stepwell hidden among Delhi's modern buildings. Featured in many Bollywood movies, this architectural marvel offers a glimpse into ancient water conservation.",
            history: "Believed to be originally built by Maharaja Agrasen during the Mahabharat epic era, it was rebuilt in the 14th century by the Agrawal community. Used for water storage and community gatherings.",
            architecture: "60-meter long and 15-meter wide stepwell with 108 steps descending to the water level. Built from rubble masonry with arches and niches. Three levels of arched cells surround the stepwell.",
            timings: {
                open: "9:00 AM",
                close: "5:30 PM",
                closed: "None",
                bestTime: "Morning",
                duration: "1 hour"
            },
            entryFees: {
                adult: 0,
                child: 0,
                senior: 0,
                foreigner: 0,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Hailey Road, Near KG Marg, Connaught Place",
                coordinates: { lat: 28.6291, lng: 77.2250 },
                metro: "Barakhamba Road Metro Station (Blue Line)",
                parking: "Limited",
                distance: "1 km from CP"
            },
            facilities: [
                "Basic",
                "No Facilities",
                "Photography Allowed",
                "Historic Site"
            ],
            highlights: [
                "Architectural Photography",
                "Bollywood Movie Location",
                "Ancient Engineering",
                "Peaceful Atmosphere",
                "Historical Significance"
            ],
            tips: [
                "Best for photography in morning light",
                "Carry water as no facilities available",
                "Be careful on the steps",
                "Combine visit with CP shopping",
                "Watch for bats in the evenings"
            ],
            photos: [
                "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [4, 6, 8],
            tags: ["free-entry", "photography", "historical", "hidden"]
        },
        // ... More hidden gems would be added
    ],

    // ====== FAMOUS PLACES ======
    famous: [
        {
            id: 8,
            name: "Chandni Chowk",
            category: "famous",
            subcategory: "market",
            rating: 4.6,
            reviews: 42300,
            description: "One of the oldest and busiest markets in Old Delhi. Famous for street food, wholesale markets, historical landmarks, and vibrant atmosphere.",
            history: "Established in the 17th century by Mughal Emperor Shah Jahan and designed by his daughter Jahanara Begum. The market was once divided by canals (now closed) to reflect moonlight, hence the name 'Moonlight Square'.",
            architecture: "Traditional market layout with narrow lanes, havelis, temples, mosques, and gurudwaras. Features Mughal-era architecture mixed with colonial and modern structures.",
            timings: {
                open: "10:00 AM",
                close: "8:00 PM",
                closed: "Sunday (some shops)",
                bestTime: "Evening (5-8 PM)",
                duration: "3-4 hours"
            },
            entryFees: {
                adult: 0,
                child: 0,
                senior: 0,
                foreigner: 0,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Chandni Chowk Road, Old Delhi",
                coordinates: { lat: 28.6593, lng: 77.2280 },
                metro: "Chandni Chowk Metro Station (Yellow Line)",
                parking: "Difficult (Use metro)",
                distance: "5 km from CP"
            },
            facilities: [
                "Food Stalls",
                "Shops",
                "Temples",
                "Mosques",
                "Gurudwara",
                "ATMs"
            ],
            highlights: [
                "Paranthe Wali Gali",
                "Jama Masjid",
                "Spice Market",
                "Jewelry Shops",
                "Street Food"
            ],
            tips: [
                "Try parathas at Paranthe Wali Gali",
                "Visit Jama Masjid nearby",
                "Bargain while shopping",
                "Be careful with belongings",
                "Best visited with local guide"
            ],
            photos: [
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [5, 7, 9],
            tags: ["shopping", "food", "historical", "vibrant"]
        },
        // ... More famous places would be added
    ],

    // ====== GLORY OF DELHI ======
    glory: [
        {
            id: 9,
            name: "Red Fort Light & Sound Show",
            category: "glory",
            subcategory: "experience",
            rating: 4.8,
            reviews: 8700,
            description: "Witness history come alive with an audio-visual spectacle depicting Delhi's rich history from the Mughal era to independence.",
            history: "Started in the 1960s, the show uses light and sound effects to narrate the history of the Red Fort. It brings to life the stories of emperors, battles, and Delhi's transformation.",
            architecture: "Uses the Red Fort's architecture as a backdrop for projections. Modern sound systems and lighting equipment create an immersive historical experience.",
            timings: {
                show1: "7:30 PM (Hindi)",
                show2: "8:30 PM (English)",
                closed: "Monday",
                bestTime: "October to March",
                duration: "1 hour"
            },
            entryFees: {
                adult: 80,
                child: 40,
                senior: 40,
                foreigner: 250,
                camera: 0,
                audioGuide: 0
            },
            location: {
                address: "Red Fort, Chandni Chowk, Delhi",
                coordinates: { lat: 28.6562, lng: 77.2410 },
                metro: "Chandni Chowk Metro Station (Yellow Line)",
                parking: "Limited",
                distance: "5 km from CP"
            },
            facilities: [
                "Seating",
                "Audio Systems",
                "Snacks Available",
                "Washrooms",
                "Security"
            ],
            highlights: [
                "Historical Narration",
                "Light Effects",
                "Sound Effects",
                "Evening Experience",
                "Family Entertainment"
            ],
            tips: [
                "Book tickets in advance",
                "Reach 30 minutes early",
                "Carry warm clothes in winter",
                "Choose language preference",
                "Combine with Red Fort visit"
            ],
            photos: [
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            nearby: [5, 8, 10],
            tags: ["experience", "evening", "family", "historical"]
        }
        // ... More glory experiences would be added
    ]
};

// ====== MAIN APPLICATION CODE ======
document.addEventListener('DOMContentLoaded', function() {
    // Initialize application
    initTheme();
    initNavigation();
    initParallax();
    initCounters();
    initCarousel();
    initFilters();
    initModal();
    initNotifications();
    initBackToTop();
    initSearch();
    
    // Load initial places
    loadPlaces('temples');
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
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Dropdown hover effects
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', () => {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.style.opacity = '1';
                menu.style.transform = 'translateX(-50%) translateY(0)';
            }, 10);
        });
        
        dropdown.addEventListener('mouseleave', () => {
            menu.style.opacity = '0';
            menu.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });
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
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                
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
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ====== PARALLAX EFFECT ======
function initParallax() {
    const layers = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        layers.forEach(layer => {
            const speed = layer.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// ====== ANIMATED COUNTERS ======
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
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
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ====== CAROUSEL ======
function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.category-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.carousel-dot');
    
    function goToSlide(index) {
        currentSlide = index;
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// ====== FILTERS ======
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.querySelector('.sort-select');
    const loadMoreBtn = document.querySelector('#loadMoreTemples');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter places
            const filter = button.getAttribute('data-filter');
            filterPlaces(filter);
        });
    });
    
    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        sortPlaces(sortBy);
    });
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePlaces);
    }
}

function filterPlaces(filter) {
    const places = document.querySelectorAll('.place-card');
    
    places.forEach(place => {
        if (filter === 'all' || place.getAttribute('data-category').includes(filter)) {
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

function sortPlaces(sortBy) {
    const container = document.querySelector('.places-grid');
    const places = Array.from(document.querySelectorAll('.place-card'));
    
    places.sort((a, b) => {
        const aRating = parseFloat(a.querySelector('.rating-text').textContent);
        const bRating = parseFloat(b.querySelector('.rating-text').textContent);
        const aName = a.querySelector('.place-title').textContent;
        const bName = b.querySelector('.place-title').textContent;
        
        switch(sortBy) {
            case 'rating':
                return bRating - aRating;
            case 'name':
                return aName.localeCompare(bName);
            case 'newest':
                return b.getAttribute('data-id') - a.getAttribute('data-id');
            default: // popular
                return 0;
        }
    });
    
    // Reorder places
    places.forEach(place => container.appendChild(place));
}

function loadMorePlaces() {
    // This would load more places from the database
    const btn = document.querySelector('#loadMoreTemples');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    btn.disabled = true;
    
    setTimeout(() => {
        // Simulate loading more places
        btn.innerHTML = '<i class="fas fa-check"></i> All Temples Loaded';
        btn.style.background = 'var(--secondary-500)';
        btn.disabled = true;
    }, 1500);
}

// ====== MODAL SYSTEM ======
function initModal() {
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal-close');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
    
    // Initialize action buttons
    initModalActions();
}

function showPlaceDetails(placeId) {
    const modal = document.querySelector('.modal');
    const place = findPlaceById(placeId);
    
    if (!place) return;
    
    // Update modal content
    updateModalContent(place);
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Show nearby places notification after 30 seconds
    setTimeout(() => {
        showNearbyNotification(place);
    }, 30000);
}

function findPlaceById(id) {
    for (const category in delhiPlaces) {
        const place = delhiPlaces[category].find(p => p.id === id);
        if (place) return place;
    }
    return null;
}

function updateModalContent(place) {
    // Basic info
    document.getElementById('modalTitle').textContent = place.name;
    document.getElementById('modalCategory').textContent = place.category.toUpperCase();
    document.getElementById('modalRatingValue').textContent = place.rating;
    document.getElementById('reviewCount').textContent = place.reviews.toLocaleString();
    
    // Overview tab
    document.getElementById('modalMainImage').src = place.photos[0];
    document.getElementById('modalMainImage').alt = place.name;
    document.getElementById('summaryTimings').textContent = `${place.timings.open} - ${place.timings.close}`;
    document.getElementById('summaryFee').textContent = place.entryFees.adult === 0 ? 'Free' : `₹${place.entryFees.adult}`;
    document.getElementById('summaryMetro').textContent = place.location.metro;
    document.getElementById('summaryParking').textContent = place.location.parking;
    document.getElementById('modalDescription').textContent = place.description;
    
    // Details tab
    document.getElementById('historicalInfo').textContent = place.history;
    document.getElementById('architectureInfo').textContent = place.architecture;
    document.getElementById('bestTime').textContent = place.timings.bestTime;
    document.getElementById('timeRequired').textContent = place.timings.duration;
    document.getElementById('photographyRules').textContent = place.entryFees.camera === 0 ? 'Allowed' : `₹${place.entryFees.camera} fee`;
    document.getElementById('guidesAvailable').textContent = place.entryFees.audioGuide === 0 ? 'Not Available' : `₹${place.entryFees.audioGuide}`;
    
    // Facilities
    const facilitiesList = document.getElementById('facilitiesList');
    facilitiesList.innerHTML = place.facilities.map(facility => `
        <div class="facility-item">
            <i class="fas fa-check"></i>
            <span>${facility}</span>
        </div>
    `).join('');
    
    // Photos
    const photosGrid = document.getElementById('photosGrid');
    photosGrid.innerHTML = place.photos.map((photo, index) => `
        <div class="photo-item" onclick="openPhotoViewer(${place.id}, ${index})">
            <img src="${photo}" alt="${place.name} - Photo ${index + 1}">
        </div>
    `).join('');
    
    // Reviews (simulated)
    updateReviews(place);
    
    // Nearby places
    updateNearbyPlaces(place);
    
    // Update stars
    updateStars(place.rating);
}

function updateStars(rating) {
    const starsContainer = document.getElementById('modalStars');
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    starsContainer.innerHTML = starsHTML;
}

function updateReviews(place) {
    const reviewsList = document.getElementById('reviewsList');
    
    // Simulated reviews
    const reviews = [
        {
            name: "Rahul Sharma",
            rating: 5,
            date: "2 weeks ago",
            comment: "Absolutely breathtaking! The architecture and spiritual atmosphere left me speechless. A must-visit in Delhi."
        },
        {
            name: "Priya Patel",
            rating: 4,
            date: "1 month ago",
            comment: "Beautiful place but very crowded on weekends. Best to visit on weekdays. The musical fountain show is amazing!"
        },
        {
            name: "Amit Kumar",
            rating: 5,
            date: "3 days ago",
            comment: "Well maintained, clean, and peaceful. The staff is very helpful. Great for family visits."
        }
    ];
    
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">
                        <img src="https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}" alt="${review.name}">
                    </div>
                    <div>
                        <h5>${review.name}</h5>
                        <div class="stars">
                            ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
                        </div>
                    </div>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-content">
                <p>${review.comment}</p>
            </div>
        </div>
    `).join('');
}

function updateNearbyPlaces(place) {
    const nearbyGrid = document.getElementById('nearbyGrid');
    
    if (!place.nearby || place.nearby.length === 0) {
        nearbyGrid.innerHTML = '<p>No nearby places found.</p>';
        return;
    }
    
    const nearbyPlaces = place.nearby.map(id => findPlaceById(id)).filter(p => p);
    
    nearbyGrid.innerHTML = nearbyPlaces.map(nearPlace => `
        <div class="nearby-place-card" onclick="showPlaceDetails(${nearPlace.id})">
            <div class="nearby-place-image">
                <img src="${nearPlace.photos[0]}" alt="${nearPlace.name}">
            </div>
            <div class="nearby-place-content">
                <h5>${nearPlace.name}</h5>
                <p>${nearPlace.category}</p>
                <div class="nearby-place-meta">
                    <span><i class="fas fa-star"></i> ${nearPlace.rating}</span>
                    <span><i class="fas fa-walking"></i> 1.2 km</span>
                </div>
            </div>
        </div>
    `).join('');
}

function initModalActions() {
    // Get Directions
    document.getElementById('getDirectionsBtn').addEventListener('click', function() {
        const placeName = document.getElementById('modalTitle').textContent;
        alert(`Opening directions to ${placeName} in Google Maps...`);
        // In real implementation: window.open(`https://maps.google.com/?q=${placeName}`);
    });
    
    // Save to Itinerary
    document.getElementById('saveToItineraryBtn').addEventListener('click', function() {
        const placeName = document.getElementById('modalTitle').textContent;
        showNotification(`Added ${placeName} to your itinerary!`, 'success');
    });
    
    // Share Place
    document.getElementById('sharePlaceBtn').addEventListener('click', function() {
        const placeName = document.getElementById('modalTitle').textContent;
        if (navigator.share) {
            navigator.share({
                title: placeName,
                text: `Check out ${placeName} on Explorer Hub!`,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(`${placeName} - ${window.location.href}`);
            showNotification('Link copied to clipboard!', 'info');
        }
    });
}

// ====== NOTIFICATION SYSTEM ======
function initNotifications() {
    const closeBtn = document.querySelector('.close-notification');
    const closeBtn2 = document.querySelector('#closeNotification');
    const viewAllBtn = document.querySelector('#viewAllNearby');
    
    closeBtn.addEventListener('click', hideNotification);
    closeBtn2.addEventListener('click', hideNotification);
    
    viewAllBtn.addEventListener('click', () => {
        hideNotification();
        // In real implementation, this would open the nearby tab in modal
        alert('Showing all nearby places...');
    });
}

function showNearbyNotification(place) {
    if (!place.nearby || place.nearby.length === 0) return;
    
    const popup = document.getElementById('notificationPopup');
    const nearbyList = document.getElementById('nearbyPlacesList');
    
    // Get nearby places
    const nearbyPlaces = place.nearby.slice(0, 3).map(id => findPlaceById(id)).filter(p => p);
    
    nearbyList.innerHTML = nearbyPlaces.map(nearPlace => `
        <div class="nearby-place-item" onclick="showPlaceDetails(${nearPlace.id}); hideNotification();">
            <div class="nearby-place-image">
                <img src="${nearPlace.photos[0]}" alt="${nearPlace.name}">
            </div>
            <div class="nearby-place-info">
                <h5>${nearPlace.name}</h5>
                <p>${nearPlace.category} • ${nearPlace.rating} ★</p>
                <p class="distance"><i class="fas fa-walking"></i> 1-2 km away</p>
            </div>
        </div>
    `).join('');
    
    // Show notification with animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 100);
}

function hideNotification() {
    const popup = document.getElementById('notificationPopup');
    popup.classList.remove('show');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 300);
    });
}

// ====== BACK TO TOP ======
function initBackToTop() {
    const button = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ====== SEARCH FUNCTIONALITY ======
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    
    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchInput.focus();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
            searchPlaces(query);
        }
    }, 300));
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

function searchPlaces(query) {
    const allPlaces = [];
    for (const category in delhiPlaces) {
        allPlaces.push(...delhiPlaces[category]);
    }
    
    const results = allPlaces.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        place.tags.some(tag => tag.includes(query))
    );
    
    // In a real app, you would display these results
    if (results.length > 0) {
        console.log(`Found ${results.length} places matching "${query}"`);
    }
}

// ====== PLACE LOADING ======
function loadPlaces(category) {
    const places = delhiPlaces[category] || [];
    const grid = document.querySelector('.places-grid');
    
    if (!grid) return;
    
    // Clear existing places
    grid.innerHTML = '';
    
    // Load first 6 places
    const placesToShow = places.slice(0, 6);
    
    placesToShow.forEach(place => {
        const card = createPlaceCard(place);
        grid.appendChild(card);
    });
}

function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card detailed-card';
    card.setAttribute('data-id', place.id);
    card.setAttribute('data-category', place.subcategory);
    
    // Determine badges
    let badgesHTML = '';
    if (place.rating >= 4.7) badgesHTML += '<span class="badge popular"><i class="fas fa-fire"></i> Most Popular</span>';
    if (place.entryFees.adult === 0) badgesHTML += '<span class="badge free"><i class="fas fa-rupee-sign"></i> Free Entry</span>';
    if (place.tags.includes('must-visit')) badgesHTML += '<span class="badge must-visit"><i class="fas fa-crown"></i> Must Visit</span>';
    
    card.innerHTML = `
        <div class="card-badge">${badgesHTML}</div>
        <div class="place-image">
            <img src="${place.photos[0]}" alt="${place.name}">
            <div class="image-overlay">
                <button class="quick-view" onclick="showPlaceDetails(${place.id})">
                    <i class="fas fa-expand"></i> Quick View
                </button>
            </div>
            <div class="place-rating">
                <div class="stars">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(place.rating))}
                    ${place.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(place.rating))}
                </div>
                <span class="rating-text">${place.rating}/5</span>
            </div>
        </div>
        <div class="place-content">
            <div class="place-header">
                <h3 class="place-title">${place.name}</h3>
                <div class="place-tags">
                    ${place.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <p class="place-description">${place.description.substring(0, 150)}...</p>
            <div class="place-meta">
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${place.location.address.split(',')[0]}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${place.timings.open} - ${place.timings.close}</span>
                </div>
            </div>
            <div class="place-actions">
                <button class="btn-primary" onclick="showPlaceDetails(${place.id})">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
                <button class="btn-secondary save-place" data-place="${place.id}">
                    <i class="far fa-heart"></i> Save
                </button>
                <button class="btn-tertiary" onclick="showDirections(${place.id})">
                    <i class="fas fa-directions"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// ====== UTILITY FUNCTIONS ======
function showDirections(placeId) {
    const place = findPlaceById(placeId);
    if (place) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${place.location.coordinates.lat},${place.location.coordinates.lng}`;
        window.open(url, '_blank');
    }
}

function openPhotoViewer(placeId, photoIndex) {
    const place = findPlaceById(placeId);
    if (place) {
        // In a real app, this would open a photo viewer modal
        alert(`Opening photo ${photoIndex + 1} of ${place.name}`);
    }
}

// ====== WINDOW EVENTS ======
window.addEventListener('scroll', () => {
    // Animate elements on scroll
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.classList.add('animated');
        }
    });
});

// Export functions for HTML onclick
window.showPlaceDetails = showPlaceDetails;
window.showDirections = showDirections;
window.openPhotoViewer = openPhotoViewer;