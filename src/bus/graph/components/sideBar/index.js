// Core
import React from "react";
import { Button, Form } from "react-bootstrap";
import { SketchPicker } from "react-color";

// Styles Components
import { SideBar as SideBarComponent } from "./styles";

// Hooks
import { useToggle } from "../../hooks/useToggle";
import { useForm } from "../../hooks/useForm";

// Elements
import { CustomInput } from "../../../../elements/customInput";

export const SideBar = () => {
  const { isOpen } = useToggle();
  const {
    getFieldProps,
    getFieldMeta,
    errors,
    isValid,
    handleSubmit,
    color,
    handleChangeComplete,
  } = useForm();

  const sidebarJSX = isOpen && (
    <SideBarComponent>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Node Name"
          type="text"
          placeholder="Write Name"
          error={errors.nodename}
          {...getFieldProps("nodename")}
          {...getFieldMeta("nodename")}
        />
        <CustomInput
          label="Node Target"
          type="text"
          placeholder="Write Target"
          error={errors.nodetarget}
          {...getFieldProps("nodetarget")}
          {...getFieldMeta("nodetarget")}
        />
        <Form.Group>
          <Form.Label>Node color</Form.Label>
          <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        </Form.Group>
        <Button type="submit" disabled={!isValid}>
          Save
        </Button>
      </form>
    </SideBarComponent>
  );

  return sidebarJSX;
};
