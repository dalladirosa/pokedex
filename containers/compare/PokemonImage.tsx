import Image from 'next/image'
import React from 'react'

import { formatPokemonId } from '@/utils/parse'
import { snakeCaseToTitleCase } from '@/utils/string'

const PokemonImage: React.FC<{ pokemon: any }> = ({ pokemon }) => {
  console.log()
  return (
    <div
      className={`pokemon-elm relative mb-2.5 rounded-md p-2.5 shadow-md bg-elm-${pokemon?.pokemon_v2_pokemontypes[0]?.pokemon_v2_type?.name}`}
    >
      <h2
        className={`pokemon-elm overflow-hidden text-ellipsis whitespace-nowrap border-b p-3 text-center text-lg font-bold text-white`}
      >
        {snakeCaseToTitleCase(pokemon?.name)}
      </h2>
      <Image
        src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
        alt={pokemon?.name}
        className="mx-auto"
        width={128}
        height={128}
        priority={pokemon?.id < 12}
      />

      <div className="pt-2 pb-3 text-center text-white">
        #{formatPokemonId(pokemon.id)}
      </div>

      <div className="rounded-md bg-white/60 p-2.5 text-center text-xs text-typography-light">
        <div className="flex justify-center gap-1.5 pb-1">
          {pokemon?.pokemon_v2_pokemontypes.map((type: any) => (
            <div
              key={type.pokemon_v2_type.name}
              className={`bg-elm-${type.pokemon_v2_type.name} h-3.5 w-3.5 rounded-full`}
            />
          ))}
        </div>
        <div className="font-medium capitalize">
          {pokemon?.pokemon_v2_pokemontypes
            .map((type: any) => type.pokemon_v2_type.name)
            .join(' / ')}
        </div>
        <div className="text-gray-500">Type</div>
      </div>
      <div className="mt-2 flex gap-2">
        <div className="flex-1 rounded-md bg-white/60 p-2.5 text-center text-xs text-typography-light">
          <div className="text-base font-bold">{pokemon.height! / 10} m</div>
          <div className="text-gray-500">Height</div>
        </div>
        <div className="flex-1 rounded-md bg-white/60 p-2.5 text-center text-xs text-typography-light">
          <div className="text-base font-bold">{pokemon.weight! / 10} kg</div>
          <div className="text-gray-500">Weight</div>
        </div>
      </div>
    </div>
  )
}

export default PokemonImage
