export const todoReducer = (initialState = [], action) => {
  const ACTIONS = {
    "[TODO] Add Todo": (state, payload) => {
      return [...state, payload];
    },
    "[TODO] Remove Todo": (state, payload) => {
      return state.filter((todo) => todo.id !== payload);
    },
    "[TODO] Toggle Todo": (state, payload) => {
      return state.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    },
  };

  return ACTIONS[action.type]
    ? ACTIONS[action.type](initialState, action.payload)
    : initialState;
};
