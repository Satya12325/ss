import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/app/action";
import { logoutSucess } from "../Redux/auth/action";
export default function TodoInput() {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const addTodoAction = addTodo(title);
    dispatch(addTodoAction);
  };
  const handleLogOut = () => {
    const logoutSucessAction = logoutSucess(Date.now());
    dispatch(logoutSucessAction);
  };

  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
      <h3>Add Todo</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add something"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}
