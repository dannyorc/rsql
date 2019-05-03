import { combineReducers } from 'redux';
import contactsReducer from './contacts_reducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    contactsReducer,
    form: formReducer
});