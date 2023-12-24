import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const Pokemons = () => {
    const { pokemons, isLoading, page } = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [])
    return (<>
        <div>Pokemons</div>
        <span>Loading: {isLoading ? 'True' : 'False'}</span>
        <ul>
            {pokemons.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
        <button onClick={() => dispatch(getPokemons(page - 1))}>Prev</button>
        <button onClick={() => dispatch(getPokemons(page + 1))}>Next</button>
    </>
    )
}
