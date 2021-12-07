import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../common/components/Header";
import CitySelector from "../common/components/CitySelector";
import DepartDate from "./components/DepartDate";
import HighSpeed from "./components/HighSpeed";
import Journey from "./components/Journey";
import Submit from "./components/Submit";
import { showCitySelector, exchangeFromTo, hideCitySelector } from "./actions";

function App(props) {
  const { from, to, dispatch, isCitySelectorVisible, cityData, isLoadingCityData } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  // const doExchangeFromTo = useCallback(() => {
  // dispatch(exchangeFromTo());
  // }, []);
  //
  // const doShowCitySelector = useCallback(m => {
  // dispatch(showCitySelector(m));
  // }, []);

  const journeyCbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    console.log("hideCitySelector", hideCitySelector);

    return bindActionCreators(
      {
        onBack: hideCitySelector
      },
      dispatch
    );
  }, []);

  return (
    <main>
      <Header title="火车票" onBack={onBack} />
      <form className="form">
        <Journey
          from={from}
          to={to}
          {...journeyCbs}
          // exchangeFromTo={doExchangeFromTo}
          // showCitySelector={doShowCitySelector}
        />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        loading={isLoadingCityData}
        data={cityData}
        {...citySelectorCbs}
      />
    </main>
  );
}

export default connect(
  // mapStateToProps
  state => {
    return state;
  },
  // mapDispatchToProps
  dispatch => {
    return { dispatch };
  }
)(App);
