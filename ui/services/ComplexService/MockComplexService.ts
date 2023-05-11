import { ComplexService } from "./ComplexService";

export default class MockComplexService implements ComplexService {
  getComplexDataReturns: string = "";
  sendSomeDataReturns: void = undefined;

  getComplexData(): Promise<string> {
    return Promise.resolve(this.getComplexDataReturns);
  }

  sendSomeData(): Promise<void> {
    return Promise.resolve(this.sendSomeDataReturns);
  }
}
