import assert from "node:assert";
import { add } from "./index";

describe("Add() test", () => {
  it("should add", () => {
    assert(add(2, 2) === 4);
  });
});
