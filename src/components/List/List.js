import Task from "../Task/Task";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTasksThunk } from "../../redux/thunks/thunks";

const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const List = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <ListStyled>
      {tasks.map((task) => (
        <Task name={task.name} done={task.done} key={task.id} />
      ))}
    </ListStyled>
  );
};
export default List;
