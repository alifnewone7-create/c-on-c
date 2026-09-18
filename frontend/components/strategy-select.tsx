'use client'

import { Check, Sparkles } from 'lucide-react'
import { STRATEGIES, type StrategyId } from '@/lib/strategies'

/* Strategy deck: three tall artwork slabs with a diagonal accent rail.
   Deliberately different from the dashboard tool ring (flat, side-by-side,
   scroll-snapped on mobile instead of a rotating 3D carousel). */
export function StrategySelect({
  value,
  onChange,
  testidPrefix,
}: {
  value: StrategyId
  onChange: (id: StrategyId) => void
  testidPrefix: string
}) {
  return (
    <section className="stg" data-testid={`${testidPrefix}-strategy`}>
      <header className="stg-head">
        <p className="inj-kicker inj-kicker-soft">Select strategy</p>
        <span className="inj-chip">
          <Sparkles className="h-3 w-3" />
          Engine mode
        </span>
      </header>

      <div className="stg-deck" role="radiogroup" aria-label="Select strategy">
        {STRATEGIES.map((s, i) => {
          const on = value === s.id
          return (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onChange(s.id)}
              className="stg-slab"
              data-on={on}
              style={{ '--accent': s.accent, '--d': `${90 + i * 70}ms` } as React.CSSProperties}
              data-testid={`${testidPrefix}-strategy-${s.id}`}
            >
              <span className="stg-art" aria-hidden="true">
                <img src={s.img} alt="" width={420} height={560} draggable={false} decoding="async" />
              </span>
              <span className="stg-rail" aria-hidden="true" />
              <span className="stg-idx coco-mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="stg-check" aria-hidden="true">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="stg-body">
                <span className="stg-name coco-sub">{s.name}</span>
                <span className="stg-tag coco-mono">{s.tagline}</span>
              </span>
            </button>
          )
        })}
      </div>

      <p className="stg-note" data-testid={`${testidPrefix}-strategy-note`}>
        {STRATEGIES.find((s) => s.id === value)?.note}
      </p>
    </section>
  )
}
