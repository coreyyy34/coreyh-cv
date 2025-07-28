import { SKILLS } from "@/config/config";
import { Code } from "lucide-react";
import { Section, SectionContentGrid, SectionTitle } from "../section";

export const TechnicalSkillsSection = () => {
    return (
        <Section>
            <SectionTitle title="Technical Skills" icon={Code} />
            <SectionContentGrid>
                {SKILLS.map((skill, skill_idx) => (
                    <div key={skill_idx} className="bg-slate-50 p-3 rounded">
                        {/* <h3 className="font-medium mb-2 text-slate-700 text-sm">
                            {skill.label}
                        </h3> */}
                        <ul className="space-y-1 text-slate-600 text-xs">
                            {skill.key_points.map(
                                (key_point, key_point_idx) => (
                                    <li key={key_point_idx}>
                                        • <strong>{key_point.label}</strong>{" "}
                                        {key_point.value}
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                ))}
            </SectionContentGrid>
        </Section>
    );
};
