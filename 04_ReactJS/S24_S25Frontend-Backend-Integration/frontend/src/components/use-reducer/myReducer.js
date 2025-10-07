const reducerFn = (state, action) => {
  //here we have write the logic to update state value based on different actions
  var data = 0;
  if (action.type === "increment") {
    data = state + 1;
  } else if (action.type === "decrement") {
    data = state - 1;
  } else {
    data = 0;
  }

  return data;
};

export default reducerFn;
