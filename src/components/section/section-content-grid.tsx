import { FC, PropsWithChildren } from "react";

export const SectionContentGrid: FC<PropsWithChildren> = ({ children }) => {
    return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
};
