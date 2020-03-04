export const saveComponentData = componentData => ({
  type: "SAVE_COMPONENT_DATA",
  payload: componentData
});

export const getProjects = projects => ({
  type: "GET_PROJECTS",
  payload: projects
});

export const getImage = url => ({
  type: "GET_IMAGE",
  payload: url
});

export const getProcesses = processes => ({
  type: "GET_PROCESSES",
  payload: processes
});

export const reset = () => ({
  type: "RESET"
});

export const getUserData = (displayName, photoURL) => ({
  type: "GET_USER_DATA",
  displayName: displayName,
  photoURL: photoURL
});