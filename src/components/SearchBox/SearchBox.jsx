import s from "./SearchBox.module.css";
import { useId, useState } from "react";

const SearchBox = () => {

  const id = useId();

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <label htmlFor={id}>Search by name 🔎</label>
      <input onChange={handleInput} type="text" id={id} name="input" value={inputValue} />
    </div>
  );
};

export default SearchBox;
