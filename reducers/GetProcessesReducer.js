const GetProcessesReducer = (
    state = {
        processes: {},
    },
    action
) => {
    switch (action.type) {
        case "GET_PROCESSES":
            // return { ...state, processes: [...state.processes,action.payload] };
            return { ...state, processes: Object.assign({},{...state.processes, ... action.payload})};
        case "RESET":
            return {...state, processes: {} };
        default:
            return state;
    }
};

export default GetProcessesReducer;