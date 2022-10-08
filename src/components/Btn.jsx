import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { add, complete, remove } from "../store";

const Btn = ({ id, type }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const { isComplete } = todos.find((todo) => todo.id === id);

  const handleClickComplete = () => {
    dispatch(complete({ id, isComplete }));
  };
  const handleClickDelete = () => {
    dispatch(remove({ id }));
  };

  return type === "delete" ? (
    <Button type={type} onClick={handleClickDelete}>
      삭제하기
    </Button>
  ) : (
    <Button type={type} onClick={handleClickComplete}>
      {isComplete ? "취소" : "완료"}
    </Button>
  );
};

export default Btn;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid ${({ type }) => (type === "delete" ? "red" : "green")};
`;
