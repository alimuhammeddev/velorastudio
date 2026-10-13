import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Studio",
  description: "Discover the design philosophy and values behind Velora Studio's considered approach to architecture and interiors.",
};

const values = [
  { title: "Intentionality", copy: "Every design decision should serve a clear purpose." },
  { title: "Materiality", copy: "Natural textures, carefully selected materials, and thoughtful finishes contribute to the character of a space." },
  { title: "Function", copy: "Beautiful spaces should support the people who use them." },
  { title: "Longevity", copy: "Design should prioritize lasting value over passing trends." },
  { title: "Context", copy: "Each project should respond thoughtfully to its surroundings and intended use." },
];

export default function StudioPage() {
  return (
    <main className="interior-page">
      <section className="page-intro studio-intro section-pad">
        <p className="eyebrow">The Studio</p>
        <h1>Design with intention.<br /><em>Spaces with meaning.</em></h1>
        <p className="page-intro-description">
          Velora Studio explores the relationship between architecture,
          interiors, materials, and everyday life. Our design philosophy is
          grounded in clarity, thoughtful composition, and an appreciation for
          spaces that feel both functional and enduring.
        </p>
      </section>
      <section className="studio-image image-frame">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85"
          alt="Thoughtfully composed residence with warm finishes and a garden outlook"
          fill
          sizes="100vw"
        />
      </section>
      <section className="philosophy-intro section-pad">
        <p className="eyebrow">A point of view</p>
        <div>
          <h2>Beauty in the<br /><em>considered details.</em></h2>
          <p>
            We believe a well-designed space is more than a visual statement. It
            is an environment shaped around how people live, move, work, rest,
            and connect. By considering proportion, light, texture, and purpose,
            we aim to create spaces that feel natural, balanced, and lasting.
          </p>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="values-heading">
          <p className="eyebrow">What guides us</p>
          <h2>Principles, not<br /><em>prescriptions.</em></h2>
        </div>
        <div className="values-list">
          {values.map((value, index) => (
            <article className="value-row" key={value.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="simple-cta section-pad">
        <p className="eyebrow">Discover what is possible</p>
        <h2>Spaces begin<br />with a conversation.</h2>
        <div className="hero-actions">
          <Link className="button button-dark" href="/projects">Explore Our Projects <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
