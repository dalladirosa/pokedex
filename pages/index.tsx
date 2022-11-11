import { GetStaticPropsResult } from 'next'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'

import Filters from '@/containers/home/Filters'
import LoadingCard from '@/containers/home/LodingCard'
import PokemonCard from '@/containers/home/PokemonCard'

import { getAllPokemons, getPokemonGenAndTypes, LIMIT } from '@/api/pokemons'
import {
  GetPokemonFilter,
  GetPokemonsData,
  GetPokemonsKey,
} from '@/interfaces/pokemon.interface'

const INITIAL_FILTER = { name: '', generationId: 0, typeId: 0 }
type Result = GetStaticPropsResult<{ dehydratedState: DehydratedState }>

export async function getStaticProps(): Promise<Result> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: 1,
        networkMode: 'offlineFirst',
      },
    },
  })
  await queryClient.fetchInfiniteQuery(
    ['pokemons', INITIAL_FILTER],
    getAllPokemons
  )
  await queryClient.fetchQuery(['pokemonGen&Types'], getPokemonGenAndTypes)

  // https://github.com/tannerlinsley/react-query/issues/1458
  const dehydratedState = JSON.parse(JSON.stringify(dehydrate(queryClient)))

  return {
    props: {
      dehydratedState,
    },
  }
}

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
      <div className="sticky top-0 z-30 py-2.5 px-6">
        <Filters
          filter={filter}
          setFilter={setFilter}
          isPreviousData={isPreviousData}
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(15.25rem,_1fr))] gap-4 px-6 py-6 border-t">
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={`${index}-${pokemon.id}`} pokemon={pokemon} />
        ))}
        {isFetchingNextPage && <LoadingCard />}
        <div></div>
        <div></div>
      </div>
      <div ref={ref} />
    </div>
  )
}
export default Home
