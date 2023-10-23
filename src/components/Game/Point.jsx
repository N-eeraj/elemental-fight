import { useContext } from 'react'
import { HiStar } from 'react-icons/hi'
import { GameContext } from '@game'

const Point = ({ opponent }) => {
  const gameContext = useContext(GameContext)
  const points = gameContext?.score[opponent ? 'opponent' : 'player']

  return (
    <div className='flex flex-col gap-y-2 w-32 md:w-40'>
      <span className='w-full text-center text-3xl md:text-5xl font-title'>
        {opponent ? gameContext?.opponent : 'You'}
      </span>
      <div className='flex justify-between'>
        {Array.from({ length: 3 }).map((_, i) => (
          <HiStar className={`text-3xl md:text-5xl duration-300 ${points > i ? 'text-point-scored' : 'text-point-pending'}`} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Point
