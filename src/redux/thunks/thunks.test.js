import { loadTasksThunk } from "./thunks";

describe("Given a thunk function", () => {
  describe("When it's invoked a load tasks thunk", () => {
    test("it should call a dispatch", async () => {
      const dispatch = jest.fn();

      await loadTasksThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
