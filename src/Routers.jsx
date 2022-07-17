import { useRoutes } from "react-router-dom"

import { CocaCola } from "./pages/Cocacola"
import { Main } from "./components/Mains/index"
import { Cursos } from "./pages/Cursos"

export const Routers = () => {
    return useRoutes([
        { path: "/", element: <Main /> },
        { path: "/pages/Cocacola", element: <CocaCola /> },
        { path: "/pages/Cursos", element: <Cursos /> },
    ]
    )
}