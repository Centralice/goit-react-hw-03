import s from "./Contact.module.css";

const Contact = ({contact}) => {
  return (
    <li className={s.contactWrapper}>
      <div className={s.data}>
        <p className={s.name}>{contact.name}</p>
        <p className={s.phoneNumber}>{contact.number}</p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
