import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";
import ConfirmPasswordForm from "../components/forms/ConfirmPasswordForm";
import UserNameForm from "../components/forms/UserNameForm";
import Checkbox from "../components/forms/Checkbox";
import Btn from "../components/buttons/Button";
import Nav from "../components/Navbar";

const SignUpPage = () => {
  return (
    <>
      <Nav />
      <UserNameForm />
      <EmailForm />
      <PasswordForm />
      <ConfirmPasswordForm />
      <Checkbox />
      <Btn />
    </>
  );
};

export default SignUpPage;
