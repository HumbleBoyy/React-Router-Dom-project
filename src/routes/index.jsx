import { Route, Routes } from "react-router-dom"
import {Contact, NotFound, Overview, Tickets, Ideas, Agents, Articles, Settings, Subscription} from "../pages/index"
import { PATH } from "../Hooks/usePath"

const PagesRoute = () => {
    const pages = [
        {
            id:1,
            path:PATH.home,
            element:<Overview/>
        },
        {
            id:2,
            path:PATH.tickets,
            element:<Tickets/>
        },
        {
            id:3,
            path:PATH.ideas,
            element:<Ideas/>
        },
        {
            id:4,
            path:PATH.contacts,
            element:<Contact/>
        },
        {
            id:5,
            path:PATH.agents,
            element:<Agents/>
        },
        {
            id:6,
            path:PATH.articles,
            element:<Articles/>
        },
        {
            id:7,
            path:PATH.settings,
            element:<Settings/>
        },
        {
            id:8,
            path:PATH.subsciption,
            element:<Subscription/>
        },
        {
            id:9,
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
