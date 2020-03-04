export const saveComponentData = componentData => ({
<<<<<<< HEAD
  type: "SAVE_COMPONENT_DATA",
  payload: componentData
});
=======
    type: "SAVE_COMPONENT_DATA",
    payload: componentData
  });
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

export const getProjects = projects => ({
  type: "GET_PROJECTS",
  payload: projects
});

export const getImage = url => ({
  type: "GET_IMAGE",
  payload: url
<<<<<<< HEAD
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
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
});