import {
  useState,
  createContext,
  useContext,
} from 'react'
import Close from '@components/Close'
import Point from '@game/Point'
import { ScreenContext } from '@/App'

export const GameContext = createContext()

const Play = ({ singlePlayer }) => {
  const [score, setScore] = useState({
    player: 0,
    opponent: 0,
  })

  const opponent = singlePlayer ? 'CPU' : 'Opponent'

  const { setScreen } = useContext(ScreenContext)

  const [playerElement, setPlayerElement] = useState(null)
  const [opponentElement, setOpponentElement] = useState(null)

  const [reveal, setReveal] = useState(false)

  const navigateToHome = () => setScreen('home')

  const contextOptions = {
    score,
    opponent,
    playerElement,
    opponentElement,
    reveal,
    setPlayerElement,
    setOpponentElement,
    setReveal,
  }

  return (
    <div className='px-6 py-12'>
      <Close dark onClick={navigateToHome} />
      <GameContext.Provider value={contextOptions}>
        <div className='flex justify-between'>
          <Point />
          <Point opponent />
        </div>
      </GameContext.Provider>
    </div>
  )
}

export default Play
