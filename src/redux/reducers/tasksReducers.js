import actionTypes from "../actions/actionTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionTypes.deleteTask:
      newTasks = currentTasks.filter((task) => task.id !== action.id);
      break;
    default:
      newTasks = [...currentTasks];
      break;
  }
  return newTasks;
};

export default tasksReducer;
