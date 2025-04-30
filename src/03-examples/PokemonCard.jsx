import { useRef, useLayoutEffect, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();

    setBoxSize({
      height,
      width,
    });
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imágenes */}
      <div>
        {sprites.map((sprite, index) => (
          <img
            key={index}
            src={sprite}
            alt={name}
            className="img-thumbnail me-2"
            style={{ height: 100, width: 100 }}
          />
        ))}
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};
