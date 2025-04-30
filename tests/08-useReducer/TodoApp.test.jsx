import { render, screen, fireEvent } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Pruebas en <TodoApp />", () => {
  const todos = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
    {
      id: 2,
      description: "Demo todo 2",
      done: true,
    },
  ];

  useTodo.mockReturnValue({
    todos,
    todosCount: 0,
    pendingTodosCount: 0,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText(todos[0].description)).toBeTruthy();
    expect(screen.getByText(todos[1].description)).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Agregar" })).toBeTruthy();
  });
});
