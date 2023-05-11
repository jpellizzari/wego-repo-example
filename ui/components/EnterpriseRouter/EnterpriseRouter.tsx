import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import styled from "styled-components";
import MyComponent from "../MyComponent/MyComponent";
import SomeEnterpriseComponent from "../SomeEnterpriseComponent";

type Props = {
  className?: string;
};

function EnterpriseRouter({ className }: Props) {
  return (
    <Router>
      <Switch>
        <Route path="/apps" component={MyComponent} />
        <Route path="/other" component={SomeEnterpriseComponent} />
      </Switch>
    </Router>
  );
}

export default styled(EnterpriseRouter).attrs({
  className: EnterpriseRouter.name,
})``;
