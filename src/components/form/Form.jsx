import { useState } from "react";
import "./style.css";
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
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          className="add-input input-body"
          onChange={handleChangeTitle}
          value={newTodo.title}
        />
        <label className="form-label">내용</label>
        <input type="text" name="body" className="add-input" onChange={handleChangeContent} value={newTodo.content} />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default Form;
