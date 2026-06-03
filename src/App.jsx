import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame'
import DemoControls from './components/DemoControls'
import SendSetup from './screens/SendSetup'
import ReviewConfirm from './screens/ReviewConfirm'
import LiveTracker from './screens/LiveTracker'
import HeldReassuring from './screens/HeldReassuring'
import HeldReestimated from './screens/HeldReestimated'

const STEPS = [
  { id: 'setup', label: 'Send Setup' },
  { id: 'review', label: 'Review' },
  { id: 'tracking', label: 'Tracking' },
  { id: 'held-reassuring', label: 'Held (safe)' },
  { id: 'held-reestimated', label: 'Held (delayed)' },
]

const TRANSFER = {
  senderName: 'Lina',
  recipientName: 'Mom',
  recipientFullName: 'Maria Santos',
  sendAmount: 300,
  sendCurrency: 'USD',
  receiveAmount: 17142,
  receiveCurrency: 'PHP',
  fee: 4.41,
  rate: 57.14,
  rateGuarantee: '24 h',
  deliveryMethod: 'GCash',
  deliveryIcon: '📱',
  eta: 'Fri, Jun 6 by 6:00 PM',
  etaShort: 'Fri 6pm',
  etaDelayed: 'Sat, Jun 7 by 10:00 AM',
  etaDelayedShort: 'Sat 10am',
}

export default function App() {
  const [step, setStep] = useState('setup')
  const [transitioning, setTransitioning] = useState(false)

  function goTo(nextStep) {
    setTransitioning(true)
    setTimeout(() => {
      setStep(nextStep)
      setTransitioning(false)
    }, 200)
  }

  function renderScreen() {
    const props = { transfer: TRANSFER, goTo }
    switch (step) {
      case 'setup': return <SendSetup {...props} />
      case 'review': return <ReviewConfirm {...props} />
      case 'tracking': return <LiveTracker {...props} />
      case 'held-reassuring': return <HeldReassuring {...props} />
      case 'held-reestimated': return <HeldReestimated {...props} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 gap-6">
      <PhoneFrame transitioning={transitioning}>
        {renderScreen()}
      </PhoneFrame>
      <DemoControls steps={STEPS} current={step} onSelect={goTo} />
    </div>
  )
}
