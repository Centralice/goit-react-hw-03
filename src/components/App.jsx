import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "../contacts.json";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(contactsData);

  const [searchQuery, setSearchQuery] = useState("");

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <h1>Phonebook ☎️</h1>
      <ContactForm />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
};

export default App;
