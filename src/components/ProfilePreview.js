import { Container, Col } from "react-bootstrap/";
import ProfilePicture from "../components/ProfilePicture";

const ProfilePreview = () => {
  return (
    <Container>
      <Col>
        <ProfilePicture />
      </Col>
    </Container>
  );
};

export default ProfilePreview;
