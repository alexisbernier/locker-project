import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background-color: grey;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Footer = () => {
  return (
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
  );
};

export default Footer;
