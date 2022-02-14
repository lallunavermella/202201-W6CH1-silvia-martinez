import { loadTasks } from "../actions/actionsCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch("https://todo-gatete.herokuapp.com/gatetes");
  const tasksList = await response.json();

  dispatch(loadTasks(tasksList));
};
