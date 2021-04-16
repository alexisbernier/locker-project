import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const RecentItems = () => {
  return (
    <Container>
      <h3>Recent items</h3>
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

export default RecentItems;
