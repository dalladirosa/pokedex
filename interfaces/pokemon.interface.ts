export type GetPokemonFilter = {
  name: string
  generationId?: number
  typeId?: number
}

export type GetPokemonsKey = ['pokemons', GetPokemonFilter]

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

export type Pokemon = {
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  forms: { name: string; url: string }[]
  game_indices: {
    game_index: 151
    version: {
      name: string
      url: string
    }
  }
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }[]
  }[]
  name: string
  order: number
  past_types: []
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: {
      dream_world: {
        front_default: string | null
        front_female: string | null
      }
      home: {
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
      }
      'official-artwork': {
        front_default: string | null
      }
    }
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string | null
          back_gray: string | null
          back_transparent: string | null
          front_default: string | null
          front_gray: string | null
          front_transparent: string | null
        }
        yellow: {
          back_default: string | null
          back_gray: string | null
          back_transparent: string | null
          front_default: string | null
          front_gray: string | null
          front_transparent: string | null
        }
      }
      'generation-ii': {
        crystal: {
          back_default: string | null
          back_shiny: string | null
          back_shiny_transparent: string | null
          back_transparent: string | null
          front_default: string | null
          front_shiny: string | null
          front_shiny_transparent: string | null
          front_transparent: string | null
        }
        gold: {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
          front_transparent: string | null
        }
        silver: {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
          front_transparent: string | null
        }
      }
      'generation-iii': {
        emerald: {
          front_default: string | null
          front_shiny: string | null
        }
        'firered-leafgreen': {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
        }
        'ruby-sapphire': {
          back_default: string | null
          back_shiny: string | null
          front_default: string | null
          front_shiny: string | null
        }
      }
      'generation-iv': {
        'diamond-pearl': {
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
        'heartgold-soulsilver': {
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
        platinum: {
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-v': {
        'black-white': {
          animated: {
            back_default: string | null
            back_female: string | null
            back_shiny: string | null
            back_shiny_female: string | null
            front_default: string | null
            front_female: string | null
            front_shiny: string | null
            front_shiny_female: string | null
          }
          back_default: string | null
          back_female: string | null
          back_shiny: string | null
          back_shiny_female: string | null
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
        'x-y': {
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-vii': {
        icons: {
          front_default: string | null
          front_female: string | null
        }
        'ultra-sun-ultra-moon': {
          front_default: string | null
          front_female: string | null
          front_shiny: string | null
          front_shiny_female: string | null
        }
      }
      'generation-viii': {
        icons: {
          front_default: string | null
          front_female: string | null
        }
      }
    }
  }
  stats: {
    base_stat: number
    effort: number
    stat: { name: string; url: string }
  }[]
  types: {
    slot: number
    type: { name: string; url: string }
  }[]
  weight: number
}
