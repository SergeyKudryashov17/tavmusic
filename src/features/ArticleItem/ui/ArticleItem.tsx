import { IArticle } from "@/entities/Article";
import Button, { ButtonSize } from "@/shared/ukit/Button";
import { NavLink } from "react-router-dom";
import './ArticleItem.scss';

export const ArticleItem = (articleData: IArticle) => {
    const { id, title, description, image } = articleData;
    return (
        <div className="ArticleItem">
            <div className="ArticleItem__picture" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="ArticleItem__data">
                <div className="ArticleItem__title">{ title }</div>
                <div className="ArticleItem__desc">{ description }</div>
                <NavLink className="ArticleItem__link" to={`/blog?id=${id}`}>
                    <Button size={ButtonSize.M} className="ArticleItem__btn">Читать</Button>
                </NavLink>
            </div>
        </div>
    )
}