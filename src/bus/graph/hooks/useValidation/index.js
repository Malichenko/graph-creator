// Core
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useState } from "react";

export const useValidation = () => {
  const { data } = useSelector((state) => state.graph);
  const [nodeName, setNodeName] = useState("");

  const filteredShape =
    nodeName &&
    data.links
      .filter((el) => el.target !== nodeName && el.source !== nodeName)
      .map(({ source }) => source);

  const shapeInitial = data.nodes.map(({ id }) => id);

  const shape = filteredShape || shapeInitial;

  const validationSchema = Yup.object().shape({
    nodename: Yup.string().required("Node name is required"),
    nodetarget: Yup.string()
      .oneOf(shape, `Should be one of ${[...shape]}`)
      .required("Node target is required"),
  });

  return {
    validationSchema,
    setNodeName,
  };
};
