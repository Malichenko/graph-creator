// Core
import React from "react";
import { Graph as GraphComponent } from "react-d3-graph";

// Other
import { graphConfigs } from "./graphConfig";

// Hooks
import { useGraph } from "../../hooks/useGraph";

export const Dashboard = () => {
  const { onClickNode, data } = useGraph();
  return (
    <GraphComponent
      id="graph-id"
      data={data}
      config={graphConfigs}
      onClickNode={onClickNode}
    />
  );
};
