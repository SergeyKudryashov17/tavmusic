import { SectionPropsType } from "../SectionPropsType";
import './Section.scss';

export const Section = ({ children }: SectionPropsType) => {
    return (
        <section className="Section">
            { children }
        </section>
    )
}