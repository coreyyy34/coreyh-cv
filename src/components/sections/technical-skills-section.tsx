import { SKILLS } from "@/config/config";
import { Code } from "lucide-react";
import { Section, SectionTitle } from "../section";

export const TechnicalSkillsSection = () => {
    return (
        <Section>
            <SectionTitle title="Technical Skills" icon={Code} />
            <ul className="grid grid-cols-2 w-full space-y-1 text-slate-600 text-xs">
                {SKILLS.map((skill, skill_idx) => (
                    <li key={skill_idx}>
                        • <strong>{skill.label}</strong> {skill.value}
                    </li>
                ))}
            </ul>
        </Section>
    );
};
