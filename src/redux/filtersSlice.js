import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('filters/changeFilter');

const initialState = {
  name: '',
};

export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case 'filters/changeFilter':
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
        filters: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
}
