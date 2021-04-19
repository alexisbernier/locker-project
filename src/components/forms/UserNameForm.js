import { Form } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;

  #formBasicName {
    border: 2px solid;
  }
`;

const UserNameForm = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formBasicName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>
    </StyledForm>
  );
};

export default UserNameForm;
