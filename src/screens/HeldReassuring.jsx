import PromiseCard from '../components/PromiseCard'

const TIMELINE_STEPS = [
  { id: 1, label: 'You set up your transfer', time: 'Today, 2:15 PM', status: 'done' },
  { id: 2, label: 'We received your USD', time: 'Today, 2:16 PM', status: 'done' },
  {
    id: 3,
    label: 'Quick safety check',
    time: 'Today, 2:17 PM',
    status: 'active',
    variant: 'info',
    detail: 'We run these checks to keep everyone\'s money safe. This is routine and shouldn\'t change your delivery time.',
    action: null,
  },
  { id: 4, label: 'We pay out to GCash', time: '', status: 'pending' },
  { id: 5, label: 'Mom receives ₱17,142', time: '', status: 'pending' },
]

export default function HeldReassuring({ transfer, goTo }) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="px-5 pt-2 pb-2 flex items-center justify-between">
        <button
          onClick={() => goTo('tracking')}
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
          <div className="w-12 h-12 rounded-full bg-wise-info-bg flex items-center justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="3" width="12" height="14" rx="2" stroke="#2D7DD2" strokeWidth="1.5"/>
              <path d="M8 7h4M8 10h4M8 13h2" stroke="#2D7DD2" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm text-wise-info font-medium">Safety check in progress</p>
          <p className="text-lg font-bold text-wise-forest">{transfer.sendAmount} {transfer.sendCurrency}</p>
        </div>

        {/* Promise Card — SAME card, morphed to held state */}
        <div className="mb-5">
          <PromiseCard transfer={transfer} variant="held-reassuring" />
        </div>

        {/* Reassurance banner */}
        <div className="bg-wise-info-bg rounded-xl p-3.5 mb-5 flex gap-3">
          <div className="w-5 h-5 rounded-full bg-wise-info/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 3v3.5M6 8.5h.005" stroke="#2D7DD2" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-wise-forest">Still on track for {transfer.etaShort}</p>
            <p className="text-xs text-wise-muted mt-0.5 leading-relaxed">
              This check is routine and usually clears within minutes. Your delivery promise hasn&rsquo;t changed.
            </p>
          </div>
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
              {i < TIMELINE_STEPS.length - 1 && (
                <div className={`absolute left-[-18px] top-[10px] w-[2px] h-full ${
                  step.status === 'done' ? 'bg-wise-green' :
                  step.status === 'active' && step.variant === 'info' ? 'bg-gradient-to-b from-wise-info to-wise-border' :
                  step.status === 'active' ? 'bg-gradient-to-b from-wise-green to-wise-border' : 'bg-wise-border'
                }`} />
              )}
              <div className={`absolute left-[-22px] top-[4px] w-[10px] h-[10px] rounded-full border-2 ${
                step.status === 'done'
                  ? 'bg-wise-green border-wise-green'
                  : step.status === 'active' && step.variant === 'info'
                    ? 'bg-wise-info border-wise-info ring-4 ring-wise-info/20'
                    : step.status === 'active'
                      ? 'bg-wise-green border-wise-green ring-4 ring-wise-green/20'
                      : 'bg-white border-wise-border'
              }`} />

              <div>
                {step.time && (
                  <p className="text-xs text-wise-muted mb-0.5">{step.time}</p>
                )}
                <p className={`text-sm ${
                  step.status === 'active' && step.variant === 'info'
                    ? 'font-semibold text-wise-info'
                    : step.status === 'active' ? 'font-semibold text-wise-forest'
                    : step.status === 'done' ? 'text-wise-forest' : 'text-wise-muted'
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
            <p className="text-xs text-wise-muted">She&rsquo;ll see the same delivery promise</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
