export const FETCH_CONTACTS = "fetch_contacts";
export const FETCH_CONTACTS_SUCCESS = "fetch_contacts_success";
export const FETCH_CONTACTS_FAILURE = "fetch_contacts_failure";
export const CREATE_CONTACT = "create_contact";
export const CREATE_CONTACT_SUCCESS = "create_contact_success";
export const DELETE_CONTACT = "delete_contact";
export const DELETE_CONTACT_SUCCESS = "delete_contact_success";
export const UPDATE_CONTACT = "update_contact";
export const UPDATE_CONTACT_SUCCESS = "update_contact_success";
export const UPDATE_CONTACT_FLAG = "update_contact_flag";
export const FILTER_CONTACTS = "fitler_contacts";
const ROOT_URL = "http://localhost:4000/contacts";

export const fetchContacts = () => {
  console.log("hit fetch");
  return dispatch => {
    fetch(ROOT_URL)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(fetchContactsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchContactsFailure(err.message));
      });
  };
};

export const createContact = (contact, cb) => {
  return dispatch => {
    fetch(`${ROOT_URL}/add`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact })
    })
      .then(res => {
        cb();
        return res.json();
      })
      .then(res => {
        dispatch(createContactSuccess(res.data));
      });
  };
};

export const deleteContact = (contact, cb) => {
  console.log(contact);
  return dispatch => {
    fetch(`${ROOT_URL}/delete/${contact.ID}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact })
    })
      .then(res => {
        cb();
        return res.json();
      })
      .then(res => {
        dispatch(deleteContactSuccess(res.data));
      });
  };
};

export const updateContact = (newValues, contact, cb, cb2) => {
  console.log(newValues, contact, cb, "update");
  return dispatch => {
    fetch(`${ROOT_URL}/update/${contact.contact.ID}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newValues })
    })
      .then(res => {
        cb();
        //    cb2();
        return res.json();
      })
      .then(res => {
        dispatch(updateContactSuccess(res.data));
      });
  };
};

const createContactSuccess = data => {
  return {
    type: CREATE_CONTACT_SUCCESS,
    payload: data
  };
};

const deleteContactSuccess = data => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: data
  };
};

const updateContactSuccess = data => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload: data
  };
};

export const updateContactFlag = (flag, contact) => {
  console.log(flag, contact, "check");
  let currentUpdate = {};
  currentUpdate.flag = !flag;
  currentUpdate.contact = contact;
  return {
    type: UPDATE_CONTACT_FLAG,
    payload: currentUpdate
  };
};

const fetchContactsSuccess = data => {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: data
  };
};

const fetchContactsFailure = err => {
  return {
    type: FETCH_CONTACTS_FAILURE,
    payload: err
  };
};

export const filterContacts = (input, contacts) => {
  console.log(contacts, input, "filter");
  let res = contacts.filter((contact, i) => {
    return contact.NAME.includes(input);
  });
  return {
    type: FILTER_CONTACTS,
    payload: res
  };
};
