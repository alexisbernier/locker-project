import styled from "@emotion/styled/";

const StyledNavbar = styled.div`
  div {
    background-color: #e9ecef;
    margin-bottom: 3rem;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  li {
    list-style-type: none;
    margin: 0 2vw;
    font-size: 3vh;
  }
  a {
    text-decoration: none;
    color: black;
    padding: 2vw;
  }
  a:hover {
    background-color: #868e96;
  }
`;

const Nav = () => {
  return (
    <StyledNavbar>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/SignUpPage">Sign Up</a>
          </li>
          <li>
            <a href="/SignInPage">Sign In</a>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Nav;
