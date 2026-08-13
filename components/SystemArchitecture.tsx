import { getMessages, type Locale } from "@/lib/i18n";

export function SystemArchitecture({ locale = "es-BO" }: { compact?: boolean; locale?: Locale }) {
  const copy = getMessages(locale).architecture;
  const labels = copy.labels;

  return (
    <figure className="architecture-wrap reveal-on-scroll" aria-labelledby="architecture-caption">
      <div className="architecture-stage" role="img" aria-label={copy.alt}>
        <svg className="architecture-desktop" viewBox="0 0 1700 700" aria-hidden="true">
          <defs>
            <linearGradient id="grainDesk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F4C75F" />
              <stop offset="1" stopColor="#D89519" />
            </linearGradient>
            <filter id="shadowDesk" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#05291f" floodOpacity=".14" />
            </filter>
            <marker id="arrowDesk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0B6B50" />
            </marker>
          </defs>

          <g transform="translate(35 55)" filter="url(#shadowDesk)">
            <path d="M45 98 245 0l200 98" fill="#E7ECE8" stroke="#4B625A" strokeWidth="7" />
            <path d="M75 95h340v405c0 62-74 94-170 94S75 562 75 500Z" fill="#EEF2EE" stroke="#4B625A" strokeWidth="7" />
            <path d="M95 330c75-34 225-34 300 0v170c0 43-68 68-150 68S95 543 95 500Z" fill="url(#grainDesk)" />
            <ellipse cx="245" cy="330" rx="150" ry="42" fill="#F6D16E" stroke="#B9770D" strokeWidth="5" />
            {[160,245,330].map((x) => <line key={x} x1={x} y1="135" x2={x} y2="510" stroke="#0B6B50" strokeWidth="5" />)}
            {[[160,360],[160,455],[245,348],[245,440],[330,372],[330,468]].map(([x,y], index) => (
              <g key={`${x}-${y}`} className="architecture-sensor" style={{ animationDelay: `${index * 180}ms` }}>
                <circle cx={x} cy={y} r="14" fill="#fff" stroke="#0B6B50" strokeWidth="6" />
                <circle cx={x} cy={y} r="5" fill="#D69A27" />
              </g>
            ))}
            <rect x="112" y="155" width="266" height="50" rx="6" fill="#073E32" />
            <text x="245" y="187" fill="white" textAnchor="middle" className="svg-label-small">{labels.probes}</text>
            <text x="245" y="620" fill="#10231C" textAnchor="middle" className="svg-label">{labels.silo}</text>
          </g>

          <g transform="translate(500 205)" filter="url(#shadowDesk)">
            <rect width="150" height="210" rx="24" fill="#073E32" stroke="#F2C66D" strokeWidth="5" />
            <path d="M52 70h46M58 94h34" stroke="#F2C66D" strokeWidth="8" strokeLinecap="round" />
            <circle cx="75" cy="144" r="20" fill="#fff" />
            <path d="M75 134v20M65 144h20" stroke="#0B6B50" strokeWidth="5" strokeLinecap="round" />
            <path d="M75 0v-45" stroke="#073E32" strokeWidth="8" strokeLinecap="round" />
            <circle cx="75" cy="-51" r="9" fill="#D69A27" />
            <text x="75" y="248" textAnchor="middle" className="svg-label">{labels.node}</text>
          </g>

          <g transform="translate(680 220)">
            <path d="M5 50q55-58 110 0M25 68q35-35 70 0" fill="none" stroke="#D69A27" strokeWidth="7" strokeLinecap="round" />
            <text x="60" y="5" textAnchor="middle" className="svg-kicker">{labels.lora}</text>
            <line x1="0" y1="118" x2="125" y2="118" stroke="#0B6B50" strokeWidth="8" markerEnd="url(#arrowDesk)" />
            <circle className="architecture-packet" cx="18" cy="118" r="9" fill="#F2C66D" />
          </g>

          <g transform="translate(835 180)" filter="url(#shadowDesk)">
            <rect width="180" height="245" rx="30" fill="#fff" stroke="#0B6B50" strokeWidth="7" />
            <path className="gateway-sync" d="M50 80q40-45 80 0M65 99q25-25 50 0" fill="none" stroke="#D69A27" strokeWidth="8" strokeLinecap="round" />
            <rect x="50" y="126" width="80" height="54" rx="13" fill="#073E32" />
            <circle cx="72" cy="153" r="7" fill="#6EE7B7" />
            <path d="M94 153h17" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <text x="90" y="286" textAnchor="middle" className="svg-label">{labels.gateway}</text>
            <text x="90" y="318" textAnchor="middle" className="svg-detail">{labels.gatewayDetail}</text>
          </g>

          <line x1="1035" y1="300" x2="1132" y2="300" stroke="#0B6B50" strokeWidth="8" markerEnd="url(#arrowDesk)" />

          <g transform="translate(1140 190)" filter="url(#shadowDesk)">
            <path d="M45 180h205c43 0 70-26 70-61 0-32-24-57-57-61C252 22 222 0 183 0c-49 0-88 31-97 76h-9C34 76 0 100 0 133c0 27 19 47 45 47Z" fill="#fff" stroke="#0B6B50" strokeWidth="7" />
            <circle cx="160" cy="104" r="45" fill="#073E32" />
            <text x="160" y="113" fill="#F2C66D" textAnchor="middle" className="svg-label">API</text>
            <text x="160" y="230" textAnchor="middle" className="svg-label">{labels.cloud}</text>
            <text x="160" y="261" textAnchor="middle" className="svg-detail">{labels.cloudDetail}</text>
          </g>

          <line x1="1455" y1="300" x2="1515" y2="300" stroke="#0B6B50" strokeWidth="8" markerEnd="url(#arrowDesk)" />
          <g transform="translate(1490 115)" filter="url(#shadowDesk)">
            <rect x="0" y="0" width="100" height="78" rx="12" fill="#073E32" stroke="#0B6B50" strokeWidth="6" />
            <rect x="12" y="12" width="76" height="48" rx="5" fill="#EEF2EE" />
            <polyline points="20,48 39,33 55,42 71,20 84,28" fill="none" stroke="#0B6B50" strokeWidth="5" strokeLinecap="round" />
            <rect x="40" y="78" width="20" height="22" fill="#073E32" /><rect x="24" y="100" width="52" height="8" fill="#073E32" />
            <rect x="8" y="132" width="54" height="100" rx="12" fill="#073E32" />
            <rect x="16" y="143" width="38" height="68" rx="5" fill="#EEF2EE" />
            <circle cx="35" cy="176" r="13" fill="#F2C66D" />
            <path d="M35 167v10l7 5" stroke="#9A6516" strokeWidth="3" fill="none" strokeLinecap="round" />
            <g className="architecture-alert">
              <rect x="67" y="140" width="102" height="52" rx="10" fill="#F2C66D" />
              <path d="M84 165h18l12-12 16 22 18-13" fill="none" stroke="#073E32" strokeWidth="5" strokeLinecap="round" />
              <circle cx="160" cy="139" r="12" fill="#D94F3D" stroke="#fff" strokeWidth="4" />
            </g>
            <rect x="67" y="202" width="102" height="46" rx="10" fill="#DFF2E9" />
            <path d="M85 220h64M85 232h48" stroke="#0B6B50" strokeWidth="4" strokeLinecap="round" />
            <text x="82" y="284" textAnchor="middle" className="svg-label">{labels.platform}</text>
            <text x="82" y="314" textAnchor="middle" className="svg-detail">{labels.platformDetail}</text>
          </g>
        </svg>

        <svg className="architecture-mobile" viewBox="0 0 390 1360" aria-hidden="true">
          <defs>
            <linearGradient id="grainMobile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F4C75F" /><stop offset="1" stopColor="#D89519" /></linearGradient>
            <marker id="arrowMobile" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 10 5 0 10Z" fill="#0B6B50" /></marker>
          </defs>
          <g transform="translate(60 35)">
            <path d="M0 65 135 0l135 65" fill="#E7ECE8" stroke="#4B625A" strokeWidth="5" />
            <path d="M22 63h226v270c0 45-50 67-113 67S22 378 22 333Z" fill="#EEF2EE" stroke="#4B625A" strokeWidth="5" />
            <path d="M38 220c60-25 134-25 194 0v110c0 30-43 48-97 48s-97-18-97-48Z" fill="url(#grainMobile)" />
            <ellipse cx="135" cy="220" rx="97" ry="28" fill="#F6D16E" stroke="#B9770D" strokeWidth="4" />
            {[88,135,182].map((x) => <line key={x} x1={x} y1="98" x2={x} y2="330" stroke="#0B6B50" strokeWidth="4" />)}
            {[[88,235],[88,300],[135,250],[182,230],[182,305]].map(([x,y], index) => <g key={`${x}-${y}`} className="architecture-sensor" style={{ animationDelay: `${index * 180}ms` }}><circle cx={x} cy={y} r="10" fill="#fff" stroke="#0B6B50" strokeWidth="4" /><circle cx={x} cy={y} r="4" fill="#D69A27" /></g>)}
            <rect x="62" y="106" width="146" height="38" rx="5" fill="#073E32" /><text x="135" y="131" fill="white" textAnchor="middle" className="svg-label-mobile">{labels.probes}</text>
            <text x="135" y="438" textAnchor="middle" className="svg-label-mobile-strong">{labels.silo}</text>
          </g>
          <line x1="195" y1="493" x2="195" y2="548" stroke="#0B6B50" strokeWidth="6" markerEnd="url(#arrowMobile)" />
          <g transform="translate(112 565)"><rect width="166" height="132" rx="22" fill="#073E32" stroke="#F2C66D" strokeWidth="4" /><path d="M50 45h66M60 69h46" stroke="#F2C66D" strokeWidth="7" strokeLinecap="round" /><circle cx="83" cy="100" r="14" fill="#fff" /><text x="83" y="162" textAnchor="middle" className="svg-label-mobile-strong">{labels.node}</text></g>
          <text x="195" y="768" textAnchor="middle" className="svg-kicker-mobile">{labels.lora}</text>
          <path d="M150 830q45-45 90 0M165 848q30-27 60 0" fill="none" stroke="#D69A27" strokeWidth="6" strokeLinecap="round" />
          <line x1="195" y1="862" x2="195" y2="912" stroke="#0B6B50" strokeWidth="6" markerEnd="url(#arrowMobile)" /><circle className="architecture-packet-mobile" cx="195" cy="876" r="7" fill="#F2C66D" />
          <g transform="translate(120 930)"><rect width="150" height="150" rx="26" fill="#fff" stroke="#0B6B50" strokeWidth="6" /><path className="gateway-sync" d="M42 58q33-38 66 0M56 76q19-20 38 0" fill="none" stroke="#D69A27" strokeWidth="7" strokeLinecap="round" /><rect x="48" y="94" width="54" height="34" rx="9" fill="#073E32" /><circle cx="62" cy="111" r="5" fill="#6EE7B7" /><text x="75" y="180" textAnchor="middle" className="svg-label-mobile-strong">{labels.gateway}</text><text x="75" y="203" textAnchor="middle" className="svg-detail-mobile">{labels.gatewayDetail}</text></g>
          <line x1="195" y1="1155" x2="195" y2="1205" stroke="#0B6B50" strokeWidth="6" markerEnd="url(#arrowMobile)" />
          <g transform="translate(32 1222)"><rect width="326" height="100" rx="20" fill="#073E32" /><circle cx="54" cy="50" r="30" fill="#F2C66D" /><text x="54" y="57" fill="#073E32" textAnchor="middle" className="svg-label-mobile">API</text><text x="102" y="40" className="svg-label-mobile-on-dark">{labels.cloud}</text><text x="102" y="66" className="svg-detail-mobile-on-dark">{labels.cloudDetail}</text><g className="architecture-alert"><rect x="260" y="18" width="46" height="64" rx="8" fill="#fff" /><circle cx="295" cy="20" r="10" fill="#D94F3D" stroke="#fff" strokeWidth="3" /><path d="M270 55h25M270 66h18" stroke="#0B6B50" strokeWidth="4" strokeLinecap="round" /></g></g>
        </svg>
      </div>

      <div className="architecture-legend" aria-label={copy.aria}>
        <Legend color="#D69A27" label={labels.grain} />
        <Legend color="#0B6B50" label={labels.ambient} />
        <Legend color="#708078" label={labels.connection} />
        <span className="architecture-platform-label">{labels.platform} · {labels.platformDetail}</span>
      </div>
      <figcaption id="architecture-caption" className="mt-4 text-xs font-semibold leading-5 text-brandMuted">{copy.caption}</figcaption>
    </figure>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />{label}</span>;
}
