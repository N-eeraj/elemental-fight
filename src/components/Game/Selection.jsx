import water from '@elements/water.svg'
import fire from '@elements/fire.svg'
import grass from '@elements/grass.svg'
import rock from '@elements/rock.svg'
import lightning from '@elements/lightning.svg'

import { useContext } from 'react'
import { GameContext } from '@game'

const Element = () => {
  const { setPlayerElement } = useContext(GameContext)

  const elements = {
    water,
    fire,
    grass,
    rock,
    lightning,
  }

  return (
    <div className='flex flex-wrap justify-center items-center w-full max-w-md'>
      {Object.entries(elements).map(([element, image]) => (
        <button className='w-1/3' onClick={() => setPlayerElement(element)}>
          <img src={image} alt={element} className='w-full' />
        </button>
      ))}
    </div>
  )
}

export default Element
