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
      case 'CONNECTION':
        if (Object.keys(peer.current.connections).length > 1) {
          return sendMessage({
            type: 'DUPLICATE',
            message: 'Host already in a different match',
          })
        }
        if (message === 'guest') {
          sendMessage({
            type: 'CONNECTION',
            message: 'host',
          })
        }
        setIsConnected(true)
        break
      case 'SELECTION':
        console.log(message)
        break
      case 'DUPLICATE':
        $toast(message, {
          type: 'error',
          theme: 'light',
          onClose: () => setScreen('home'),
        })
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
            type: 'CONNECTION',
            message: 'guest',
          })
        })
      }
    })
    peer.current.on('error', () => {
      $toast('Oops! Something went wrong. Please check your connection and please try again.', {
        type: 'error',
        onClose: () => setScreen('home'),
      })
    })
  }, [isHost])

  const handleSelect = element => sendMessage({
    type: 'SELECTION',
    message: element,
  })

  return (
    <>
      {
        isConnected ?
          <Game multiPlayer onSelect={handleSelect} /> :
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
