import {
  useRef,
  useEffect
} from 'react'

import styles from '@styles/stars.module.css'

const Star = () => {
  const starRef = useRef(null)
  const position = useRef({ x: 0, y: 0 })

  const randomize = () => {
    const newPositionX = Math.random() * 110 - 5
    const newPositionY = Math.random() * 110 - 5

    const time = Math.sqrt((newPositionY - position.current.y) ** 2 + (newPositionX - position.current.x) ** 2) * 500

    position.current.x = newPositionX
    position.current.y = newPositionY

    starRef.current.style.left = `${position.current.x}%`
    starRef.current.style.top = `${position.current.y}%`
    starRef.current.style.transition = `${time}ms`
    setTimeout(randomize, time)
  }

  useEffect(() => {
    starRef.current.style.animationDelay = `${Math.random() * 3000}ms`
    randomize()
  }, [])

  return (
    <div ref={starRef} className={`fixed bg-white rounded-full ${styles.star}`} />
  )
}

export default Star
