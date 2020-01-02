const GetImageReducer = (
    state = {
      url: 'none', 
    },
    action
  ) => {
    switch (action.type) {
      case "GET_IMAGE":
        return { ...state, url: action.payload };
      default:
        return state;
    }
  };
  
  export default GetImageReducer;