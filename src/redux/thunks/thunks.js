import { deleteTaskActions, loadTasksActions } from "../actions/actionCreators";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasksList = await response.json();

  dispatch(loadTasksActions(tasksList));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteTaskActions(id));
  }
};
