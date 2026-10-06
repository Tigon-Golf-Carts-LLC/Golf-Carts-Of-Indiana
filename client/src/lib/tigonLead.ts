// TIGON IOT "Webhook Flows" lead delivery for GOLF CARTS OF INDIANA.
//
// The site is hosted as static files (GitHub Pages), so by default leads are
// posted straight from the browser to this website's own webhook. The webhook
// only accepts browser posts whose Origin is https://golfcartsofindiana.com.
//
// When the site runs on its Node/Express server instead, build with
//   VITE_TIGON_LEAD_ENDPOINT=/api/lead
// so the browser posts to server/routes.ts, which signs each request with
// TIGON_WEBHOOK_SECRET (server-side only — never put the secret here).
const TIGON_WEBHOOK_URL = "https://tigoniot.com/hooks/QrCV3GFh5abWvHJNBXowT7xgQRQEo2sE";

export const TIGON_LEAD_ENDPOINT: string =
  (import.meta.env.VITE_TIGON_LEAD_ENDPOINT as string | undefined) || TIGON_WEBHOOK_URL;

// Every lead form on this site sends this exact form_name.
export const TIGON_FORM_NAME = "Contact form";

export const HONEYPOT_FIELD = "website";
export const MAX_IMAGE_MB = 10;
export const IMAGE_FIELDS = ["image_1", "image_2", "image_3"] as const;
export const IMAGE_ACCEPT = "image/*,.heic,.heif";
const IMAGE_EXT = /\.(jpe?g|png|gif|webp|heic|heif)$/i;
const IMAGE_MIME = /^image\/(jpeg|png|gif|webp|heic|heif)$/i;

const TRACK = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;
const STORE_KEY = "tigon_first_touch";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

type Saved = { ts: number; v: Record<string, string> };

function readSaved(): Saved | null {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || "null") as Saved | null;
    if (!saved || !saved.ts || Date.now() - saved.ts > MAX_AGE_MS) return null;
    return saved;
  } catch {
    return null;
  }
}

// First-touch attribution: the first utm_*/gclid/fbclid seen are kept for 30 days.
// Called on every page load (see App.tsx) so landing-page parameters are saved
// even when the visitor fills a form on a later page.
export function captureFirstTouch(): Record<string, string> {
  const current: Record<string, string> = {};
  let found = false;
  try {
    const q = new URLSearchParams(window.location.search);
    TRACK.forEach((k) => {
      const v = q.get(k);
      if (v) { current[k] = v; found = true; }
    });
  } catch { /* old browser */ }

  let saved = readSaved();
  if (!saved && found) {
    saved = { ts: Date.now(), v: current };
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(saved)); } catch { /* private mode */ }
  }

  const out: Record<string, string> = {};
  TRACK.forEach((k) => { out[k] = saved?.v?.[k] || current[k] || ""; });
  return out;
}

// Google Analytics client id from the _ga cookie: GA1.1.123456.789012 -> 123456.789012
function gaClientId(): string {
  const m = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
  if (!m) return "";
  const parts = decodeURIComponent(m[1]).split(".");
  return parts.length >= 4 ? parts.slice(-2).join(".") : "";
}

export function trackingFields(): Record<string, string> {
  return {
    ...captureFirstTouch(),
    url: window.location.href,
    referrer: document.referrer || "",
    ga_client_id: gaClientId(),
  };
}

// Field-level validation. Returns { fieldName: message } for every problem found.
export function validateLead(fd: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  const text = (k: string) => String(fd.get(k) ?? "").trim();

  if (!text("first_name")) errors.first_name = "Please enter your first name.";
  if (!text("last_name")) errors.last_name = "Please enter your last name.";

  const email = text("email");
  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email address.";

  const digits = text("phone1").replace(/\D/g, "");
  if (!digits) errors.phone1 = "Please enter your phone number.";
  else if (digits.length < 10) errors.phone1 = "Phone number must have at least 10 digits.";

  const phone2 = text("phone2").replace(/\D/g, "");
  if (phone2 && phone2.length < 10) errors.phone2 = "Alternate phone must have at least 10 digits.";

  const zip = text("zip_code");
  if (zip && !/^\d{5}(-?\d{4})?$/.test(zip)) errors.zip_code = "Please enter a 5-digit ZIP code.";

  IMAGE_FIELDS.forEach((k) => {
    const f = fd.get(k);
    if (!(f instanceof File) || !f.name || f.size === 0) return;
    if (!IMAGE_MIME.test(f.type) && !IMAGE_EXT.test(f.name)) {
      errors[k] = "Photos must be JPG, PNG, GIF, WEBP or HEIC.";
    } else if (f.size > MAX_IMAGE_MB * 1024 * 1024) {
      errors[k] = `Each photo must be ${MAX_IMAGE_MB} MB or smaller.`;
    }
  });

  return errors;
}

// Builds the final multipart body: drops empty file inputs, fills tracking
// fields, forces form_name and an (empty) spam-trap value.
export function buildLeadData(form: HTMLFormElement): FormData {
  const fd = new FormData(form);
  IMAGE_FIELDS.forEach((k) => {
    const f = fd.get(k);
    if (!(f instanceof File) || !f.name || f.size === 0) fd.delete(k);
  });
  const t = trackingFields();
  Object.keys(t).forEach((k) => fd.set(k, t[k]));
  fd.set("form_name", TIGON_FORM_NAME);
  if (!fd.has(HONEYPOT_FIELD)) fd.set(HONEYPOT_FIELD, "");
  return fd;
}

export const GENERIC_ERROR = "Sorry, something went wrong. Please try again or call us at 1-844-844-6638.";

export async function sendLead(fd: FormData): Promise<{ id?: string }> {
  let res: Response;
  try {
    res = await fetch(TIGON_LEAD_ENDPOINT, { method: "POST", body: fd, mode: "cors" });
  } catch {
    throw new Error(GENERIC_ERROR);
  }
  if (res.status === 429) {
    throw new Error("Too many attempts. Please wait a minute and try again.");
  }
  let data: { ok?: boolean; id?: string; error?: string; message?: string } | null = null;
  try { data = await res.json(); } catch { data = null; }
  if (!res.ok || !data || data.ok !== true) {
    throw new Error(data?.error || data?.message || GENERIC_ERROR);
  }
  return { id: data.id };
}
