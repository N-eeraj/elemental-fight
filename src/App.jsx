import {
  useState,
  useRef,
  useEffect,
  createContext,
} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Home from '@screens/Home'
import SinglePlayer from '@screens/SinglePlayer'
import MultiPlayer from '@screens/MultiPlayer'
import Rules from '@screens/Rules'
import { bgm } from '@utils/audios'
import 'react-toastify/dist/ReactToastify.css'

export const MainContext = createContext()

const App = () => {
  const [screen, setScreen] = useState('home')
  const [audioFile, setAudioFile] = useState(null)
  const [userInteracted, setUserInteracted] = useState(false)
  const [sound, setSound] = useState(true)
  const audio = useRef(null)

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

  const handleUserInteraction = () => setUserInteracted(true)

  useEffect(() => {
    window.onbeforeunload = () => true
    const query = new URLSearchParams(window.location.search)
    if (query.get('matchId')) setScreen('multiPlayer')
  }, [])

  useEffect(() => {
    if (!(audioFile && userInteracted)) return
    if (audio.current)
      audio.current.pause()
    if (!sound)
      return audio.current.pause()
    audio.current = new Audio(bgm[audioFile])
    audio.current.loop = true
    audio.current.volume = 0.25
    audio.current.play()
  }, [audioFile, sound, userInteracted])

  const contextOptions = { sound, setScreen, setSound, setAudioFile, $toast }

  return (
    <div className='w-screen h-screen' onClick={handleUserInteraction}>
      <MainContext.Provider value={contextOptions}>
        {currentScreen}
      </MainContext.Provider>
      <ToastContainer limit={1} />
    </div>
  )
}

export default App
