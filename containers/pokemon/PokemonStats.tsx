import React from 'react'

export const STATS_LABELS = [
  'HP',
  'Attack',
  'Defense',
  'Sp. Attack',
  'Sp. Defense',
  'Speed',
]

export const MAX_BASE_STATS = 255

const PokemonStats: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="space-y-1 text-sm pb-4">
      <h2 className="pb-2.5 text-xl font-bold">Base Stat</h2>
      {STATS_LABELS.map((label, idx) => {
        const baseStat = data?.pokemon_v2_pokemonstats[idx].base_stat
        return (
          <div key={label} className="flex items-center">
            <div className="w-24">{label}</div>
            <div className="mr-2.5 w-7 text-right font-semibold">
              {baseStat}
            </div>
            <div className="h-2 w-full flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-dark-base">
              <div
                className={`h-full bg-elm-${data?.pokemon_v2_pokemontypes[0].pokemon_v2_type.name} transition-all`}
                style={{
                  width: `${(baseStat / MAX_BASE_STATS) * 100}%`,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonStats
