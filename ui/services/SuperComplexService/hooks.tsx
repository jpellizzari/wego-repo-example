import * as React from "react";
import { useQuery } from "react-query";
import { SuperComplexServiceContext } from "./SuperComplexServiceProvider";

const SUPER_COMPLEX_DATA_CACHE_KEY = "super-complex-data";

// Note this is not exported
function useSuperComplexService() {
  return React.useContext(SuperComplexServiceContext);
}

export function useFetchSuperComplexData({ foo, bar }) {
  const cmplx = useSuperComplexService();

  return useQuery([SUPER_COMPLEX_DATA_CACHE_KEY, { foo, bar }], () =>
    cmplx.getSuperComplexData()
  );
}
