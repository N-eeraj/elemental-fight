import {
  useState,
  createContext,
  useContext,
} from 'react'
import Point from '@game/Point'
import Element from '@game/Element'
import Selection from '@game/Selection'
import Close from '@components/Close'
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

  const reveal = playerElement && opponentElement

  const navigateToHome = () => setScreen('home')

  const contextOptions = {
    score,
    opponent,
    playerElement,
    opponentElement,
    reveal,
    setPlayerElement,
    setOpponentElement,
  }

  return (
    <div className='flex flex-col items-center h-full px-6 py-12'>
      <Close dark onClick={navigateToHome} />
      <GameContext.Provider value={contextOptions}>
        <div className='flex justify-between w-full max-w-md'>
          <Point />
          <Point opponent />
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center w-full h-full">
          <Element opponent />
          {playerElement ? <Element /> : <Selection />}
        </div>
      </GameContext.Provider>
    </div>
  )
}

export default Play
