import { PrevArrowIcon } from "@/shared/icons";
import { arrowPropsType } from "../../types/arrowPropsType";

export const PrevArrowBtn = (props: arrowPropsType) => {
    const { style, onClick } = props;
    const styleObj = style ?? null;
    return (
        <div
            className="ProductsSlider__arrow ProductsSlider__arrow_prev"
            style={{ ...style }}
            onClick={onClick}
        >
            <PrevArrowIcon />
        </div>
    );
}