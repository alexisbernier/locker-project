import styled from "@emotion/styled";

const StyledName = styled.text`
  div {
    background-color: #e9ecef;
    margin-bottom: 3rem;
  }

  h1 {
    text-align: center;
  }
`;

const SiteName = () => {
  return (
    <StyledName>
      <div>
        <h1>LOCKER</h1>
      </div>
    </StyledName>
  );
};

export default SiteName;
