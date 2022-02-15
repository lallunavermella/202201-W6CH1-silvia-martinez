import { screen } from "@testing-library/react";
import List from "./List";
import renderWithProviders from "../../setupTests";

describe("Given a List component", () => {
  describe("When called a list", () => {
    test("it shoul render a list of task", () => {
      renderWithProviders(<List />);

      const renderedElement = screen.getAllByRole("list");

      expect(renderedElement[0]).toBeInTheDocument();
    });
  });
  describe("When it receives an array with objects", () => {
    test("Then it should render the tasks", async () => {
      const expectedFirstTask = /sleep all day/i;

      renderWithProviders(<List />);

      const findFirstTask = await screen.findByText(expectedFirstTask);

      expect(findFirstTask).toBeInTheDocument();
    });
  });
});
