import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputArray from '../c_components/InputArray'




const Addpost = () => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = currentDate.toLocaleDateString("bn-BD",{timeZone:'Asia/Dhaka'},options)
  const catag = useSelector((state)=>state.category1_reducers.category1)
console.log("addpost",catag)

    const [title, settitle] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [desc, setdesc] = useState('')
    const [author, setauthor] = useState('')
    const [dlink, setdlink] = useState('')

    const upvid =()=>{


        let datas ={
            title:title,
            img:imgurl,
            description:desc,
            cat:catag,
            aut:author,
            dl:dlink,
            date
            
        }
        axios.post("/api/postarticle",datas);
        alert('submited')
    }



  return (
    <div>
       <div className="category grid grid-cols-1 max-w-[80%] m-[20px_auto]   md:gap-4">
        
        <InputArray/>
          
        </div>
      <div className="upload_book grid grid-cols-1  max-w-[80%] m-[20px_auto] gap-[10px]" >
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='Title' onChange={(e)=>settitle(e.target.value)} />
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='Author Name' onChange={(e)=>setauthor(e.target.value)}/>
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='imgurl' onChange={(e)=>setimgurl(e.target.value)} />
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='Article download link' onChange={(e)=>setdlink(e.target.value)}/>
        <textarea className='p-[10px] text-[15px] font-norma  h-[130px] md:h-[180px] rounded-[5px] border-[1px] border-[#bbbbbb] m-[8px_0px]' type="text" placeholder='Description' onChange={(e)=>setdesc(e.target.value)} /> 
        <button className='m-[10px_auto] w-[120px] p-[10px] bg-[#3388f7] rounded-[10px] text-[#ffffff] font-medium hover:bg-[#ffffff] hover:text-[#3388f7] hover:border-[1px] hover:border-[#3388f7]' onClick={upvid}>Upload vid</button>
      </div>
       
    </div>
  )
}

export default Addpost