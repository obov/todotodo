import { createStore } from "redux";

export const TYPE = {
  ADD: "ADD",
  DELETE: "DELETE",
  COMPLETE: "COMPLETE",
};

export const addTodo = (title, content) => ({ type: TYPE.ADD, title, content });
export const deleteTodo = (id) => ({ type: TYPE.DELETE, id });
export const completeTodo = (id, isComplete) => ({ type: TYPE.COMPLETE, id, isComplete });

const initTodos = [
  { id: 333, title: "세계정복", content: "쉬움", isComplete: true },
  { id: 222, title: "리엑트 공부", content: "어려움", isComplete: false },
];
const reducer = (state = initTodos, { type, ...todo }) => {
  const { id, title, content, isComplete } = todo;
  switch (type) {
    case TYPE.ADD:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title,
          content,
          isComplete: false,
        },
      ];
    case TYPE.DELETE:
      return state.filter((todo) => todo.id !== id);
    case TYPE.COMPLETE:
      const index = state.findIndex((e) => e.id === id);
      return state
        .slice(0, index)
        .concat({ ...state[index], isComplete: !isComplete })
        .concat(state.slice(index + 1));
    default:
      return state;
  }
};

export const store = createStore(reducer);
