import Link from 'next/link'
import React, { ReactNode } from 'react'
import { MdCatchingPokemon, MdOutlineCompareArrows } from 'react-icons/md'

import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-main">
        <nav className="col-start-2	pt-8 border-r min-h-screen">
          <Link href="/">
            <div className="flex flex-row items-center cursor-pointer hover:bg-grey py-2 px-2">
              <MdCatchingPokemon className="text-[#374151] mr-3" />
              <span className="text-lg">Pokemons</span>
            </div>
          </Link>
          <Link href="/compare">
            <div className="flex flex-row items-center cursor-pointer hover:bg-grey py-2 px-2">
              <MdOutlineCompareArrows className="text-[#374151] mr-3" />
              <span className="text-lg">Compare</span>
            </div>
          </Link>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
