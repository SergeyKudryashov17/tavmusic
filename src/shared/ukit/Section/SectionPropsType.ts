export type SectionPropsType = {
    children: JSX.Element | JSX.Element[],
    view?: SectionViews
}

export enum SectionViews {
    Default = 'default',
    Gray = 'gray'
}