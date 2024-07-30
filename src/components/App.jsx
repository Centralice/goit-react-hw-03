import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contacts from "../contacts.json";

const App = () => {
  
  const [contacts, setContacts]

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
