import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { GetPokemonsData } from '@/interfaces/pokemon.interface'
import { formatPokemonId } from '@/utils/parse'
import { snakeCaseToTitleCase } from '@/utils/string'

interface PokemonCardProps {
  pokemon: GetPokemonsData['pokemon_v2_pokemonspecies'][0]
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const types = pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map(
    (item) => item.pokemon_v2_type!.name
  )

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div
        className={`group grid grid-cols-[auto_1fr_128px] grid-rows-[auto_auto_1fr_auto] text-white bg-elm-${types[0]} p-4 text-sm rounded-md relative cursor-pointer`}
      >
        <b className="col-span-3 text-xl">
          {snakeCaseToTitleCase(pokemon.name)}
        </b>
        <b className="col-span-2 pt-3.5">Type:</b>
        <div className="col-span-2 -mr-5 capitalize">{types.join(', ')}</div>
        <Image
          src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          className="group-hover:scale-125 col-start-3 row-span-3 row-start-2 -mt-5 transition-transform z-10"
          width={128}
          height={128}
          priority={pokemon.id < 12}
        />
        <div className="mt-2 rounded-full py-1 px-[0.625rem] font-semibold text-[#374151] bg-[hsla(0,0%,100%,.6)]">
          {formatPokemonId(pokemon.id)}
        </div>
        <div className="pokeball-flat absolute right-12 bottom-4 z-0 rotate-12 scale-125" />
      </div>
    </Link>
  )
}
export default PokemonCard
