import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const COMPLETE = "COMPLETE";

export const addTodo = (title, content) => ({ type: ADD, title, content });
export const deleteTodo = (id) => ({ type: DELETE, id });
export const completeTodo = (id, isComplete) => ({ type: COMPLETE, id, isComplete });

const reducer = (
  state = [
    { id: 333, title: "세계정복", content: "쉬움", isComplete: true },
    { id: 222, title: "리엑트 공부", content: "어려움", isComplete: false },
  ],
  { type, ...todo }
) => {
  const { id, title, content, isComplete } = todo;
  switch (type) {
    case ADD:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title,
          content,
          isComplete: false,
        },
      ];
    case DELETE:
      return state.filter((todo) => todo.id !== id);
    case COMPLETE:
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
