import {
  useEffect,
  useState,
  useRef,
  useContext
} from 'react'
import { Peer } from 'peerjs'
import Game from '@game'
import Invitation from '@screens/Invitation'
import Connecting from '@screens/Connecting'
import { MainContext } from '@/App'

const MultiPlayer = () => {
  const peer = useRef(null)
  const connection = useRef(null)
  const [hostId, setHostId] = useState(null)
  const [isHost, setIsHost] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  const { setScreen, $toast } = useContext(MainContext)

  const sendMessage = message => connection.current.send(JSON.stringify(message))
  const handleMessage = () => connection.current.on('data', data => {
    const { type, message } = JSON.parse(data)
    switch (type) {
      case 'connection':
        if (isConnected) return
        if (message === 'guest') {
          sendMessage({
            type: 'connection',
            message: 'host',
          })
        }
        setIsConnected(true)
        break
      default:
        console.error(`Invalid data type ${type}`)
    }
  })

  const getMatchId = () => {
    const query = new URLSearchParams(window.location.search)
    return query.get('matchId')
  }

  useEffect(() => {
    setIsHost(getMatchId() ? false : true)
  }, [])

  useEffect(() => {
    if (isHost === null) return
    peer.current = new Peer()
    peer.current.on('open', id => {
      setHostId(id)
      if (isHost) {
        peer.current.on('connection', conn => {
          connection.current = conn
          handleMessage()
        })
      }
      else {
        connection.current = peer.current.connect(getMatchId())
        connection.current.on('open', () => {
          handleMessage()
          if (isConnected) return
          sendMessage({
            type: 'connection',
            message: 'guest',
          })
        })
      }
    })
    peer.current.on('error', (error) => {
      console.log(error)
      $toast('Oops! Couldn\'t generate invitation.\nCheck your connection and please try again.', {
        type: 'error',
        onClose: () => setScreen('home'),
      })
    })
  }, [isHost])

  return (
    <>
      {
        isConnected ?
          <Game multiPlayer /> :
          (
            isHost ?
              <Invitation hostId={hostId} /> :
              <Connecting />
          )
      }
    </>
  )
}

export default MultiPlayer
