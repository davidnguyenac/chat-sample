/// <reference types="react" />
export declare const IconButton: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material/IconButton").IconButtonClasses> | undefined;
    color?: "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
    disabled?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    edge?: false | "start" | "end" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "tabIndex" | "color" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge" | "size"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    isOpen?: boolean | undefined;
}, {}, {}>;
