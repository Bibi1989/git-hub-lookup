export const reducer = (state, action) => {
  switch (action.type) {
    case "text":
      return { ...state, text: action.payload };
    case "single":
      return { ...state, single: action.payload };
    default:
      return state;
  }
};
