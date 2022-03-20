import React from 'react'

const ArticleNav = ({handarti}) => {
  const cat_array = ["সকল","তাওহীদ","আকীদা","সালাত","মাসআলা","রাদ্দ"]

  return (
    <>

      <div className='arti_nava list-none flex flex-col md:m-[20px_auto] m-[0px_auto] cursor-pointer p-4 w-[90%] h-[416px] rounded-[5px] shadow-[0px_0px_3px_1px_#e5e5e5] '>
        {cat_array.map((c,b)=>{
          return <a className='p-[16px_32px] hover:bg-[#f7ecf1] hover:transition-[1s] ' key={b} onClick={()=>handarti(c)} >{c}</a>
        })}
      </div>
    </>
  )
}

export default ArticleNav