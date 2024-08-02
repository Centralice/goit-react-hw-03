import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = (props) => {
  return (
    <ul className={s.wrapper}>
      {props.contacts.map((contact) => (
        <Contact onDelete={props.onDelete} key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
