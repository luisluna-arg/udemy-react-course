import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import PokemonContext from "../../../context/pokemons";
import PokeStats from './components/PokeStats';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

export default function PokeDetail() {
    const { id } = useParams();
    const { pokemonDetail, getPokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);

    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, [getPokemonDetail, id]);

    if (isLoading) return (<Loading title="Cargando pokemon..." />)

    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <h3 style={{ marginTop: 15, marginBottom: 15 }}>Info general</h3>
                    <p>{`Nombre: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
                    <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>
                    <div>
                        <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
                        <PokeStats stats={pokemonDetail?.stats ?? []} />
                    </div>
                </>
            )}
        </div>
    );
}