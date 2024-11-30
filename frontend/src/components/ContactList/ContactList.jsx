import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// prettier-ignore
import { selectFilteredContacts, selectError, selectIsLoading } from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { Loader } from '../Loader/Loader';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {/*    if loading and not error, show Loader    */}
      {isLoading && !error && <Loader />}

      {/*  if not loading, not error and filtered contacts is empty, show warning */}
      {!isLoading && !error && filterContacts.length === 0 && (
        <p>The Phonebook is empty.Please add a contact.</p>
      )}

      {/*  if not loading, not error and have atlease 1 filtered contact, show ContactListItem  */}
      {!isLoading &&
        !error &&
        filterContacts.length > 0 &&
        filterContacts.map(filteredContact => (
          <ContactListItem
            key={filteredContact.id}
            filteredContact={filteredContact}
            // deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
};

// import { ContactListItem } from './ContactListItem/ContactListItem';
// // import PropTypes from 'prop-types';
// import css from './ContactList.module.css';
// import { useSelector } from 'react-redux';
// import { getContacts, getFilter } from '../../redux/contacts/contactsSelector';

// const getFilteredContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   const filteredContacts = getFilteredContacts(contacts, filter);

//   return (
//     <ul className={css.contactList}>
//       {filteredContacts.map(filteredContact => (
//         <ContactListItem
//           key={filteredContact.id}
//           filteredContact={filteredContact}
//           // deleteContact={deleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   filterContact: PropTypes.func.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
