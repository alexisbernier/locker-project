import { Form } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;

  #formBasicEmail {
    border: 2px solid;
  }
`;

const EmailForm = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </StyledForm>
  );
};

export default EmailForm;
