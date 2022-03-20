import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputArray2 from '../c_components/InputArray2'
import InputArray from '../c_components/InputArray'




const Uploadbook = () => {
  const catag = useSelector((state)=>state.category1_reducers.category1)
  const catag2 = useSelector((state)=>state.category2_reducers.category2)
console.log("redux-first",catag2)
//  const filt_array =["hasnine"]; 

  // const [array, setarray] = useState(filt_array)
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
    // const [cat, setcat] = useState('')
    // const [cat2, setcat2] = useState('')


    const upvid =()=>{
      

          
      // var items = cat.split()
      // // console.log('first', items)
      // for (let i = 0; i < items.length; i++) {
      //   var data = items[i].split(",");
      //   // console.log('secont', data)
      //   const ff = data.map(ele => {
      //     return ele.trim();
      //   })
      //   // console.log(ff);
      //   setcat(ff)
      //   console.log('catagory1',cat)
      // }

      // var itemss = cat2.split()
      // // console.log('first', items)
      // for (let i = 0; i < itemss.length; i++) {
      //   var dataa = itemss[i].split(",");
      //   // console.log('secont', data)
      //   const ff = dataa.map(ele => {
      //     return ele.trim();
      //   })
      //   // console.log(ff);
      //   setcat2(ff)
      //   console.log('catagory2',cat2)
      // }

        let datas ={
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
        axios.post("/api/postbook",datas);
        alert("Your Data is submited!")
    }


// const catfunc = (c)=>{
//     if(!filt_array.includes(c)){
//         filt_array.push(c)
//         return filt_array
//     }
//     setarray(filt_array)
// }
    


// console.log(filt_array)



  return (
    <div>
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
        <input className='p-[10px] row-span-2  md:row-span-1 text-[25px] md:text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="number" placeholder='Book size' onChange={(e)=>setsize(e.target.value)} />
        <input className='p-[10px]   text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="number" placeholder='Book Page' onChange={(e)=>setpage(e.target.value)} />
        <input className='p-[10px]  text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="number" placeholder='Book volume' onChange={(e)=>setvolume(e.target.value)} />
        <input className='p-[10px] col-span-2 md:col-span-1 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Book Slug' onChange={(e)=>setslug(e.target.value)} />
        <input className='p-[10px] col-span-2 text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px]' type="text" placeholder='Download Link' onChange={(e)=>setlink(e.target.value)} />
        <textarea className='p-[10px] text-[15px] font-norma col-span-2 h-[130px] md:h-[180px] rounded-[5px] border-[1px] border-[#bbbbbb] m-[8px_0px]' type="text" placeholder='Book Description' onChange={(e)=>setdescription(e.target.value)} />
        
      </div>
      <div className="butto m-[10px_auto] w-[30%] md:w-[20%] ">
      <button className='w-[100%]  p-[10px] bg-[#3388f7] rounded-[10px] text-[#ffffff] font-medium hover:bg-[#ffffff] hover:text-[#3388f7] hover:border-[1px] hover:border-[#3388f7]' onClick={upvid}>Upload</button>
      </div>
        
        <div className="display_books">
          {/* {array.map((c)=>{
            return <p>{c}</p>
            
          })} */}
        </div>
        

        {/* <NavVido catefun = {catfunc}/> */}
    </div>
  )
}

export default Uploadbook