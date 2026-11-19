import type { Currency } from './useCurrency';

export default function CurrencySwitch({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="switch" role="group" aria-label="Currency">
      {(['INR', 'USD'] as const).map((c) => (
        <button key={c} type="button" aria-pressed={value === c} onClick={() => onChange(c)}>{c}</button>
      ))}
    </div>
  );
}
