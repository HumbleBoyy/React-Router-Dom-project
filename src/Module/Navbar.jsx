import { NavLink } from "react-router-dom"
import { AgentsIcon, Articles, ContactsIcon, IdeasIcon, LogoIcons,  OverviewIcon, Settings, Subscription, TicketsIcon } from "../assets/icons"
import { PATH } from "../Hooks/usePath"

export const navbarList = [
  {
    id:1,
    title:"Overview",
    path:PATH.home,
    icon:<OverviewIcon/>
  },
  {
    id:2,
    title:"Tickets",
    path:PATH.tickets,
    icon:<TicketsIcon/>
  },
  {
    id:3,
    title:"Ideas",
    path:PATH.ideas,
    icon:<IdeasIcon/>
  },
  {
    id:4,
    title:"Contacts",
    path:PATH.contacts,
    icon:<ContactsIcon/>
  },
  {
    id:5,
    title:"Agents",
    path:PATH.agents,
    icon:<AgentsIcon/>
  },
  {
    id:6,
    title:"Articles",
    path:PATH.articles,
    icon:<Articles/>
  },
  {
    id:7,
    title:"Settings",
    path:PATH.settings,
    icon:<Settings/>
  },
  {
    id:8,
    title:"Subscription",
    path:PATH.subsciption,
    icon:<Subscription/>
  },
]

const Navbar = () => {

  return (
    <div className='w-[20%] bg-[#363740] h-[100vh] overflow-y-auto p-4'>
       <div className="flex items-center gap-2 py-10 px-4">
         <LogoIcons/>
         <strong className="text-[20px] text-[#A4A6B3] font-semibold">Dashboard Kit</strong>
       </div>

      <nav className="py-5 px-2">
         {navbarList.map(item => (
          <NavLink key={item.id} to={item.path} className={"flex items-center p-5 relative gap-2 text-[#A4A6B3]"}>
             {item.icon}
             <span className="text-[16px] font-medium">{item.title}</span>
          </NavLink>
         ))}
      </nav>
    </div>
  )
}

export default Navbar
