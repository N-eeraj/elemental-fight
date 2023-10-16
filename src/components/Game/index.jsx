import {
  useState,
  createContext,
} from 'react'

export const GameContext = createContext()

const Play = ({ opponent }) => {
  const [score, setScore] = useState({
    player: 0,
    opponent: 0,
  })

  const [playerElement, setPlayerElement] = useState(null)
  const [opponentElement, setOpponentElement] = useState(null)

  const [reveal, setReveal] = useState(false)

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
      <GameContext.Provider value={contextOptions}>
      </GameContext.Provider>
    </div>
  )
}

export default Play
