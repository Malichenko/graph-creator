// Core
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { batch } from "react-redux";

// Other
import { initialValues } from "./initialValues";

// Actions
import { graphActions } from "../../actions";

// Hooks
import { useValidation } from "../useValidation";

export const useForm = () => {
  const dispatch = useDispatch();
  const { selectedNode } = useSelector((state) => state.graph);
  const { validationSchema, setNodeName } = useValidation();
  const [color, setColor] = useState("#FD644E");

  const loginSubmiting = (values) => {
    resetForm();
    batch(() => {
      dispatch(graphActions.selectNode(null));
      dispatch(graphActions.addNode(values));
    });
  };

  const {
    getFieldProps,
    getFieldMeta,
    setValues,
    values,
    errors,
    isValid,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginSubmiting,
  });

  const handleChangeComplete = ({ hex }) => {
    setColor(hex);
    setFieldValue("nodecolor", hex);
  };

  useEffect(() => {
    if (selectedNode) {
      setValues(selectedNode);
      setColor(selectedNode.nodecolor);
    } else {
      setValues(initialValues);
      setColor(initialValues.nodecolor);
    }
  }, [setValues, selectedNode]);

  useEffect(() => {
    if (values && values.nodename) {
      setNodeName(values.nodename);
    }
  }, [setNodeName, values]);

  return {
    getFieldProps,
    getFieldMeta,
    errors,
    isValid,
    handleSubmit,
    setFieldValue,
    color,
    handleChangeComplete,
    values,
  };
};
