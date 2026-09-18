// Signal strategies shared by Live Signals, Coco Injector and Future Signals.

export type StrategyId = 'smartflow' | 'alphagrid' | 'auralis'

export type Strategy = {
  id: StrategyId
  name: string
  tagline: string
  note: string
  img: string
  accent: string
}

export const STRATEGIES: Strategy[] = [
  {
    id: 'smartflow',
    name: 'Coco SmartFlow',
    tagline: 'Momentum flow read',
    note: 'Follows the dominant liquidity stream and rides confirmed momentum.',
    img: '/strategy/strat-smartflow.webp',
    accent: '#8b5cff',
  },
  {
    id: 'alphagrid',
    name: 'Coco AlphaGrid',
    tagline: 'Structure grid scan',
    note: 'Maps support, resistance and volatility cells before every call.',
    img: '/strategy/strat-alphagrid.webp',
    accent: '#4fd1ff',
  },
  {
    id: 'auralis',
    name: 'Coco Auralis',
    tagline: 'Sentiment aura model',
    note: 'Blends pressure, sentiment and reversal aura for contrarian entries.',
    img: '/strategy/strat-auralis.webp',
    accent: '#6ee7b7',
  },
]

export const DEFAULT_STRATEGY: StrategyId = 'smartflow'

export function getStrategy(id: StrategyId): Strategy {
  return STRATEGIES.find((s) => s.id === id) ?? STRATEGIES[0]
}
