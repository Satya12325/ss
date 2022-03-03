import { React, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTodo } from "../Redux/app/action";

export function TodoItem({ title, status, id }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>
        <Link>{title}</Link>
      </div>
      <div>{`${status}`}</div>

      {/* <button onClick={()=>onToggle(id)}>Toggle</button> */}
    </div>
  );
}

export default function TodoList() {
  const { todos, isError, isLoading } = useSelector(
    (state) => state,
    shallowEqual
  );
  const dispatch = useDispatch();

  const handleGate = async () => {
    dispatch(getTodo());
  };
  useEffect(() => {
    handleGate();
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Somthing went wrong</h3>}

      {todos?.map((item) => (
        <TodoItem
          key={item.id}
          {...item}

          // onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
