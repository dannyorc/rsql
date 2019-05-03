import React, { Component } from "react";
import {
  fetchContacts,
  createContact,
  updateContact,
  updateContactFlag
} from "../modules/actions/contacts_action";
import { connect } from "react-redux";
import { Field, reduxForm, Form, reset } from "redux-form";
import { Cell, Column, Table } from "@blueprintjs/table";
import "@blueprintjs/table/lib/css/table.css";

class Inputs extends Component {
  constructor(props) {
    super(props);
  }
  renderField = field => {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          placeholder={field.name}
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  };

  onSubmit = values => {
    if (!this.props.contactsReducer.currentUpdate.flag) {
      this.props.createContact(values, this.props.fetchContacts);
      this.props.reset();
    } else {
      this.props.updateContact(
        values,
        this.props.contactsReducer.currentUpdate,
        this.props.fetchContacts
      );
      this.props.updateContactFlag(
        this.props.contactsReducer.currentUpdate.flag,
        null
      );
      this.props.reset();
    }
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form
        className="row list-group-horizontal"
        onSubmit={handleSubmit(this.onSubmit)}
        style={{ marginLeft: "-10px" }}
      >
        <Field className="col-md-3" name="NAME" component={this.renderField} />
        <Field className="col-md-3" name="AGE" component={this.renderField} />
        <Field
          className="col-md-3"
          name="ADDRESS"
          component={this.renderField}
        />
        <Field className="col-md-3" name="PHONE" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    );
  }
}

function validate(values) {
  const errors = {};
  console.log(values, "values");
  // Validate the inputs from 'values'
  if (!values.NAME || values.NAME.length > 20) {
    errors.NAME = "Enter a name";
  }
  if (!values.AGE) {
    errors.AGE = "Enter an age";
  }
  if (!values.ADDRESS) {
    errors.ADDRESS = "Enter an address";
  }

  if (!values.PHONE || values.PHONE.length > 7) {
    errors.PHONE = "Enter a phone number";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

function mapStateToProps(state) {
  if (state.contactsReducer.currentUpdate.contact) {
    state.initialValues = state.contactsReducer.currentUpdate.contact;
  }
  console.log(state, "inoots");
  return state;
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset("ContactsForm"));
};

Inputs = reduxForm({
  form: "ContactsForm",
  validate,
  onSubmitSuccess: afterSubmit,
  enableReinitialize: true
})(Inputs);

export default connect(
  mapStateToProps,
  { createContact, fetchContacts, updateContact, updateContactFlag }
)(Inputs);
