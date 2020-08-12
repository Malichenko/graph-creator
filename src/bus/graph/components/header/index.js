// Core
import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

// Styled Components
import { Header as HeaderComponent, Title, BtnBlock } from "./styles";

// Hooks
import { useToggle } from "../../hooks/useToggle";

export const Header = () => {
  const { toggleSideBar, isOpen } = useToggle();

  const btnTitle = !isOpen ? "Add node" : "Close";

  return (
    <HeaderComponent>
      <Container fluid>
        <Row>
          <Col sm={{ span: 9, offset: 1 }}>
            <Title>
              <h3>Graph Creator</h3>
            </Title>
          </Col>
          <Col sm={2}>
            <BtnBlock>
              <Button variant="primary" onClick={toggleSideBar}>
                {btnTitle}
              </Button>
            </BtnBlock>
          </Col>
        </Row>
      </Container>
    </HeaderComponent>
  );
};
