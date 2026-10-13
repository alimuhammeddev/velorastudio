import Link from "next/link";
import { navigation, site } from "@/lib/site-data";

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark wordmark-light" href="/" aria-label={`${site.name} home`}>
            <span>VELORA</span>
            <small>{site.descriptor}</small>
          </Link>
          <p>Thoughtful architecture and refined interiors, designed around the way we live.</p>
        </div>
        <div className="footer-column">
          <p className="eyebrow">Explore</p>
          {navigation.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <p className="eyebrow">Get in touch</p>
          <Link href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
          <span>{site.contact.email}</span>
          <span>{site.contact.location}</span>
          <p className="eyebrow footer-social-label">Follow along</p>
          <a className="social-link" href={site.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Velora Studio on Instagram">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© <CopyrightYear /> Velora Studio</span>
        <span>Architecture &amp; Interiors</span>
        <span>Designed with intention.</span>
      </div>
    </footer>
  );
}
