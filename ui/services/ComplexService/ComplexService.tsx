import * as React from "react";

import { useQuery, useQueryClient } from "react-query";

export interface ComplexService {
  getComplexData(): Promise<string>;
  sendSomeData(input: string): Promise<void>;
}

export class ComplexServiceImpl implements ComplexService {
  getComplexData(): Promise<string> {
    return Promise.resolve("Hello World");
  }

  sendSomeData(): Promise<void> {
    return Promise.resolve();
  }
}

const ComplexServiceContext = React.createContext<ComplexService>(null);

type Props = {
  api: ComplexService;
  children: React.ReactNode;
};

export function ComplexServiceProvider({ children, api }: Props) {
  return (
    <ComplexServiceContext.Provider value={new ComplexServiceImpl()}>
      {children}
    </ComplexServiceContext.Provider>
  );
}

const COMPLEX_DATA_CACHE_KEY = "complexData";

function useComplexService() {
  return React.useContext(ComplexServiceContext);
}

export function useFetchComplexData({ foo, bar }) {
  const cmplx = useComplexService();

  return useQuery([COMPLEX_DATA_CACHE_KEY, { foo, bar }], () =>
    cmplx.getComplexData()
  );
}

export function useSubmitComplexData() {
  const qc = useQueryClient();
  const cmplx = useComplexService();

  return (someInput: string) =>
    cmplx.sendSomeData(someInput).then(() => {
      qc.invalidateQueries(COMPLEX_DATA_CACHE_KEY);
    });
}
