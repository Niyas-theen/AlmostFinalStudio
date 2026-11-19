import { plans, services } from '../data/site';
import CurrencySwitch from './CurrencySwitch';
import { formatPrice, useCurrency } from './useCurrency';

const unitLabel = { mo: '/month', project: '/project', sprint: '/sprint', once: ' one-time' } as const;

export default function Pricing({ service }: { service?: string }) {
  const [cur, setCur] = useCurrency();
  const list = service ? plans.filter((p) => p.service === service) : plans;
  const groups = services.filter((s) => list.some((p) => p.service === s.slug));

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
        <CurrencySwitch value={cur} onChange={setCur} />
        <p className="muted" style={{ fontSize: '.9rem' }}>
          Prices exclude taxes. {cur === 'USD' ? 'USD prices are draft and set by hand.' : 'INR prices marked Draft are awaiting confirmation.'}
        </p>
      </div>
      {groups.map((s) => (
        <section key={s.slug} style={{ marginBottom: 56 }} aria-labelledby={`p-${s.slug}`}>
          <h3 id={`p-${s.slug}`} style={{ marginBottom: 20 }}>{s.name}</h3>
          <div className="grid grid--3">
            {list.filter((p) => p.service === s.slug).map((p) => {
              const draft = cur === 'USD' || !p.confirmed;
              return (
                <article key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'start' }}>
                    <h4 style={{ fontSize: '1.15rem' }}>{p.name}</h4>
                    {draft && <span className="badge badge--draft">Draft</span>}
                  </div>
                  <p className="price">
                    <small>{p.from ? 'from ' : ''}</small>{formatPrice(cur, p.inr, p.usd)}<small>{unitLabel[p.unit]}</small>
                  </p>
                  {p.detail && <p className="muted">{p.detail}</p>}
                  <a className="btn btn--secondary" style={{ marginTop: 'auto' }} href={`/contact?plan=${p.id}`}>Choose this plan</a>
                  <p className="muted" style={{ fontSize: '.85rem' }}>Next: we confirm scope with you before any commitment.</p>
                </article>
              );
            })}
          </div>
        </section>
      ))}
      {!service && (
        <div className="card">
          <h3>Mobile apps, complex websites and enterprise work</h3>
          <p className="muted" style={{ margin: '8px 0 16px' }}>These are quoted individually.</p>
          <a className="btn btn--primary" href="/contact?plan=quote">Get a Custom Quote</a>
        </div>
      )}
    </div>
  );
}
