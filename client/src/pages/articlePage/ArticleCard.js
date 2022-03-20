import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({title,imgurl,id,date,author,category,link}) => {
  return (
    <>

        <div className="arti_container grid  bg-white grid-cols-[1fr] md:grid-cols-[1fr_2fr] lg:max-w-[75%] 2xl:max-w-[55%] rounded-[7px] m-[20px_auto] shadow-[0px_0px_2px_0px_#9793938c] hover:transform-[translateY(-3px)] hover:rounded-[0px_13px_8px_0px_#e3dfdf] hover:transition-[0.30s]">
          <div className="arti_imge md:max-w-[335px] max-w-[100%] p-0 max-h-[219px] md:p-[15px]">
            <img className='w-full h-full rounded-[5px_5px_0px_0px] ' src={imgurl} alt={title} />
          </div>
          <div className="info md:p-[8px]">
          <div className="cat m-[8px_0px_0px_12px]  flex ">
            {category.map(d=><p className='p-[0px_10px] text-[1rem] text-[#ffffff] mr-[10px] bg-rose-600 rounded-[15px] '>{d}</p>)}
          </div>
          <div className="arti_info p-[5px_12px_12px_12px]">
            <p className='arti_title leading-[30px] font-extrabold'>{title}</p>
            <p className='text-[1rem] font-semibold pt-[5px]'>লেখক: {author}</p> 
            <p className='font-semibold text-[.85rem] m-[5px_0px]'>তারিখ: {date}</p> 
            <Link to={`${id}`}> 
              <a className='arti_button bg-[#3894eb] p-[5px_10px]  text-white rounded-[5px] text-[1rem] mr-[5px]'>বিস্তারিত</a> 
            </Link> 
            <a className='arti_button bg-[#3894eb] p-[5px_10px]  text-white rounded-[5px] text-[1rem]' href={link} >ডাউনলোড</a>         
          </div>  
          </div>
         
          
        </div>

     
    </>
  )
}

export default ArticleCard