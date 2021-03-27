import Form from "react-bootstrap/Form";

const Checkbox = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    </Form>
  );
};

export default Checkbox;
