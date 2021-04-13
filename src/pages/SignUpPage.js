import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";
import ConfirmPasswordForm from "../components/forms/ConfirmPasswordForm";
import UserNameForm from "../components/forms/UserNameForm";
import Footer from "../components/Footer";
import Checkbox from "../components/forms/Checkbox";
import Btn from "../components/buttons/Button";
import styled from "@emotion/styled";
import SiteName from "../components/SiteName";
import Nav from "../components/Navbar";

const Container = styled.form``;

const SignUpPage = () => {
  return (
    <Container>
      <SiteName />
      <Nav />
      <UserNameForm />
      <EmailForm />
      <PasswordForm />
      <ConfirmPasswordForm />
      <Checkbox />
      <Btn />
      <Footer />
    </Container>
  );
};

export default SignUpPage;
