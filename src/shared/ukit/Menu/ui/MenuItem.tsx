import { NavLink } from "react-router-dom";
import { MenuItemType } from "../types";

export const MenuItem = (props: MenuItemType) => {
    const { label, link } = props;
    return (
        <NavLink to={link} className="Menu__link">
            {label}
        </NavLink>
    )
}