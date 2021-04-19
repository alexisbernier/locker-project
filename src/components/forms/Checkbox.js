import Form from "react-bootstrap/Form";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;
`;

const Checkbox = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check required label="Agree to Terms of service" />
      </Form.Group>
    </StyledForm>
  );
};

export default Checkbox;
