import Header from "./Module/Header"
import Navbar from "./Module/Navbar"
import PagesRoute from "./routes"

const App = () => {
  return (
    <div className="flex">
      <Navbar/>
      <div className="w-[80%] h-[100vh] overflow-y-auto flex flex-col bg-[#F7F8FC]">
        <Header/>
        <PagesRoute/>
      </div>
    </div>
  )
}

export default App
