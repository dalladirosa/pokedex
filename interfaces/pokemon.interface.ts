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
export type GetPokemonGenAndTypes = {
  // Type too long
  pokemon_v2_generation: any[]
  pokemon_v2_pokemontype: { pokemon_v2_type: any }[]
}

export type GetPokemonGenerationsData = {
  name: string
  url: string
}
export type GetPokemonGenerationDetailData = {
  abilities: string[]
  id: number
  main_region: { name: string; url: string }
  moves: { name: string; url: string }[]
  name: string
  names: {
    language: { name: string; url: string }
    name: string
  }[]
  pokemon_species: { name: string; url: string }[]
  types: { name: string; url: string }[]
  version_groups: { name: string; url: string }[]
}

export type GetPokemon = {
  pokemon_v2_pokemon: any[]
}
