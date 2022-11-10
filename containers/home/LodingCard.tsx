import React from 'react'

const LoadingCard = () => {
  return (
    <>
      {[...Array(12)].map((key, index) => (
        <div
          key={index}
          className="relative grid grid-cols-[auto_1fr_128px] grid-rows-[auto_auto_1fr_auto] overflow-hidden rounded-md bg-elm-undefined p-4 text-sm text-white; h-[168px]"
        >
          <div className="animate-pulse rounded-full bg-white/10 invert dark:invert-0; mt-1.5 h-5 w-16" />
          <div className="pokeball-flat absolute right-12 bottom-4 z-0 rotate-12 scale-125 animate-pulse opacity-30 invert" />
        </div>
      ))}
    </>
  )
}

export default LoadingCard
