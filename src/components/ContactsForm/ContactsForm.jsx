import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsForm.module.css';
import { addContact } from 'store/Slice';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts)

  const createContact = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContact({name, number}))
    event.target.reset()
  };

  return (
    <form className={s.formBox} autoComplete="off" onSubmit={createContact}>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Contact name"
      />

      <input
        className={s.input}
        type="tel"
        name="number"
        placeholder="Phone number"
        required
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};