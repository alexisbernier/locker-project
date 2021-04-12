import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "@emotion/styled";

const StyledName = styled.text`
  h1 {
    text-align: center;
  }
`;

const SiteName = () => {
  return (
    <StyledName>
      <Jumbotron>
        <h1>LOCKER</h1>
      </Jumbotron>
    </StyledName>
  );
};

export default SiteName;
