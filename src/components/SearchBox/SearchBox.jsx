import s from "./SearchBox.module.css";
import { useId, useState } from "react";

const SearchBox = ({ inputValue, handleInput }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Search by name 🔎</label>
      <input
        onChange={handleInput}
        type="text"
        id={id}
        name="input"
        value={inputValue}
      />
    </div>
  );
};

export default SearchBox;
