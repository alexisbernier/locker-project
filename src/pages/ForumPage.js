import NavCo from "../components/NavbarWhenConnected";
import Footer from "../components/Footer";

import { Container, Row, Col, Table, Button } from "react-bootstrap";

const ForumPage = () => {
  return (
    <>
      <NavCo />
      <Container className="pr-5">
        <Row>
          <Col sm={9}>
            <Button variant="secondary">Create a Topic</Button>
            <Table striped bordered hover size="md">
              <tbody>
                <tr>
                  <td>
                    <a href="/TopicPage">Topic</a>
                  </td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col sm={3}>
            <p>Popular posts</p>
            <Table striped bordered hover size="md">
              <tbody>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <td>Ipsum</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ForumPage;
