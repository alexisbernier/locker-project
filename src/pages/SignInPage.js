import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";
import Button from "../components/buttons/Button";
import Nav from "../components/Navbar";

const SignInPage = () => {
  return (
    <>
      <Nav />
      <EmailForm />
      <PasswordForm />
      <Button />
    </>
  );
};

export default SignInPage;
