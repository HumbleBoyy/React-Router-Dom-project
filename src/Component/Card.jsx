import React from 'react'

const Card = ({text, pText, extraClass, pTextExtraClass, extraTextClass}) => {
  return (
    <div className={`flex items-center justify-center text-center bg-[#FFFFFF]  ${extraClass} border  flex-col`}>
        <p className={`${pTextExtraClass} font-bold text-[#9FA2B4]`}>{pText}</p>
      <h2 className={`${extraTextClass} font-bold text-[40px]`}>{text}</h2>
    </div>
  )
}

export default Card
