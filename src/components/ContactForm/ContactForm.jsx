import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({onAdd}) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Cmon, u can do this")
      .max(50, "Cat on the keyboard detected")
      .required("Required"),
    number: Yup.string()
      .min(3, "I doubt it")
      .max(50, "Congratulations. You've just won the best waste of time prize")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const NameInputId = useId();
  const NumberInputId = useId();

  const handleSubmit = (values, actions) => {
    console.log({name: values.name, number: values.numberб id: });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <label htmlFor={NameInputId}>Name</label>
          <Field id={NameInputId} className={s.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={NumberInputId}>Number</label>
          <Field
            id={NumberInputId}
            className={s.input}
            type="number"
            name="number"
          />
          <ErrorMessage name="number" component="span" />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
