export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form className="search-bar">
      <input
        className="search-input"
        type="text"
        value={filterText}
        placeholder="Search for items..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label className="stock-label">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}