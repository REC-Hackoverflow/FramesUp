import "./index.css";
import { App } from "./Signup/root";
import React from "react";
import { render } from "react-dom";
import Signupbox from "./Signup/Signupbox";
import Loginbox from "./Login/Loginbox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";

class Apps extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={"/"} component={App} exact={true}></Route>
          <Route path={"/signup"} component={Signupbox}></Route>
          <Route path={"/login"} component={Loginbox}></Route>
        </Switch>
      </Router>
    );
  }
};

render(<Apps />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
