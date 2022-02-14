import { render, screen } from "@testing-library/react";
import List from "./List";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Given a List component", () => {
  describe("When called a list", () => {
    test("it shoul render a list of task", () => {
      render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      const renderedElement = screen.getAllByRole("list");

      expect(renderedElement[0]).toBeInTheDocument();
    });
  });
});
