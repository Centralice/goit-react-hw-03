import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <li className={s.contactWrapper}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
