import { useContext } from 'react'

import { ScreenContext } from '@/App'

const Home = () => {
  const { setScreen } = useContext(ScreenContext)

  return (
    <div>
      <button onClick={() => setScreen('singlePlayer')}>
        Single Player
      </button>
      <button onClick={() => setScreen('multiPlayer')}>
        Multi Player
      </button>
      <button onClick={() => setScreen('rules')}>
        Rules
      </button>
    </div>
  )
}

export default Home
