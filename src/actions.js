export const createSet = payload => {
  return {
    type: "set",
    payload
  };
};

export const createAdd = payload => {
  return {
    type: "add",
    payload
  };
};

export const createRemove = payload => {
  return {
    type: "remove",
    payload
  };
};

export const createToggle = payload => {
  return {
    type: "toggle",
    payload
  };
};
