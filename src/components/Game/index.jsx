import {
  useState,
  createContext,
  useContext,
} from 'react'
import Close from '@components/Close'
import { ScreenContext } from '@/App'

export const GameContext = createContext()

const Play = ({ opponent }) => {
  const [score, setScore] = useState({
    player: 0,
    opponent: 0,
  })

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
    <div>
      <Close dark onClick={navigateToHome} />
      <GameContext.Provider value={contextOptions}>
      </GameContext.Provider>
    </div>
  )
}

export default Play
