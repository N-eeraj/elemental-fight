import {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react'
import Point from '@game/Point'
import Element from '@game/Element'
import Selection from '@game/Selection'
import Close from '@components/Close'
import { ScreenContext } from '@/App'
import elements from '@utils/elements'

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
  const gameOver = Object.values(score).some(value => value === 3)

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

  const cpuSelection = () => {
    const options = Object.keys(elements)
    setTimeout(() => setOpponentElement(options[Math.floor(Math.random() * options.length)]), 800)
  }

  const calculateResult = () => {
    if (playerElement !== opponentElement) {
      const check = winElements => {
        setScore(previousValue => {
          const newValue = previousValue
          ++newValue[winElements.includes(opponentElement) ? 'player' : 'opponent']
          return newValue
        })
      }

      switch (playerElement) {
        case 'water':
          check(['fire', 'rock'])
          break
        case 'fire':
          check(['grass', 'lightning'])
          break
        case 'grass':
          check(['water', 'rock'])
          break
        case 'rock':
          check(['fire', 'lightning'])
          break
        case 'lightning':
          check(['water', 'grass'])
          break
      }
    }

    setTimeout(() => {
      setPlayerElement(null)
      setOpponentElement(null)
      cpuSelection()
    }, 2500)
  }

  useEffect(() => {
    if (!(playerElement && singlePlayer)) return
  }, [playerElement])

  useEffect(() => {
    if (playerElement && opponentElement)
      calculateResult()
  }, [playerElement, opponentElement])

  useEffect(() => {
    cpuSelection()
  }, [])

  return (
    <div className='flex flex-col items-center h-full px-6 py-12'>
      <Close dark onClick={navigateToHome} />
      <GameContext.Provider value={contextOptions}>
        <div className='flex justify-between w-full max-w-lg'>
          <Point />
          <Point opponent />
        </div>

        {
          gameOver ?
          <span>Game Over</span> :
          <div className='flex flex-col md:flex-row-reverse justify-around items-center w-full h-full'>
            <Element opponent />
            {playerElement ? <Element /> : <Selection />}
          </div>
        }
      </GameContext.Provider>
    </div>
  )
}

export default Play
