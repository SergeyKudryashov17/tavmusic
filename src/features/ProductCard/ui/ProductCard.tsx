import { IProduct } from "@/entities/Product"
import Button, { ButtonSize } from "@/shared/ukit/Button";
import { NavLink } from "react-router-dom";
import './ProductCard.scss';

export const ProductCard = (data: IProduct) => {
    const { id, name, cost, image } = data;
    return (
        <div className="ProductCard ProductCard_centered">
            <div className="ProductCard__image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="ProductCard__info">
                <NavLink className="ProductCard__name" to={`/product?id=${id}`}>{name}</NavLink>
                <div className="ProductCard__cost">{cost} ₽</div>
            </div>
            <div className="ProductCard__footer">
                <Button size={ButtonSize.M} className="ProductCard__toCart">В корзину</Button>
            </div>
        </div>
    )
}