// Types
import { types } from "./types";

export const graphActions = Object.freeze({
  toggleSideBar: (value) => {
    return {
      type: types.TOGGLE_SIDEBAR,
      payload: value,
    };
  },
  addNode: (payload) => {
    return {
      type: types.ADD_NODE,
      payload,
    };
  },
  selectNode: (payload) => {
    return {
      type: types.SELECT_NODE,
      payload,
    };
  },
});
