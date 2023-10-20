import { useContext } from 'react'
import { GameContext } from '@game'
import elements from '@utils/elements'

const Element = ({ opponent }) => {
  const gameContext = useContext(GameContext)
  const element = gameContext[opponent ? 'opponentElement' : 'playerElement']

  const template = (() => {
    if (element === null)
      return <div className='w-3/4 h-3/4 border-8 rounded-full border-primary border-t-[#CCC] animate-spin' />
    else if (!gameContext?.reveal && opponent)
      return <div className='flex justify-center items-center w-3/4 h-3/4 bg-white text-primary rounded-full border-8 border-primary font-title text-9xl'>?</div>
    else
      return  <img src={elements[element]} alt={element} className='w-full group-hover:scale-125 duration-300' />
    })()

  return (
    <div className='grid place-items-center gridx w-48 aspect-square'>
      {template}
    </div>
  )
}

export default Element
