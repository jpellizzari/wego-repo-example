import * as React from "react";
import EnterpriseRouter from "./components/EnterpriseRouter/EnterpriseRouter";
import Layout from "./components/Layout";

type Props = {
  className?: string;
};

function Enterprise({ className }: Props) {
  return (
    <ServicesProvider
      contexts={[
        [MyService, { some: "value" }],
        [OtherService, { some: "value" }],
      ]}
    >
      <Layout
        className={className}
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

export default styled(Enterprise).attrs({ className: Enterprise.name })``;
