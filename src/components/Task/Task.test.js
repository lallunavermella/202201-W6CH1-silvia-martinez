import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When it is instancied", () => {
    test("It should render a name", () => {
      render(<Task />);

      const list = screen.getByRole("listitem", { name: "" });

      expect(list).toBeInTheDocument();
    });
  });
});
