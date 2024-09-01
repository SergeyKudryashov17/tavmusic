import { NavLinkRenderProps } from "react-router-dom";

export function getClassName({ isActive }: NavLinkRenderProps) {
    return `Navigation__link ${isActive && 'Navigation__link_active'}`;
}