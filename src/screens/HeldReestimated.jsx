import PromiseCard from '../components/PromiseCard'

const TIMELINE_STEPS = [
  { id: 1, label: 'You set up your transfer', time: 'Today, 2:15 PM', status: 'done' },
  { id: 2, label: 'We received your USD', time: 'Today, 2:16 PM', status: 'done' },
  { id: 3, label: 'We started converting your money', time: 'Today, 2:17 PM', status: 'done' },
  {
    id: 4,
    label: 'Additional verification needed',
    time: 'Today, 3:45 PM',
    status: 'active',
    variant: 'warning',
    detail: 'Your bank flagged this transfer for an additional check. This is common for first-time transfers to the Philippines.',
  },
  { id: 5, label: 'We pay out to GCash', time: '', status: 'pending' },
  { id: 6, label: 'Mom receives ₱17,142', time: '', status: 'pending' },
]

export default function HeldReestimated({ transfer, goTo }) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="px-5 pt-2 pb-2 flex items-center justify-between">
        <button
          onClick={() => goTo('held-reassuring')}
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
          <div className="w-12 h-12 rounded-full bg-wise-warning-bg flex items-center justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4l7 12H3L10 4z" stroke="#E8A030" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M10 9v3M10 14h.01" stroke="#E8A030" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm text-amber-700 font-medium">Delivery time updated</p>
          <p className="text-lg font-bold text-wise-forest">{transfer.sendAmount} {transfer.sendCurrency}</p>
        </div>

        {/* Promise Card — SAME card, morphed to delayed state */}
        <div className="mb-5">
          <PromiseCard transfer={transfer} variant="held-reestimated" />
        </div>

        {/* Delay explanation */}
        <div className="bg-wise-warning-bg rounded-xl p-3.5 mb-4">
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-wise-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v4l2 2" stroke="#E8A030" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-wise-forest">
                New ETA: {transfer.etaDelayed}
              </p>
              <p className="text-xs text-wise-muted mt-1 leading-relaxed">
                Your bank needs extra time to verify this transfer. Mom will still get exactly <span className="font-semibold">₱{transfer.receiveAmount.toLocaleString()}</span> — only the timing changed.
              </p>
            </div>
          </div>
        </div>

        {/* What you can do */}
        <div className="mb-5">
          <p className="text-xs font-medium text-wise-muted uppercase tracking-wider mb-2">What you can do</p>
          <div className="space-y-2">
            <ActionCard
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h6" stroke="#163300" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              }
              title="Upload a bank statement"
              subtitle="This can speed up the verification"
            />
            <ActionCard
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14c3.314 0 6-2.686 6-6S11.314 2 8 2 2 4.686 2 8s2.686 6 6 6z" stroke="#163300" strokeWidth="1.2"/>
                  <path d="M6 8.5l1.5 1.5L10 7" stroke="#163300" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Talk to our team"
              subtitle="We can explain exactly what's needed"
            />
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
                  step.status === 'active' && step.variant === 'warning' ? 'bg-gradient-to-b from-wise-warning to-wise-border' :
                  'bg-wise-border'
                }`} />
              )}
              <div className={`absolute left-[-22px] top-[4px] w-[10px] h-[10px] rounded-full border-2 ${
                step.status === 'done'
                  ? 'bg-wise-green border-wise-green'
                  : step.status === 'active' && step.variant === 'warning'
                    ? 'bg-wise-warning border-wise-warning ring-4 ring-wise-warning/20'
                    : step.status === 'active'
                      ? 'bg-wise-green border-wise-green ring-4 ring-wise-green/20'
                      : 'bg-white border-wise-border'
              }`} />

              <div>
                {step.time && (
                  <p className="text-xs text-wise-muted mb-0.5">{step.time}</p>
                )}
                <p className={`text-sm ${
                  step.status === 'active' && step.variant === 'warning'
                    ? 'font-semibold text-amber-700'
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
            <p className="text-sm font-medium text-wise-forest">Let Mom know</p>
            <p className="text-xs text-wise-muted">Share the updated delivery promise</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function ActionCard({ icon, title, subtitle }) {
  return (
    <button className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl border border-wise-border hover:border-wise-forest transition-colors text-left">
      <div className="w-9 h-9 rounded-full bg-wise-surface flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-wise-forest">{title}</p>
        <p className="text-xs text-wise-muted">{subtitle}</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
        <path d="M6 4l4 4-4 4" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
