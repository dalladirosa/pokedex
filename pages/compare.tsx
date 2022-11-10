import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import PokemonComparedCard from '@/containers/compare/PokemonComparedCard'
import SearchBar from '@/containers/compare/SearchBar'

import { getAllPokemonsNoLimit } from '@/api/pokemons'

const ComparePage = () => {
  const [comparedPokemon, setComparedPokemon] = useState<string[]>([])

  const { data } = useQuery(['allPokemonsNoLimit'], getAllPokemonsNoLimit)

  return (
    <div className="pt-6 px-6 pb-6">
      <h1 className="text-3xl font-bold pb-6 ">Compare Pokémons</h1>
      <SearchBar
        pokemons={data}
        setComparedPokemon={setComparedPokemon}
        comparedPokemon={comparedPokemon}
      />

      <div className="flex flex-row mt-2 gap-4">
        {comparedPokemon.map((name, index) => (
          <PokemonComparedCard name={name} key={`${name}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ComparePage
