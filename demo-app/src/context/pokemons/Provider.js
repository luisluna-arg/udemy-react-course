import { useState } from "react";

import PokemonContext from './index'
import apiCall from '../../api';

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");
      const pokemonResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100"//&offset=200
      });

      setPokemons(pokemonResult.results);
    }
    catch (error) {
      console.error(error);
      setPokemons([]);
      setHasError(true);
      setErrorMessage("Algo ha pasado, verifica tu conexión");
    }
    finally {
      setIsLoading(false);
    }
  }

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Id es requerido");

    try {
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
      });
      setPokemonDetail(pokemonDetail);
      setHasError(false);
      setErrorMessage("");
    }
    catch (error) {
      console.error(error);
      setPokemonDetail({});
      setHasError(true);
      setErrorMessage("Algo ha pasado, verifica tu conexión");
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <PokemonContext.Provider value={{
      getPokemons,
      pokemons,
      getPokemonDetail,
      pokemonDetail,
      isLoading,
      errorMessage,
      hasError
    }}>
      {children}
    </PokemonContext.Provider>
  );
}
