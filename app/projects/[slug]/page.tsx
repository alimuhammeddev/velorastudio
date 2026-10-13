import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/site-data";
import ProjectCard from "@/components/project-card";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="project-detail">
      <section className="detail-heading section-pad">
        <Link className="back-link" href="/projects"><span aria-hidden="true">←</span> All Projects</Link>
        <p className="eyebrow">{project.category} <span>·</span> {project.location}</p>
        <h1>{project.name}</h1>
        <p className="detail-lede">{project.summary}</p>
      </section>
      <div className="detail-hero image-frame">
        <Image src={project.image} alt={project.alt} fill priority sizes="100vw" />
      </div>
      <section className="detail-overview section-pad">
        <div className="detail-label">
          <p className="eyebrow">Project overview</p>
          <p className="detail-location">{project.location}</p>
        </div>
        <div className="detail-prose">
          <p className="detail-introduction">{project.introduction}</p>
          <h2>A study in considered living.</h2>
          <p>{project.concept}</p>
          <p className="eyebrow materials-label">Materials &amp; considerations</p>
          <ul className="materials-list">
            {project.materials.map((material) => <li key={material}>{material}</li>)}
          </ul>
        </div>
      </section>
      <section className="detail-gallery section-pad" aria-label={`${project.name} image gallery`}>
        {project.gallery.map((image, index) => (
          <div className={`gallery-image image-frame gallery-${image.shape ?? "wide"}`} key={image.image}>
            <Image
              src={image.image}
              alt={image.alt}
              fill
              sizes={index === 0 ? "100vw" : "(max-width: 700px) 100vw, 50vw"}
            />
            <span className="gallery-index">0{index + 1}</span>
          </div>
        ))}
      </section>
      <section className="next-project section-pad">
        <div>
          <p className="eyebrow">Continue exploring</p>
          <h2>Another point of view.</h2>
        </div>
        <ProjectCard project={nextProject} index={1} />
      </section>
      <section className="detail-cta">
        <p className="eyebrow">A similar project in mind?</p>
        <h2>Let&apos;s make room<br />for what matters.</h2>
        <Link className="button button-dark" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
