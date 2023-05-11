import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  busy?: boolean;
};

function Loading({ className, busy }: Props) {
  return <div className={className}>{busy ? <div>Loading...</div> : null}</div>;
}

export default styled(Loading).attrs({ className: Loading.name })``;
