import Form from "react-bootstrap/Form";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  font-family: "Gill Sans", sans-serif;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;

  #formBasicPassword {
    border: 2px solid;
  }
`;

const ConfirmPasswordForm = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm your Password" />
      </Form.Group>
    </StyledForm>
  );
};

export default ConfirmPasswordForm;
