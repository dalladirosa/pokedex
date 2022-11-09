import React, { ReactNode } from 'react'
import { MdCatchingPokemon } from 'react-icons/md'

import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-main">
        <nav className="col-start-2	pt-8 border-r">
          <div className="flex flex-row items-center cursor-pointer hover:bg-grey py-2 px-2">
            <MdCatchingPokemon className="text-[#374151] mr-3" />
            <span className="text-lg">Pokemons</span>
          </div>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
