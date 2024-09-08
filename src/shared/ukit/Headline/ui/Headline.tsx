import { HeadlinePropsType } from "../HeadlineTypes";
import './Headline.scss';

export const Headline = ({ children, view }: HeadlinePropsType): JSX.Element => {
    return (
        <div className={`Headline Headline_${view}`}>
            { children }
        </div>
    )
}