import axios from 'axios'
import { request } from 'graphql-request'

import { QueryFunctionContext } from '@tanstack/react-query'

import {
  GetPokemonGenAndTypes,
  GetPokemonGenerationDetailData,
  GetPokemonsData,
  GetPokemonsKey,
  Pokemon,
} from '@/interfaces/pokemon.interface'
import { toSentenceCase } from '@/utils/string'

export const LIMIT = 20

export const getAllPokemons = async (
  ctx: QueryFunctionContext<GetPokemonsKey>
) => {
  const { generationId, typeId, name } = ctx.queryKey[1]

  const POKEMONS = /* GraphQL */ `
    query Pokemons {
      pokemon_v2_pokemonspecies(
        order_by: { id: asc }
        offset: ${ctx.pageParam || 0}
        where: {
          name: { _ilike: "%${name}%" }
          ${generationId ? `generation_id: { _eq: ${generationId} }` : ''}
          ${
            typeId
              ? `pokemon_v2_pokemons: { pokemon_v2_pokemontypes: { type_id: { _eq: ${typeId} } } }`
              : ''
          }
        }
        limit: ${LIMIT}
      ) {
        id
        name
        pokemon_v2_pokemons {
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    }
  `
  const res = await request<GetPokemonsData>(
    `https://beta.pokeapi.co/graphql/v1beta`,
    POKEMONS
  )
  return res.pokemon_v2_pokemonspecies
}

export const getPokemonEncounter = async (url: string) => {
  const { data } = await axios.get<Pokemon>(url)
  return data
}

export const getPokemonGenAndTypes = async () => {
  const POKEMON_GENERATIONS_AND_TYPES = /* GraphQL */ `
    query PokemonsGenAndTypes {
      pokemon_v2_generation {
        id
        name
      }
      pokemon_v2_pokemontype(order_by: { type_id: asc }, distinct_on: type_id) {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  `
  const res = await request<GetPokemonGenAndTypes>(
    `https://beta.pokeapi.co/graphql/v1beta`,
    POKEMON_GENERATIONS_AND_TYPES
  )
  const types = res.pokemon_v2_pokemontype.map(({ pokemon_v2_type }) => ({
    id: pokemon_v2_type?.id,
    name: toSentenceCase(pokemon_v2_type?.name),
  }))

  return {
    generations: res.pokemon_v2_generation.map(({ id, name }) => ({
      id,
      name,
    })),
    types: types.sort((a, b) => a.name.localeCompare(b.name)),
  }
}

export const getPokemonType = async (url: string) => {
  const { data } = await axios.get<GetPokemonGenerationDetailData>(url)

  return data
}
