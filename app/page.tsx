import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { projects, services } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Architecture &amp; Interiors</p>
            <h1>Spaces Designed to Inspire.</h1>
            <p className="hero-description">
              We create thoughtful architecture and refined interiors that bring
              beauty, function, and lasting character to everyday living.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/projects">
                Explore Our Projects <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/contact">
                Start a Project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-image image-frame">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
              alt="Sunlit contemporary residence with a natural stone terrace and garden"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 76vw"
            />
            <span className="image-caption">A quieter kind of statement</span>
          </div>
        </section>

        <section className="intro-section section-pad">
          <div className="intro-image image-frame">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Calm living room layered with warm timber, linen and natural light"
              fill
              sizes="(max-width: 760px) 100vw, 43vw"
            />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">Our Approach</p>
            <h2>Thoughtful design. Lasting impressions.</h2>
            <p>
              At Velora Studio, we believe exceptional spaces begin with a clear
              understanding of the people who inhabit them. Our approach combines
              thoughtful planning, refined materials, and architectural clarity
              to create environments that feel considered, functional, and
              enduring.
            </p>
            <Link className="text-link" href="/studio">
              Get to know the studio <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="projects-section section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A considered collection</p>
              <h2>Selected Projects</h2>
            </div>
            <p>
              A collection of spaces shaped by context, material, light, and
              purpose.
            </p>
          </div>
          <div className="project-grid home-project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="section-link-row">
            <Link className="text-link" href="/projects">
              View All Projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="services-overview section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Our Expertise</h2>
            </div>
            <p>Considered design solutions for spaces that serve, inspire, and endure.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <Link className="service-row" href="/services" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <span className="service-name">{service.title}</span>
                <span className="service-summary">{service.summary}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="section-link-row">
            <Link className="text-link" href="/services">
              Discover Our Services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="philosophy-image image-frame">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85"
              alt="Minimalist interior with sculptural furniture and softly textured walls"
              fill
              sizes="100vw"
            />
          </div>
          <div className="philosophy-copy">
            <p className="eyebrow">Our Philosophy</p>
            <h2>Less, but<br />considered.</h2>
            <p>
              We believe meaningful architecture is found in the relationship
              between light, proportion, material, and human experience. Every
              detail has a purpose, and every space should feel as natural as it
              is intentional.
            </p>
          </div>
        </section>

        <section className="statement-section section-pad">
          <p className="eyebrow">A way of seeing</p>
          <p className="statement">
            We design for the moments that make a place feel like <em>yours.</em>
          </p>
          <Link className="text-link" href="/studio">
            Our design values <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className="enquiry-banner">
          <div>
            <p className="eyebrow">The beginning of something</p>
            <h2>Have a space<br />in mind?</h2>
          </div>
          <div className="enquiry-copy">
            <p>
              Whether you&apos;re planning a new residence, reimagining an
              existing interior, or exploring a new architectural project,
              we&apos;d love to hear about your vision.
            </p>
            <Link className="button button-dark" href="/contact">
              Start a Project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
