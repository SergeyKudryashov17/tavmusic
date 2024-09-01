import Slider from "react-slick";
import { SlickSliderPropsType } from "../SlickSliderPropsType";
import "slick-carousel/slick/slick.css";

export const SlickSlider = ({ settings, children }: SlickSliderPropsType) => {
    return (
        <Slider {...settings}>
            { children }
        </Slider>
    );
}