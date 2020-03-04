const GetUserDataReducer = (
  state = {
    displayName: "",
    photoURL: ""
  },
  action
) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        displayName: action.displayName,
        photoURL: action.photoURL
      };
    default:
        return state;
  }
};

export default GetUserDataReducer;
