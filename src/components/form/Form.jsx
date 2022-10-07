import { useState } from "react";
import styled from "styled-components";
// import "./style.css";
const Form = ({ setTodos }) => {
  const initValue = {
    title: "",
    content: "",
    isComplete: false,
  };
  const [newTodo, setNewTodo] = useState(initValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title && newTodo.content) {
      setTodos((cur) => cur.concat({ ...newTodo, id: new Date().getTime() }));
      setNewTodo(() => initValue);
    }
  };
  const handleChangeTitle = ({ target }) => {
    setNewTodo((cur) => ({ ...cur, title: target.value }));
  };
  const handleChangeContent = ({ target }) => {
    setNewTodo((cur) => ({ ...cur, content: target.value }));
  };
  return (
    <TodoForm onSubmit={handleSubmit}>
      <InputGroup>
        <FormLabel>제목</FormLabel>
        <Input type="text" name="title" onChange={handleChangeTitle} value={newTodo.title} />
        <FormLabel className="form-label">내용</FormLabel>
        <Input type="text" name="body" onChange={handleChangeContent} value={newTodo.content} />
      </InputGroup>
      <Btn className="add-button">추가하기</Btn>
    </TodoForm>
  );
};

export default Form;
const TodoForm = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;
const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
const Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const Btn = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
  cursor: pointer;
`;
