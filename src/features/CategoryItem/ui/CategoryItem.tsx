import { ICategory } from "@/entities/Category"
import { NavLink } from "react-router-dom";
import './CategoryItem.scss';

export const CategoryItem = ({ id, name, image }: ICategory) => {
    return (
        <NavLink to={`/category?id=${id}`} className="CategoryItem">
            <div className="CategoryItem__image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="CategoryItem__name">
                {name}
            </div>
        </NavLink>
    )
}