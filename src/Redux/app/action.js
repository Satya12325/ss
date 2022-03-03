import axios from "axios";
import { v4 as uuid } from "uuid";

const addTodoRequest = () => {
  return {
    type: "ADD_TODO_REQUEST"
  };
};

const addTodoSuccess = (payload) => {
  return {
    type: "ADD_TODO_SUCCESS",
    payload
  };
};

const addTodoFailure = (err) => {
  return {
    type: "ADD_TODO_FAILURE",
    payload: err
  };
};

const addTodo = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  return axios
    .post("https://json-server-mocker-masai.herokuapp.com/tasks", {
      title: payload,
      status: false,
      id: uuid()
    })
    .then((res) => {
      dispatch(addTodoSuccess(res.data));
      console.log(res.data);
      dispatch(getTodo());
    })
    .catch((err) => {
      console.log(err);
      dispatch(addTodoFailure(err));
    });
};

// Get action creator

const getTodoRequest = () => {
  return {
    type: "GET_TODO_REQUEST"
  };
};

const getTodoSuccess = (payload) => {
  return {
    type: "GET_TODO_SUCCESS",
    payload
  };
};

const getTodoFailure = (error) => {
  return {
    type: "GET_TODO_FAILURE",
    payload: error
  };
};

const getTodo = () => (dispatch) => {
  dispatch(getTodoRequest());
  return axios
    .get("https://json-server-mocker-masai.herokuapp.com/tasks")
    .then((res) => {
      dispatch(getTodoSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch(getTodoFailure(err));
    });
};

// remove
const toggleTodo = (id) => ({
  type: "TOGGLE_TODO_STATUS",
  payload: {
    id: id
  }
});

export { addTodo, getTodo, toggleTodo };
