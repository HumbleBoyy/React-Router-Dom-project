import React from 'react'
import Card from '../Component/Card'
import LastCard from '../Component/LastCard'
import { Link, NavLink } from 'react-router-dom'
import { activeCheck, inactiveCheck } from '../assets/images'

const Home = () => {
  return (
    <div className="flex flex-col h-full p-4 gap-2">
      <div className='flex justify-between items-center'>
        <Card text={"60"} extraClass={"!w-[258px] !h-[135px]"} pText={"Unresolved"}/>
        <Card text={"16"} extraClass={"!w-[258px] !h-[135px]"} pText={"Overdue"} pTextExtraClass={"!text-[#3751FF]"} extraTextClass={"!text-[#3751FF]"}/>
        <Card text={"43"} extraClass={"!w-[258px] !h-[135px]"} pText={"Open"}/>
        <Card text={"64"} extraClass={"!w-[258px] !h-[135px]"} pText={"On Hold"}/>
      </div>

      <div className='flex items-center'>
        <div className='bg-[#ffff] h-[450px] border  w-[900px] p-4'>
           <h2 className='font-bold text-[20px]'>Today’s trends</h2>
           <div className='flex justify-between items-center mt-2'>
              <p className='font-semibold text-[12px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</p>
              <div className='flex justify-between items-center gap-5'>
                 <h2 className='text-[12px] text-[#9FA2B4] flex items-center gap-2'><span className='bg-[#3751FF] h-[2px] w-[16px]'></span>Today</h2>
                 <h2 className='text-[12px] text-[#9FA2B4] flex items-center gap-2'><span className='bg-[#9FA2B4] h-[2px] w-[16px]'></span>Yesterday</h2>
              </div>
           </div>
        </div>
        <div>
        <Card text={"449"} pText={"Resolved"} extraClass={"!rounded-r-md !w-[300px] !h-[90px]"}/>
        <Card text={"426"} pText={"Received"} extraClass={"!rounded-r-md !w-[300px] !h-[90px]"}/>
        <Card text={"33m"} pText={"Average first response time"} extraClass={"!rounded-r-md !w-[300px] !h-[90px]"}/>
        <Card text={"3h 8m"} pText={"Average response time"} extraClass={"!rounded-r-md !w-[300px] !h-[90px]"}/>
        <Card text={"94%"} pText={"Resolution within SLA"} extraClass={"!rounded-r-md !w-[300px] !h-[90px]"}/>
        </div>
      </div>


        <div className='flex items-center justify-between'>
              <LastCard className={"p-10"}>
          <div className='flex justify-between items-center p-3'>
             <div className='flex flex-col gap-2'>
                 <h2 className='font-bold text-[20px]'>Unresolved tickets</h2>
                 <p className='text-[12px]'><span className='text-[#9FA2B4]'>Group:</span>Support</p>
             </div>
             <Link to={"#"} className={"text-[#3751FF]"}>View details</Link>
          </div>

          <div className='flex justify-between items-center border-b p-3'>
             <h2 className='text-[15px]'>Waiting on Feature Request</h2>
             <p className='text-[15px] text-[#9FA2B4]'>4238</p>
          </div>
          <div className='flex justify-between items-center border-b p-3'>
             <h2 className='text-[15px]'>Awaiting Customer Response</h2>
             <p className='text-[15px] text-[#9FA2B4]'>1005</p>
          </div>
          <div className='flex justify-between items-center border-b p-3'>
             <h2 className='text-[15px]'>Awaiting Developer Fix</h2>
             <p className='text-[15px] text-[#9FA2B4]'>914</p>
          </div>
          <div className='flex justify-between items-center p-3'>
             <h2 className='text-[15px]'>Pending</h2>
             <p className='text-[15px] text-[#9FA2B4] p-1'>281</p>
          </div>
              </LastCard>


              <LastCard className={"p-10"}>
          <div className='flex justify-between items-center p-3'>
             <div className='flex flex-col gap-2'>
                 <h2 className='font-bold text-[20px]'>Tasks</h2>
                 <p className='text-[12px]'><span className='text-[#9FA2B4]'>Today</span></p>
             </div>
             <Link to={"#"} className={"text-[#3751FF]"}>View alll</Link>
          </div>

          <div className='flex justify-between items-center border-b p-3'>
             <h2 className='text-[15px] text-[#C5C7CD]'>Create new task</h2>
             <button className='text-[20px] bg-slate-300 w-[30px] h-[30px] flex items-center justify-center text-center rounded-md text-[#000]'>+</button>
          </div>
          <div className='flex justify-between items-center border-b p-3'>
             <div className='flex items-center gap-2'>
             <img src={inactiveCheck} alt="InactiveCheck" />
             <h2 className='text-[15px]'>Finish ticket update</h2>
             </div>
             <button className='text-[15px] text-[#ffff] bg-yellow-500 p-1 w-[74px] rounded-md uppercase'>Urgent</button>
          </div>
          <div className='flex justify-between items-center border-b p-3'>
             <div className='flex items-center gap-2'>
             <img src={inactiveCheck} alt="InactiveCheck" />
             <h2 className='text-[15px]'>Create new ticket example</h2>
             </div>
             <button className='text-[15px] text-[#ffff] bg-green-500 p-1 w-[74px] rounded-md uppercase'>New</button>
          </div>
          <div className='flex justify-between items-center p-3'>
             <div className='flex items-center gap-2'>
             <img src={activeCheck} alt="InactiveCheck" />
             <h2 className='text-[15px]'>Update ticket report</h2>
             </div>
             <button className='text-[15px] text-[#9FA2B4] bg-slate-100 p-1 w-[74px] rounded-md uppercase'>Default</button>
          </div>
          </LastCard>
        </div>
    
    </div>
  )
}

export default Home
