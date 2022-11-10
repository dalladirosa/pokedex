import React from 'react'

import { snakeCaseToTitleCase } from '@/utils/string'

export const STATS_LABELS = [
  'HP',
  'Attack',
  'Defense',
  'Sp. Attack',
  'Sp. Defense',
  'Speed',
]

export const MAX_BASE_STATS = 255

const PokemonAbillites: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="pt-4">
      <h2 className="pb-2.5 text-xl font-bold">Abilities</h2>
      <ul className="list-disc space-y-2 pl-5">
        {data?.pokemon_v2_pokemonabilities.map(
          ({ pokemon_v2_ability }: { pokemon_v2_ability: any }) => (
            <li key={pokemon_v2_ability.name}>
              <div className="font-semibold">
                {snakeCaseToTitleCase(pokemon_v2_ability.name)}
              </div>
              {pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0]
                ?.short_effect && (
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  {
                    pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0]
                      .short_effect
                  }
                </p>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default PokemonAbillites
