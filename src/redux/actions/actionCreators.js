import actionTypes from "./actionTypes";

export const loadTasksActions = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});
