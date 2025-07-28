import { EXPERIENCE } from "@/config/config";
import { Briefcase, Calendar } from "lucide-react";
import { Section, SectionTitle } from "../section";

export const WorkExperienceSection = () => {
    return (
        <Section>
            <SectionTitle title="Work Experience" icon={Briefcase} />
            <div className="space-y-3">
                {EXPERIENCE.map((experience, experience_idx) => (
                    <div
                        key={experience_idx}
                        className="border-l-2 border-slate-200 pl-4"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                            <div>
                                <h3 className="font-semibold text-slate-800 text-sm">
                                    {experience.title}
                                </h3>
                                <p className="text-slate-600 text-xs">
                                    {experience.company}
                                </p>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <Calendar className="w-3 h-3" />
                                <span>{experience.date}</span>
                            </div>
                        </div>
                        <ul className="text-xs text-slate-600 space-y-0.5">
                            {experience.key_points.map(
                                (key_point, key_point_idx) => (
                                    <li key={key_point_idx}>• {key_point}</li>
                                ),
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
