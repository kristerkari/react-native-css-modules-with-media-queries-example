import { App } from "./App";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    initialSelected: state.tabs.initialSelected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTabSelect: index => {
      dispatch({
        type: "SET_TAB",
        index,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
