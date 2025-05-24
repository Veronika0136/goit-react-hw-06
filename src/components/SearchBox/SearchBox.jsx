import React from 'react';
import s from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filterContacts = useSelector(state => state.filters.name);

  const handleChangeInput = e => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  console.log(filterContacts);

  // const handeleFilterContacts = (contacts, filterContacts) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  //   );
  // };

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
