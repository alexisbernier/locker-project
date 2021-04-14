import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {" "}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/SignUpPage">
          <SignUpPage />
        </Route>
        <Route path="/SignInPage">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
