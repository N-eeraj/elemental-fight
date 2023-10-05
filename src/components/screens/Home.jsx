import { useContext } from 'react'

import Button from '@components/Button'
import { ScreenContext } from '@/App'

const Home = () => {
  const { setScreen } = useContext(ScreenContext)

  const menuOptions = [
    { text: 'Single Player', value: 'singlePlayer', },
    { text: 'Multi Player', value: 'multiPlayer', },
    { text: 'Rules', value: 'rules', },
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-y-20 md:gap-y-12 w-full h-full px-10 bg-gradient-to-b from-accent to-primary'>
      <h1 className='text-white text-6xl text-center leading-tight'>
        Elemental Fight
      </h1>

      <div className='flex flex-col gap-y-6 w-full max-w-xs'>
        {menuOptions.map(({text, value}, index) => <Button onClick={() => setScreen(value)} key={index}> {text} </Button>)}
      </div>
    </div>
  )
}

export default Home
