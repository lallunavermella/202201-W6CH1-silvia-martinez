import { loadTasksActions } from "../actions/actionCreators";
import tasksReducer from "./tasksReducers";

describe("Given a TasksReducer", () => {
  describe("When given a current object and action", () => {
    test("Then should return a newlistTasks with current object ans action", () => {
      const currentlist = [1, 21, 36, 4];
      const newList = [13, 36, 31, 45];
      const action = loadTasksActions(newList);

      const receivedList = tasksReducer(currentlist, action);

      expect(receivedList).toEqual(newList);
    });
  });
  describe("When given a currentlist and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentlist = [23, 34, 47, 56];
      const action = { type: "not-work" };

      const receivedList = tasksReducer(currentlist, action);

      expect(receivedList).toEqual(currentlist);
    });
  });
  describe("When it render", () => {
    test("Then it should return length 0", () => {
      const newTasks = tasksReducer();

      expect(newTasks).toHaveLength(0);
    });
  });
});
