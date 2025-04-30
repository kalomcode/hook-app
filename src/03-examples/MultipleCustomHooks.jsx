import { useCounter, useFetch } from "../hooks";
import { LoadingMessge } from "./LoadingMessge";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessge />
      ) : (
        <PokemonCard /* {...data} */
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        onClick={() => counter > 1 && decrement()}
        className="btn btn-primary mt-2"
      >
        Anteriores
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguientes
      </button>
    </>
  );
};
