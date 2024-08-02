import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Search by name 🔎</label>
      <input
        className={s.input}
        type="text"
        name="input"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
