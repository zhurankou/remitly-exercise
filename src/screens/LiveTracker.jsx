import PromiseCard from '../components/PromiseCard'

const TIMELINE_STEPS = [
  { id: 1, label: 'You set up your transfer', time: 'Today, 2:15 PM', status: 'done' },
  { id: 2, label: 'We received your USD', time: 'Today, 2:16 PM', status: 'done' },
  { id: 3, label: 'We\'re converting your money', time: 'Today, 2:17 PM', status: 'active', detail: 'Your money is on its way. We\'ll pay it out to GCash next.' },
  { id: 4, label: 'We pay out to GCash', time: '', status: 'pending' },
  { id: 5, label: 'Mom receives ₱17,142', time: '', status: 'pending' },
]

export default function LiveTracker({ transfer, goTo }) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="px-5 pt-2 pb-2 flex items-center justify-between">
        <button
          onClick={() => goTo('review')}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-wise-surface"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10l6 6" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-wise-surface">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7.5" stroke="#163300" strokeWidth="1.2"/>
              <path d="M9 5.5v4M9 11.5h.01" stroke="#163300" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-wise-surface">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="4" cy="9" r="1.2" fill="#163300"/>
              <circle cx="9" cy="9" r="1.2" fill="#163300"/>
              <circle cx="14" cy="9" r="1.2" fill="#163300"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="px-5 flex-1">
        {/* Sending indicator */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-wise-green/20 flex items-center justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 15V5m0 0l-4 4m4-4l4 4" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm text-wise-muted">Sending</p>
          <p className="text-lg font-bold text-wise-forest">{transfer.sendAmount} {transfer.sendCurrency}</p>
        </div>

        {/* Promise Card — SAME card, now with progress */}
        <div className="mb-5">
          <PromiseCard transfer={transfer} variant="tracking" />
        </div>

        {/* Tab bar */}
        <div className="flex border-b border-wise-border mb-4">
          <button className="flex-1 py-2.5 text-sm font-semibold text-wise-forest border-b-2 border-wise-forest">
            Updates
          </button>
          <button className="flex-1 py-2.5 text-sm text-wise-muted">
            Details
          </button>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 pb-6">
          {TIMELINE_STEPS.map((step, i) => (
            <div key={step.id} className="relative pb-5 last:pb-0">
              {/* Vertical line */}
              {i < TIMELINE_STEPS.length - 1 && (
                <div className={`absolute left-[-18px] top-[10px] w-[2px] h-full ${
                  step.status === 'done' ? 'bg-wise-green' : step.status === 'active' ? 'bg-gradient-to-b from-wise-green to-wise-border' : 'bg-wise-border'
                }`} />
              )}
              {/* Dot */}
              <div className={`absolute left-[-22px] top-[4px] w-[10px] h-[10px] rounded-full border-2 ${
                step.status === 'done'
                  ? 'bg-wise-green border-wise-green'
                  : step.status === 'active'
                    ? 'bg-wise-green border-wise-green ring-4 ring-wise-green/20'
                    : 'bg-white border-wise-border'
              }`} />

              {/* Content */}
              <div>
                {step.time && (
                  <p className="text-xs text-wise-muted mb-0.5">{step.time}</p>
                )}
                <p className={`text-sm ${
                  step.status === 'active' ? 'font-semibold text-wise-forest' : step.status === 'done' ? 'text-wise-forest' : 'text-wise-muted'
                }`}>
                  {step.label}
                </p>
                {step.detail && (
                  <p className="text-xs text-wise-muted mt-1 leading-relaxed">{step.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Share with Mom */}
        <div className="border border-wise-border rounded-xl p-3.5 mb-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-wise-surface flex items-center justify-center text-base">
            💬
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-wise-forest">Share status with Mom</p>
            <p className="text-xs text-wise-muted">Send her a link to track this transfer</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
