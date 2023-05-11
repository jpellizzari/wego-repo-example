import * as React from "react";

export interface MyService {
  getMyData(): Promise<string>;
  sendSomeData(): Promise<void>;
}

export class MyServiceImpl implements MyService {
  getMyData(): Promise<string> {
    return Promise.resolve("Hello World");
  }

  sendSomeData(): Promise<void> {
    return Promise.resolve();
  }
}

const MyServiceContext = React.createContext<MyService>(new MyServiceImpl());

type Props = {
  api: MyService;
  children: React.ReactNode;
};

export function MyServiceProvider({ children, api }: Props) {
  return (
    <MyServiceContext.Provider value={api}>
      {children}
    </MyServiceContext.Provider>
  );
}

export function useMyService() {
  return React.useContext(MyServiceContext);
}
