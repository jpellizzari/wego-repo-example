import * as React from "react";
import EnterpriseRouter from "./components/EnterpriseRouter/EnterpriseRouter";
import Layout from "./components/Layout/Layout";
import { MyServiceProvider } from "./services/SimpleService/MyService";
import { SuperComplexServiceProvider } from "./services/SuperComplexService/SuperComplexServiceProvider";

export default function Enterprise() {
  return (
    <ServicesProvider
      contexts={[
        [MyServiceProvider, { some: "value" }],
        [SuperComplexServiceProvider, { some: "value" }],
      ]}
    >
      <Layout
        nav={
          <Navigation
            items={[
              { label: "Some Free Feature", value: "free-feature" },
              {
                label: "Some Enterprise Feature",
                value: "enterprise-feature",
              },
            ]}
          />
        }
      >
        <EnterpriseRouter />
      </Layout>
    </ServicesProvider>
  );
}
