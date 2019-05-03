import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { fetchContacts } from "./modules/actions/contacts_action";
import { connect } from "react-redux";
import ContactList from "./components/contactsList";
import Inputs from "./components/inputs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    return this.props.fetchContacts();
  }

  render() {
    return (
      <div className="App container">
        <Inputs />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
