// Create animated background particles
const createParticles = () => {
    const bgAnimation = document.createElement('div');
    bgAnimation.className = 'bg-animation';
    bgAnimation.id = 'bgAnimation';
    document.body.prepend(bgAnimation);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        bgAnimation.appendChild(particle);
    }
};

// Library Database
const libraryData = {
    books: [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, category: "Fiction", status: "available", isbn: "9780743273565", pages: 218, rating: 4.2, coverColor: "#FF6B6B" },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, category: "Fiction", status: "available", isbn: "9780061120084", pages: 324, rating: 4.3, coverColor: "#4ECDC4" },
        { id: 3, title: "1984", author: "George Orwell", year: 1949, category: "Dystopian", status: "checked-out", isbn: "9780451524935", pages: 328, rating: 4.1, coverColor: "#45B7D1" },
        { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, category: "Romance", status: "available", isbn: "9780141439518", pages: 432, rating: 4.2, coverColor: "#96CEB4" },
        { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, category: "Fiction", status: "available", isbn: "9780316769488", pages: 277, rating: 3.8, coverColor: "#FFEAA7" },
        { id: 6, title: "Brave New World", author: "Aldous Huxley", year: 1932, category: "Dystopian", status: "checked-out", isbn: "9780060850524", pages: 311, rating: 4.0, coverColor: "#DDA0DD" },
        { id: 7, title: "Moby-Dick", author: "Herman Melville", year: 1851, category: "Adventure", status: "available", isbn: "9780142437247", pages: 720, rating: 3.5, coverColor: "#98D8C8" },
        { id: 8, title: "War and Peace", author: "Leo Tolstoy", year: 1869, category: "Historical", status: "available", isbn: "9780199232765", pages: 1392, rating: 4.1, coverColor: "#F7DC6F" },
        { id: 9, title: "The Odyssey", author: "Homer", year: -800, category: "Epic", status: "available", isbn: "9780140268867", pages: 541, rating: 3.7, coverColor: "#BB8FCE" },
        { id: 10, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, category: "Philosophical", status: "checked-out", isbn: "9780143058144", pages: 671, rating: 4.2, coverColor: "#85C1E9" }
    ],
    
    teamMembers: [
        { id: 1, name: "Alex Johnson", role: "Project Lead", initials: "AJ", expertise: "Database Architecture", projects: 12 },
        { id: 2, name: "Maria Garcia", role: "Database Architect", initials: "MG", expertise: "Query Optimization", projects: 8 },
        { id: 3, name: "David Chen", role: "Frontend Developer", initials: "DC", expertise: "React & Performance", projects: 15 },
        { id: 4, name: "Sarah Williams", role: "Backend Developer", initials: "SW", expertise: "API Design", projects: 10 },
        { id: 5, name: "James Wilson", role: "UI/UX Designer", initials: "JW", expertise: "Design Systems", projects: 9 },
        { id: 6, name: "Lisa Brown", role: "Quality Assurance", initials: "LB", expertise: "Testing Automation", projects: 7 }
    ],
    
    stats: {
        totalBooks: 12543,
        availableBooks: 8432,
        checkedOut: 4111,
        members: 3245,
        monthlyVisits: 12890,
        searchEfficiency: 40,
        avgSearchTime: 0.72,
        oldSearchTime: 1.2,
        queriesPerDay: 28500,
        storageSaved: "2.3TB"
    }
};

