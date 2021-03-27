import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBar = () => {
  return (
    <Form>
      <Form type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;
