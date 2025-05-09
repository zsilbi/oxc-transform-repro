import { readFile } from "node:fs/promises";
import oxcTransform from "oxc-transform";

const entryPath = "src/index.ts";

const { code } = oxcTransform.transform(
  entryPath,
  await readFile(entryPath, "utf8"),
  {
    decorator: { legacy: true, emitDecoratorMetadata: true },
  }
);

console.log(code);
