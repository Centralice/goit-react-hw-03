import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "../contacts.json";
import { useState } from "react";

const App = () => {

const [contacts, setContacts] = useState(contactsData);

const [inputValue, setInputValue] = useState("");

const handleInput = (e) => {
  setInputValue(e.target.value);
};



  return (
    <div>
      <h1>Phonebook ☎️</h1>
      <ContactForm />
      <SearchBox inputValue={inputValue} handleInput={handleInput} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
