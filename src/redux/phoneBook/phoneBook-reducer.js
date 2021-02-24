import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    changeFilter
} from './phoneBook-actions';

const contacts = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [removeContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [removeContactRequest]: () => true,
    [removeContactSuccess]: () => false,
    [removeContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
    [fetchContactError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [removeContactError]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts,
    filter,
    loading,
    error
});