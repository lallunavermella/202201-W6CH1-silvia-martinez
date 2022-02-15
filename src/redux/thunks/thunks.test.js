import { deleteTaskThunk, loadTasksThunk } from "./thunks";

describe("Given a load thunk function", () => {
  describe("When it's invoked", () => {
    test("it should call a dispatch", async () => {
      const dispatch = jest.fn();

      await loadTasksThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given a delete thunk function", () => {
  describe("When it's invoked with id+10", () => {
    test("it shouldn't call a dispatch", async () => {
      const dispatch = jest.fn();
      const id = 10;

      const deleteThunk = deleteTaskThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
  describe("When it's invoked a with id=2", () => {
    test("it should call a dispatch", async () => {
      const dispatch = jest.fn();
      const id = 2;

      const deleteThunk = deleteTaskThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
