import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = ({ handleDeleteContact }) => {
  const contacts = useSelector(state => state.contacts.items);
  const filterContacts = useSelector(state => state.filters.name);

  const handeleFilterContacts = (contacts, filterContacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );

    const visibleContacts = handeleFilterContacts(contacts, filterContacts);
  };

  return (
    <ul className={s.flex}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} handleDeleteContact={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
