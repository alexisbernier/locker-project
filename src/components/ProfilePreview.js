import { Container, Col } from "react-bootstrap/";

import ProfilePicture from "../components/ProfilePicture";

const ProfilePreview = () => {
  return (
    <Container>
      <Col className="mt-5">
        <ProfilePicture />
        <div className="mb-5">
          <h2 class="text-justify">Username</h2>
        </div>
      </Col>
    </Container>
  );
};

export default ProfilePreview;
