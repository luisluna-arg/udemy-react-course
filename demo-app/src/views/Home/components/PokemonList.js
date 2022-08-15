import PokemonListItem from './PokemonListItem';

export default function PokemonList({ pokemons }) {
    return (
        <>
            {pokemons.map((pokemon, index) => {
                return (<PokemonListItem key={index} {...pokemon} />);
            })
            }
        </>
    );
}
