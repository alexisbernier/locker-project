import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

const StyledFooter = styled.footer`
  background-color: #e9ecef;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <Container class="mt-5">
      <StyledFooter className="main-footer">
        <div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="p text-xs-center">
              &copy;{new Date().getFullYear()} Locker - All Rights Reserved
            </p>
          </div>
        </div>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
