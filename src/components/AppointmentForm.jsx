import { useEffect, useId, useState } from 'react';
import { useSearchParams } from 'react-router';
import { site, whatsappLink } from '../config/site.js';
import { specialities } from '../data/specialities.js';
import Icon from './Icon.jsx';
import { trackEvent } from '../lib/analytics.js';

const SLOTS = ['Morning (9 am – 12 pm)', 'Afternoon (12 – 4 pm)', 'Evening (4 – 8 pm)', 'Any time'];

/**
 * Appointment request form.
 * - If VITE_FORM_ENDPOINT is set, the request is POSTed as JSON (Formspree / Web3Forms / Apps Script / own API).
 * - Otherwise it opens WhatsApp to the hospital number with the request pre-filled.
 * Nothing is stored in the browser.
 */
export default function AppointmentForm({ compact = false, defaultDept = '' }) {
  const uid = useId();
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: '', phone: '', dept: defaultDept, date: '', slot: SLOTS[3], message: '', consent: false });
  const [minDate, setMinDate] = useState(undefined);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  useEffect(() => {
    const d = params.get('dept');
    if (d && specialities.some((s) => s.slug === d)) setForm((f) => ({ ...f, dept: d }));
    const t = new Date();
    t.setMinutes(t.getMinutes() - t.getTimezoneOffset());
    setMinDate(t.toISOString().slice(0, 10));
  }, [params]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const phoneOk = /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(form.phone.trim());

  async function onSubmit(e) {
    e.preventDefault();
    if (form.name.trim().length < 2) return setStatus({ state: 'error', msg: 'Please enter the patient\'s name.' });
    if (!phoneOk) return setStatus({ state: 'error', msg: 'Please enter a valid 10-digit Indian mobile number.' });
    if (!form.consent) return setStatus({ state: 'error', msg: 'Please allow the hospital to contact you about this request.' });

    const deptName = specialities.find((s) => s.slug === form.dept)?.name || 'Not sure / General';
    const summary = [
      'Appointment request — Gurudev Multi-Speciality Hospital',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Department: ${deptName}`,
      form.date ? `Preferred date: ${form.date}` : null,
      `Preferred time: ${form.slot}`,
      form.message.trim() ? `Details: ${form.message.trim()}` : null,
    ].filter(Boolean).join('\n');

    if (site.api.formEndpoint) {
      setStatus({ state: 'sending', msg: '' });
      try {
        const res = await fetch(site.api.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            department: deptName,
            preferredDate: form.date,
            preferredTime: form.slot,
            message: form.message.trim(),
            page: typeof window !== 'undefined' ? window.location.pathname : '',
            _subject: `Appointment request: ${deptName}`,
          }),
        });
        if (!res.ok) throw new Error(String(res.status));
        trackEvent('generate_lead', { method: 'form', department: deptName });
        setStatus({ state: 'done', msg: 'Thank you! Your request has been sent. Our team will call you shortly to confirm the appointment.' });
        setForm((f) => ({ ...f, name: '', phone: '', date: '', message: '', consent: false }));
      } catch {
        setStatus({ state: 'error', msg: `Sorry, the request could not be sent. Please call ${site.phone.display}.` });
      }
      return;
    }

    const wa = whatsappLink(summary);
    if (wa) {
      trackEvent('generate_lead', { method: 'whatsapp', department: deptName });
      window.open(wa, '_blank', 'noopener');
      setStatus({ state: 'done', msg: 'WhatsApp has opened with your request — press Send to share it with the hospital. Prefer to talk? Call us.' });
    } else {
      setStatus({ state: 'error', msg: `Please call ${site.phone.display} to book your appointment.` });
    }
  }

  const f = (name) => `${uid}-${name}`;

  return (
    <form className={`appt${compact ? ' appt--compact' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="appt__grid">
        <div className="field">
          <label htmlFor={f('name')}>Patient name <span aria-hidden="true">*</span></label>
          <input id={f('name')} name="name" autoComplete="name" required value={form.name} onChange={update('name')} />
        </div>
        <div className="field">
          <label htmlFor={f('phone')}>Mobile number <span aria-hidden="true">*</span></label>
          <input id={f('phone')} name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="10-digit mobile" value={form.phone} onChange={update('phone')} aria-invalid={form.phone ? !phoneOk : undefined} />
        </div>
        <div className="field">
          <label htmlFor={f('dept')}>Department</label>
          <select id={f('dept')} name="dept" value={form.dept} onChange={update('dept')}>
            <option value="">Not sure / General</option>
            {specialities.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        {!compact ? (
          <div className="field">
            <label htmlFor={f('date')}>Preferred date</label>
            <input id={f('date')} name="date" type="date" min={minDate} value={form.date} onChange={update('date')} />
          </div>
        ) : null}
        <div className={`field${compact ? '' : ' field--full'}`}>
          <label htmlFor={f('slot')}>Preferred time</label>
          <select id={f('slot')} name="slot" value={form.slot} onChange={update('slot')}>
            {SLOTS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        {!compact ? (
          <div className="field field--full">
            <label htmlFor={f('message')}>Symptoms or message (optional)</label>
            <textarea id={f('message')} name="message" rows={3} value={form.message} onChange={update('message')} />
          </div>
        ) : null}
        <label className="field--check field--full">
          <input type="checkbox" checked={form.consent} onChange={update('consent')} />
          <span>I agree to be contacted by the hospital about this request.</span>
        </label>
      </div>

      <button type="submit" className="btn btn--primary btn--block" disabled={status.state === 'sending'}>
        <Icon name="calendar" size={18} /> {status.state === 'sending' ? 'Sending…' : 'Request appointment'}
      </button>
      <p className="appt__note">
        For emergencies do not use this form — call <a href={site.phone.tel}>{site.phone.display}</a> or come directly. We are open 24×7.
      </p>
      <div role="status" aria-live="polite" className={`appt__status appt__status--${status.state}`}>
        {status.msg}
      </div>
    </form>
  );
}
