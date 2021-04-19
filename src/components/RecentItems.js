import { Container, Row } from "react-bootstrap/";

import Item from "./Item";

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
