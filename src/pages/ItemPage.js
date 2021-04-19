import Nav from "../components/Navbar";
import Item from "../components/Item";
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
            <div className="mb-5 border bg-light px-3 py-2">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus reprehenderit alias enim, nobis iure est inventore,
                nihil eligendi voluptatum autem quibusdam aspernatur sint atque
                debitis magni a ducimus dolores odit doloremque corrupti
                obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Molestias, suscipit nostrum ab, aperiam sint qui soluta
                ullam quasi, distinctio quaerat aut inventore ipsum quam
                reiciendis iste illo adipisci recusandae doloribus harum
                architecto. Mollitia aliquid atque quidem sequi vero eaque.
                Explicabo!
              </p>
            </div>
            <LinksToBuyIt />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemPage;
