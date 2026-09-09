export default function SearchBox({ isActive, onToggle }) {
  return (
    <div className={`search-container${isActive ? ' active' : ''}`} data-search-container>

      <div className="search-box">
        <input type="search" name="search" aria-label="Search here" placeholder="Type keywords here..."
          className="search-input" />

        <button className="search-submit" aria-label="Submit search" data-search-submit-btn onClick={onToggle}>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>

      <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn onClick={onToggle}></button>

    </div>
  )
}
