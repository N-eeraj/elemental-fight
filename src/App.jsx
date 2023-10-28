import {
  useState,
  useEffect,
  createContext,
} from 'react'

import Home from '@screens/Home'
import SinglePlayer from '@screens/SinglePlayer'
import MultiPlayer from '@screens/MultiPlayer'
import Rules from '@screens/Rules'

export const ScreenContext = createContext()

const App = () => {
  const [screen, setScreen] = useState('home')

  const currentScreen = (() => {
    switch(screen) {
      case 'home':
        return <Home />
      case 'singlePlayer':
        return <SinglePlayer />
      case 'multiPlayer':
        return <MultiPlayer />
      case 'rules':
        return <Rules />
      default:
        throw 'Invalid Screen'
    }
  })()

  useEffect(() => {
    window.onbeforeunload = () => true
    const query = new URLSearchParams(window.location.search)
    if (query.get('match')) setScreen('multiPlayer')
  }, [])

  return (
    <div className='w-screen h-screen'>
      <ScreenContext.Provider value={{ setScreen }}>
        {currentScreen}
      </ScreenContext.Provider>
    </div>
  )
}

export default App
