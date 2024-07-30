import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactData from "../contacts.json";
import Contact from "./Contact/Contact";

const App = () => {

  // const [contacts, setContacts] = useState(contactData);

  return (
    <div>
      <h1>Phonebook ☎️</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
    </div>
  );
};

export default App;
