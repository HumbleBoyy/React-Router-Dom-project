import React from 'react'
import Card from '../Component/Card'

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
    </div>
  )
}

export default Home
