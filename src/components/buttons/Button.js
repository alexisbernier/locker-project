import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const Container = styled.form`
  font-family: "Gill Sans", sans-serif;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 100%;
`;

const Btn = () => {
  return (
    <Container>
      {" "}
      <Button variant="secondary" block>
        Confirm
      </Button>{" "}
    </Container>
  );
};

export default Btn;
