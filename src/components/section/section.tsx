import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren> = ({ children }) => {
    return <section className="mb-5">{children}</section>;
};
