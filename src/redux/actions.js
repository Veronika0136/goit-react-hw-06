import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');

export const deleteContacts = createAction('contacts/deleteContacts');

export const setNameFilter = createAction('filters/setNameFilter');
