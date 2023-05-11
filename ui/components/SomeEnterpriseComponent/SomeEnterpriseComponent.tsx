import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

function SomeEnterpriseComponent({ className }: Props) {
  return <div className={className}>$$$$$</div>;
}

export default styled(SomeEnterpriseComponent).attrs({
  className: SomeEnterpriseComponent.name,
})``;
