import { useContext } from 'react'

import Button from '@components/Button'
import { ScreenContext } from '@/App'

const Home = () => {
  const { setScreen } = useContext(ScreenContext)

  return (
    <div className='flex flex-col justify-center items-center gap-y-20 md:gap-y-10 w-full h-full px-10 bg-gradient-to-b from-accent to-primary'>
      <h1 className='text-white text-6xl text-center leading-tight'>
        Elemental Fight
      </h1>

      <div className='flex flex-col gap-y-6 w-full max-w-xs'>
        <Button onClick={() => setScreen('singlePlayer')}>
          Single Player
        </Button>
        <Button onClick={() => setScreen('multiPlayer')}>
          Multi Player
        </Button>
        <Button onClick={() => setScreen('rules')}>
          Rules
        </Button>
      </div>
    </div>
  )
}

export default Home
