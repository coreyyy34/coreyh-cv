import { ADDITIONAL_SKILLS } from "@/config/config";
import { Sparkles } from "lucide-react";
import { Section, SectionTitle } from "../section";

export const AdditionalSkillsSection = () => {
    return (
        <Section>
            <SectionTitle title="Additional Skills" icon={Sparkles} />
            <ul className="space-y-1 text-slate-600 text-xs">
                {ADDITIONAL_SKILLS.map((skill, skill_dx) => (
                    <li key={skill_dx}>
                        • <strong>{skill.label}</strong> {skill.value}
                    </li>
                ))}
            </ul>
        </Section>
    );
};
