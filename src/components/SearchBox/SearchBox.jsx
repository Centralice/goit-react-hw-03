import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {

  return (
    <div>
      <label>Search by name 🔎</label>
      <input
        type="text"
        name="input"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
