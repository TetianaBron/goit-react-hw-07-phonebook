import types from './phoneBook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    },
});

const removeContact = contactId => ({
    type: types.REMOVE,
    payload: contactId,
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
});

const phoneBookActions = {
    addContact,
    removeContact,
    changeFilter,
};

export default phoneBookActions;