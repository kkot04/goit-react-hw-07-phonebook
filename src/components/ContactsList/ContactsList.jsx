import React, { useEffect } from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem.jsx';
import s from './ContactsList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'store/func.js';

export const ContactsList = ({children}) => {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector( state => state.phonebook.filter);
  const error = useSelector(state => state.phonebook.contacts.error);

  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  const filteredContacts = contacts?.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase() || '')
    )

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
      {error && <p>{error}</p>}
    </>
  );
};
