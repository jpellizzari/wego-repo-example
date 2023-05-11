import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

function Layout({ className }: Props) {
  return <div className={className}></div>;
}

export default styled(Layout).attrs({ className: Layout.name })``;
