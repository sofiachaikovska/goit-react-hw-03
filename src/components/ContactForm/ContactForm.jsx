import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAddContact }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.formItem}>
          <span className={css.formTitle}>Name</span>
          <Field type="text" name="name" className={css.formField}></Field>
          <ErrorMessage
            name="name"
            component="p"
            className={css.formErrorMessage}
          />
        </label>
        <label className={css.formItem}>
          <span className={css.formTitle}>Number</span>
          <Field type="tel" name="number" className={css.formField}></Field>
          <ErrorMessage
            name="number"
            component="p"
            className={css.formErrorMessage}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
