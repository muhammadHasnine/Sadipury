import NavVid from './NavVid'
import VideoimagCard from './VideoimagCard'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_video_datas } from '../../redux/actions/Actions'
import { useSearch } from '../../hooks/useSearch'

const VidCompon = () => {
  const dispatch = useDispatch()
  const videos_data = useSelector((state)=>state.video_reducers.videos)
  console.log("videos_data",videos_data)
  const [all, setall] = useState([])
  console.log("all",all)
  const [search, setsearch] = useState(null)
  const num = [1,2];

  useEffect(()=>{
    dispatch(fetch_video_datas())
  },[])

  useEffect(()=>{
    setall([...videos_data])
  },[videos_data])

  const handelFilterCategory = (category) =>{
    console.log(category)
    if(category === "সকল"){
      return  setall(videos_data) 
        
    }
    const newarray = videos_data.filter((f)=>f.category.includes(category));
    setall(newarray)
    console.log(newarray)
  }
const [click, setclick] = useState(false);

const vid_nav_ham =()=>{
  setclick(!click)
}

  return (
    <>
    <div className="headtitle relative ">
    <p className="text-2xl m-[20px_0px_0px_40px] inline-block  font-semibold after:content-[''] after:absolute after:top-[38%] after:left-6 after:bg-slate-500 after:w-[5px] after:h-[30px] after:rounded-[5px]">ভিডিও পাতা</p>
  </div>
    <div className='display grid grid-cols-[1fr] md:grid-cols-[1fr_5fr]'>
      <button onClick={vid_nav_ham} className="nav_vid_btn flex justify-between items-center w-[89%] block md:hidden md:w-[95%] h-[50%] m-[20px_auto] rounded-[5px] shadow-[0px_0px_2px_0px_#9793938c]  p-[0px_20px] border-none bg-white">
      <p>ক্যাটাগরি</p><p>&#x25BC;</p>
      </button>
      <div className={click ? "vid_nav_active md: block" : "vid_nav hidden md:block" }>
      <input
            type="text"
            placeholder="Enter name to be searched"
            className="searchbar p-[3px] rounded-full  text-[red]"
            onChange={(e) =>setsearch(e.target.value)}
          />
      <NavVid filterfunction ={handelFilterCategory} />
      </div>
        
        <div className='video_img_body p-[20px] grid gap-[20px] md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {useSearch(all,search,num).map((c)=>{
            return  <VideoimagCard title={c.title} imgurl={c.imgurl} id = {c._id} category={c.
              category} url = {c.url}/>})}    
        </div>
   </div>
   </>
  )
}

export default VidCompon