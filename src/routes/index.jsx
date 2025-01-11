import { Route, Routes } from "react-router-dom"
import {Home, About, Contact, NotFound, Info} from "../pages/index"

const PagesRoute = () => {
    const pages = [
        {
            id:1,
            path:"/",
            element:<Home/>
        },
        {
            id:2,
            path:"/about",
            element:<About/>
        },
        {
            id:3,
            path:"/contact",
            element:<Contact/>
        },
        {
            id:4,
            path:"/info",
            element:<Info/>
        },
        {
            id:5,
            path:"*",
            element:<NotFound/>
        },
    ]
  return (
    <Routes>
        {pages.map(({path, element, id}) => <Route key={id} path={path} element={element}/>)}
    </Routes>
  )
}

export default PagesRoute
