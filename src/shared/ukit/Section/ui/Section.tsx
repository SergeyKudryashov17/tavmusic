import { SectionPropsType, SectionViews } from "../SectionPropsType";
import './Section.scss';

export const Section = ({ children, view = SectionViews.Default }: SectionPropsType) => {
    return (
        <section className={`Section ${view && 'Section_' + view}`}>
            { children }
        </section>
    )
}