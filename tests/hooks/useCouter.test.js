import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("debe de regresar el valor por defecto", () => {
    // Arrange
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    // Act
    // Assert
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment(2);
    });
    const { counter } = result.current;
    expect(counter).toBe(102);
  });

  test("debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    const { counter } = result.current;
    expect(counter).toBe(97);
  });

  test("debe de decrementar el contador a 0", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement(101);
    });
    const { counter } = result.current;
    expect(counter).toBe(0);
  });

  test("debe de resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment(2);
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
