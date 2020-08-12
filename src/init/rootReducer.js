// Core
import { combineReducers } from "redux";

// Reducers
import { graphReducer as graph } from "../bus/graph/reducer";

export const rootReducer = combineReducers({
  graph,
});
