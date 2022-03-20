import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_book_datas } from '../../redux/actions/Actions'
import EditbookCard from './EditbookCard'
import BooksNav from '../../pages/bookPage/BooksNav'


const EditBookandNav = () => {
  const products = useSelector((state)=>state.book_reducers.books)
  const dispatch = useDispatch();
  const [all, setall] = useState([])
  

  console.log("books",products)
  
  useEffect(()=>{
  dispatch(fetch_book_datas())
  },[])

  useEffect(()=>{
    setall([...products])
    },[products])
  

  const handelarticale = (match) =>{
    console.log(match)
    if(match==='সকল'){
      return setall(products);
      
    }
    const newarray = products.filter((nar)=>nar.book_category.cat1.includes(match));
    setall(newarray)
    console.log("category match", newarray)
  }

  const handelarticale2 = (match2) =>{
    console.log(match2)
    const newarray2 = products.filter((naret)=>naret.book_category.cat2.includes(match2));
    setall(newarray2)
  }

const [click, setClick] = useState(false)
const hamberger = () =>{
  setClick(!click)
}

  return (
    <>
     <div className='arti_parent'>
       
     <button className='arti_btn w-[80%] h-[70%] m-[20px_auto] rouned-[5px] shadow-[0px_0px_2px_0px_#9793938c] text-left pl-[30px] border-none bg-white md:hidden block' onClick={hamberger}>&#9776;</button>
     <div className={click ? "acti_nav_active md:block" : "arti_nav hidden md:block"}>
          <BooksNav handarti = {handelarticale} handarti2 = {handelarticale2}/>
       </div>
       <div className="arti_card">
            {
              all.map((c)=>{
                return <EditbookCard key={c._id} book_title ={c.book_title} book_imgurl ={c.book_imgurl} book_author ={c.book_author} id ={c._id} download_link ={c.download_link}/>
              })
            }
       </div> 
    </div>
    </>
   
  )
}

export default EditBookandNav