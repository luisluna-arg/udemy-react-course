import { 
  useEffect, 
  // useContext
 } from "react"
// import PokemonContext from "../../context/pokemons";
import shallow from "zustand/shallow";

import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonsStore from "../../zustand/stores/pokemons";

export default function Home() {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } = usePokemonsStore(state => ({
    getPokemons: state.getPokemons,
    pokemons: state.pokemons,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage
  }), shallow); // Using zustand
  // const { getPokemons, pokemons, isLoading, hasError, errorMessage } = useContext(PokemonContext); // Using context provider

  useEffect(() => {
    getPokemons().catch(null);
    //eslint-disable-next-line
  }, [])

  if (isLoading) return (<Loading title="Cargando pokemon..." />)

  return (
    <>
      {!hasError ? <PokemonList pokemons={pokemons} /> : <ErrorMessage message={errorMessage} />}
    </>
  );
}
