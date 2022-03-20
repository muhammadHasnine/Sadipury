import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetch_book_datas } from '../../redux/actions/Actions'
import InputArray from '../../dashboard/c_components/InputArray'
import InputArray2 from '../../dashboard/c_components/InputArray2'
import axios from 'axios'
const Editbook = () => {
    const {id} = useParams();
    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const [translator, settranslator] = useState('')
    const [editor, seteditor] = useState('')
    const [publication, setpublication] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [page, setpage] = useState('')
    const [size, setsize] = useState('')
    const [volume, setvolume] = useState(0)
    const [link, setlink] = useState('')
    const [slug, setslug] = useState('')
    const [description, setdescription] = useState('')
    const book_data = useSelector((state)=>state.book_reducers.books);
    const catag = useSelector((state)=>state.category1_reducers.category1)
    const catag2 = useSelector((state)=>state.category2_reducers.category2)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetch_book_datas())
      },[]) 
    console.log(book_data)
    const newdata = book_data.filter((c)=>c._id === id)
    console.log("this is newdata",newdata)

const update = (id) =>{
  const data ={
            title,
            author,
            translator,
            editor,
            publication,
            imgurl,
            page,
            size,
            cat:{
              cat1:catag,
              cat2:catag2
            },
            volume,
            link,
            slug,
            description   
  }
  axios.put("/api/editbook",data)
  alert("Updated")
}

  return (
    <>
      {
        newdata.map((d)=>{
          return (
                  <div className="container w-[90%]  m-[20px_auto] ">
                      <div className="book_container grid grid-cols-1 md:grid-cols-2 bg-white">
                        <div className="img w-full h-[300px] md:p-[20px_0px_20px_20px] md:h-[500px]">
                          <img className='w-full h-full' src={d.book_imgurl} />
                        </div>
                        <div className="info p-5">
                          <p className='text-xl font-semibold'>{d.book_title}</p>
                          <p className='text-lg font-medium'>{d.book_author}</p>
                          <p className='text-lg font-medium'>{d.book_translator}</p>
                          <p className='text-lg font-medium'>{d.book_editor}</p>
                          <p className='text-lg font-medium'>{d.book_publication}</p>
                          <div className="flex flex-wrap gap-1">
                            <p className='text-lg font-medium'>{d.book_page}</p>
                            <p className='text-lg font-medium'>{d.book_volume}</p>
                            <p className='text-lg font-medium'>{d.book_size}</p>
                          </div>
                          <div className=" flex flex-wrap">
                            {d.book_category.cat1.map((w)=>{
                               return <p className='p-[0px_10px] mr-[5px] text-white text-lg bg-[#418ef1] mt-2 rounded'>{w}</p>
                               })}
                          </div>
                          <div className="flex flex-wrap ">
                            {d.book_category.cat2.map((v)=>{
                               return <p className='p-[0px_10px] mr-[5px] text-white text-lg bg-[#418ef1] mt-2 rounded'>{v}</p>
                               })}
                          </div>
                          <p className='text-lg font-medium mt-4'>{d.book_description}</p>
                        </div>
                      </div>
                      <div className=" category grid grid-cols-1 max-w-[80%] m-[20px_auto] md:grid-cols-2  md:gap-4">
        
          <InputArray/>
            
          <InputArray2/>
          </div>
          <div className="upload_book grid grid-cols-2 max-w-[80%] m-[20px_auto] gap-y-[5px] gap-x-[8px]">
            <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Title' onChange={(e)=>settitle(e.target.value)} />
            <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Author' onChange={(e)=>setauthor(e.target.value)} /> 
            <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Translator' onChange={(e)=>settranslator(e.target.value)} /> 
            <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Publication' onChange={(e)=>setpublication(e.target.value)} />
            <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Editor' onChange={(e)=>seteditor(e.target.value)} />
            <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Imgurl' onChange={(e)=>setimgurl(e.target.value)} />
            <input className='p-[10px] row-span-2 text-[25px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="number" placeholder='Book size' onChange={(e)=>setsize(e.target.value)} />
            <input className='p-[10px]   text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="number" placeholder='Book Page' onChange={(e)=>setpage(e.target.value)} />
            <input className='p-[10px]  text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="number" placeholder='Book volume' onChange={(e)=>setvolume(e.target.value)} />
            <textarea className='p-[10px] text-[15px] font-norma col-span-2 h-[130px] md:h-[180px] rounded-[5px] border-[1px] border-[#bbbbbb] m-[8px_0px]' type="text" placeholder='Book Description' onChange={(e)=>setdescription(e.target.value)} />
          </div>
          <div className="butto m-[10px_auto] w-[30%] md:w-[20%] ">
          <button className='w-[100%]  p-[10px] bg-[#3388f7] rounded-[10px] text-[#ffffff] font-medium hover:bg-[#ffffff] hover:text-[#3388f7] hover:border-[1px] hover:border-[#3388f7] mb-5' onClick={()=>update(d._id)}>Update</button>
        </div>         
    </div>
            // {/* <div>
            //   <div className="arti_container">
            //     <div className="arti_imge">
            //       <img src={d.book_imgurl} />
            //     </div>
            //     <div className="arti_info">
            //       <p className='arti_title'>{d.book_title}</p>  
            //       <p>{d.book_author}</p> 
            //       <div className="flex cat1">
            //       {d.book_category.cat1.map((c)=>{
            //         return <p className='pr-[10px]'>{c}</p>
            //       })}
            //       </div>
            //       <div className="flex cat2">
            //       {d.book_category.cat2.map((b)=>{
            //         return <p className='pr-[10px]'>{b}</p>
            //       })}
            //       </div>
            //     </div>
            //   </div>
            // </div>
            // <div className="flex flex-col arti_container ">
            //   <input className='p-[10px] outline-none' type="text" placeholder='Book Title' onChange={(e)=>settitle(e.target.value)}/>
            //   <input className='p-[10px] outline-none' type="text" placeholder='Book Author' onChange={(e)=>setauthor(e.target.value)}/>
            //   <input className='p-[10px] outline-none' type="text" placeholder='Book Image url' onChange={(e)=>setimg(e.target.value)}/>
            //   <input className='p-[10px] outline-none' type="text" placeholder='Book Download link' onChange={(e)=>setlink(e.target.value)}/>
             
              
            // </div>
            // <div className="arti_container ">
            //     <InputArray/>
            //     <InputArray2/>
            // </div>
            // <div className="arti_container ">
            // <button className='p-[10px]' onClick={()=>update(d._id)}>Upload</button>
            // </div> */}
           
          )
        })
      }    
    </>
  )
}

export default Editbook