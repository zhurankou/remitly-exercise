export default function PhoneFrame({ children, transitioning }) {
  return (
    <div className="relative">
      {/* Phone bezel */}
      <div className="w-[390px] h-[844px] bg-black rounded-[50px] p-[12px] shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
          {/* Status bar */}
          <div className="h-[54px] flex items-end justify-between px-8 pb-1 bg-white z-10 relative">
            <span className="text-[15px] font-semibold text-wise-forest">9:41</span>
            <div className="flex items-center gap-1">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <path d="M1 3.5C3.34 1.27 6.52 0 10 0c3.48 0 6.66 1.27 9 3.5" stroke="#163300" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3.5 6.5C5.26 5.02 7.52 4.1 10 4.1s4.74.92 6.5 2.4" stroke="#163300" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.5 9.5C7.5 8.57 8.7 8 10 8s2.5.57 3.5 1.5" stroke="#163300" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="10" cy="11.5" r="1" fill="#163300"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                <rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="#163300" strokeOpacity="0.35"/>
                <rect x="2" y="2" width="19" height="8" rx="1" fill="#163300"/>
                <path d="M24 4v4" stroke="#163300" strokeOpacity="0.4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          {/* Dynamic island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-20" />
          {/* Content */}
          <div
            className="h-[calc(100%-54px)] overflow-y-auto overflow-x-hidden"
            style={{
              opacity: transitioning ? 0 : 1,
              transition: 'opacity 200ms ease-in-out',
            }}
          >
            {children}
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black/20 rounded-full" />
        </div>
      </div>
    </div>
  )
}
