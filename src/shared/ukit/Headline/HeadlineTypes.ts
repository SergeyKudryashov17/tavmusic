export type HeadlinePropsType = {
    children: string | JSX.Element,
    view: HeadlineViews
}

export enum HeadlineViews {
    Page = 'page',
    Section = 'section'
}