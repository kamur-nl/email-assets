import * as React from "react";
import { Button as EmailButton, ButtonProps as EmailButtonProps } from "@react-email/components";

export interface ButtonProps {
    children: React.ReactNode;
    style?: object;
    variant:
        | "primary"
        | "secondary"
        | "tertiary"
        | "danger"
        | "success"
        | "warning";
}

const baseStyle: React.CSSProperties = {
    padding: "10px 12px",
    display: 'inline-block',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    transitionDuration: '300ms',
    borderWidth: '1px',
    borderColor: 'transparent',
    outlineWidth: '4px',
    outlineColor: 'transparent',
    cursor: 'pointer',
};

const styles: Record<ButtonProps["variant"], React.CSSProperties> = {
    primary: {
        backgroundColor: '#5b18a6', 
        color: '#ffffff',
    },
    secondary: {
        backgroundColor: '#000',
        color: '#ffffff',
    },
    tertiary: {
        borderColor: '#ada59d',
        color: '#47423c',
    },
    danger: {
        backgroundColor: '#be123c',
        color: '#fff1f2',
    },
    success: {
        backgroundColor: '#047857',
        color: '#ecfdf5',
    },
    warning: {
        backgroundColor: '#b45309',
        color: '#fffbeb',
    },
};

export default function Button({
    variant,
    style,
    children,
    ...props
}: ButtonProps & EmailButtonProps) {
    return (
        <EmailButton
            style={{ ...baseStyle, ...styles[variant], ...style }}
            {...props}
        >
            {children}
        </EmailButton>
    );
}
