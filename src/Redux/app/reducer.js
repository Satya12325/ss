const initialState = {
  todos: [],
  isLoading: false,
  isError: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO_REQUEST": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "ADD_TODO_SUCCESS": {
      return {
        ...state,
        isLoading: false
      };
    }
    case "GET_TODO_REQUEST": {
      return {
        ...state,
        todos: payload,
        isLoading: false
      };
    }
    case "GET_TODO_SUCCESS": {
      return {
        ...state,
        todos: payload,
        isLoading: false
      };
    }
    case "GET_TODO_FAILURE": {
      return {
        ...state,
        isError: true
      };
    }
    case "TOGGLE_TODO_STATUS": {
      // TODO
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload.id ? { ...item, status: !item.status } : item
        )
      };
    }
    default:
      return state;
  }
};

export { reducer };
