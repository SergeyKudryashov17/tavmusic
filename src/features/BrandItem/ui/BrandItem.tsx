import { IBrand } from "@/entities/Brand";
import { NavLink } from "react-router-dom";

export const BrandItem = (data: IBrand) => {
    return (
        <NavLink to={`/brand?id=${data.id}`}>
            <img src={data.picture} alt={data.title} />
        </NavLink>
    );
}