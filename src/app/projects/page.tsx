import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description:
    "پروژه‌های وردپرس، افزونه‌های اختصاصی، پنل‌های Next.js و سیستم‌های عملیاتی.",
};

export default function ProjectsPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="PORTFOLIO"
          title="نمونه‌کارها و پروژه‌ها"
          description="از فروشگاه‌های زنده تا افزونه‌های OTP و انبار، پنل اسمارت تولید محتوا و سیستم‌های Next.js."
        />
        <ProjectsExplorer />
      </div>
    </div>
  );
}
