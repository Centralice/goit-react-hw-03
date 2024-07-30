import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = (props) => {
  return (
    <ul>
      {props.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
