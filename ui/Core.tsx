import * as React from "react";
import styled from "styled-components";
import CoreRouter from "./components/CoreRouter";
import Layout from "./components/Layout";

type Props = {
  className?: string;
};

function Core({ className }: Props) {
  return (
    <Layout
      className={className}
      nav={
        <Navigation
          items={[{ label: "Some Free Feature", value: "free-feature" }]}
        />
      }
    >
      <CoreRouter />
    </Layout>
  );
}

export default styled(Core).attrs({ className: Core.name })``;
