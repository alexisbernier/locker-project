import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";
import Button from "../components/buttons/Button";
import Footer from "../components/Footer";

const SignInPage = () => {
  return (
    <>
      <EmailForm />
      <PasswordForm />
      <Button />
      <Footer />
    </>
  );
};

export default SignInPage;
