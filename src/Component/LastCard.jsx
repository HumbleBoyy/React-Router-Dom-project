import React from 'react'

const LastCard = ({children, extraClassName}) => {
  return (
    <div className={`w-[546px] ${extraClassName} rounded-md h-[300px] p-2 bg-[#ffff]`}>
      {children}
    </div>
  )
}

export default LastCard
