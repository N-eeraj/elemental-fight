import { useEffect, useState } from 'react'
import Game from '@game'
import Invitation from '@screens/Invitation'
import Connecting from '@screens/Connecting'

const MultiPlayer = () => {
  const [isHost, setIsHost] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    setIsHost(query.get('match') ? false : true)
  }, [])

  return (
    <>
      {
        isConnected ?
          <Game multiPlayer /> :
          (
            isHost ?
              <Invitation /> :
              <Connecting />
          )
      }
    </>
  )
}

export default MultiPlayer
