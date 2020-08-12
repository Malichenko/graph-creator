// Core
import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export const CustomInput = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  onBlur,
  value = "",
  error,
  touched,
}) => {
  const errorJSX = error && touched && (
    <Form.Control.Feedback type="invalid" tooltip>
      {error}
    </Form.Control.Feedback>
  );

  return (
    <>
      <Form.Group>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <InputGroup>
          <Form.Control
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            autoComplete="off"
            isInvalid={error && touched}
          />
          {errorJSX}
        </InputGroup>
      </Form.Group>
    </>
  );
};
