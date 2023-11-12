import { useContext } from 'react'
import Button from '@components/Button'
import { GameContext } from '@game'
import { MainContext } from '@/App'


const Over = ({ onRestart, onPlayAgain, onExit }) => {
  const { multiPlayer, score } = useContext(GameContext)
  const { setScreen } = useContext(MainContext)
  const result = score.player < score.opponent ? 'Lose' : 'Win'

  const exit = () => {
    if (onExit)
      onExit()
    window.history.pushState({ path: origin }, '', origin)
    setScreen('home')
  }

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
      {
          multiPlayer ?
            <>
              <Button className='w-full' onClick={onPlayAgain}>
                Play Again
              </Button>
              <Button className='w-full' onClick={exit}>
                Exit
              </Button>
            </> :
            <>
              <h3 className='text-6xl'>
                Play Again ?
              </h3>
              <div className='flex gap-x-6 w-full'>
                <Button className='w-1/2' onClick={onRestart}>
                  Yes
                </Button>
                <Button className='w-1/2' onClick={() => setScreen('home')}>
                  No
                </Button>
              </div>
            </>
      }
      </div>
    </div>
  )
}

export default Over