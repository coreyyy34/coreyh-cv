import { LucideIcon } from "lucide-react";
import { FC } from "react";

type SectionTitle = {
    title: string;
    icon: LucideIcon;
};

export const SectionTitle: FC<SectionTitle> = ({ title, icon: Icon }) => {
    return (
        <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-1">
            <Icon className="w-4 h-4 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        </div>
    );
};
