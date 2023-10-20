import { useContext } from 'react'
import { GameContext } from '@game'
import elements from '@utils/elements'

const Element = () => {
  const gameContext = useContext(GameContext)

  return (
    <div className='flex flex-wrap justify-center items-center w-full max-w-md'>
      {Object.entries(elements).map(([element, image]) => (
        <button className='group w-1/3' key={element} onClick={() => gameContext?.setPlayerElement(element)}>
          <img src={image} alt={element} className='w-full group-hover:scale-125 duration-300' />
        </button>
      ))}
    </div>
  )
}

export default Element
