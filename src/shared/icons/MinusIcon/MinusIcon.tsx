import { iconType } from "../iconType";

export const MinusIcon = ({ className, style, width = 20, height = 20, fill = "#141416" }: iconType) => {
    return (
        <svg 
            className={className} 
            style={{ ...style }}
            width={width} 
            height={height} 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M16 10C16 10.553 15.952 11 15.399 11H4.601C4.049 11 4 10.553 4 10C4 9.447 4.049 9 4.601 
                9H15.4C15.952 9 16 9.447 16 10Z" 
                fill={fill} 
            />
        </svg>
    )
}