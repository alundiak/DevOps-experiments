import test from "node:test";
import assert from "node:assert";
import { add } from "./index.js";

test("Add() test", () => {
  assert.strictEqual(add(2, 2), 4);
});
