import Layout from "../components/layout/ListLayout";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

const TodoList = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default TodoList;
