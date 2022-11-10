import Image from 'next/image'
import React from 'react'

import { formatPokemonId } from '@/utils/parse'
import { snakeCaseToTitleCase } from '@/utils/string'

const PokemonImage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div
      className={`group flex flex-col text-white bg-elm-${data?.pokemon_v2_pokemontypes[0]?.pokemon_v2_type?.name} p-4 text-sm rounded-md relative cursor-pointer w-2/6 h-fit`}
    >
      <b className="col-span-3 text-xl">
        {snakeCaseToTitleCase(data?.name || '')}
      </b>
      <div className="rounded-full py-1 px-[0.625rem] font-semibold text-[#374151] bg-white w-fit">
        {formatPokemonId(data?.id)}
      </div>

      <Image
        src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
        alt={data?.name}
        className="group-hover:scale-125 col-start-3 row-span-2 row-start-2 -mt-2 transition-transform z-10 self-center my-4"
        width={128}
        height={128}
        priority={data?.id < 12}
      />

      <div className="pokeball-flat absolute right-[8rem] bottom-[9rem] z-0 rotate-12 scale-125" />

      <div className="flex flex-row items-center col-start-1 col-span-2 bg-[hsla(0,0%,100%,.6)] rounded-md py-3 px-2 divide-x divide-white text-center text-xs ">
        <div className="flex-grow">
          <div className="flex justify-center gap-1.5 pb-1">
            {data?.pokemon_v2_pokemontypes.map((type: any) => (
              <div
                key={type.pokemon_v2_type.name}
                className={`bg-elm-${type.pokemon_v2_type.name} h-3.5 w-3.5 rounded-full`}
              />
            ))}
          </div>
          <div className="font-medium capitalize text-[#374151]">
            {data?.pokemon_v2_pokemontypes
              .map((type: any) => type.pokemon_v2_type.name)
              .join(' / ')}
          </div>
          <div className="text-center text-gray-500">Type</div>
        </div>
        <div className="flex-grow">
          <div className="pb-0.5 text-xl text-[#374151] font-bold">
            {data?.height / 10} m
          </div>
          <div className="text-gray-500">Height</div>
        </div>
        <div className="flex-grow">
          <div className="pb-0.5 text-xl text-[#374151] font-bold">
            {data?.weight / 10} kg
          </div>
          <div className="text-gray-500">Weight</div>
        </div>
      </div>
    </div>
  )
}

export default PokemonImage
