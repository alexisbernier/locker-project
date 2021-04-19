import Form from "react-bootstrap/Form";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;

  #formBasicPassword {
    border: 2px solid;
  }
`;

const PasswordForm = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
    </StyledForm>
  );
};

export default PasswordForm;
