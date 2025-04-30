import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("TodoItem", () => {
  const todo = {
    id: 1,
    description: "Demo todo",
    done: false,
  };

  const onDeleteTodo = jest.fn();
  const onToggleTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Limpiar los mocks antes de cada prueba
  });

  test("debe de mostrar el todo pendiente", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toContain(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByText(todo.description);
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("debe de mostrar el todo completado", () => {
    todo.done = true;

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = screen.getByText(todo.description);
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("debe de llamar onDeleteTodo al hacer click en el botón", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
  });

  test("debe de llamar onToggleTodo al hacer click en el span", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = screen.getByText(todo.description);
    fireEvent.click(spanElement);
    expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
  });
});
