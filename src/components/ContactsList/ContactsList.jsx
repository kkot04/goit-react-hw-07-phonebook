import React from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem.jsx';
import s from './ContactsList.module.css'
import { useSelector } from 'react-redux';

export const ContactsList = ({children}) => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector( state => state.phonebook.filter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter?.toLowerCase() || ''))

  return (
    <>
      {children}
      {filteredContacts.length === 0 ? (
        <p className={s.errorMessage}>No contacts match your search</p>
      ) : (
        <ul className={s.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              />
          ))}
        </ul>
      )}
    </>
  );
};
