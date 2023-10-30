import MeteorStream from '@animations/MeteorStream'

const Connecting = () => {
  return (
    <div className='flex justify-end items-end magestic-screen p-5'>
      <MeteorStream />
      <span className='text-white text-xl animate-pulse'>
        Connecting
      </span>
    </div>
  )
}

export default Connecting