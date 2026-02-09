import { describe, expect, it } from "@rstest/core";
import helloWorld from "../src/index";

describe("lib", () => {
  it("works", () => {
    expect(helloWorld).toStrictEqual("Hello world");
  });
});
