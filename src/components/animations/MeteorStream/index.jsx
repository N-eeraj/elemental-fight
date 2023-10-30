import Meteor from '@animations/MeteorStream/Meteor'

const MeteorStream = () => {
  const length = Math.floor(window.innerWidth / 30)

  return (
    <>
      { Array.from({ length }).map((_, i) => <Meteor index={i} key={i} />) }
    </>
  )
}

export default MeteorStream