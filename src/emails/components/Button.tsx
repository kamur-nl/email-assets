import * as React from "react";
import { Button as EmailButton, ButtonProps as EmailButtonProps } from "@react-email/components";

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "danger"
        | "success"
        | "warning";
    outlined?: boolean;
}

const base =
    "px-3 py-2.5 inline-block text-subtitle-4 duration-300 border-1 border-transparent outline-4 outline-transparent cursor-pointer";
const disabled =
    "disabled:bg-amber-grey-300 disabled:text-amber-grey-600 disabled:pointer-events-none";

const styles = {
    primary:
        "bg-top-purple-100 text-primary-white hover:bg-top-purple-200 focus:outline-top-purple-50/20",
    secondary:
        "bg-primary-black text-amber-grey-50 hover:bg-amber-grey-800 focus:outline-primary-black/20",
    tertiary:
        "!border-amber-grey-400 text-amber-grey-700 hover:bg-sand-200 hover:border-amber-grey-600 hover:text-amber-grey-900 focus:outline-primary-black/20",
    danger:
        "bg-rose-700 text-rose-50 hover:bg-rose-800 focus:outline-rose-700/20",
    success:
        "bg-emerald-700 text-emerald-50 hover:bg-emerald-800 focus:outline-emerald-700/20",
    warning:
        "bg-amber-700 text-amber-50 hover:bg-amber-800 focus:outline-amber-700/20",

    outline: {
        danger:
            "bg-transparent !border-rose-700 text-rose-800 hover:border-rose-800 hover:!bg-rose-700/10",
        success:
            "bg-transparent !border-emerald-700 text-emerald-800 hover:border-emerald-800 hover:!bg-emerald-700/10",
        warning:
            "bg-transparent !border-amber-700 text-amber-800 hover:border-amber-800 hover:!bg-amber-700/10",
    },
};

export default function Button({
    variant,
    className,
    outlined = false,
    children,
    ...props
}: ButtonProps & EmailButtonProps) {
    return (
        <EmailButton
            className={`
                        ${base} ${disabled}
                        ${className ? className : ""} 
                        ${variant ? styles[variant] : ""}
                        ${
                        outlined
                            ? (styles.outline?.[
                                variant as keyof typeof styles.outline
                            ] ?? "")
                            : ""
                        }
                    `}
            {...props}
        >
            {children}
        </EmailButton>
    );
}
