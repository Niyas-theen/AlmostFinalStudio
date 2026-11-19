import { useMemo, useState } from 'react';
import { plans, services } from '../data/site';
import CurrencySwitch from './CurrencySwitch';
import { formatPrice, useCurrency } from './useCurrency';

/** Lowest recurring monthly plan per service, or null if quote-only. */
const entry = (slug: string) => plans.filter((p) => p.service === slug && p.unit === 'mo').sort((a, b) => (a.inr ?? 0) - (b.inr ?? 0))[0] ?? null;

export default function StackBuilder() {
  const [cur, setCur] = useCurrency();
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (s: string) => setSel((x) => (x.includes(s) ? x.filter((i) => i !== s) : [...x, s]));

  const { total, quote } = useMemo(() => {
    let t = 0; let q = false;
    for (const s of sel) {
      const e = entry(s);
      if (!e) { q = true; continue; }
      t += (cur === 'INR' ? e.inr : e.usd) ?? 0;
    }
    return { total: t, quote: q };
  }, [sel, cur]);

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <p className="muted">Select the services you want to combine.</p>
        <CurrencySwitch value={cur} onChange={setCur} />
      </div>
      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="sr-only">Services</legend>
        <div className="grid grid--3">
          {services.map((s) => {
            const e = entry(s.slug);
            const on = sel.includes(s.slug);
            return (
              <label key={s.slug} className="card" style={{ cursor: 'pointer', display: 'block', borderColor: on ? '#075392' : undefined, padding: 18 }}>
                <input type="checkbox" checked={on} onChange={() => toggle(s.slug)} style={{ marginRight: 10, accentColor: '#075392', width: 18, height: 18, verticalAlign: 'middle' }} />
                <strong>{s.name}</strong>
                <span className="muted" style={{ display: 'block', fontSize: '.9rem', marginTop: 4 }}>
                  {e ? `from ${formatPrice(cur, e.inr, e.usd)}/month (draft)` : 'Quote'}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <div aria-live="polite" style={{ marginTop: 24 }}>
        {sel.length === 0 ? <p className="muted">No services selected yet.</p> : (
          <>
            <p className="price">{total > 0 ? formatPrice(cur, cur === 'INR' ? total : null, cur === 'USD' ? total : null) : 'Quote'}<small> /month estimate, excl. tax</small></p>
            {quote && <p className="muted">Some selected services are quote-only and are not included in this estimate.</p>}
            <p className="muted" style={{ fontSize: '.85rem' }}>Estimate uses entry plans, which are drafts until confirmed. No bundle discount is applied.</p>
          </>
        )}
      </div>
      <a className="btn btn--primary" style={{ marginTop: 20 }} href={`/contact?stack=${sel.join(',')}`}>
        {quote || sel.length === 0 ? 'Get a Custom Quote' : 'Request this stack'}
      </a>
    </div>
  );
}
