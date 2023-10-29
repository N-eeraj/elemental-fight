import Star from '@components/Stars/Star'

const Stars = () => {
  const length = Math.floor(window.innerWidth * window.innerHeight / 20_000)

  return (
    <>
      { Array.from({ length }).map((_, i) => <Star key={i} />) }
    </>
  )
}

export default Stars
