import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const LinksToBuyIt = () => {
  return (
    <Container fluid>
      <h3>Links to buy it :</h3>
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
    </Container>
  );
};

export default LinksToBuyIt;
