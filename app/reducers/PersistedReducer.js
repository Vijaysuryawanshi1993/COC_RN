const initialState = {
  data: {}
};

const PersistedReducer = function(state = initialState, action) {
  switch (action.type) {
    case 0:
      let abc = abc;
      return {
        ...state,
        abc: abc
      };
    default:
      return state;
  }
};

export default PersistedReducer;
