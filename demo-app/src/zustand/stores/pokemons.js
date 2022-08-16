import create from 'zustand';

import apiCall from '../../api';

const URLs = {
    pokemonList: "https://pokeapi.co/api/v2/pokemon?limit=100",//&offset=200 
    basePokemonDetail: "https://pokeapi.co/api/v2/pokemon/"
}

const usePokemonStore = create((set, get) => ({
    getPokemons: async () => {
        try {
            set({ isLoading: false, errorMessage: "", hasError: false });

            const pokemonResult = await apiCall({ url: URLs.pokemonList });
            set({ pokemons: pokemonResult.results });
        }
        catch (error) {
            console.error(error);
            set({ pokemons: [], hasError: true, errorMessage: "Algo ha pasado, verifica tu conexión" });
        }
        finally {
            set({ isLoading: false });
        }
    },
    pokemons: [],
    getPokemonDetail: async (id) => {
        if (!id) return;

        try {
            set({ isLoading: false, errorMessage: "", hasError: false });

            const pokemonDetail = await apiCall({ url: URLs.basePokemonDetail + `${id}` });
            set({ pokemonDetail });
        }
        catch (error) {
            console.error(error);
            set({ hasError: true, errorMessage: "Algo ha pasado, verifica tu conexión", pokemonDetail: {} });
        }
        finally {
            set({ isLoading: false });
        }
    },
    pokemonDetail: [],
    isLoading: false,
    errorMessage: "",
    hasError: false
}));

export default usePokemonStore;

/*
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
*/