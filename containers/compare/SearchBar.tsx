import { Combobox } from '@headlessui/react'
import React, { useState } from 'react'

import { snakeCaseToTitleCase } from '@/utils/string'

interface SearchBarProps {
  pokemons:
    | {
        id: number
        name: string
      }[]
    | undefined
  setComparedPokemon: React.Dispatch<React.SetStateAction<string[]>>
  comparedPokemon: string[]
}
const MAX_SHOWED_POKEMONS = 15

const SearchBar: React.FC<SearchBarProps> = ({
  pokemons = [],
  comparedPokemon,
  setComparedPokemon,
}) => {
  const [query, setQuery] = useState('')

  const filteredPokemons = pokemons
    .filter((pokemon) =>
      snakeCaseToTitleCase(pokemon.name)
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    )
    .slice(0, MAX_SHOWED_POKEMONS)

  const handleAddPokemon = (selectedPokemon: { id: string; name: string }) => {
    if (comparedPokemon.length > 2) {
      setComparedPokemon((prevState) => [
        ...prevState.slice(1),
        selectedPokemon.name,
      ])
    } else {
      setComparedPokemon((prevState) => [...prevState, selectedPokemon.name])
    }
  }

  return (
    <Combobox value={null} onChange={handleAddPokemon}>
      <div className="relative">
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none mr-3"
          placeholder="Search pokemon to be compared"
        />
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {filteredPokemons.length === 0 ? (
            <div className="cursor-default select-none py-2 px-4 text-gray-500">
              Nothing found.
            </div>
          ) : (
            filteredPokemons.map((pokemon) => (
              <Combobox.Option
                key={pokemon.id}
                value={pokemon}
                className={({ active }) =>
                  `relative cursor-default select-none truncate py-2 px-4 ${
                    active ? 'bg-slate-50' : ''
                  }`
                }
              >
                {snakeCaseToTitleCase(pokemon.name)}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}
export default SearchBar
