// Core
import React from "react";
import { Provider } from "react-redux";

// Other
import { store } from "./init/store";

// Components
import { Graph } from "./bus/graph";

export const App = () => {
  return (
    <Provider store={store}>
      <Graph />
    </Provider>
  );
};
