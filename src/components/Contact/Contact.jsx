import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <li>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
