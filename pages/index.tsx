import { useState } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'

import PokemonCard from '@/containers/home/PokemonCard'

import { getAllPokemons, LIMIT } from '@/api/pokemons'
import {
  GetPokemonsKey,
  Pokemon,
  PokemonFilter,
} from '@/interfaces/pokemon.interface'

const INITIAL_FILTER = { name: '', generationId: 0, typeId: 0 }

function Home() {
  const [filter, setFilter] = useState<PokemonFilter>(INITIAL_FILTER)

  const {
    data,
    isFetching,
    isFetchingNextPage,
    isPreviousData,
    fetchNextPage,
  } = useInfiniteQuery<Pokemon[], unknown, Pokemon[], GetPokemonsKey>(
    ['pokemons', filter],
    getAllPokemons,
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length < LIMIT ? undefined : allPages.length * LIMIT,
    }
  )

  const pokemons = data?.pages.flat()

  console.log(pokemons)

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(15.25rem,_1fr))] gap-4 px-6">
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={`${index}-${pokemon.id}`} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
export default Home
