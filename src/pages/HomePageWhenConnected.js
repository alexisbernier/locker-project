import RecentItems from "../components/RecentItems";
import NavCo from "../components/NavbarWhenConnected";
import ProfilePreview from "../components/ProfilePreview";
import { Container, Row, Col } from "react-bootstrap";

const HomePageCo = () => {
  return (
    <>
      <NavCo />
      <Container>
        <Row>
          <Col sm={8}>
            <RecentItems />
          </Col>
          <Col>
            <ProfilePreview />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePageCo;
