import { PERSONAL_DETAILS } from "@/config/config";
import { User } from "lucide-react";
import { Section, SectionTitle } from "../section";

export const SummarySection = () => {
    const { summary } = PERSONAL_DETAILS;

    return (
        <Section>
            <SectionTitle title="Summary" icon={User} />
            <p className="text-slate-600 text-sm leading-relaxed">{summary}</p>
        </Section>
    );
};
