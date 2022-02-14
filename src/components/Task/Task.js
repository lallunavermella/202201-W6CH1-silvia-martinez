import styled from "styled-components";

const StyledTask = styled.li`
  display: flex;
  flex-direction: row;
  p {
    text-decoration: none;
    color: violet;
    margin: 10px;
  }
  .done {
    text-decoration: line-through;
    color: blue;
  }
`;

const Task = ({ id, name, done }) => {
  return (
    <StyledTask>
      <p className={done ? "done" : ""}>{name}</p> <p className="delete">X</p>
    </StyledTask>
  );
};

export default Task;
