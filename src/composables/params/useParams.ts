#!/usr/bin/env node

import minimist from "minimist";

type GetCorrectReturnType<TKey, TExpected> = TKey extends TExpected
  ? TExpected
  : undefined | TExpected;

const useParams = <TParams extends Record<string, unknown>>() => {
  const params = minimist<Partial<TParams>>(process.argv.slice(2));
  return {
    useParam<
      TKey extends keyof TParams,
      TValue extends TParams[TKey] | undefined
    >(name: TKey, defaultValue?: TValue) {
      return (params[name] || defaultValue) as GetCorrectReturnType<
        TValue,
        TParams[TKey]
      >;
    },
  };
};

export default useParams;
