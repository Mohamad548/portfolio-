import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { localizeProjects } from "@/i18n/content";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/projects", {
    title: t.ui.nav.projects,
    description: t.pages.projects.description,
  });
}

export default async function ProjectsPage() {
  const { t } = await getI18n();

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="PORTFOLIO"
          title={t.pages.projects.title}
          description={t.pages.projects.description}
        />
        <ProjectsExplorer projects={localizeProjects(t)} />
      </div>
    </div>
  );
}
