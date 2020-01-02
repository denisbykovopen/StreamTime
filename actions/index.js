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