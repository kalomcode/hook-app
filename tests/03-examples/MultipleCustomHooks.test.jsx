import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({ data: null, hasError: null, isLoading: true });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando")).toBeTruthy();
    expect(screen.getByText("Información de Pokémon")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Siguientes" });
    expect(nextButton).toBeTruthy();

    // screen.debug();
  });

  test("debe de mostrar un pokemon", () => {
    const pokemon = {
      id: 1,
      name: "pikachu",
      sprites: {
        front_default: "some",
        front_shiny: "some",
        back_default: "some",
        back_shiny: "some",
      },
    };

    useFetch.mockReturnValue({
      data: pokemon,
      hasError: null,
      isLoading: false,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText(`#${pokemon.id} - ${pokemon.name}`)).toBeTruthy();

    // screen.debug();
  });

  test("Debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 2,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const siguienteButton = screen.getByRole("button", { name: "Siguientes" });
    fireEvent.click(siguienteButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
