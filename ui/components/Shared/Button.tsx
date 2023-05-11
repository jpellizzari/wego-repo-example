import * as React from "react";
import styled from "styled-components";

type Props = any;

function Button(props: Props) {
  return <button {...props}></button>;
}

export default styled(Button).attrs({ className: Button.name })``;
