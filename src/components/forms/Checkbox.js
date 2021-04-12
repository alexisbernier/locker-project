import Form from "react-bootstrap/Form";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  font-family: Georgia, serif;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;
`;

const Checkbox = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          required
          label="Agree to Terms of service"
          feedback="You must agree before confirming"
        />
      </Form.Group>
    </StyledForm>
  );
};

export default Checkbox;
