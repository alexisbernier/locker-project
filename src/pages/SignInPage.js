import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";
import Button from "../components/buttons/Button";
import Footer from "../components/Footer";
import SiteName from "../components/SiteName";
import Nav from "../components/Navbar";

const SignInPage = () => {
  return (
    <>
      <SiteName />
      <Nav />
      <EmailForm />
      <PasswordForm />
      <Button />
      <Footer />
    </>
  );
};

export default SignInPage;
