import { useState } from 'react'

import Home from '@screens/Home'
import SinglePlayer from '@screens/SinglePlayer'
import MultiPlayer from '@screens/MultiPlayer'
import Rules from '@screens/Rules'

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

  return (
    <div className='w-screen h-screen'>
      {currentScreen}
    </div>
  )
}

export default App
