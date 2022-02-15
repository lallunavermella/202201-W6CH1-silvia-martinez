import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When it is instancied", () => {
    test("It should render a name", () => {
      renderWithProviders(<Task />);

      const list = screen.getByRole("listitem", { name: "" });

      expect(list).toBeInTheDocument();
    });
  });
});
