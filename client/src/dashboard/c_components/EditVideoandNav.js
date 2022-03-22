import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_video_datas } from '../../redux/actions/Actions'
import NavVid from '../../pages/videoPage/NavVid'
import EditvideoCard from './EditvieoCard'
import { useSearch } from '../../hooks/useSearch'


const EditVideoandNav = () => {
  const videos_data = useSelector((state)=>state.video_reducers.videos)
  const dispatch = useDispatch();
  const [all, setall] = useState([])
  const [search, setsearch] = useState(null)
  const num = [1,2];

  console.log("video",videos_data)
  

  useEffect(()=>{
  dispatch(fetch_video_datas())
  },[])

  useEffect(()=>{
    setall([...videos_data])
  },[videos_data])


  const handelarticale = (match) =>{
    console.log(match)
    if(match==='সকল'){
      return setall(videos_data);
    }
    const newarray = videos_data.filter((nar)=>nar.category.includes(match));
    setall(newarray)
  }

const [click, setClick] = useState(false)
const hamberger = () =>{
  setClick(!click)
}

  return (
    <>
         
    <div className='display grid grid-cols-[1fr] md:grid-cols-[1fr_5fr]'>
      <button onClick={hamberger} className="nav_vid_btn flex justify-between items-center w-[89%] block md:hidden md:w-[95%] h-[50%] m-[20px_auto] rounded-[5px] shadow-[0px_0px_2px_0px_#9793938c]  p-[0px_20px] border-none bg-white">
      <p>ক্যাটাগরি</p><p>&#x25BC;</p>
      </button>
      <div className={click ? "vid_nav_active md: block" : "vid_nav hidden md:block" }>
      <input
            type="search"
            placeholder="Enter name to be searched"
            className="searchbar p-[3px] rounded-full  text-[red]"
            onChange={(e) =>setsearch(e.target.value)}
          />
          <NavVid filterfunction = {handelarticale}/>
       </div>
       <div className='video_img_body p-[20px] grid gap-[20px] md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {useSearch(all,search,num).map((c)=>{
            return  <EditvideoCard title={c.title} imgurl={c.imgurl} id = {c._id} category={c.
              category
              }/>})}    
        </div>
     
      
    </div>
    </>
   
  )
}

export default EditVideoandNav