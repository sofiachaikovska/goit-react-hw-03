import css from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfoContainer}>
        <p>
          <span className={css.contactAccent}>Name:</span> {contact.name}
        </p>
        <p>
          <span className={css.contactAccent}>Number:</span> {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
