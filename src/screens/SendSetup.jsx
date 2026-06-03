import { useState } from 'react'
import PromiseCard from '../components/PromiseCard'

const DELIVERY_OPTIONS = [
  {
    id: 'gcash',
    name: 'Mobile wallet',
    detail: 'GCash',
    icon: '📱',
    speed: 'Minutes',
    fee: '4.41 USD',
    selected: true,
  },
  {
    id: 'cash',
    name: 'Cash pickup',
    detail: 'Cebuana · M Lhuillier',
    icon: '🏪',
    speed: 'Same day',
    fee: '5.20 USD',
    selected: false,
  },
  {
    id: 'bank',
    name: 'Bank transfer',
    detail: 'BDO · BPI · UnionBank',
    icon: '🏦',
    speed: '1–2 days',
    fee: '4.41 USD',
    selected: false,
  },
]

export default function SendSetup({ transfer, goTo }) {
  const [selectedDelivery, setSelectedDelivery] = useState('gcash')

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="px-5 pt-2 pb-4">
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-wise-surface">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="#163300" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="px-5 flex-1">
        {/* Recipient header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-wise-green/20 flex items-center justify-center text-lg">
            👩
          </div>
          <div>
            <p className="text-lg font-semibold text-wise-forest">Send again to Mom</p>
            <p className="text-sm text-wise-muted">{transfer.recipientFullName} · Philippines</p>
          </div>
        </div>

        {/* Amount section */}
        <div className="mb-5">
          <label className="text-xs font-medium text-wise-muted uppercase tracking-wider">You send exactly</label>
          <div className="flex items-center justify-between mt-1.5 border border-wise-border rounded-xl px-4 py-3">
            <span className="text-3xl font-bold text-wise-forest">{transfer.sendAmount}</span>
            <div className="flex items-center gap-1.5 bg-wise-surface rounded-full px-3 py-1.5">
              <span className="text-sm">🇺🇸</span>
              <span className="text-sm font-semibold text-wise-forest">{transfer.sendCurrency}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5l3 3 3-3" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Fee breakdown */}
          <div className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between text-wise-muted">
              <span>− {transfer.fee} {transfer.sendCurrency} fee</span>
              <span className="text-wise-secondary underline underline-offset-2 decoration-dotted cursor-pointer">Low Cost transfer</span>
            </div>
            <div className="flex justify-between text-wise-muted">
              <span>× {transfer.rate} rate</span>
              <span className="text-wise-secondary">
                <svg className="inline w-3 h-3 mr-0.5" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M3.5 3.5h5a1.5 1.5 0 010 3H4a1.5 1.5 0 000 3h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Guaranteed ({transfer.rateGuarantee})
              </span>
            </div>
          </div>
        </div>

        {/* Delivery method */}
        <div className="mb-5">
          <label className="text-xs font-medium text-wise-muted uppercase tracking-wider">How should Mom get it?</label>
          <div className="mt-2 space-y-2">
            {DELIVERY_OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelectedDelivery(opt.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all text-left ${
                  selectedDelivery === opt.id
                    ? 'border-wise-forest bg-wise-green/5'
                    : 'border-wise-border hover:border-wise-muted'
                }`}
              >
                <span className="text-xl w-8 text-center">{opt.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-wise-forest">{opt.name}</span>
                    <span className="text-xs text-wise-muted">{opt.fee}</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-xs text-wise-muted">{opt.detail}</span>
                    <span className="text-xs font-medium text-wise-secondary">{opt.speed}</span>
                  </div>
                </div>
                {selectedDelivery === opt.id && (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#163300"/>
                    <path d="M5.5 9l2.5 2.5L12.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Promise Card preview */}
        <div className="mb-4">
          <label className="text-xs font-medium text-wise-muted uppercase tracking-wider mb-2 block">Your delivery promise</label>
          <PromiseCard transfer={transfer} variant="default" />
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 px-5 pb-8 pt-3 bg-gradient-to-t from-white via-white to-transparent">
        <button
          onClick={() => goTo('review')}
          className="w-full py-4 rounded-full bg-wise-green text-wise-forest font-semibold text-base hover:bg-wise-green-dark active:scale-[0.98] transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
