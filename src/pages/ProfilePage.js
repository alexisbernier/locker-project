import { Container, Col, Row, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import NavCo from "../components/NavbarWhenConnected";
import ProfilePicture from "../components/ProfilePicture";
import RecentItems from "../components/RecentItems";

const ProfilePage = () => {
  return (
    <>
      <NavCo />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <ProfilePicture />
            <div className="mb-5">
              <h2 class="text-justify">Username</h2>
              <p> User Description</p>
            </div>
            <RecentItems />
          </Col>
          <Col sm={4}>
            <div>
              <h3>Friends list</h3>
              <Table striped bordered hover size="md">
                <tbody>
                  <tr>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
