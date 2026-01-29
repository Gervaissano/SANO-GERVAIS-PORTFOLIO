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
           
