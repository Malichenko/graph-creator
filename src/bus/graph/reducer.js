// Types
import { types } from "./types";

const initialState = {
  isOpen: false,
  data: {
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Alice", target: "Harry" },
      { source: "Sally", target: "Alice" },
      { source: "Mike", target: "Harry" },
      { source: "John", target: "Harry" },
    ],
    nodes: [
      { id: "Harry", color: "#FC0D1B" },
      { id: "Alice", color: "#FEC1CC" },
      { id: "Sally", color: "#000000" },
      { id: "Mike", color: "#FD644E" },
      { id: "John", color: "#0FFFFF" },
    ],
  },
  selectedNode: null,
};

const filterData = (arrey, tag) => {
  const seen = new Set();
  const filteredArr = arrey.reverse().filter((el) => {
    const duplicate = seen.has(el[tag]);
    seen.add(el[tag]);
    return !duplicate;
  });
  return filteredArr;
};

export const graphReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: payload,
      };
    case types.ADD_NODE:
      const { nodecolor, nodename, nodetarget } = payload;

      const nodes = [...state.data.nodes, { id: nodename, color: nodecolor }];

      const links = [
        ...state.data.links,
        { source: nodename, target: nodetarget },
      ];

      return {
        ...state,
        data: {
          nodes: filterData(nodes, "id"),
          links: filterData(links, "source"),
        },
      };
    case types.SELECT_NODE:
      return {
        ...state,
        selectedNode: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
