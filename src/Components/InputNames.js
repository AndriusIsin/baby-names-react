const InputNames = ({ setKeyword }) => {
  return (
    <input
      type="text"
      id="baby-search"
      key="search-bar"
      className="form-control"
      placeholder="Baby name..."
      onChange={(e) => {
        setKeyword(e.target.value);
      }}
    />
  );
};
export default InputNames;
