import {
  useRef,
  useEffect
} from 'react'

import styles from '@styles/firefly.module.css'

const Firefly = () => {
  const starRef = useRef(null)
  const position = useRef({ x: 0, y: 0 })
  const interval = useRef(null)

  const randomize = (init = false) => {
    const newPositionX = Math.random() * 110 - 5
    const newPositionY = Math.random() * 110 - 5

    const time = Math.sqrt((newPositionY - position.current.y) ** 2 + (newPositionX - position.current.x) ** 2) * 700

    position.current.x = newPositionX
    position.current.y = newPositionY

    starRef.current.style.left = `${position.current.x}%`
    starRef.current.style.top = `${position.current.y}%`
    starRef.current.style.transition = `${time}ms`
    interval.current = setTimeout(randomize, init ? time * 0.07 : time)
  }

  useEffect(() => {
    starRef.current.style.animationDelay = `${Math.random() * 3000}ms`
    randomize(true)

    return () => clearTimeout(interval.current)
  }, [])

  return (
    <div ref={starRef} className={`fixed bg-element-lightning rounded-full ${styles.firefly}`} />
  )
}

export default Firefly
