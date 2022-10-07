import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const TodosWrapper = ({ text, isCompleteTodos }) => {
  const todos = useSelector((state) => state);
  return (
    <>
      <H2>{text}</H2>
      <ListWrapper>
        {todos
          .filter(({ isComplete }) => isComplete === isCompleteTodos)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ListWrapper>
    </>
  );
};

export default TodosWrapper;

const H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
