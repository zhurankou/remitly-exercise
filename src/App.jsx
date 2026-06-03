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

const isEmbedded = window.self !== window.top

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

  if (isEmbedded) {
    return (
      <div className="h-screen flex flex-col bg-white">
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden"
          style={{
            opacity: transitioning ? 0 : 1,
            transition: 'opacity 200ms ease-in-out',
          }}
        >
          {renderScreen()}
        </div>
        <div className="flex-shrink-0 px-3 py-2 bg-white border-t border-wise-border">
          <div className="flex gap-1 justify-center flex-wrap">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className={`px-2 py-1 rounded-full text-[10px] font-medium transition-all ${
                  s.id === step
                    ? 'bg-wise-forest text-white'
                    : 'bg-wise-surface text-wise-forest'
                }`}
              >
                {i + 1}. {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
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
