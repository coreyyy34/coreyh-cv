import { EDUCATION } from "@/config/config";
import { Calendar, GraduationCap } from "lucide-react";
import { Section, SectionContentGrid, SectionTitle } from "../section";
import { Badge } from "../ui/badge";

export const EducationSection = () => {
    return (
        <Section>
            <SectionTitle title="Education" icon={GraduationCap} />
            <SectionContentGrid>
                {EDUCATION.map((education, education_idx) => (
                    <div
                        key={education_idx}
                        className="border-l-2 border-slate-200 pl-4"
                    >
                        <div className="flex flex-col mb-1">
                            <h3 className="font-semibold text-slate-800 text-sm">
                                {education.title}
                            </h3>
                            <p className="text-slate-600 text-xs">
                                {education.location}
                            </p>
                            {education.key_points.map(
                                (key_point, key_point_idx) => (
                                    <p
                                        key={key_point_idx}
                                        className="text-xs text-slate-500"
                                    >
                                        {key_point}
                                    </p>
                                ),
                            )}
                            <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                <Calendar className="w-3 h-3" />
                                <span>Expected May 2025</span>
                            </div>
                        </div>
                        {education.relevant_coursework && (
                            <div className="mt-2">
                                <h4 className="font-medium text-slate-700 mb-1 text-xs">
                                    Relevant Coursework:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {education.relevant_coursework.map(
                                        (coursework, coursework_idx) => (
                                            <Badge
                                                key={coursework_idx}
                                                variant="outline"
                                                className="text-xs py-0 px-1"
                                            >
                                                {coursework}
                                            </Badge>
                                        ),
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </SectionContentGrid>
        </Section>
    );
};
