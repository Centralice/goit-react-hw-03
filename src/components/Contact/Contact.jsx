import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={s.data}>
        <p className={s.name}>Alice Margis</p>
        <p className={s.phoneNumber}>9379992</p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
