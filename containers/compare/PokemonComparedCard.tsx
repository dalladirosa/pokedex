import React from 'react'

import { useQuery } from '@tanstack/react-query'

import { getPokemon } from '@/api/pokemons'
import { GetPokemon, QueryPokemonKey } from '@/interfaces/pokemon.interface'

import PokemonImage from './PokemonImage'
import PokemonAbillites from '../pokemon/PokemonAbillites'
import PokemonStats from '../pokemon/PokemonStats'

const PokemonComparedCard = ({ name }: { name: string }) => {
  const { data } = useQuery<
    GetPokemon['pokemon_v2_pokemon'],
    unknown,
    GetPokemon['pokemon_v2_pokemon'],
    QueryPokemonKey
  >(['pokemon', name], getPokemon)

  if (!data?.[0]) return <div />

  return (
    <div className="w-1/2">
      <PokemonImage pokemon={data?.[0]} />
      <div className="bg-white py-2 px-4 mb-3">
        <PokemonStats data={data?.[0]} />
      </div>
      <div className="bg-white py-2 px-4">
        <PokemonAbillites data={data?.[0]} />
      </div>
    </div>
  )
}

export default PokemonComparedCard
