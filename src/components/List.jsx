import styled from "styled-components";
import TodosWrapper from "./TodosWrapper";
const List = () => {
  return (
    <ListContainer>
      <TodosWrapper text="Working.. 🔥" isCompleteTodos={false} />
      <TodosWrapper text="Done..! 🎉" isCompleteTodos={true} />
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  padding: 0 24px;
`;
