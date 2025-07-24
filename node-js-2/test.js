import test from "node:test";
import assert from "node:assert";
import { multiply } from "./index.js";

test("Multiply() test", () => {
  assert.strictEqual(multiply(2, 3), 6);
});
