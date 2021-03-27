import Form from "react-bootstrap/Form";

const UserNameForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>
    </Form>
  );
};

export default UserNameForm;
