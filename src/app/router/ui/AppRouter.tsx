import { memo } from "react";
import { routers } from "../data/routers";
import { Routes, Route, RouteObject } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routers.map((route: RouteObject) => {
                return (
                    <Route 
                        key={route.id}
                        path={route.path}
                        element={route.element}
                    />
                )
            })}
        </Routes>
    )
}

export default memo(AppRouter);