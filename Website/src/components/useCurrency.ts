import { useEffect, useState } from 'react';

export type Currency = 'INR' | 'USD';
const KEY = 'af-currency';

export function formatPrice(c: Currency, inr: number | null, usd: number | null): string {
  const v = c === 'INR' ? inr : usd;
  if (v == null) return 'Quote';
  return c === 'INR' ? `₹${v.toLocaleString('en-IN')}` : `$${v.toLocaleString('en-US')}`;
}

/** Default INR for India, USD elsewhere; choice is remembered. */
export function useCurrency(): [Currency, (c: Currency) => void] {
  const [c, setC] = useState<Currency>('INR');
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Currency | null;
      if (saved === 'INR' || saved === 'USD') { setC(saved); }
      else {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setC(tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta' ? 'INR' : 'USD');
      }
    } catch { /* storage unavailable */ }
    const h = (e: Event) => setC((e as CustomEvent<Currency>).detail);
    window.addEventListener('af-currency', h);
    return () => window.removeEventListener('af-currency', h);
  }, []);
  const set = (n: Currency) => {
    setC(n);
    try { localStorage.setItem(KEY, n); } catch { /* ignore */ }
    window.dispatchEvent(new CustomEvent('af-currency', { detail: n }));
  };
  return [c, set];
}
