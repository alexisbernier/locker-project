import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
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
