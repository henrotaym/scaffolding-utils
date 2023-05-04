# Scaffolding boilerplate utils

## Installation
```shell
yarn add @henrotaym/scaffolding-utils -D
```

## Usage

### src/index.ts
```typescript
#!/usr/bin/env node

import {
  useCommandName,
  useCurrentPath,
  usePackageStubsPath,
  useGenerator,
  usePrompt
} from "@henrotaym/scaffolding-utils";

// Defining script
export const useMyScript = () => {
  const useStubsPath = usePackageStubsPath("@henrotaym/my-current-package");
  const generator = useGenerator({
    name: usePrompt("your name"),
    lastName: usePrompt("your last name")
  })
  
  generator.copy(
    useStubsPath("devops"),
    useCurrentPath("devops")
  );
}
```

### Build dist directory
```shell
./cli yarn build
```

### bin/myDevops
```typescript
#!/usr/bin/env node

const { useMyScript } = require("../dist");

useMyScript();
```

## Test your script
```shell
./cli node ./bin/myDevops
```