const ComponentReducer = (
    state = {
      componentData: [], 
    },
    action
  ) => {
    switch (action.type) {
      case "SAVE_COMPONENT_DATA":
        return { ...state, componentData: [ ...state.componentData, action.payload ] };
      default:
        return state;
    }
  };
  
  export default ComponentReducer;