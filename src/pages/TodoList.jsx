import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 333, title: "세계정복", content: "쉬움", isComplete: true },
    { id: 222, title: "리엑트 공부", content: "어려움", isComplete: false },
  ]);
  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
