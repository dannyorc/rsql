import React from "react";
import { connect } from "react-redux";

const Contact = props => {
  return (
    <div className="list-group list-group-horizontal-lg row">
      <li className="list-group-item col-md-3">{props.contact.NAME}</li>
      <li className="list-group-item col-md-3">{props.contact.AGE}</li>
      <li className="list-group-item col-md-3">{props.contact.ADDRESS}</li>
      <li className="list-group-item col-md-3">{props.contact.PHONE}</li>
    </div>
  );
};

export default Contact;
