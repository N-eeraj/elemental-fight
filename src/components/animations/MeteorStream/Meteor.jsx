import { useEffect, useRef } from 'react'
import styles from '@styles/meteor.module.css'

const Meteor = ({ index }) => {
  const starRef = useRef(null)

  useEffect(() => {
    starRef.current.style.left = `${index * 30 + 15}px`
    starRef.current.style.animationDelay = `${Math.random() * 30}s`
  }, [])

  return (
    <div ref={starRef} className={`fixed h-72 bg-gradient-to-b from-transparent to-[#5CF] rounded-full ${styles.meteor} after:absolute after:left-1/2 after:bottom-0 after:block after:aspect-square after:bg-[#5CF] after:rounded-full after:-translate-x-1/2`} />
  )
}

export default Meteor