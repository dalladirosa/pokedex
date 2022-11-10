export type GetPokemonFilter = {
  name: string
  generationId?: number
  typeId?: number
}

export type GetPokemonsKey = ['pokemons', GetPokemonFilter]

export type QueryPokemonKey = ['pokemon', string]

export type GetPokemonsData = {
  pokemon_v2_pokemonspecies: {
    id: number
    name: string
    pokemon_v2_pokemons: {
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          name: string
        }
      }[]
    }[]
  }[]
}

export type GetAllPokemonsData = {
  pokemon_v2_pokemon: {
    id: number
    name: string
  }[]
}
export type GetPokemonGenAndTypes = {
  pokemon_v2_generation: any[]
  pokemon_v2_pokemontype: { pokemon_v2_type: any }[]
}

export type GetPokemon = {
  pokemon_v2_pokemon: any[]
}
