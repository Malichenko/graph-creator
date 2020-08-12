// Core
import { useSelector, useDispatch } from "react-redux";

// Actions
import { graphActions } from "../../actions";

export const useGraph = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.graph);

  const onClickNode = (nodeName) => {
    const nodeColor = data.nodes.find((el) => el.id === nodeName);
    const nodeTarget = data.links.find((el) => el.source === nodeName);
    dispatch(
      graphActions.selectNode({
        nodename: nodeName,
        nodetarget: nodeTarget.target,
        nodecolor: nodeColor.color,
      }),
    );

    dispatch(graphActions.toggleSideBar(true));
  };

  return {
    data,
    onClickNode,
  };
};
