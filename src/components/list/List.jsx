import "./style.css";
import Todo from "../todo/Todo";
const List = ({ todos, setTodos }) => {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos
          .filter(({ isComplete }) => !isComplete)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos
          .filter(({ isComplete }) => isComplete)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
      </div>
    </div>
  );
};

export default List;
