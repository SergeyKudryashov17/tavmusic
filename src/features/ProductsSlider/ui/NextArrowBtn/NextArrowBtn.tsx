import { NextArrowIcon } from "@/shared/icons";
import { arrowPropsType } from "../../types/arrowPropsType";

export const NextArrowBtn = (props: arrowPropsType) => {
    const { style, onClick } = props;
    const styleObj = style ?? null;
    return (
        <div
            className="ProductsSlider__arrow ProductsSlider__arrow_next"
            style={{ ...style }}
            onClick={onClick}
        >
            <NextArrowIcon />
        </div>
    );
}