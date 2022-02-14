import { loadTasksActions } from "../actions/actionCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch("https://todo-gatete.herokuapp.com/gatetes");
  const tasksList = await response.json();

  dispatch(loadTasksActions(tasksList));
};
