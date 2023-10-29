import Star from '@components/Warp/Star'

const Warp = () => {
  const length = Math.floor(window.innerWidth / 7)

  return (
    <>
      { Array.from({ length }).map((_, i) => <Star index={i} key={i} />) }
    </>
  )
}

export default Warp