import s from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="name"  />
        <Field type="number" name="number"  />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;