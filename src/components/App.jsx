import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "../contacts.json";
import { useState } from "react";

const App = () => {

const [contacts, setContacts] = useState(contactsData);

  return (
    <div>
      <h1>Phonebook ☎️</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
