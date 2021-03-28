import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";
import ConfirmPasswordForm from "../components/forms/ConfirmPasswordForm";
import Checkbox from "../components/forms/Checkbox";
import UserNameForm from "../components/forms/UserNameForm";
import Footer from "../components/Footer";

const SignUpPage = () => {
  return (
    <>
      <UserNameForm />
      <EmailForm />
      <PasswordForm />
      <ConfirmPasswordForm />
      <Checkbox />
      <Footer />
    </>
  );
};

export default SignUpPage;
