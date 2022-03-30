import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetch_article_datas } from '../../redux/actions/Actions'
import InputArray from '../../dashboard/c_components/InputArray'
import axios from 'axios'

const Editarticle = () => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = currentDate.toLocaleDateString("bn-BD",{timeZone:'Asia/Dhaka'},options)
  const {id} = useParams()
  const dispatch = useDispatch()
  const articles_data = useSelector((state)=>state.article_reducers.articale);
  const catag = useSelector((state)=>state.category1_reducers.category1)
  const [newcatag, setnewcatag] = useState([])
  console.log("this is category",newcatag)
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [img, setimg] = useState('')
  const [author, setauthor] = useState('')
  const [dlink, setdlink] = useState('')
  const [Newdata, setNewdata] = useState([])

  
  const [test, settest] = useState({
    titlee:title,
  })

  const beis = {
    ti: title
  }

  console.log('hello hello', beis.ti)
  useEffect(()=>{
    dispatch(fetch_article_datas())
    
  },[]) 
  // const newdata = articles_data.filter((c)=>c._id === id)

  useEffect(()=>{
    const newdata = articles_data.filter((c)=>c._id === id)
    // const filinput = () =>{
    //   settitle(newdata[0].title)
    // }
    setNewdata(newdata)
    const fil = ()=>{
      if(newdata[0]?.title){
        settitle(newdata[0].title)
      }if(newdata[0]?.author){
        setauthor(newdata[0].author)
      }if(newdata[0]?.imgurl){
        setimg(newdata[0].imgurl)
      }if(newdata[0]?.downloadLink){
        setdlink(newdata[0].downloadLink)
      }if(newdata[0]?.desc){
        setdesc(newdata[0].desc)
      }
      // if(newdata[0]?.category){
      //   setnewcatag(newdata[0].category)
      // }
      else{
        return console.log("Problem")
      }
    }
    fil()
   
  },[articles_data]) 

  
  console.log(articles_data)
  // const newdata = articles_data.filter((c)=>c._id === id)
  // console.log("this is newdata",newdata)

  
  const update = (id) =>{
    const data ={
      ti:title,
      description:desc,
      img:img,
      id:id,
      cat:catag,
      aut:author,
      dl:dlink,
      date
    }
    console.log("this is update data",data)
    axios.put("/api/editarticle",data)
    alert("Updated")
  } 
 
  console.log('hello this is tile', title)
  console.log('secont ttle', test.titlee)
  return (
    <div>
     
      {
        Newdata.map((d)=>{
          return (
            <>
                <div className="container w-[90%] m-[30px_auto] md:w-[85%]">
                  <div className="grid grid-cols-1 bg-white card md:grid-cols-2 rounded-xl">
                    <div className="img_card md:p-[20px_0px_20px_20px] md:h-[100%]">
                      <img className='w-full h-full' src={d.imgurl} alt={d.title} />
                    </div>
                    <div className="info p-[20px]">
                      <div className="flex flex-wrap category">
                          {d.category.map((c)=>{
                        return <p className='p-[0px_10px] rounded-lg m-[0px_6px_6px_0px] text-[18px] text-white bg-[#f72d59d5]'>{c}</p>
                          })}
                        </div>
                      <div className="title_desc">
                          <p className='text-[25px] font-semibold'>{d.title}</p>
                          <p className='font-medium'>{d.author}</p>
                          <p className='text-[18px]'>{d.date}</p>
                          <p className='mt-[10px]'>{d.desc}</p>
                      </div>
                     </div>
                    </div>
                  </div>
            </>
          )
        })
      } 
      <div className="inputfrom mt-[50px] pb-[30px] w-[90%] m-[30px_auto] md:w-[85%]">
                    <InputArray/>
                    <div className="grid grid-cols-1 gap-3 inputs">
                        <input className='p-[6px] rounded border-[1px] border-[gray] outline-none' type="text" value={title} placeholder='Article Title' onChange={(e)=>settitle(e.target.value)}/>
                        <input className='p-[6px] rounded border-[1px] border-[gray] outline-none' type="text" value={author} placeholder='Author Name' onChange={(e)=>setauthor(e.target.value)}/>
                        <input className='p-[6px] rounded border-[1px] border-[gray] outline-none' type="text" value={img} placeholder='Article Image url' onChange={(e)=>setimg(e.target.value)}/>
                        <input className='p-[6px] rounded border-[1px] border-[gray] outline-none' type="text" value={dlink} placeholder='Article download link' onChange={(e)=>setdlink(e.target.value)}/>
                        <textarea className='p-[6px] rounded border-[1px] border-[gray] outline-none resize-y max-h-[300px] min-h-[200px]  ' type="text" value={desc}  placeholder='Description' onChange={(e)=>setdesc(e.target.value)} /> 
                    </div> 
                    <div className="btn w-[80px] m-[20px_auto]">
                        <button className='p-[10px_20px] bg-[#3888ff] text-white rounded-xl  ' onClick={()=>update(id)}>Update</button>
                    </div>
                </div>  
    </div>
  )
}

export default Editarticle