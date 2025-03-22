function Header({ name, activeTab, setActiveTab }) {
    return (
      <header className="header">
        <h1 className="individual-name">{name}</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={activeTab === "about" ? "active" : ""} 
                onClick={() => setActiveTab("about")}>
                About Me
              </button>
            </li>
            <li>
              <button 
                className={activeTab === "portfolio" ? "active" : ""} 
                onClick={() => setActiveTab("portfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button 
                className={activeTab === "contact" ? "active" : ""} 
                onClick={() => setActiveTab("contact")}>
                Contact
              </button>
            </li>
            <li>
              <button 
                className={activeTab === "resume" ? "active" : ""} 
                onClick={() => setActiveTab("resume")}>
                Resume
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  