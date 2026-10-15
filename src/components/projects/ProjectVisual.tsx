import { Boxes, Code2, ShoppingBag, Sparkles } from "lucide-react";
import type { Project } from "@/data/types";

export function ProjectVisual({ project }: { project: Pick<Project, "slug" | "category"> }) {
  const isShop =
    project.slug === "instagram-shop-deployment" || project.category === "live-site";
  const isAI = project.slug === "smart-content-assistant";
  const Icon = isShop
    ? ShoppingBag
    : isAI
      ? Sparkles
      : project.category === "system"
        ? Boxes
        : Code2;
  return (
    <div
      className={`project-visual ${isShop ? "project-visual-shop" : "project-visual-app"}`}
      aria-hidden="true"
    >
      <span className="visual-orb" />
      <div className="mini-browser">
        <div className="mini-browser-bar">
          <span />
          <span />
          <span />
          <i />
          <Icon size={12} />
        </div>
        <div className="mini-app-body">
          <div className="mini-sidebar">
            <Icon size={18} />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="mini-content">
            <div className="mini-title">
              <b />
              <i />
            </div>
            {isShop ? (
              <>
                <div className="mini-shop-banner">
                  <span />
                  <ShoppingBag size={34} strokeWidth={1} />
                </div>
                <div className="mini-products">
                  {[1, 2, 3].map((n) => (
                    <div key={n}>
                      <ShoppingBag size={23} strokeWidth={1.2} />
                      <i />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mini-stats">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="mini-chart">
                  {[30, 55, 42, 75, 62, 90, 78, 100, 85].map((height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mini-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <span className="visual-icon">
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <span className="visual-label">
        {isShop ? "STOREFRONT" : isAI ? "AI WORKSPACE" : "WEB APPLICATION"}
      </span>
    </div>
  );
}
