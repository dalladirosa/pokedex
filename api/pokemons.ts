import axios from 'axios'

import { QueryFunctionContext } from '@tanstack/react-query'

import {
  GetPokemonsData,
  GetPokemonsKey,
  Pokemon,
} from '@/interfaces/pokemon.interface'

export const LIMIT = 20

export const getAllPokemons = async (
  filter: QueryFunctionContext<GetPokemonsKey>
) => {
  const { data } = await axios.get<{
    count: number
    next: string
    previous: null
    results: GetPokemonsData[]
  }>('https://pokeapi.co/api/v2/pokemon', {
    params: { limit: LIMIT, offset: filter.pageParam },
  })

  const result = await Promise.all(
    data.results.map(async (result) => {
      return await getPokemon(result.url)
    })
  )

  return result
}

export const getPokemon = async (url: string) => {
  const { data } = await axios.get<Pokemon>(url)
  return data
}

export const getPokemonEncounter = async (url: string) => {
  const { data } = await axios.get<Pokemon>(url)
  return data
}
