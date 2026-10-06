import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { vehicles } from "@/data/vehicles";
import {
  HONEYPOT_FIELD,
  IMAGE_ACCEPT,
  IMAGE_FIELDS,
  MAX_IMAGE_MB,
  TIGON_FORM_NAME,
  buildLeadData,
  sendLead,
  trackingFields,
  validateLead,
} from "@/lib/tigonLead";

// The cart a product-page lead is about. Sent as brand / model / vin_number / sku_number.
export interface LeadVehicle {
  brand: string;
  model: string;
  sku?: string;
  vin?: string;
}

interface TigonLeadFormProps {
  vehicle?: LeadVehicle;
  defaultComments?: string;
  submitLabel?: string;
  successText?: string;
  // Called after the lead is accepted. When omitted, the form shows successText inline.
  onSuccess?: () => void;
}

const TRACKING_INPUTS = [
  "url", "referrer", "utm_source", "utm_medium", "utm_campaign",
  "utm_term", "utm_content", "gclid", "fbclid", "ga_client_id",
];
const BRANDS = Array.from(new Set(vehicles.map((v) => v.brand)));
const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm";

export default function TigonLeadForm({
  vehicle,
  defaultComments = "",
  submitLabel = "Send Message",
  successText = "Thank you! We received your message and will contact you shortly.",
  onSuccess,
}: TigonLeadFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  const fillHidden = () => {
    const form = formRef.current;
    if (!form) return;
    const t = trackingFields();
    TRACKING_INPUTS.forEach((k) => {
      const el = form.elements.namedItem(k);
      if (el instanceof HTMLInputElement) el.value = t[k] ?? "";
    });
  };

  useEffect(fillHidden, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validateLead(new FormData(form));
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ ok: false, text: "Please fix the highlighted fields." });
      const first = form.elements.namedItem(Object.keys(found)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }

    setSending(true);
    setStatus({ ok: true, text: "Sending…" });
    try {
      await sendLead(buildLeadData(form));
      form.reset();
      fillHidden();
      setErrors({});
      setStatus({ ok: true, text: successText });
      onSuccess?.();
    } catch (err) {
      setStatus({ ok: false, text: err instanceof Error ? err.message : String(err) });
    } finally {
      setSending(false);
    }
  };

  const id = (name: string) => `${uid}-${name}`;
  const err = (name: string) =>
    errors[name] ? <p id={id(name) + "-err"} className="text-sm font-medium text-destructive">{errors[name]}</p> : null;
  const aria = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? id(name) + "-err" : undefined,
  });
  const field = (name: string, label: ReactNode, control: ReactNode, wide = false) => (
    <div className={`space-y-2 ${wide ? "md:col-span-2" : ""}`}>
      <Label htmlFor={id(name)}>{label}</Label>
      {control}
      {err(name)}
    </div>
  );
  const req = <span className="text-theme-orange" aria-hidden="true"> *</span>;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate encType="multipart/form-data" className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {field("first_name", <>First Name{req}</>,
          <Input id={id("first_name")} name="first_name" autoComplete="given-name" required placeholder="John" {...aria("first_name")} />)}
        {field("last_name", <>Last Name{req}</>,
          <Input id={id("last_name")} name="last_name" autoComplete="family-name" required placeholder="Doe" {...aria("last_name")} />)}
        {field("email", <>Email{req}</>,
          <Input id={id("email")} name="email" type="email" autoComplete="email" required placeholder="john@example.com" {...aria("email")} />)}
        {field("phone1", <>Phone{req}</>,
          <Input id={id("phone1")} name="phone1" type="tel" autoComplete="tel" required placeholder="(555) 123-4567" {...aria("phone1")} />)}
        {field("phone2", "Alternate phone",
          <Input id={id("phone2")} name="phone2" type="tel" placeholder="Optional" {...aria("phone2")} />)}
        {field("zip_code", "ZIP code",
          <Input id={id("zip_code")} name="zip_code" inputMode="numeric" autoComplete="postal-code" placeholder="46637" {...aria("zip_code")} />)}
        {field("address", "Address",
          <Input id={id("address")} name="address" autoComplete="street-address" placeholder="Street, city, state" {...aria("address")} />, true)}

        {vehicle ? (
          <>
            {field("brand", "Brand",
              <Input id={id("brand")} name="brand" defaultValue={vehicle.brand} readOnly className="bg-gray-100" />)}
            {field("model", "Model",
              <Input id={id("model")} name="model" defaultValue={vehicle.model} readOnly className="bg-gray-100" />)}
            {field("sku_number", "Stock # / SKU",
              <Input id={id("sku_number")} name="sku_number" defaultValue={vehicle.sku ?? ""} readOnly className="bg-gray-100" />)}
            {field("vin_number", "VIN",
              vehicle.vin
                ? <Input id={id("vin_number")} name="vin_number" defaultValue={vehicle.vin} readOnly className="bg-gray-100" />
                : <Input id={id("vin_number")} name="vin_number" placeholder="Optional" />)}
          </>
        ) : (
          <>
            {field("brand", "Brand",
              <select id={id("brand")} name="brand" defaultValue="" className={selectClass}>
                <option value="">Select a brand (optional)</option>
                {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                <option value="Other">Other</option>
              </select>)}
            {field("model", "Model you are interested in",
              <>
                <Input id={id("model")} name="model" list={id("models")} placeholder="e.g. EVOLUTION D5 MAVERICK 4" />
                <datalist id={id("models")}>
                  {vehicles.map((v) => <option key={v.id} value={v.name} />)}
                </datalist>
              </>)}
            {field("vin_number", "VIN",
              <Input id={id("vin_number")} name="vin_number" placeholder="Optional" />)}
            {field("sku_number", "Stock # / SKU",
              <Input id={id("sku_number")} name="sku_number" placeholder="Optional" />)}
          </>
        )}

        {field("comments", "Message",
          <Textarea id={id("comments")} name="comments" defaultValue={defaultComments}
            placeholder="Tell us about your needs..." className="min-h-[120px]" />, true)}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Photos (optional, up to {MAX_IMAGE_MB} MB each)</legend>
        <div className="grid md:grid-cols-3 gap-3">
          {IMAGE_FIELDS.map((name, i) => (
            <div key={name} className="space-y-1">
              <Label htmlFor={id(name)} className="sr-only">Photo {i + 1}</Label>
              <Input id={id(name)} name={name} type="file" accept={IMAGE_ACCEPT} className="cursor-pointer" {...aria(name)} />
              {err(name)}
            </div>
          ))}
        </div>
      </fieldset>

      {/* Spam trap: real visitors never see or fill this. Must be sent empty. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={id(HONEYPOT_FIELD)}>Leave this field empty</label>
        <input type="text" id={id(HONEYPOT_FIELD)} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {/* Filled in automatically right before sending */}
      <input type="hidden" name="form_name" value={TIGON_FORM_NAME} />
      {TRACKING_INPUTS.map((name) => <input key={name} type="hidden" name={name} defaultValue="" />)}

      <Button type="submit" className="w-full bg-theme-orange hover:bg-orange-600 text-white" disabled={sending}>
        {sending ? "Sending..." : submitLabel}
      </Button>
      <p role="status" aria-live="polite"
        className={`text-sm font-semibold ${status?.ok ? "text-green-700" : "text-destructive"}`}>
        {status?.text}
      </p>
    </form>
  );
}
