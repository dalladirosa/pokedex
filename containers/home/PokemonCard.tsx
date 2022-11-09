import Image from 'next/image'
import React from 'react'

import { Pokemon } from '@/interfaces/pokemon.interface'
import { formatPokemonId } from '@/utils/parse'
import { snakeCaseToTitleCase } from '@/utils/string'

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  console.log(pokemon.types)
  return (
    <div
      className={`group grid grid-cols-[auto_1fr_128px] grid-rows-[auto_auto_1fr_auto] text-white bg-elm-${pokemon.types[0].type.name} p-4 text-sm rounded-md relative cursor-pointer`}
    >
      <b className="col-span-3 text-xl">{snakeCaseToTitleCase(pokemon.name)}</b>
      <b className="col-span-2 pt-3.5">Type:</b>
      <div className="col-span-2 -mr-5 capitalize">
        {pokemon.types.map((type) => type.type.name).join(', ')}
      </div>
      <Image
        src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
        className="group-hover:scale-125 col-start-3 row-span-3 row-start-2 -mt-5 transition-transform z-30"
        width={128}
        height={128}
      />
      <div className="mt-2 rounded-full py-1 px-[0.625rem] font-semibold text-[#374151] bg-[hsla(0,0%,100%,.6)]">
        {formatPokemonId(pokemon.id)}
      </div>
      <div className="pokeball-flat absolute right-12 bottom-4 z-0 rotate-12 scale-125" />
    </div>
  )
}
export default PokemonCard
