import actionTypes from "../actions/actionsTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;

    default:
      newTasks = [...currentTasks];
      break;
  }
  return newTasks;
};
export default tasksReducer;