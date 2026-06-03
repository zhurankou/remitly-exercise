export default function DemoControls({ steps, current, onSelect }) {
  const currentIndex = steps.findIndex(s => s.id === current)

  return (
    <div className="flex flex-col items-center gap-3 max-w-[390px] w-full">
      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Demo Controls</p>
      <div className="flex gap-1.5 flex-wrap justify-center">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`
              px-3 py-1.5 rounded-full text-xs font-medium transition-all
              ${s.id === current
                ? 'bg-wise-forest text-white'
                : 'bg-white text-wise-forest border border-wise-border hover:border-wise-forest'
              }
            `}
          >
            {i + 1}. {s.label}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => onSelect(steps[Math.max(0, currentIndex - 1)].id)}
          disabled={currentIndex === 0}
          className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-wise-border disabled:opacity-30 hover:border-wise-forest transition-all"
        >
          &larr; Back
        </button>
        <button
          onClick={() => onSelect(steps[Math.min(steps.length - 1, currentIndex + 1)].id)}
          disabled={currentIndex === steps.length - 1}
          className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-wise-border disabled:opacity-30 hover:border-wise-forest transition-all"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  )
}
