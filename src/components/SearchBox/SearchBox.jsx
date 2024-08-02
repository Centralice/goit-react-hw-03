import s from "./SearchBox.module.css";
import { useId, useState } from "react";

const SearchBox = ({ value, onSearch }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Search by name 🔎</label>
      <input
        type="text"
        id={id}
        name="input"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
