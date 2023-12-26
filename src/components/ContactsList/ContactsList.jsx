import React, { useEffect } from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem.jsx';
import s from './ContactsList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'store/operations.js';
import { selectContacts, selecFilter, selectError } from 'store/selector.js';

export const ContactsList = ({children}) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selecFilter);
  const error = useSelector(selectError);

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
