type SuperComplexData = {
  id: number;
  name: string;
  description: string;
  date: Date;
};

interface SuperComplexService {
  getSuperComplexData(): Promise<SuperComplexData>;
}

class SuperComplexServiceImpl implements SuperComplexService {
  async getSuperComplexData(): Promise<SuperComplexData> {
    return {
      id: 1,
      name: "SuperComplexData",
      description: "SuperComplexData description",
      date: new Date(),
    };
  }
}
