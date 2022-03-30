import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetch_video_datas } from '../../redux/actions/Actions'
import InputArray from '../../dashboard/c_components/InputArray'
import axios from 'axios'
import getVideoId from 'get-video-id';


const Editvideo = () => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = currentDate.toLocaleDateString("bn-BD",{timeZone:'Asia/Dhaka'},options)
  const {id} = useParams()
  const dispatch = useDispatch()
  const videos_data = useSelector((state)=>state.video_reducers.videos);
  const catag = useSelector((state)=>state.category1_reducers.category1)
  const [title, settitle] = useState('')
  const [url, seturl] = useState('')
  console.log("url",url)
  const [imgurl, setimgurl] = useState('')
  useEffect(()=>{
    dispatch(fetch_video_datas())
  },[]) 


  async function getvideo (){

    // const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'

    return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=${getVideoId(url).id}&key=AIzaSyCEbpp-JTqX-2xe7alvbySKFX06Q4aZmU8`).then(data => data.json()).then(list => list.items);

}

const [videoData, setvideoData] = useState([])
  
console.log('vidocard',videoData)
useEffect(()=>{
    getvideo().then(data => {setvideoData(transformData(data))}).catch();

  },[url])



  console.log(videos_data)
  const newdata = videos_data.filter((c)=>c._id === id)
  console.log("this is newdata",newdata)
  const update = (id) =>{
    const data ={
      ti:title,
      url:url,
      img:imgurl,
      id:id,
      cat:catag,
    }
    console.log("upload data =>",data)
    axios.put("/api/editvideo",data)
    alert("Updated")
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
      {
        newdata.map((d)=>{
          return (
            <>
              <div className="container w-[90%] m-[30px_auto] md:w-[85%]">
                  <div className="card grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl">
                    <div className="img_card md:p-[20px_0px_20px_20px] md:h-[100%]">
                      <img className='w-full h-full' src={d.imgurl} alt={d.title} />
                    </div>
                    <div className="info p-[20px]">
                      <div className="category flex flex-wrap">
                          {d.category.map((c)=>{
                        return <p className='p-[0px_10px] rounded-lg m-[0px_6px_6px_0px] text-[15px] text-white bg-[#f72d59d5]'>{c}</p>
                          })}
                        </div>
                      <div className="title_desc">
                          <p className='text-[25px] font-semibold'>{d.title}</p>    
                      </div>
                    </div>
                  </div>
                <div className="inputfrom mt-[50px] pb-[30px]">
                    <InputArray/>
                    <div className="inputs grid grid-cols-1 gap-3">
                        <input className='p-[6px] rounded border-[1px] border-[gray] outline-none' type="text" placeholder='Article Title' onChange={(e)=>seturl(e.target.value)}/>
                       
                        
                       
                    </div> 
                    <div className="btn w-[80px] m-[20px_auto]">
                        <button className='p-[10px_20px] bg-[#3888ff] text-white rounded-xl font-medium ' onClick={()=>update(d._id)}>Update</button>
                    </div>
                </div>
              </div>
            </>
          )
        })
      }   
      <p>{title}</p> 
      <img src={imgurl} />
    </div>
  )
}

export default Editvideo