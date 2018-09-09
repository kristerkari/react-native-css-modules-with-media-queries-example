import { connect } from "react-redux";
import { App } from "./App";

const mapStateToProps = state => {
  return {
    initialSelected: state.tabs.initialSelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTabSelect: index => {
      dispatch({
        type: "SET_TAB",
        index
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