// Dashboard Component
function Dashboard() {
    return (
        <div>
            {/* Efficiency Metric */}
            <div className="efficiency-metric fade-in-up">
                <div className="metric-content">
                    <h2>Database Optimization Achievement</h2>
                    <div className="metric-value">{libraryData.stats.searchEfficiency}%</div>
                    <div className="metric-detail">
                        <div className="metric-detail-item">
                            <div className="metric-detail-value">{libraryData.stats.avgSearchTime}s</div>
                            <div className="metric-detail-label">Avg Search Time</div>
                        </div>
                        <div className="metric-detail-item">
                            <div className="metric-detail-value">{libraryData.stats.oldSearchTime}s</div>
                            <div className="metric-detail-label">Previous System</div>
                        </div>
                        <div className="metric-detail-item">
                            <div className="metric-detail-value">{libraryData.stats.queriesPerDay.toLocaleString()}</div>
                            <div className="metric-detail-label">Queries/Day</div>
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '5rem', opacity: 0.2 }}>
                    <i className="fas fa-rocket"></i>
                </div>
            </div>

            {/* Dashboard Cards */}
            <div className="dashboard-cards">
                <div className="card fade-in-up delay-1">
                    <div className="card-header">
                        <h3>Total Books</h3>
                        <div className="card-icon">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <div className="card-value">{libraryData.stats.totalBooks.toLocaleString()}</div>
                    <div className="card-trend trend-up">
                        <i className="fas fa-arrow-up"></i>
                        <span>12% from last year</span>
                    </div>
                </div>
                
                <div className="card fade-in-up delay-2">
                    <div className="card-header">
                        <h3>Available Books</h3>
                        <div className="card-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                    </div>
                    <div className="card-value">{libraryData.stats.availableBooks.toLocaleString()}</div>
                    <div className="card-trend trend-up">
                        <i className="fas fa-arrow-up"></i>
                        <span>67% availability rate</span>
                    </div>
                </div>
                
                <div className="card fade-in-up delay-3">
                    <div className="card-header">
                        <h3>Library Members</h3>
                        <div className="card-icon">
                            <i className="fas fa-users"></i>
                        </div>
                    </div>
                    <div className="card-value">{libraryData.stats.members.toLocaleString()}</div>
                    <div className="card-trend trend-up">
                        <i className="fas fa-arrow-up"></i>
                        <span>8% from last month</span>
                    </div>
                </div>
                
                <div className="card fade-in-up delay-4">
                    <div className="card-header">
                        <h3>Monthly Visits</h3>
                        <div className="card-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                    </div>
                    <div className="card-value">{libraryData.stats.monthlyVisits.toLocaleString()}</div>
                    <div className="card-trend trend-up">
                        <i className="fas fa-arrow-up"></i>
                        <span>15% from last month</span>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="search-container">
                <h2>Recent Activity</h2>
                <div style={{ marginTop: '20px' }}>
                    {[
                        { id: 1, user: "John Doe", action: "checked out", book: "The Great Gatsby", time: "2 hours ago" },
                        { id: 2, user: "Jane Smith", action: "returned", book: "1984", time: "4 hours ago" },
                        { id: 3, user: "Bob Johnson", action: "reserved", book: "The Hobbit", time: "1 day ago" },
                        { id: 4, user: "Alice Brown", action: "checked out", book: "Pride and Prejudice", time: "2 days ago" }
                    ].map(activity => (
                        <div key={activity.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '15px',
                            borderBottom: '1px solid #eee',
                            gap: '15px'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #4361ee, #7209b7)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: '600'
                            }}>
                                {activity.user.charAt(0)}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600' }}>{activity.user}</div>
                                <div style={{ color: '#6c757d' }}>
                                    {activity.action} "{activity.book}"
                                </div>
                            </div>
                            <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>{activity.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Search Component
function SearchComponent() {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState(libraryData.books);
    const [filters, setFilters] = React.useState({});
    const [searchTime, setSearchTime] = React.useState(libraryData.stats.avgSearchTime);
    const [isSearching, setIsSearching] = React.useState(false);

    const handleSearch = () => {
        if (!query.trim() && Object.keys(filters).length === 0) {
            setResults(libraryData.books);
            return;
        }

        setIsSearching(true);
        const startTime = performance.now();

        // Simulate search with delay
        setTimeout(() => {
            const queryLower = query.toLowerCase();
            const searchResults = libraryData.books.filter(book => {
                // Text search
                const matchesQuery = !query || 
                    book.title.toLowerCase().includes(queryLower) ||
                    book.author.toLowerCase().includes(queryLower) ||
                    book.category.toLowerCase().includes(queryLower);
                
                // Filter matching
                const matchesCategory = !filters.category || book.category === filters.category;
                const matchesStatus = !filters.status || book.status === filters.status;
                
                return matchesQuery && matchesCategory && matchesStatus;
            });
            
            const endTime = performance.now();
            
            setSearchTime(((endTime - startTime) / 1000).toFixed(2));
            setResults(searchResults);
            setIsSearching(false);
        }, 300);
    };

    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...filters };
        if (value === 'all') {
            delete newFilters[filterType];
        } else {
            newFilters[filterType] = value;
        }
        setFilters(newFilters);
    };

    React.useEffect(() => {
        handleSearch();
    }, [filters]);

    const BookCard = ({ book }) => {
        const firstLetter = book.title.charAt(0);
        
        return (
            <div className="book-card fade-in-up">
                <div className="book-cover" style={{ background: book.coverColor }}>
                    <span>{firstLetter}</span>
                </div>
                <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <div className="book-author">{book.author} • {book.year}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <span className="book-category">{book.category}</span>
                        <div className={`book-status status-${book.status === 'available' ? 'available' : 'checked-out'}`}>
                            {book.status === 'available' ? 'Available' : 'Checked Out'}
                        </div>
                    </div>
                    <div className="book-meta">
                        <div>
                            <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>ISBN: {book.isbn}</div>
                            <div style={{ fontSize: '0.85rem', color: '#6c757d', marginTop: '5px' }}>
                                <i className="fas fa-star" style={{ color: '#FFD700' }}></i> {book.rating} • {book.pages} pages
                            </div>
                        </div>
                        <button style={{
                            padding: '8px 15px',
                            background: 'linear-gradient(135deg, #4361ee, #7209b7)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: '600'
                        }}>
                            {book.status === 'available' ? 'Borrow' : 'Reserve'}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="search-container fade-in-up">
            <div className="search-header">
                <h2>Advanced Book Search</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                        Search time: <strong>{searchTime}s</strong> (40% faster)
                    </div>
                </div>
            </div>
            
            <div className="search-box">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by title, author, category, or ISBN..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button className="search-btn" onClick={handleSearch} disabled={isSearching}>
                    <i className="fas fa-search"></i>
                    {isSearching ? 'Searching...' : 'Search'}
                </button>
            </div>
            
            <div className="filter-options">
                <button 
                    className={`filter-btn ${!filters.category ? 'active' : ''}`}
                    onClick={() => handleFilterChange('category', 'all')}
                >
                    All Categories
                </button>
                <button 
                    className={`filter-btn ${filters.category === 'Fiction' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('category', 'Fiction')}
                >
                    Fiction
                </button>
                <button 
                    className={`filter-btn ${filters.category === 'Fantasy' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('category', 'Fantasy')}
                >
                    Fantasy
                </button>
                <button 
                    className={`filter-btn ${filters.status === 'available' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('status', 'available')}
                >
                    Available Only
                </button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Search Results ({results.length} books)</h3>
                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                    Showing optimized results (40% faster retrieval)
                </div>
            </div>
            
            <div className="results-container">
                {results.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

// Performance Chart Component
function PerformanceChart() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    
    const performanceData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        oldSystem: [1.2, 1.18, 1.22, 1.25, 1.19, 1.21, 1.23, 1.24, 1.2, 1.22, 1.21, 1.23],
        newSystem: [1.2, 1.1, 0.95, 0.85, 0.78, 0.74, 0.72, 0.71, 0.7, 0.71, 0.72, 0.7]
    };
    
    const maxValue = Math.max(...performanceData.oldSystem);
    const chartHeight = 300;
    
    return (
        <div className="performance-chart fade-in-up">
            <h2>Performance Improvement Over Time</h2>
            <p>Visual representation of the 40% improvement in resource retrieval efficiency</p>
            
            <div className="chart-container">
                {performanceData.labels.map((label, index) => {
                    const oldHeight = (performanceData.oldSystem[index] / maxValue) * chartHeight;
                    const newHeight = (performanceData.newSystem[index] / maxValue) * chartHeight;
                    const leftPosition = (index * 70) + 50;
                    
                    return (
                        <div key={index} style={{ position: 'absolute', left: `${leftPosition}px`, bottom: '0' }}>
                            <div 
                                className="chart-bar" 
                                style={{ 
                                    height: `${oldHeight}px`,
                                    background: 'linear-gradient(180deg, #6c757d, #495057)',
                                    left: '-25px'
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#212529',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        fontSize: '0.8rem',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        Old: {performanceData.oldSystem[index]}s
                                    </div>
                                )}
                            </div>
                            <div 
                                className="chart-bar" 
                                style={{ 
                                    height: `${newHeight}px`,
                                    background: 'linear-gradient(180deg, #4361ee, #3a56d4)',
                                    left: '25px'
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#4361ee',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        fontSize: '0.8rem',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        New: {performanceData.newSystem[index]}s
                                    </div>
                                )}
                            </div>
                            <div className="chart-label">{label}</div>
                        </div>
                    );
                })}
            </div>
            
            <div style={{ display: 'flex', gap: '30px', marginTop: '60px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', background: '#4361ee', borderRadius: '4px' }}></div>
                    <span>Optimized System</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', background: '#6c757d', borderRadius: '4px' }}></div>
                    <span>Previous System</span>
                </div>
            </div>
        </div>
    );
}

// Team Component
function TeamComponent() {
    return (
        <div>
            <div className="search-container fade-in-up">
                <h2>Project Team</h2>
                <p>The team responsible for the 40% efficiency improvement in the library database system</p>
                
                <div className="team-grid" style={{ marginTop: '30px' }}>
                    {libraryData.teamMembers.map(member => (
                        <div key={member.id} className="team-member fade-in-up">
                            <div className="member-avatar">{member.initials}</div>
                            <h3 style={{ marginBottom: '10px' }}>{member.name}</h3>
                            <div className="member-role">{member.role}</div>
                            <div style={{ marginTop: '15px', color: '#6c757d' }}>
                                <div style={{ marginBottom: '5px' }}>
                                    <i className="fas fa-star" style={{ color: '#FFD700', marginRight: '5px' }}></i>
                                    Expertise: {member.expertise}
                                </div>
                                <div>
                                    <i className="fas fa-project-diagram" style={{ marginRight: '5px' }}></i>
                                    Projects: {member.projects}
                                </div>
                            </div>
                            <button style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                background: 'rgba(67, 97, 238, 0.1)',
                                color: '#4361ee',
                                border: 'none',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                width: '100%'
                            }}>
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="performance-chart" style={{ marginTop: '40px' }}>
                <h2>Project Timeline & Achievements</h2>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ position: 'relative', paddingLeft: '30px' }}>
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            bottom: '0',
                            width: '3px',
                            background: 'linear-gradient(180deg, #4361ee, #7209b7)'
                        }}></div>
                        
                        {[
                            { phase: "Phase 1: Analysis & Planning", duration: "Weeks 1-2", desc: "Identified bottlenecks and established optimization goals" },
                            { phase: "Phase 2: Database Restructuring", duration: "Weeks 3-5", desc: "Redesigned schema and implemented new indexing strategies" },
                            { phase: "Phase 3: System Implementation", duration: "Weeks 6-8", desc: "Deployed optimized database with frontend integration" },
                            { phase: "Phase 4: Testing & Validation", duration: "Weeks 9-10", desc: "Rigorous testing confirmed 40% efficiency improvement" }
                        ].map((phase, index) => (
                            <div key={index} style={{ marginBottom: '30px', position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-36px',
                                    top: '0',
                                    width: '15px',
                                    height: '15px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #4361ee, #7209b7)',
                                    border: '3px solid white'
                                }}></div>
                                <h3 style={{ marginBottom: '5px' }}>{phase.phase}</h3>
                                <div style={{ color: '#4361ee', fontWeight: '600', marginBottom: '5px' }}>{phase.duration}</div>
                                <div style={{ color: '#6c757d' }}>{phase.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main App Component
function App() {
    const [activeTab, setActiveTab] = React.useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    React.useEffect(() => {
        createParticles();
    }, []);

    const tabComponents = {
        dashboard: <Dashboard />,
        search: <SearchComponent />,
        performance: <PerformanceChart />,
        team: <TeamComponent />
    };

    const pageTitles = {
        dashboard: "Library Dashboard",
        search: "Advanced Book Search",
        performance: "Performance Metrics",
        team: "Project Team"
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (window.innerWidth <= 1200) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="app-container">
            <button 
                className="mobile-menu-toggle" 
                id="mobileMenuToggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <i className={`fas fa-${sidebarOpen ? 'times' : 'bars'}`}></i>
            </button>
            
            <nav className={`sidebar ${sidebarOpen ? 'active' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="logo-text">
                        <h2>LibraBase Pro</h2>
                        <span>Database System</span>
                    </div>
                </div>
                
                <div className="nav-menu">
                    {Object.keys(pageTitles).map(tab => (
                        <div 
                            key={tab}
                            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            <i className={`fas fa-${
                                tab === 'dashboard' ? 'tachometer-alt' :
                                tab === 'search' ? 'search' :
                                tab === 'performance' ? 'rocket' :
                                'users'
                            }`}></i>
                            <span>{pageTitles[tab]}</span>
                        </div>
                    ))}
                </div>
                
                <div className="portfolio-section">
                    <h3>My Portfolio</h3>
                    <div className="portfolio-link">
                        <i className="fas fa-user"></i>
                        <span>About Me</span>
                    </div>
                    <div className="portfolio-link">
                        <i className="fas fa-briefcase"></i>
                        <span>Projects</span>
                    </div>
                    <div className="portfolio-link">
                        <i className="fas fa-envelope"></i>
                        <span>Contact</span>
                    </div>
                    <div className="portfolio-link">
                        <i className="fas fa-file-download"></i>
                        <span>Resume</span>
                    </div>
                </div>
                
                <div className="portfolio-section">
                    <h3>System Status</h3>
                    <div className="performance-stats">
                        <div className="stat-item">
                            <div className="stat-value">99.8%</div>
                            <div className="stat-label">Uptime</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">40%</div>
                            <div className="stat-label">Faster</div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <main className="main-content" id="mainContent">
                <header className="header">
                    <h1 id="pageTitle">{pageTitles[activeTab]}</h1>
                    <div className="header-controls">
                        <div className="user-profile">
                            <div className="user-avatar">AJ</div>
                            <div>
                                <div style={{ fontWeight: '600' }}>Alex Johnson</div>
                                <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>Project Lead</div>
                            </div>
                            <i className="fas fa-chevron-down" style={{ marginLeft: '10px' }}></i>
                        </div>
                    </div>
                </header>
                
                {tabComponents[activeTab]}
                
                <footer className="footer">
                    <p>Advanced Library Database System v4.0 • Optimized for Performance • 40% Faster Resource Retrieval</p>
                    <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        This system demonstrates database optimization that improved efficiency by 40%
                    </p>
                </footer>
            </main>
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
