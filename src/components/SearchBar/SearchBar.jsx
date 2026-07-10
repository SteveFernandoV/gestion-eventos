import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar evento..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;