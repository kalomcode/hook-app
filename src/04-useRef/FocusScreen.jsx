import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").select(); // Select the input field
    inputRef.current.select(); // Select the input field
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />

      <button className="btn btn-outline-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
