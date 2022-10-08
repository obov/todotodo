import { Link } from "react-router-dom";
import styled from "styled-components";
import { complete, remove } from "../store";
import Btn from "./Btn";

const Todo = ({ todo }) => {
  const { id, title, content } = todo;

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
        <Btn type={"delete"} id={id} />
        <Btn type={"complete"} id={id} />
      </Btns>
    </TodoContainter>
  );
};

export default Todo;

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
