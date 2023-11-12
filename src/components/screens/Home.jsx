import { useEffect, useContext } from 'react'
import Button from '@components/Button'
import Sparkle from '@animations/Sparkle'
import { MainContext } from '@/App'

const Home = () => {
  const { setScreen, setAudioFile } = useContext(MainContext)

  const menuOptions = [
    { text: 'Single Player', value: 'singlePlayer', },
    { text: 'Multi Player', value: 'multiPlayer', },
    { text: 'Rules', value: 'rules', },
  ]

  useEffect(() => {
    setAudioFile('screen')
  }, [])

  return (
    <>
      <Sparkle />

      <div className='flex flex-col justify-center items-center gap-y-20 md:gap-y-12 magestic-screen px-10'>
        <h1 className='text-white text-6xl md:text-7xl text-center font-title leading-tight'>
          Elemental Fight
        </h1>

        <div className='flex flex-col gap-y-6 w-full max-w-xs'>
          {menuOptions.map(({text, value}, index) => <Button key={index} onClick={() => setScreen(value)}> {text} </Button>)}
        </div>
      </div>
    </>
  )
}

export default Home
