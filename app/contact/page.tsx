import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Velora Studio about your project, ideas, and the space you have in mind.",
};

export default function ContactPage() {
  return (
    <main className="interior-page">
      <section className="page-intro contact-intro section-pad">
        <p className="eyebrow">Get in touch</p>
        <h1>Let&apos;s create<br /><em>something considered.</em></h1>
        <p className="page-intro-description">
          Tell us a little about your project, your ideas, and the space you have
          in mind. We&apos;d love to learn more about what you&apos;re planning.
        </p>
      </section>
      <section className="contact-layout section-pad">
        <div className="contact-form-wrap">
          <p className="eyebrow">A few details to begin</p>
          <h2>Your project</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
