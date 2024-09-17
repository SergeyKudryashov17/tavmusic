import { IArticle } from "@/entities/Article";
import { ArticleListPropsType } from "../ArticleListPropsType";
import ArticleItem from "@/features/ArticleItem";
import Button, { ButtonSize } from "@/shared/ukit/Button";
import { NavLink } from "react-router-dom";
import './ArticleList.scss';

export const ArticleList = ({ list, visibleCount, view }: ArticleListPropsType) => {
    return (
        <div className="ArticleList">
            <div className={`ArticleList__container ArticleList__container_${view}`} data-count={visibleCount}>
                { list.map((article: IArticle, index: number) => {
                    return index < visibleCount
                        ? <ArticleItem {...article} />
                        : '';
                })}
            </div>
            <div className="ArticleList__linkWrap">
                <NavLink className="ArticleList__link" to="/blog">
                    <Button 
                        size={ButtonSize.L}
                        isCenter={true}
                    >
                        Перейти к статьям
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}