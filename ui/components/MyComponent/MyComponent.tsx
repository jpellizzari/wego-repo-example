import * as React from "react";
import styled from "styled-components";
import {
  useFetchComplexData,
  useSubmitComplexData,
} from "../../services/ComplexService/ComplexService";
import { useMyService } from "../../services/SimpleService/MyService";
import Button from "../Shared/Button";
import Loading from "../Shared/Loading";

type Props = {
  className?: string;
};

function MyComponent({ className }: Props) {
  const [submitting, setSubmitting] = React.useState(false);

  const myService = useMyService();
  const submit = useSubmitComplexData();
  const { data } = useFetchComplexData({ foo: "abc", bar: "def" });

  const handleSubmit = () => {
    setSubmitting(true);
    submit("this is input!").finally(() => setSubmitting(false));
  };

  return (
    <div className={className}>
      <div>
        <Loading busy={submitting} />
      </div>
      <div>{data}</div>
      <div>
        <Button onClick={() => myService.sendSomeData()}>
          Submit Simple Data
        </Button>
      </div>
      <div>
        <Button onClick={handleSubmit}>Submit Complex Data</Button>
      </div>
    </div>
  );
}

export default styled(MyComponent).attrs({ className: MyComponent.name })``;
