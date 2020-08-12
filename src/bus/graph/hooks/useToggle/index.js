// Core
import { useDispatch, useSelector, batch } from "react-redux";

// Actions
import { graphActions } from "../../actions";

export const useToggle = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.graph);

  const toggleSideBar = () => {
    batch(() => {
      dispatch(graphActions.selectNode(null));
      dispatch(graphActions.toggleSideBar(!isOpen));
    })
    
  };

  return {
    toggleSideBar,
    isOpen,
  };
};
