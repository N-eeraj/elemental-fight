import { useContext } from 'react'
import Close from '@components/Close'
import { ScreenContext } from '@/App'
import rules from '@assets/rules.svg'

const Rules = () => {
  const { setScreen } = useContext(ScreenContext)
  const navigateToHome = () => setScreen('home')

  return (
    <div className='flex flex-col gap-y-8 magestic-screen py-6 md:px-9'>
      <div className='relative flex justify-center items-center w-full'>
        <Close onClick={navigateToHome} />

        <h2 className='text-white text-6xl md:text-6xl text-center font-title leading-tight'>
          Rules
        </h2>
      </div>

      <div className='flex flex-col items-center gap-y-5 h-full overflow-y-auto px-10 text-white'>
        <ul className='flex flex-col gap-y-5 w-full list-disc text-xl md:text-2xl font-body'>
          <li>
            Elemental Fight is a game similar to rock paper scissors.
          </li>
          <li>
            You need to choose among 5 elements; Fire, Grass, Water, Lightning & Rock.
            <br />
            Your opponent will also choose one.
          </li>
          <li>
            Each element is capable of defeating 2 elements & will be defeated by the other 2.
          </li>
          <li>
            Your score one point on beating the opponent's element of each round.
          </li>
          <li>
            First to score 3 points win.
          </li>
        </ul>

        <img src={rules} className='w-full max-w-md' />
      </div>
    </div>
  )
}

export default Rules
