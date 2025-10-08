const nameReducer = (state, action) => {
  var data = { name: "Default Data" };
  if (action.type === "name") {
    data = {
      ...state,
      name: action.payload,
    };
  }
  return data;
};

export default nameReducer;
