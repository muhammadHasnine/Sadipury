import React from 'react'
import {Link} from 'react-router-dom'
const VideoimagCard = ({title,imgurl,id,category}) => {
  return (
    <>
    <Link to={`/watch/${id}`} className='link_to_detail no-underline text-[black]'>
      <div className="h-full w-full rounded  shadow-[2px_1px_8px_0px_#e3dfdf] hover:translate-y-[-5px] hover:shadow-[0px_13px_8px_0px_#e3dfdf] transition-[0.5s]">
        <div className="video_img md:p-[10px]">
          
          <img className='w-[100%] h-[150px]  md:rounded-[10px]' src={imgurl} alt={title} />
        </div>
        <div className="video_info p-[0.75rem_0.75rem_1rem_0.75rem]">
          <div className='flex flex-wrap'> {category.map(c=><p className='bg-red-600 rounded-[10px] text-slate-100 text-[1rem] p-[0px_10px] mr-[5px] mt-[5px]'>{c}</p>)}</div>
        </div>
        <div className="div">
        <div className="title h-[50px]">
          <h3 className='p-[15px_0.75rem] text-[1.2rem] font-extrabold'>{title}</h3>
         </div>
        </div>
        <div className="div p-[0.75rem_0.75rem_1rem_0.75rem]">
        <div className="youtubeData flex justify-between mt-[5px] md:mt-[30px] ">
          <p>17-03-2022</p>
          <p>420 view</p>
        </div>
        </div>
        
      </div>
      </Link>
    </>
  )
}

export default VideoimagCard
