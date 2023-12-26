import React from 'react';
import s from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContactsThunk } from 'store/operations';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch()
  return (
    <li className={s.contactItem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(removeContactsThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};