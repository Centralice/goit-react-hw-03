import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "../contacts.json";
import { useState, useEffect } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (window.localStorage.length) {
      return JSON.parse(savedContacts);
    }
    return contactsData;
  });

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

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

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
