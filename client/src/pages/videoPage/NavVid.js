import React from 'react'
const NavVid = ({filterfunction}) => {

  const cat_array = ["সকল","তাওহীদ","আকীদা","সালাত","মাসআলা","রাদ্দ"]

  return (
    <>

      <div className="nav_vid list-none cursor-pointer p-[1rem] w-[95%] xl:w-[15rem] h-[26rem] rounded-[5px] shadow-[0px_0px_3px_1px_#e5e5e5] flex flex-col md:m-[20px_auto] m-[0px_auto] xl:m-[20px_50px]">
        <h2>Categorys</h2>
        <hr />
        {cat_array.map((c)=>{
          return <a className='p-[1rem_2rem] hover:bg-[#f7ecf1] transition-[1s] ' onClick={()=>filterfunction(c)} >{c}</a>
        })}
      </div>
    </>
  )
}

export default NavVid