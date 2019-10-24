import { ReactNode } from "react";
interface IProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "srOnly" | "inherit" | undefined;
    className?: string;
    children: ReactNode;
}
export declare const MyTypography: ({ variant, className, children }: IProps) => JSX.Element;
export {};
