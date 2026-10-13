"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Your enquiry details are complete. This form is not connected to email yet, so nothing has been sent.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <legend>
          <span className="group-number">01</span> About you
        </legend>
        <div className="form-row">
          <label>
            <span className="field-label">Full name <span aria-hidden="true">*</span></span>
            <input name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label>
            <span className="field-label">Email address <span aria-hidden="true">*</span></span>
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label>
          <span className="field-label">Phone number <span className="optional">(Optional)</span></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
        </label>
      </fieldset>

      <fieldset className="form-group">
        <legend>
          <span className="group-number">02</span> Your project
        </legend>
        <div className="form-row">
          <label>
            <span className="field-label">Project type <span aria-hidden="true">*</span></span>
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Architecture</option>
              <option>Interior Design</option>
              <option>Renovation &amp; Transformation</option>
              <option>Design Consultation</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            <span className="field-label">Project location <span aria-hidden="true">*</span></span>
            <input name="location" autoComplete="address-level2" placeholder="City, country" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span className="field-label">Estimated budget <span className="optional">(Optional)</span></span>
            <input name="budget" placeholder="Approximate range" />
          </label>
          <label>
            <span className="field-label">Preferred timeline <span className="optional">(Optional)</span></span>
            <input name="timeline" placeholder="e.g. Start within 6 months" />
          </label>
        </div>
        <label>
          <span className="field-label">Tell us about your project <span aria-hidden="true">*</span></span>
          <textarea name="description" rows={5} placeholder="Share your ideas, the space, and what you hope to achieve" required />
        </label>
      </fieldset>

      <button className="button button-dark form-submit" type="submit">
        Prepare Enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
