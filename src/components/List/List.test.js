import { render, screen } from "@testing-library/react";
import List from "./List";

describe("Given a List component", () => {
  describe("When called a list", () => {
    test("it shoul render a list of task", () => {
      render(<List />);

      const renderedElement = screen.getAllByRole("list");

      expect(renderedElement[0]).toBeInTheDocument();
    });
  });
});
