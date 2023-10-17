import { IoClose } from 'react-icons/io5'
import { clickDelay } from '@utils/ui'

const Close = ({ dark, onClick }) => {
  const handleClose = clickDelay(onClick)

  return (
    <button className='group absolute left-0' onClick={handleClose}>
      <IoClose className={`text-5xl duration-300 group-hover:rotate-90 group-active:scale-75 ${dark ? 'text-primary' : 'text-white'}`} />
    </button>
  )
}

export default Close
