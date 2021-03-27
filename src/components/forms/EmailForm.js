import Form from "react-bootstrap/Form";
import styled from "@emotion/styled";

const EmailForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>
  );
};

export default EmailForm;
