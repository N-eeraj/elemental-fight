import water from '@elements/water.svg'
import fire from '@elements/fire.svg'
import grass from '@elements/grass.svg'
import rock from '@elements/rock.svg'
import lightning from '@elements/lightning.svg'

import { useContext } from 'react'
import { GameContext } from '@game'

const Element = ({ opponent }) => {
  const { reveal, ...gameContext } = useContext(GameContext)
  const element = gameContext[opponent ? 'opponentElement' : 'playerElement']

  const elements = {
    water,
    fire,
    grass,
    rock,
    lightning,
  }

  const template = (() => {
    if (element === null)
      return <div className='w-3/4 h-3/4 border-8 rounded-full border-primary border-t-[#CCC] animate-spin' />
    else if (!reveal)
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
