import { useContext } from 'react'
import Button from '@components/Button'
import { GameContext } from '@game'
import { MainContext } from '@/App'


const Over = ({ restart }) => {
  const { score } = useContext(GameContext)
  const { setScreen } = useContext(MainContext)
  const result = score.player < score.opponent ? 'Lose' : 'Win'

  return (
    <div className='flex flex-col justify-center items-center gap-y-16 magestic-screen text-white font-title'>
      <div className='flex flex-col items-center gap-y-5'>
        <h2 className='text-7xl'>
          Game Over
        </h2>
        <strong className='text-6xl'>
          You {result}!
        </strong>
      </div>

      <div className='flex flex-col items-center gap-y-6'>
        <h3 className='text-6xl'>
          Play Again ?
        </h3>
        <div className='flex gap-x-6 w-full'>
          <Button className='w-1/2' onClick={restart}>
            Yes
          </Button>
          <Button className='w-1/2' onClick={() => setScreen('home')}>
            No
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Over