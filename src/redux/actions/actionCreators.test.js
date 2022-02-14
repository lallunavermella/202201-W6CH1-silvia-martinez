import { loadTasksActions } from "./actionCreators";

describe("Given a loadTasksAction", () => {
  describe("When it receives a task 1 and task 2", () => {
    test("Then it should return an action with tasks inside", () => {
      const tasks = [
        {
          id: 1,
          name: "sleep",
          done: false,
        },
        { id: 2, name: "sleep", done: true },
      ];

      const expectedAction = { type: "load-tasks", tasks: tasks };
      const action = loadTasksActions(tasks);
      expect(action).toEqual(expectedAction);
    });
  });
});
