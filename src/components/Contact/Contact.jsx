import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.contactWrapper}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
