#!/usr/bin/env node

import { resolve } from "path";
import useCurrentPath from "./useCurrentPath";

const usePackageStubsPath =
  (packageName: string) =>
  (...paths: string[]) =>
    resolve(useCurrentPath(), "node_modules", packageName, "stubs", ...paths);

export default usePackageStubsPath;
