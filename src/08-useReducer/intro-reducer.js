const initialState = [
  {
    id: 1,
    todo: "Learn React",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === "[TODO] Add Todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();
console.log(todos); // [{ id: 1, todo: "Learn React", done: false }]

const newTodo = {
  id: 2,
  todo: "Learn Redux",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add Todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos }); // [{ id: 1, todo: "Learn React", done: false }, { id: 2, todo: "Learn Redux", done: false }]
