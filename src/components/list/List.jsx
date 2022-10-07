import Todo from "../todo/Todo";
import styled from "styled-components";
const List = ({ todos, setTodos }) => {
  return (
    <ListContainer>
      <H2>Working.. 🔥</H2>
      <ListWrapper>
        {todos
          .filter(({ isComplete }) => !isComplete)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
      </ListWrapper>
      <H2>Done..! 🎉</H2>
      <ListWrapper>
        {todos
          .filter(({ isComplete }) => isComplete)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;

const H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  padding: 0 24px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
