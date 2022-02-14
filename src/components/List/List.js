import Task from "../Task/Task";
import styled from "styled-components";
import { tasksApi } from "../../data/tasksApi";

const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const List = () => {
  console.log(tasksApi[0]);
  return (
    <ListStyled>
      {tasksApi.map((taskApi) => (
        <Task name={taskApi.name} done={taskApi.done} key={taskApi.id} />
      ))}
    </ListStyled>
  );
};
export default List;
