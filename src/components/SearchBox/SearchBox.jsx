import React from 'react';
import s from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/store';

const SearchBox = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts.items);
  const filterContacts = useSelector(state => state.filters.name);
  const handleChangeInput = filterContacts => dispatch(setNameFilter(filterContacts));

  // const handleChangeInput = e => {
  //   setValues(e.target.value);
  // };

  // const handeleFilterContacts = (contacts, filterContacts) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  //   );
  // };

  // const visibleContacts = handeleFilterContacts(contacts, filterContacts);
  // dispatch(setContacts(visibleContacts));

  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input className={s.input} value={filterContacts} onChange={handleChangeInput} />
      </label>
    </div>
  );
};

export default SearchBox;
