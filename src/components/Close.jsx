import { IoClose } from 'react-icons/io5'
import { clickDelay } from '@utils/ui'

const Close = ({ dark, className, onClick }) => {
  const handleClose = clickDelay(onClick)

  return (
    <button className={`group fixed top-0 left-0 ${className}`} onClick={handleClose}>
      <IoClose className={`text-5xl duration-300 group-hover:rotate-90 group-active:scale-75 ${dark ? 'text-primary' : 'text-white'}`} />
    </button>
  )
}

export default Close

