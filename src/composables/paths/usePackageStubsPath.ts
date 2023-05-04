#!/usr/bin/env node

import { resolve } from "path";

const usePackageStubsPath =
  (packageName: string) =>
  (...paths: string[]) => {
    const [, binLocation] = process.argv;
    return resolve(binLocation, "..", "..", packageName, "stubs", ...paths);
  };

export default usePackageStubsPath;
