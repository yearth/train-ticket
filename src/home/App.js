import React from "react";
import { connect } from "react-redux";
import Header from "../common/components/Header";
import DepartDate from "./components/DepartDate";
import HighSpeed from "./components/HighSpeed";
import Journey from "./components/Journey";
import Submit from "./components/Submit";

function App() {
  return (
    <main>
      <Header />
      <Journey />
      <DepartDate />
      <HighSpeed />
      <Submit />
    </main>
  );
}

export default connect(
  // mapStateToProps
  state => {},
  // mapDispatchToProps
  dispatch => {}
)(App);
