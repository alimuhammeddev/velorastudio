import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card project-card-${index % 4}`}>
      <Link className="project-image image-frame" href={`/projects/${project.slug}`} aria-label={`View ${project.name}`}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 45vw"
        />
        <span className="project-image-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="project-meta">
        <div>
          <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
          <span>{project.category}</span>
        </div>
        <span className="project-location">{project.location}</span>
      </div>
    </article>
  );
}
