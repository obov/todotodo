import "./style.css";
const Btn = ({ cls, text, ...rest }) => (
  <button {...rest} className={"button " + cls}>
    {text}
  </button>
);
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
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{title}</h2>
        <div>{content}</div>
      </div>
      <div className="button-set">
        <Btn cls="todo-delete-button" text="삭제하기" onClick={handleClickDelete} />
        <Btn cls="todo-complete-button" text={isComplete ? "취소" : "완료"} onClick={handleClickComplete} />
      </div>
    </div>
  );
};

export default Todo;
