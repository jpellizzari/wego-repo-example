import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import styled from "styled-components";
import MyComponent from "../MyComponent/MyComponent";

type Props = {
  className?: string;
};

function CoreRouter({ className }: Props) {
  return (
    <Router>
      <Switch>
        <Route path="/apps" component={MyComponent} />
      </Switch>
    </Router>
  );
}

export default styled(CoreRouter).attrs({ className: CoreRouter.name })``;
