export function WorkingIllustration() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-md animate-fade-up" style={{ animationDelay: "0.6s" }}>
      <svg
        viewBox="0 0 400 260"
        className="w-full h-auto drop-shadow-[0_20px_40px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration of a person working on a laptop with a coffee mug"
      >
        {/* Desk */}
        <rect x="20" y="215" width="360" height="6" rx="3" fill="currentColor" opacity="0.15" />
        <rect x="20" y="221" width="360" height="20" rx="2" fill="currentColor" opacity="0.06" />

        {/* Plant (left) */}
        <g opacity="0.7">
          <rect x="40" y="190" width="26" height="28" rx="3" fill="currentColor" opacity="0.25" />
          <path d="M53 190 C 48 175, 38 170, 38 160 C 45 162, 52 170, 53 180 Z" fill="currentColor" opacity="0.35" />
          <path d="M53 192 C 58 175, 70 168, 72 158 C 64 160, 56 170, 53 182 Z" fill="currentColor" opacity="0.45" />
          <path d="M53 188 C 53 172, 53 160, 55 152" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </g>

        {/* Person body (torso behind laptop) */}
        <g className="origin-bottom" style={{ transformOrigin: "200px 215px" }}>
          {/* Subtle breathing sway */}
          <g className="animate-[sway_5s_ease-in-out_infinite]">
            {/* Torso */}
            <path
              d="M150 215 L150 175 Q150 150 200 150 Q250 150 250 175 L250 215 Z"
              fill="var(--primary)"
              opacity="0.85"
            />
            {/* Neck */}
            <rect x="192" y="135" width="16" height="18" rx="4" fill="currentColor" opacity="0.55" />
            {/* Head */}
            <circle cx="200" cy="120" r="22" fill="currentColor" opacity="0.65" />
            {/* Hair */}
            <path d="M178 118 Q180 96 200 96 Q220 96 222 118 Q218 108 200 108 Q182 108 178 118 Z" fill="currentColor" opacity="0.9" />
            {/* Glasses */}
            <circle cx="192" cy="122" r="4" stroke="var(--background)" strokeWidth="1.2" fill="none" />
            <circle cx="208" cy="122" r="4" stroke="var(--background)" strokeWidth="1.2" fill="none" />
            <line x1="196" y1="122" x2="204" y2="122" stroke="var(--background)" strokeWidth="1.2" />

            {/* Left arm (typing) */}
            <g className="origin-top" style={{ transformOrigin: "162px 180px" }}>
              <g className="animate-[typeLeft_1.4s_ease-in-out_infinite]">
                <rect x="148" y="178" width="34" height="10" rx="5" fill="var(--primary)" opacity="0.9" />
                <circle cx="180" cy="183" r="6" fill="currentColor" opacity="0.6" />
              </g>
            </g>

            {/* Right arm (alternates: typing + sip) */}
            <g className="origin-top" style={{ transformOrigin: "238px 180px" }}>
              <g className="animate-[sipCycle_6s_ease-in-out_infinite]">
                <rect x="218" y="178" width="34" height="10" rx="5" fill="var(--primary)" opacity="0.9" />
                <circle cx="220" cy="183" r="6" fill="currentColor" opacity="0.6" />
              </g>
            </g>
          </g>
        </g>

        {/* Laptop */}
        <g>
          {/* Screen */}
          <rect x="140" y="170" width="120" height="38" rx="4" fill="currentColor" opacity="0.85" />
          <rect x="144" y="174" width="112" height="30" rx="2" fill="var(--background)" />
          {/* Code lines on screen */}
          <g className="animate-[codeBlink_2.4s_steps(6)_infinite]">
            <rect x="148" y="178" width="40" height="2" rx="1" fill="var(--primary)" opacity="0.8" />
            <rect x="148" y="184" width="60" height="2" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="152" y="190" width="34" height="2" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="152" y="196" width="50" height="2" rx="1" fill="var(--primary)" opacity="0.7" />
          </g>
          {/* Base */}
          <path d="M130 208 L270 208 L278 216 L122 216 Z" fill="currentColor" opacity="0.6" />
          <rect x="186" y="208" width="28" height="2" rx="1" fill="var(--background)" opacity="0.6" />
        </g>

        {/* Coffee mug (right of laptop) */}
        <g>
          {/* Steam */}
          <g className="text-[color:var(--primary)]">
            <path
              d="M312 168 q-4 -8 0 -16 q4 -8 0 -16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
              className="animate-[steam_2.6s_ease-in-out_infinite]"
            />
            <path
              d="M320 172 q-4 -8 0 -16 q4 -8 0 -16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
              style={{ animationDelay: "0.6s" }}
            />
          </g>
          {/* Mug body */}
          <path d="M298 178 L334 178 L330 212 Q330 216 326 216 L306 216 Q302 216 302 212 Z" fill="var(--primary)" />
          {/* Mug handle */}
          <path d="M334 186 q12 2 12 12 q0 10 -12 12" stroke="var(--primary)" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Coffee surface */}
          <ellipse cx="316" cy="180" rx="16" ry="3" fill="currentColor" opacity="0.7" />
        </g>

        {/* Floating sparkles */}
        <g className="text-[color:var(--primary)]">
          <circle cx="90" cy="80" r="2" fill="currentColor" opacity="0.6" className="animate-[twinkle_3s_ease-in-out_infinite]" />
          <circle cx="350" cy="60" r="1.5" fill="currentColor" opacity="0.5" className="animate-[twinkle_3s_ease-in-out_infinite]" style={{ animationDelay: "1s" }} />
          <circle cx="370" cy="130" r="2" fill="currentColor" opacity="0.4" className="animate-[twinkle_3s_ease-in-out_infinite]" style={{ animationDelay: "1.8s" }} />
        </g>
      </svg>
    </div>
  );
}
