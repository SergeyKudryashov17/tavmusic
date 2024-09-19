import { useLocation } from "react-router-dom";

export function getIDfromURL(): string | null {
    const location = useLocation();
    return new URLSearchParams(location.search).get("id");
}