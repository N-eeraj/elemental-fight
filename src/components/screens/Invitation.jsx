import { useContext } from 'react'
import QRCode from 'react-qr-code'
import Button from '@components/Button'
import Close from '@components/Close'
import Warp from '@components/Warp'
import { ScreenContext } from '@/App'

const Invitation = ({ hostId }) => {
  const { setScreen } = useContext(ScreenContext)
  const navigateToHome = () => setScreen('home')

  const shareLink = async () => {
    if (navigator.share) {
        const shareData = {
            title: 'Elemental Fight',
            text: 'Join the fight',
            url
        }
        await navigator.share(shareData)
    }
    else {
        const dummy = document.createElement('textarea')
        document.body.appendChild(dummy)
        dummy.value = url
        dummy.select()
        document.execCommand('copy')
        document.body.removeChild(dummy)
        alert('Copied Invitation Link')
    }
  }

  const url = `${location.origin}?matchId=${hostId}`

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-12 magestic-screen px-10 py-6 text-white'>
      <Warp />

      <Close className='md:top-6 md:left-6' onClick={navigateToHome} />

      <h3 className='fixed top-5 md:top-10 font-title text-4xl md:text-6xl'>
        Invite Friend
      </h3>

      { hostId && (
          <>
            <div className='flex flex-col items-center gap-y-5 w-full max-w-sm'>
              <span className='text-xl'>
                Scan the QR code to join
              </span>
              <QRCode value={url} fgColor='#315' className='w-3/4 min-w-[256px] p-1 bg-white z-10' />
            </div>

            <span className='font-title text-3xl'>
              Or
            </span>

            <div className='flex flex-col items-center gap-y-5 w-full max-w-sm'>
              <span className='text-xl'>
                Share invitation link
              </span>
              <Button className='w-full' onClick={shareLink}>
                Invite
              </Button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Invitation