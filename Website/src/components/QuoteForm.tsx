import { useState, type FormEvent } from 'react';
import { services } from '../data/site';

type Errors = Partial<Record<'service' | 'scope' | 'budget' | 'timeline' | 'email', string>>;

export default function QuoteForm() {
  const initial = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return; // honeypot
    const err: Errors = {};
    if (!f.get('service')) err.service = 'Choose a service.';
    if (!String(f.get('scope') || '').trim()) err.scope = 'Describe the scope in a sentence.';
    if (!f.get('budget')) err.budget = 'Choose a budget range.';
    if (!f.get('timeline')) err.timeline = 'Choose a timeline.';
    if (!/^\S+@\S+\.\S+$/.test(String(f.get('email') || ''))) err.email = 'Enter a valid email address.';
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  }

  if (done) {
    return (
      <div className="card" role="status">
        <h3>Form checked</h3>
        <p className="muted" style={{ marginTop: 8 }}>
          Submission is not yet connected to a backend, so nothing has been sent. The serverless function and storage are pending the studio’s approval.
        </p>
      </div>
    );
  }

  const field = (k: keyof Errors) => ({ 'aria-invalid': errors[k] ? true : undefined, 'aria-describedby': errors[k] ? `${k}-e` : undefined });
  const msg = (k: keyof Errors) => errors[k] && <span className="err" id={`${k}-e`}>{errors[k]}</span>;

  return (
    <form className="card stack" style={{ ['--s' as string]: '18px' }} onSubmit={onSubmit} noValidate>
      <div className="notice">Preview: this form validates but does not send yet.</div>
      <div className="field">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue="" {...field('service')}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
          <option value="stack">Several services</option>
        </select>{msg('service')}
      </div>
      <div className="field">
        <label htmlFor="scope">Scope</label>
        <textarea id="scope" name="scope" rows={4} {...field('scope')} />{msg('scope')}
      </div>
      <div className="field">
        <label htmlFor="budget">Budget range</label>
        <select id="budget" name="budget" defaultValue="" {...field('budget')}>
          <option value="" disabled>Select a range</option>
          <option>Under ₹50,000 / $600</option><option>₹50,000–₹1,50,000 / $600–$1,800</option>
          <option>₹1,50,000–₹5,00,000 / $1,800–$6,000</option><option>Above ₹5,00,000 / $6,000</option><option>Not sure yet</option>
        </select>{msg('budget')}
      </div>
      <div className="field">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" defaultValue="" {...field('timeline')}>
          <option value="" disabled>Select a timeline</option>
          <option>As soon as possible</option><option>Within a month</option><option>1–3 months</option><option>Flexible</option>
        </select>{msg('timeline')}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" {...field('email')} />{msg('email')}
      </div>
      <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="btn btn--primary" type="submit">Request a quote</button>
      <p className="muted" style={{ fontSize: '.85rem' }}>Next: we review your request and reply with scope questions. Reply time to be confirmed by the studio.{initial?.get('plan') ? ` Selected plan: ${initial.get('plan')}.` : ''}</p>
    </form>
  );
}
