import { Header } from "@/components/header";
import { SectionContentGrid } from "@/components/section";
import {
    AdditionalSkillsSection,
    EducationSection,
    ProjectsSection,
    SummarySection,
    TechnicalSkillsSection,
    WorkExperienceSection,
} from "@/components/sections";

export default function CV() {
    return (
        <div className="min-h-screen not-print:p-6 not-print:bg-gray-200">
            <div className="mx-auto space-y-4 not-print:max-w-[210mm] bg-white not-print:rounded-t-lg">
                <Header />
                <div className="px-4 pb-2">
                    <SummarySection />
                    <TechnicalSkillsSection />
                    <ProjectsSection />
                    <EducationSection />
                    <SectionContentGrid>
                        <WorkExperienceSection />
                        <AdditionalSkillsSection />
                    </SectionContentGrid>
                </div>
            </div>
        </div>
    );
}
