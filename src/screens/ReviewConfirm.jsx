import PromiseCard from '../components/PromiseCard'

export default function ReviewConfirm({ transfer, goTo }) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="px-5 pt-2 pb-2 flex items-center gap-3">
        <button
          onClick={() => goTo('setup')}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-wise-surface"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10l6 6" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-wise-forest">Review details</h1>
      </div>

      <div className="px-5 flex-1">
        {/* Summary sentence */}
        <p className="text-sm text-wise-muted mb-4 leading-relaxed">
          An amount of <span className="font-semibold text-wise-forest">exactly ₱{transfer.receiveAmount.toLocaleString()}</span> is
          estimated to reach <span className="font-semibold text-wise-forest">{transfer.recipientFullName}</span>&rsquo;s
          GCash by <span className="font-semibold text-wise-forest">{transfer.etaShort}</span>.
        </p>

        {/* Promise Card — IDENTICAL to send setup */}
        <div className="mb-5">
          <PromiseCard transfer={transfer} variant="default" />
        </div>

        {/* Transfer details */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-wise-muted uppercase tracking-wider">Transfer details</span>
            <button className="text-xs font-semibold text-wise-forest underline underline-offset-2">Change</button>
          </div>
          <div className="space-y-3">
            <DetailRow label="You send" value={`${transfer.sendAmount.toFixed(2)} ${transfer.sendCurrency}`} />
            <DetailRow label="Total fees" value={`${transfer.fee} ${transfer.sendCurrency}`} />
            <DetailRow label="Amount we'll convert" value={`${(transfer.sendAmount - transfer.fee).toFixed(2)} ${transfer.sendCurrency}`} />
            <DetailRow label="Exchange rate" value={`1 USD = ${transfer.rate} PHP`} />
            <DetailRow label={`${transfer.recipientName} gets exactly`} value={`₱${transfer.receiveAmount.toLocaleString()}`} bold />
          </div>
        </div>

        {/* Recipient details */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-wise-muted uppercase tracking-wider">Recipient details</span>
            <button className="text-xs font-semibold text-wise-forest underline underline-offset-2">Change</button>
          </div>
          <div className="space-y-3">
            <DetailRow label="Name" value={transfer.recipientFullName} />
            <DetailRow label="Delivery" value={`${transfer.deliveryMethod} (Mobile wallet)`} />
            <DetailRow label="Arrives" value={transfer.eta} />
          </div>
        </div>

        {/* Reference */}
        <div className="mb-4">
          <label className="text-xs font-medium text-wise-muted block mb-1.5">Reference for {transfer.recipientName} (optional)</label>
          <input
            type="text"
            placeholder="Sent via Wise"
            className="w-full px-3.5 py-2.5 rounded-xl border border-wise-border text-sm text-wise-forest placeholder:text-wise-muted/50 focus:outline-none focus:border-wise-forest transition-colors"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 px-5 pb-8 pt-3 bg-gradient-to-t from-white via-white to-transparent">
        <button
          onClick={() => goTo('tracking')}
          className="w-full py-4 rounded-full bg-wise-green text-wise-forest font-semibold text-base hover:bg-wise-green-dark active:scale-[0.98] transition-all"
        >
          Confirm and send
        </button>
      </div>
    </div>
  )
}

function DetailRow({ label, value, bold }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-sm text-wise-muted">{label}</span>
      <span className={`text-sm text-right ${bold ? 'font-semibold text-wise-forest' : 'text-wise-forest'}`}>{value}</span>
    </div>
  )
}
