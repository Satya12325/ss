import Login from "../Login/Login";
import { useSelector } from "react-redux";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

export default function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  return isAuth ? (
    <div className="App">
      <h3>User Token: {token} </h3>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  ) : (
    <Login />
  );
}
