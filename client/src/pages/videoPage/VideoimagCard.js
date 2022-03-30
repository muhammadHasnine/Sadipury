import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import getVideoId from 'get-video-id';
const VideoimagCard = ({title,imgurl,id,category,url}) => {
  const [like, setlike] = useState('')
  const [view, setview] = useState('')
  const [date, setdate] = useState('')
  console.log(date)
  const currentDate = new Date(date);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const datee =currentDate.toLocaleDateString("bn-BD",{timeZone:'Asia/Dhaka'},options)
  console.log("datee",datee)
  async function getvideo (){

    // const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'

    return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=${getVideoId(url).id}&key=AIzaSyCEbpp-JTqX-2xe7alvbySKFX06Q4aZmU8`).then(data => data.json()).then(list => list.items);

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
      setdate(item.snippet.publishedAt)
      // return item.snippet.title
      return item
    })
  }
  return (
    <>
    <Link to={`/watch/${getVideoId(url).id}`} className='link_to_detail no-underline text-[black]'>
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
          <div className='flex gap-2'>
          <p>{like}</p>
          <p>{view}</p>
          </div>
          <p>{datee}</p>
        </div>
        </div>
        
      </div>
      </Link>
    </>
  )
}

export default VideoimagCard
