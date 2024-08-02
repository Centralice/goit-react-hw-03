import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "../contacts.json";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(contactsData);

  const [searchQuery, setSearchQuery] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactID) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactID);
    });
  };

  return (
    <div>
      <h1>Phonebook ☎️</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
