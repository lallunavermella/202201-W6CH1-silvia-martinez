import actionTypes from "./actionTypes";

export const loadTasksActions = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const deleteTaskActions = (id) => ({
  type: actionTypes.deleteTask,
  id,
});
