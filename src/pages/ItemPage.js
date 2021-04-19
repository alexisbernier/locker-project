import Nav from "../components/Navbar";
import Item from "../components/Item";
import ItemDescription from "../components/ItemDescription";
import LinksToBuyIt from "../components/LinksToBuyIt";
import { Container, Row, Col } from "react-bootstrap";

const ItemPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <Row>
          <Col sm={4}>
            <Item />
            <div className="mt-2">
              <p>Estimated price : 123$</p>
            </div>
          </Col>
          <Col>
            <div className="mb-5">
              <ItemDescription />
            </div>
            <LinksToBuyIt />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemPage;
