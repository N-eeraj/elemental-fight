import Firefly from '@animations/Sparkle/Firefly'

const Sparkle = () => {
  const length = Math.floor(window.innerWidth * window.innerHeight / 20_000)

  return (
    <>
      { Array.from({ length }).map((_, i) => <Firefly key={i} />) }
    </>
  )
}

export default Sparkle
