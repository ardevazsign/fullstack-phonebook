import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperation';
import { selectContacts } from '../../redux/contacts/contactsSelector';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || phone.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, phone }));

    // Reset form field
    setName('');
    setPhone('');
  };

  return (
    <div className={css.contactsContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formField}>
          <p className={css.formLabel}>Name</p>
          <input
            className={css.contactFormInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            placeholder="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className={css.formField}>
          <p className={css.formLabel}>Phone</p>
          <input
            className={css.contactFormInput}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spacess, dashes, parentheses and can start with +"
            required
            placeholder="Number"
            value={phone}
            onChange={handlePhoneChange}
          />
        </label>

        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};
