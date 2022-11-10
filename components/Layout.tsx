import Link from 'next/link'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { MdCatchingPokemon, MdOutlineCompareArrows } from 'react-icons/md'

import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

const onlinePollingInterval = 5000

const checkOnlineStatus = async () => {
  return navigator.onLine
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(true)

  const checkStatus = useCallback(async () => {
    const online = await checkOnlineStatus()

    setOnlineStatus(online)

    if (online === onlineStatus) return
    if (!online) toast.error('You are offline', { duration: Infinity })
    else toast.dismiss()
  }, [onlineStatus])

  useEffect(() => {
    // Add polling incase of slow connection
    const id = setInterval(() => {
      checkStatus()
    }, onlinePollingInterval)

    return () => {
      clearInterval(id)
    }
  }, [onlineStatus])

  return (
    <div>
      <Navbar />
      <Toaster />
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
