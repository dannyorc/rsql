import React from "react";
import {
  fetchContacts,
  deleteContact,
  updateContact,
  updateContactFlag,
  filterContacts
} from "../modules/actions/contacts_action";
import { connect } from "react-redux";
import Contact from "./contact";
import { InputGroup } from "@blueprintjs/core";
import Inputs from "./inputs";
import { Cell, Column, Table } from "@blueprintjs/table";
import "@blueprintjs/table/lib/css/table.css";

const ContactsList = props => {
  const cellRenderName = index => {
    return <Cell>{props.contactsReducer.contacts[index].NAME}</Cell>;
  };
  const cellRenderAge = index => {
    return <Cell>{props.contactsReducer.contacts[index].AGE}</Cell>;
  };
  const cellRenderAddress = index => {
    return <Cell>{props.contactsReducer.contacts[index].ADDRESS}</Cell>;
  };
  const cellRenderPhone = index => {
    return <Cell>{props.contactsReducer.contacts[index].PHONE}</Cell>;
  };

  const updateRender = index => {
    return (
      <button
        className="btn-primary"
        onClick={e => {
          props.updateContactFlag(
            props.contactsReducer.currentUpdate.updateFlag,
            props.contactsReducer.contacts[index]
          );
        }}
      >
        Update
      </button>
    );
  };

  const deleteRender = index => {
    return (
      <button
        className="btn-danger "
        onClick={e => {
          props.deleteContact(
            props.contactsReducer.contacts[index],
            props.fetchContacts
          );
        }}
      >
        X
      </button>
    );
  };

  if (props.contactsReducer.contacts.length > 0) {
    return (
      <div>
        <InputGroup
          large="false"
          leftIcon="filter"
          // onChange={this.handleFilterChange}
          placeholder="Filter Contacts"
          // small={small}
          // value={filterValue}
          onChange={e => {
            props.filterContacts(
              e.target.value,
              props.contactsReducer.contacts
            );
          }}
        />
        <Table numRows={props.contactsReducer.contacts.length}>
          <Column name="Name" cellRenderer={cellRenderName} />
          <Column name="Age" cellRenderer={cellRenderAge} />
          <Column name="Address" cellRenderer={cellRenderAddress} />
          <Column name="Phone" cellRenderer={cellRenderPhone} />
          <Column name="Update" cellRenderer={updateRender} />
          <Column name="Delete" cellRenderer={deleteRender} />
        </Table>
      </div>
    );
  }
  return <div>Loading...</div>;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  deleteContact: (contact, cb) => dispatch(deleteContact(contact, cb)),
  updateContactFlag: (flag, contact) =>
    dispatch(updateContactFlag(flag, contact)),
  filterContacts: (flag, contact) => dispatch(filterContacts(flag, contact))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList);
