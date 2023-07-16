const SearchBar = (props) => {
  return (
    <input
      type="text"
      id="baby-search"
      key="search-bar"
      value={props.keyword}
      className="form-control"
      placeholder="Customer name"
      onChange={(e) => {
        props.search(e.target.value);
      }}
    />
  );
};
export default SearchBar;
