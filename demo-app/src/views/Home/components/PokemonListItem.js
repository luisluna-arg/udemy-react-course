import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonListItem({ name, url }) {
    const getId = () => url.split("/")[6];

    return (
        <div>
            <React.Fragment>
                <p>{name}</p>
                <button>
                    <Link to={`/pokemon/${getId()}`}>
                        Ver detalle
                    </Link>
                </button>
            </React.Fragment>
        </div>
    );
}
