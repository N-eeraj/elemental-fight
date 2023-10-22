import { useContext } from 'react'
import Button from '@components/Button'
import { GameContext } from '@game'
import { ScreenContext } from '@/App'


const Over = () => {
  const { score } = useContext(GameContext)
  const { setScreen } = useContext(ScreenContext)
  const result = score.player < score.opponent ? 'Lose' : 'Win'

  return (
    <div className='magestic-screen text-white'>
      <div>
        <h2>
          Game Over
        </h2>
        <strong>
          You {result}!
        </strong>
      </div>

      <div>
        <h3>
          Play Again ?
        </h3>
        <div>
          <Button className='font-title'>
            Yes
          </Button>
          <Button className='font-title'>
            No
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Over