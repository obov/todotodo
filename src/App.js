import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <Routes>
      <Route index element={<TodoList />} />
      <Route path="/:id" element={<Details />} />; ;
    </Routes>
  );
}
export default App;
