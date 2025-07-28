import { PERSONAL_DETAILS } from "@/config/config";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Header = () => {
    const { name, title, email, phone, location, links } = PERSONAL_DETAILS;

    return (
        <div className="bg-slate-900 text-white p-4 not-print:rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold mb-1">{name}</h1>
                    <p className="text-slate-300">{title}</p>
                </div>
                <div className="text-xs space-y-1">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            <span>{email}</span>
                        </div>
                        {phone && (
                            <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                <span>{phone}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-3 h-3" />
                            <span>{links.linkedin}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            <span>{links.github}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            <span>{links.website}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
