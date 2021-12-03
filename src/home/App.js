import React, { useCallback } from "react";
import { connect } from "react-redux";
import Header from "../common/components/Header";
import DepartDate from "./components/DepartDate";
import HighSpeed from "./components/HighSpeed";
import Journey from "./components/Journey";
import Submit from "./components/Submit";

function App() {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <main>
      <Header title="火车票" onBack={onBack} />
      <Journey />
      <DepartDate />
      <HighSpeed />
      <Submit />
    </main>
  );
}

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  dispatch => {
    return {};
  }
)(App);
