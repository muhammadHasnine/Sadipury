import React from 'react'

const BooksNav = ({handarti,handarti2}) => {
  const cat_array = ["সকল","তাওহীদ","আকীদা","সালাত","মাসআলা","রাদ্দ"]
  const cat_array2 = ["লিখিত","অনুবাদিত","সম্পাদিত"]

  return (
    <>
      <div className='arti_nava list-none cursor-pointer p-4 w-[80%]  rounded-[5px] shadow-[0px_0px_3px_1px_#e5e5e5] flex flex-col m-[20px_auto] '>
        {cat_array.map((c)=>{
          return <a onClick={()=>handarti(c)} >{c}</a>
        })}
      </div>
      <div className="arti_nava2 arti_nava list-none cursor-pointer p-4 w-[80%]  rounded-[5px] shadow-[0px_0px_3px_1px_#e5e5e5] flex flex-col m-[20px_auto] ">
        {cat_array2.map((b)=>{
          return <a onClick={()=>handarti2(b)}>{b}</a>
        })}
      </div>
    </>
  )
}

export default BooksNav