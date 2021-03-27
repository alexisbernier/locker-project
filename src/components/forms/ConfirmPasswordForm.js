import Form from "react-bootstrap/Form";

const ConfirmPasswordForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm your Password" />
      </Form.Group>
    </Form>
  );
};

export default ConfirmPasswordForm;
