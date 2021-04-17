import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import Item from "../components/Item";
import NavCo from "../components/NavbarWhenConnected";

const BoxPage = () => {
  return (
    <>
      <NavCo />
      <Container>
        <p>My Collection</p>
        <Row>
          <Col sm={8}>
            <Row>
              <Item />
              <Item />
              <Item />
            </Row>
            <Row>
              <Item />
              <Item />
              <Item />
            </Row>
          </Col>
          <Col sm={4}>
            <p>Estimated Value: 890$</p>
            <p className="mb-5">Number of Items: 255</p>
            <p>Items im looking for:</p>
            <Row>
              <Col>
                <Item />
              </Col>
              <Col>
                <Item />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BoxPage;
