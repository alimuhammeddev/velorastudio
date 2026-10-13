import type { Metadata } from "next";
import ProjectFilter from "@/components/project-filter";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore conceptual architecture and interior design work by Velora Studio, shaped by material, light, context, and the people who inhabit each space.",
};

export default function ProjectsPage() {
  return (
    <main className="interior-page">
      <section className="page-intro section-pad">
        <p className="eyebrow">Our Portfolio</p>
        <h1>Spaces with a<br className="desktop-br" /> <em>story to tell.</em></h1>
        <p className="page-intro-description">
          Explore a collection of architectural and interior concepts shaped by
          material, light, context, and the people who inhabit them.
        </p>
      </section>
      <section className="portfolio-section section-pad">
        <ProjectFilter projects={projects} />
      </section>
    </main>
  );
}
