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
  const [hostId, setHostId] = useState(null)
  const [isHost, setIsHost] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  const { setScreen, $toast } = useContext(MainContext)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    setIsHost(query.get('matchId') ? false : true)
  }, [])

  useEffect(() => {
    if (isHost === null) return
    peer.current = new Peer()
    peer.current.on('open', id => {
      setHostId(id)
      if (isHost) {
      }
      else {
        console.log(`Connect to ${id}`)
      }
    })
    peer.current.on('error', () => {
      $toast('Oops! Something went wrong.', {
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
