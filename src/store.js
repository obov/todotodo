import { configureStore, createSlice } from "@reduxjs/toolkit";

// export const TYPE = {
//   ADD: "ADD",
//   DELETE: "DELETE",
//   COMPLETE: "COMPLETE",
// };

// export const addTodo = createAction("ADD");
// export const deleteTodo = createAction("DELETE");
// export const completeTodo = createAction("COMPLETE");

const initialState = [
  { id: 333, title: "세계정복", content: "쉬움", isComplete: true },
  { id: 222, title: "리엑트 공부", content: "어려움", isComplete: false },
];

// const reducer = createReducer(initTodos, {
//   [addTodo]: (state, action) => {
//     const { payload } = action;
//     state.push({
//       id: new Date().getTime(),
//       isComplete: false,
//       ...payload,
//     });
//   },
//   [deleteTodo]: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload.id);
//   },
//   [completeTodo]: (state, action) => {
//     const index = state.findIndex((e) => e.id === action.payload.id);
//     state[index].isComplete = !action.payload.isComplete;
//   },
// });

const todo = createSlice({
  name: "todosReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      const { payload } = action;
      state.push({
        id: new Date().getTime(),
        isComplete: false,
        ...payload,
      });
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    complete: (state, action) => {
      // console.log("hi");
      const index = state.findIndex((e) => e.id === action.payload.id);
      // console.log(state[index]);
      state[index].isComplete = !action.payload.isComplete;
    },
  },
});

export const { add, remove, complete } = todo.actions;
export default configureStore({ reducer: todo.reducer });
