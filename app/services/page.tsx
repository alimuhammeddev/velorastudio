import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Architecture, interior design, renovation, and design consultation shaped around thoughtful spaces and considered living.",
};

export default function ServicesPage() {
  return (
    <main className="interior-page">
      <section className="page-intro section-pad">
        <p className="eyebrow">What we do</p>
        <h1>Considered at<br /><em>every scale.</em></h1>
        <p className="page-intro-description">
          From the first lines of a plan to the final layers of an interior, we
          bring clarity and intention to each part of the design process.
        </p>
      </section>
      <section className="services-detail-list">
        {services.map((service, index) => (
          <article className={`service-detail-row section-pad${index % 2 ? " reverse" : ""}`} key={service.title}>
            <div className="service-detail-image image-frame">
              <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 48vw" />
              <span className="service-number">0{index + 1}</span>
            </div>
            <div className="service-detail-copy">
              <p className="eyebrow">Our expertise · 0{index + 1}</p>
              <h2>{service.title}</h2>
              <p className="service-lede">{service.summary}</p>
              <p>{service.detail}</p>
              <Link className="text-link" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="simple-cta section-pad">
        <p className="eyebrow">A thoughtful first step</p>
        <h2>Let&apos;s find the right<br />way forward.</h2>
        <Link className="button button-dark" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
