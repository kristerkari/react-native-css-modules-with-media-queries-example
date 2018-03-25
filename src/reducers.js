export const tabs = (state = { initialSelected: 0 }, action) => {
  switch (action.type) {
    case "SET_TAB":
      return {
        initialSelected: action.index,
      };
    default:
      return state;
  }
};
