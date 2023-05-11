import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import MyComponent from "../MyComponent/MyComponent";
import SomeEnterpriseComponent from "../SomeEnterpriseComponent/SomeEnterpriseComponent";

export default function EnterpriseRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/apps" component={MyComponent} />
        <Route path="/other" component={SomeEnterpriseComponent} />
      </Switch>
    </Router>
  );
}
