import { useContext } from 'react'
import { GameContext } from '@game'

const Element = ({ opponent }) => {
  const { reveal, ...gameContext } = useContext(GameContext)
  const element = gameContext[opponent ? 'opponentElement' : 'playerElement']

  const template = (() => {
    if (element === null)
      return 'Loading'
    else if (!reveal)
      return 'Hidden'
    else
      return element
    })()

  return (
    <div>
      {template}
    </div>
  )
}

export default Element
