import { ContactsForm } from './ContactsForm/ContactsForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Section } from './Section/Section.jsx';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactsForm />
      </Section>
      <Section title={'Contacts'}>
        <ContactsList>
          <Filter />
        </ContactsList>
      </Section>
    </div>
  );
};