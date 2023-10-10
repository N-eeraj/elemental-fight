import { IoClose } from 'react-icons/io5'

const Rules = () => {
  return (
    <div className='flex flex-col gap-y-8 magestic-screen py-6'>
      <div className='relative flex justify-center items-center w-full'>
        <IoClose className='absolute left-0 text-white text-6xl' />
        <h2 className='text-white text-6xl md:text-6xl text-center font-title leading-tight'>
          Rules
        </h2>
      </div>

      <div className='h-full px-10 overflow-y-auto text-white'>
        
      </div>
    </div>
  )
}

export default Rules
