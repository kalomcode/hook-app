import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState); // In this case, we use toBe and not toEqual because we are comparing the same object with the same memory reference.
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Demo todo 2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2); // We check that the length of the new state is 2
    expect(newState).toContain(action.payload); // We check that the new state contains the new todo
    expect(newState[1]).toEqual(action.payload); // We check that the new state contains the new todo in the second position
    expect(newState[1]).toStrictEqual(action.payload); // We check that the new state contains the new todo in the second position
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0); // We check that the length of the new state is 0
    expect(newState).not.toContain(initialState[0]); // We check that the new state does not contain the todo that we removed
  });

  test("debe de hacer toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true); // We check that the todo is done

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false); // We check that the todo is done
  });
});
