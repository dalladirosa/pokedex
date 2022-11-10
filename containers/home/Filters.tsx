import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { useQuery } from '@tanstack/react-query'

import { getPokemonGenAndTypes } from '@/api/pokemons'
import { GetPokemonFilter } from '@/interfaces/pokemon.interface'
import { removeSlash, toSentenceCase } from '@/utils/string'

const TYPE_LIST = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
]

interface FiltersProps {
  isPreviousData: boolean
  filter: GetPokemonFilter
  setFilter: React.Dispatch<React.SetStateAction<GetPokemonFilter>>
}

const Filters: React.FC<FiltersProps> = ({
  isPreviousData,
  filter,
  setFilter,
}) => {
  const { data } = useQuery<any, unknown, any, ['pokemonGen&Types']>(
    ['pokemonGen&Types'],
    getPokemonGenAndTypes
  )
  const [search, setSearch] = useState('')

  const debounced = useDebouncedCallback(
    // function
    (value) => setFilter((prev) => ({ ...prev, name: value })),
    // delay in ms
    1000
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    debounced(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search pokémon"
        className="flex-1 rounded-md bg-slate-200 px-3 py-2 lg:w-60 outline-none mr-3"
        value={search}
        onChange={handleSearch}
      />
      <select
        className="mx-px py-2 rounded-md border-x-[12px] border-white bg-white ring-1 ring-gray-200 mr-3"
        value={filter.generationId}
        onChange={({ target }) => {
          setFilter((prev) => ({ ...prev, generationId: Number(target.value) }))
        }}
      >
        <option value="">All generations</option>
        {data?.generations.map(({ id, name }: { id: string; name: string }) => (
          <option key={id} value={id}>
            {removeSlash(name)}
          </option>
        ))}
      </select>

      <select
        className="mx-px py-2 rounded-md border-x-[12px] border-white bg-white ring-1 ring-gray-200 mr-3"
        value={filter.typeId}
        onChange={({ target }) => {
          setFilter((prev) => ({ ...prev, typeId: Number(target.value) }))
        }}
      >
        <option value="">All Types</option>
        {data?.types.map(({ id, name }: { id: string; name: string }) => (
          <option key={id} value={id}>
            {toSentenceCase(name)}
          </option>
        ))}
      </select>
      {isPreviousData && <span>Loading...</span>}
    </div>
  )
}

export default Filters
