import { describe, expect, it } from "@rstest/core";
import { HelloWorld } from "../src/index";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("HelloWorld", () => {
  it("renders expected text", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
