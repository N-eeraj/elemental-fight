const Button = ({ children, className, onClick }) => {
  return (
    <button className={`group relative ${className}`} onClick={onClick}>
      <div className='w-full p-5 bg-white text-primary text-3xl group-active:translate-x-1 group-active:translate-y-1 duration-300'>
        {children}
      </div>
      <div className='absolute top-0 left-full w-2 h-full bg-gray-200 skew-y-[45deg] origin-top-left group-active:w-0 group-active:opacity-0 duration-300' />
      <div className='absolute top-full left-0 w-full h-2 bg-gray-400 skew-x-[45deg] origin-bottom-right translate-x-2 group-active:h-0 group-active:opacity-0 duration-300' />
    </button>
  )
}

export default Button
