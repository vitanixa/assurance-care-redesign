import React from "react";

interface AssuranceLogoProps {
  compact?: boolean;
  light?: boolean;
}

export default function AssuranceLogo({ compact = false, light = false }: AssuranceLogoProps) {
  const textColor = light ? "text-white" : "text-[#082B4D]";
  const teal = "#0F8F88";
  const navy = "#082B4D";

  return (
    <div className="flex items-center gap-3">
      <div className={compact ? "w-14 h-14" : "w-16 h-16 md:w-20 md:h-20"} aria-hidden="true">
        <svg viewBox="0 0 110 120" className="h-full w-full drop-shadow-sm">
          <path d="M55 5 L100 20 V56 C100 84 82 106 55 116 C28 106 10 84 10 56 V20 Z" fill="white" stroke={navy} strokeWidth="8" />
          <text x="55" y="65" textAnchor="middle" fontFamily="Georgia, serif" fontSize="42" fontWeight="700" fill={navy}>AC</text>
          <path d="M55 99 C46 90 31 82 31 68 C31 59 38 54 45 54 C50 54 54 57 55 61 C57 57 61 54 66 54 C73 54 80 59 80 68 C80 82 64 90 55 99Z" fill={teal} />
        </svg>
      </div>
      <div className="leading-none">
        <div className={`font-serif font-bold tracking-wide ${compact ? "text-xl" : "text-2xl md:text-3xl"} ${textColor}`}>Assurance Care</div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-px w-8 bg-[#0F8F88]"></span>
          <span className="text-[10px] md:text-xs font-extrabold tracking-[0.22em] uppercase text-[#0F8F88]">Home Care Services</span>
          <span className="h-px w-8 bg-[#0F8F88]"></span>
        </div>
      </div>
    </div>
  );
}
