import { loadTasksActions, deleteTaskActions } from "../actions/actionCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch("https://todo-gatete.herokuapp.com/gatetes");
  const tasksList = await response.json();

  dispatch(loadTasksActions(tasksList));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `https://todo-gatete.herokuapp.com/gatetes/${id}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    dispatch(deleteTaskActions(id));
  }
};
