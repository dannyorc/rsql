import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FLAG,
  FILTER_CONTACTS
} from "../actions/contacts_action";

const initialState = {
  contacts: [],
  currentUpdate: { updateFlag: false }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      console.log("actions", action.payload);
      return Object.assign({}, state, { contacts: action.payload });
    case CREATE_CONTACT_SUCCESS:
      return state;
    case CREATE_CONTACT_SUCCESS:
      return state;
    case DELETE_CONTACT_SUCCESS:
      return state;
    case UPDATE_CONTACT_SUCCESS:
      return state;
    case UPDATE_CONTACT_FLAG:
      return Object.assign({}, state, { currentUpdate: action.payload });
    case FILTER_CONTACTS:
      return Object.assign({}, state, { contacts: action.payload });
    default:
      return state;
  }
}
