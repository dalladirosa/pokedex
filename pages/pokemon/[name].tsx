import { useRouter } from 'next/router'
import React from 'react'

import { useQuery } from '@tanstack/react-query'

import PokemonAbillites from '@/containers/pokemon/PokemonAbillites'
import PokemonImage from '@/containers/pokemon/PokemonImage'
import PokemonStats from '@/containers/pokemon/PokemonStats'

import { getPokemon } from '@/api/pokemons'
import { GetPokemon, QueryPokemonKey } from '@/interfaces/pokemon.interface'

const PokemonDetailPage = () => {
  const router = useRouter()
  const { data } = useQuery<
    GetPokemon['pokemon_v2_pokemon'],
    unknown,
    GetPokemon['pokemon_v2_pokemon'],
    QueryPokemonKey
  >(['pokemon', router.query.name as string], getPokemon)

  return (
    <div className="flex flex-row flex-1 w-full gap-5 mt-8 pl-6">
      <div className="rounded-md bg-white p-3.5 shadow-md w-4/6 divide-y-2 divide-[#e5e7eb]">
        <PokemonStats data={data?.[0]} />
        <PokemonAbillites data={data?.[0]} />
      </div>
      <PokemonImage data={data?.[0]} />
    </div>
  )
}

export default PokemonDetailPage
