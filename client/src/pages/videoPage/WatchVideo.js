import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetch_video_datas} from '../../redux/actions/Actions'
import VideoPlayer from 'react-player'
import { useSelector } from 'react-redux'
import getVideoId from 'get-video-id';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WatchVideo = () => {
  const watch_video_data = useSelector((state)=>state.video_reducers.videos)
  const dispatch = useDispatch()
  const {id} = useParams()
  const [like, setlike] = useState('')
  const [view, setview] = useState('')
  const [descrip, setdescrip] = useState('')
 
  useEffect(()=>{
    dispatch(fetch_video_datas())
  },[])





  const newData = watch_video_data.filter((c)=>getVideoId(c.url).id===id)
  console.log("newdataofvideodetailpage",newData)

  async function getvideo (){

    // const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'

    return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=${id}&key=AIzaSyCEbpp-JTqX-2xe7alvbySKFX06Q4aZmU8`).then(data => data.json()).then(list => list.items);

}
const [videoData, setvideoData] = useState([])

  console.log("videodata",videoData)
console.log('vidocard',videoData)
useEffect(()=>{
    getvideo().then(data => {setvideoData(transformData(data))}).catch();

  },[])

  const transformData =(data)=>{
    return data.map((item)=>{
  
      setlike(item.statistics.likeCount)
      setview(item.statistics.viewCount)
      setdescrip(item.snippet.description)
      // return item.snippet.title
      return item
    })
  }
  return (
    <>
      {newData.map((c)=>(
        <>     
         <div className='watch_video_container bg-[#ffffff] p-[0rem]  md:p-[2rem_4rem] w-[95%] md:w-[85%] rounded-[8px] m-[30px_auto] shadow-[2px 1px 8px 0px #e3dfdf]'>
            <div className='player-wrapper relative  pt-[56.25%] '>
                  <VideoPlayer controls
                    className='react-player absolute  top-0 left-0'
                    url={c.url}
                    width='100%'
                    height='100%'
                  />
            </div>
            <div className="watch_video_info p-[1.5rem] md:p-[0rem] mt-[2rem]">
              <div className="info_title flex flex-wrap justify-between">
                  <div className="titleview w-[400px] mb-5">
                      <h3 className='font-bold text-[1.1em]'>{c.title}</h3>
                      <div className="youtubedata flex gap-[20px]">
                        <p className='text-[15px]'><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> {view}</p>
                        <p className='text-[15px]'><FontAwesomeIcon icon="fa-solid fa-eye" /> {like}</p>
                      </div>
                  </div>
                  <div className="shear w-[150px] flex gap-4">
                      <p className='text-[18px]'>???????????????</p>
                      <img src="img/3.png" alt="icon" />
                  </div>
              </div>
              <hr />
              <div className={descrip ? "info_desc pt-[2rem] mb-[2rem]":null}>
                <p>{descrip}</p>
              </div>
            </div>  
        </div>
        </>
      ))}
     
    </>
  )
}

export default WatchVideo