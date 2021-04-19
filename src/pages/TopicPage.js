import NavCo from "../components/NavbarWhenConnected";

import { Container, Row, Table, Button } from "react-bootstrap";

const TopicPage = () => {
  return (
    <>
      <NavCo />
      <Container>
        <h2>Topic Title</h2>
        <Row>
          <Table striped bordered hover size="md">
            <tbody>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
              <tr>
                <td>Post</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="secondary" block>
            Add a post
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default TopicPage;
