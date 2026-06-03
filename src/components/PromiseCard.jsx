export default function PromiseCard({ transfer, variant = 'default', className = '' }) {
  const isHeld = variant === 'held-reassuring'
  const isDelayed = variant === 'held-reestimated'
  const isTracking = variant === 'tracking'

  const eta = isDelayed ? transfer.etaDelayedShort : transfer.etaShort
  const etaLabel = isDelayed ? 'New ETA' : 'Arrives'

  let statusColor = 'bg-wise-green/15'
  let statusTextColor = 'text-wise-forest'
  let statusIcon = '⚡'
  let statusLabel = `${etaLabel} ${eta}`

  if (isHeld) {
    statusColor = 'bg-wise-info-bg'
    statusTextColor = 'text-wise-info'
    statusIcon = '🔒'
    statusLabel = `Safety check · ETA ${eta}`
  } else if (isDelayed) {
    statusColor = 'bg-wise-warning-bg'
    statusTextColor = 'text-amber-700'
    statusIcon = '🕐'
    statusLabel = `New ETA ${transfer.etaDelayedShort}`
  }

  return (
    <div className={`bg-white rounded-2xl border border-wise-border overflow-hidden ${className}`}>
      {/* Card header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-wise-surface flex items-center justify-center text-sm">
              👩
            </div>
            <span className="text-sm font-medium text-wise-forest">
              {transfer.recipientName} gets
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-wise-surface rounded-full px-2.5 py-1">
            <span className="text-[11px]">🇵🇭</span>
            <span className="text-xs font-medium text-wise-forest">{transfer.receiveCurrency}</span>
          </div>
        </div>

        {/* Hero amount */}
        <div className="flex items-baseline gap-1">
          <span className="text-[40px] font-bold text-wise-forest leading-none tracking-tight font-display">
            ₱{transfer.receiveAmount.toLocaleString()}
          </span>
        </div>

        {/* Delivery + ETA badge */}
        <div className="flex items-center gap-2 mt-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColor} ${statusTextColor}`}>
            <span>{statusIcon}</span>
            {statusLabel}
          </span>
          <span className="text-xs text-wise-muted">
            via {transfer.deliveryMethod}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      {(isTracking || isHeld || isDelayed) && (
        <div className="px-4 pb-4 pt-1">
          <div className="h-1.5 bg-wise-surface rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                isDelayed ? 'bg-wise-warning' : isHeld ? 'bg-wise-info' : 'bg-wise-green'
              }`}
              style={{
                width: isTracking ? '60%' : isHeld ? '45%' : isDelayed ? '45%' : '0%',
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
