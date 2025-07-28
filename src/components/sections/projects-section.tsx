import { PROJECTS } from "@/config/config";
import { Calendar } from "lucide-react";
import { Section, SectionContentGrid, SectionTitle } from "../section";

export const ProjectsSection = () => {
    return (
        <Section>
            <SectionTitle title="Projects & Experience" icon={Calendar} />
            <SectionContentGrid>
                {PROJECTS.map((project, project_idx) => (
                    <div
                        key={project_idx}
                        className="border-l-2 border-slate-200 pl-4"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                            <h3 className="font-semibold text-slate-800 text-sm">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <Calendar className="w-3 h-3" />
                                <span>{project.date}</span>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-2 text-xs">
                            {project.description}
                        </p>
                        <ul className="text-xs text-slate-600 space-y-0.5">
                            {project.key_points.map(
                                (key_point, key_point_idx) => (
                                    <li key={key_point_idx}>• {key_point}</li>
                                ),
                            )}
                        </ul>
                    </div>
                ))}
            </SectionContentGrid>
        </Section>
    );
};
