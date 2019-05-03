import React from "react";
import { connect } from "react-redux";
import { Cell } from "@blueprintjs/table";
const Contact2 = props => {
  return <Cell>{props.contact}</Cell>;
};

export default Contact2;
