import { Link } from "react-router-dom";
import styled from "styled-components";
const Btn = ({ text, ...rest }) => <Button {...rest}>{text}</Button>;
const Todo = ({ todo: { id, title, content, isComplete }, setTodos }) => {
  const handleClickComplete = () => {
    setTodos((cur) => {
      const index = cur.findIndex((e) => e.id === id);
      return cur
        .slice(0, index)
        .concat({ ...cur[index], isComplete: !isComplete })
        .concat(cur.slice(index + 1));
    });
  };
  const handleClickDelete = () => {
    setTodos((cur) => cur.filter((e) => e.id !== id));
  };
  return (
    <TodoContainter>
      <Link to={"/" + id} state={{ id, title, content }}>
        상세보기
      </Link>
      <div>
        <H2>{title}</H2>
        <div>{content}</div>
      </div>
      <Btns>
        <Btn type="todo-delete-button" text="삭제하기" onClick={handleClickDelete} />
        <Btn type="todo-complete-button" text={isComplete ? "취소" : "완료"} onClick={handleClickComplete} />
      </Btns>
    </TodoContainter>
  );
};

export default Todo;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid ${({ type }) => (type === "todo-delete-button" ? "red" : "green")};
`;
const H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const TodoContainter = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;
