import * as React from "react";

export const SuperComplexServiceContext =
  React.createContext<SuperComplexService>(null as any);

type Props = {
  api: SuperComplexService;
  children: React.ReactNode;
};

export function SuperComplexServiceProvider({ children, api }: Props) {
  return (
    <SuperComplexServiceContext.Provider value={api}>
      {children}
    </SuperComplexServiceContext.Provider>
  );
}
