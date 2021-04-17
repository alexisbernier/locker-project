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
      <a class="btn btn-secondary" href="/HomePageCo" role="button">
        Confirm
      </a>
    </Container>
  );
};

export default Btn;
