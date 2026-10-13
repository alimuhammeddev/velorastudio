"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/project-card";
import type { Project, ProjectCategory } from "@/lib/site-data";

const filters: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "Architecture",
  "Interior Design",
  "Residential",
];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All Projects");
  const filtered = useMemo(
    () => active === "All Projects" ? projects : projects.filter((project) => project.filters.includes(active)),
    [active, projects],
  );

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            aria-pressed={active === filter}
            className={active === filter ? "active" : ""}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid portfolio-grid" aria-live="polite">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
