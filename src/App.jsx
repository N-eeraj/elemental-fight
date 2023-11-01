import {
  useState,
  useEffect,
  createContext,
} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Home from '@screens/Home'
import SinglePlayer from '@screens/SinglePlayer'
import MultiPlayer from '@screens/MultiPlayer'
import Rules from '@screens/Rules'
import 'react-toastify/dist/ReactToastify.css'

export const MainContext = createContext()

const App = () => {
  const [screen, setScreen] = useState('home')
  const $toast = (text, { type, theme, autoClose, onClose } = {}) => toast(text, {
    type: type ?? 'default',
    theme: theme ?? 'colored',
    autoClose: autoClose ?? 3000,
    onClose: onClose ?? null,
  })

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
    if (query.get('matchId')) setScreen('multiPlayer')
  }, [])

  return (
    <div className='w-screen h-screen'>
      <MainContext.Provider value={{ setScreen, $toast }}>
        {currentScreen}
      </MainContext.Provider>
      <ToastContainer limit={1} />
    </div>
  )
}

export default App
