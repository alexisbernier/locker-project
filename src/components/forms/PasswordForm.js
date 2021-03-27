import Form from "react-bootstrap/Form";

const PasswordForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
    </Form>
  );
};

export default PasswordForm;
