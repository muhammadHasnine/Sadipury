import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import InputArray from '../c_components/InputArray'
import getVideoId from 'get-video-id';

const UploadVideo = () => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = currentDate.toLocaleDateString("bn-BD",{timeZone:'Asia/Dhaka'},options)
  const catag = useSelector((state)=>state.category1_reducers.category1)


    const [title, settitle] = useState('')
    console.log("title",title)
    const [url, seturl] = useState('')
    console.log("url",url)
    const [imgurl, setimgurl] = useState('')
    console.log("imgurl =>",imgurl)
   

    async function getvideo (){

      // const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'
  
      return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=${getVideoId(url).id}&key=AIzaSyCEbpp-JTqX-2xe7alvbySKFX06Q4aZmU8`).then(data => data.json()).then(list => list.items);
  
  }

  const [videoData, setvideoData] = useState([])
  
    console.log('vidocard',videoData)
    useEffect(()=>{
        getvideo().then(data => {setvideoData(transformData(data))}).catch();

      },[url])




      // const  handler = (e)=>{
      // const titleref = titleRef.current.value;
      // const thumbref = thumbRef.current.value;

      // console.log('newtitle',titleref)
  
      //  settitle(titleref, ()=> console.log('new tittttt', title));
      //  setimgurl(thumbref);
      

      // }
      const upvid =()=>{
        
        let datas ={
            title:title,
            url:url,
            img:imgurl,
            cat:catag, 
        }
        console.log("uploaddata=>",datas)
        axios.post("/api/postvideo",datas);
        alert('submited')
    }
    const handleChange =(event) => {
      settitle(event.target.value)
    }
    const transformData =(data)=>{
      return data.map((item)=>{
    
        settitle(item.snippet.title)
        setimgurl(item.snippet.thumbnails.standard.url)
        console.log(title)
        // return item.snippet.title
        return item
      })
    }


  return (
    <div>
       <div className="category grid grid-cols-1 max-w-[80%] m-[20px_auto] md:gap-4">
        
        <InputArray/>
          
        </div>
        
      <div className="upload_video grid grid-cols-1  max-w-[80%] m-[20px_auto] gap-[5px]" >
        <p>Video Url</p>
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" onChange={(e)=>seturl(e.target.value)} />
      <div>
        
          <p>{title}</p>
          {/* <img src={d.snippet.thumbnails.standard.url} ‍/> */}
          {/* <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" defaultValue={d.snippet.title} ref={titleRef}  placeholder='title'  />
          <p>Video Thumbnil Url</p>
          <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text"  defaultValue={d.snippet.thumbnails.standard.url} ref={thumbRef} placeholder='imgurl' /> */}
          <img src={imgurl} />
          
      
      </div>
        
        {/* <input type="text" placeholder='category' onChange={(e)=>setcat(e.target.value)} />  */}
        {/* <textarea className='p-[10px] text-[15px] font-norma  h-[130px] md:h-[180px] rounded-[5px] border-[1px] border-[#bbbbbb] m-[8px_0px]'  type="text" placeholder='Description'  onChange={(e)=>setdesc(e.target.value)} />  */}
        <button className='m-[10px_auto] w-[120px] p-[10px] bg-[#3388f7] rounded-[10px] text-[#ffffff] font-medium hover:bg-[#ffffff] hover:text-[#3388f7] hover:border-[1px] hover:border-[#3388f7]' onClick={upvid}>Upload vid</button>
      </div>
    
    </div>
  )
}




export default UploadVideo