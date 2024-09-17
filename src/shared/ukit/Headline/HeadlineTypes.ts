import { CSSProperties } from "react"

export type HeadlinePropsType = {
    children: string | JSX.Element,
    view: HeadlineViews,
    style?: CSSProperties
}

export enum HeadlineViews {
    Page = 'page',
    Section = 'section'
}