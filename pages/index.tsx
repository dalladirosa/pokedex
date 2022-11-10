import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useInfiniteQuery } from '@tanstack/react-query'

import Filters from '@/containers/home/Filters'
import LoadingCard from '@/containers/home/LodingCard'
import PokemonCard from '@/containers/home/PokemonCard'

import { getAllPokemons, LIMIT } from '@/api/pokemons'
import {
  GetPokemonFilter,
  GetPokemonsData,
  GetPokemonsKey,
} from '@/interfaces/pokemon.interface'

const INITIAL_FILTER = { name: '', generationId: 0, typeId: 0 }

function Home() {
  const [filter, setFilter] = useState<GetPokemonFilter>(INITIAL_FILTER)

  const {
    data,
    isFetching,
    isFetchingNextPage,
    isPreviousData,
    fetchNextPage,
  } = useInfiniteQuery<
    GetPokemonsData['pokemon_v2_pokemonspecies'],
    unknown,
    GetPokemonsData['pokemon_v2_pokemonspecies'],
    GetPokemonsKey
  >(['pokemons', filter], getAllPokemons, {
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < LIMIT ? undefined : allPages.length * LIMIT,
  })
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && !isFetchingNextPage && !isFetching) {
      fetchNextPage()
    }
  }, [inView, isFetchingNextPage, isFetching, fetchNextPage])

  const pokemons = data?.pages.flat()

  return (
    <div>
      <div className="sticky top-2 z-30 py-2.5 px-6">
        <Filters
          filter={filter}
          setFilter={setFilter}
          isPreviousData={isPreviousData}
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(15.25rem,_1fr))] gap-4 px-6 py-6 border-t">
        {!isPreviousData && isFetching && <LoadingCard />}
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={`${index}-${pokemon.id}`} pokemon={pokemon} />
        ))}
        {isFetchingNextPage && <LoadingCard />}
      </div>
      <div ref={ref} />
    </div>
  )
}
export default Home
