import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_book_datas } from '../../redux/actions/Actions'
import BookCard from './BookCard'
import BooksNav from './BooksNav'
import { useSearch } from '../../hooks/useSearch'

const Books = () => {
  const products = useSelector((state)=>state.book_reducers.books)
  const dispatch = useDispatch();
  const [all, setall] = useState([])
  const [search, setsearch] = useState(null)
  const num = [1,2];

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
     <input
            type="search"
            placeholder="Enter name to be searched"
            className="searchbar p-[3px] rounded-full  text-[red]"
            onChange={(e) =>setsearch(e.target.value)}
          />
     <div className='arti_parent grid grid-cols-[1fr] md:grid-cols-[1fr_3fr]'>
    
       
       <button className='arti_btn w-[80%] h-[70%] m-[20px_auto] rouned-[5px] shadow-[0px_0px_2px_0px_#9793938c] text-left pl-[30px] border-none bg-white md:hidden block' onClick={hamberger}>&#9776;</button>
       <div className={click ? "acti_nav_active md:block" : "arti_nav hidden md:block"}>
       
          <BooksNav handarti = {handelarticale} handarti2 = {handelarticale2}/>
       </div>
      
       <div className="arti_card">
            {
             useSearch(all,search,num).map((c)=>{
              return <BookCard key={c._id} book_title ={c.book_title} book_imgurl ={c.book_imgurl} book_author ={c.book_author}  book_download_link ={c.book_download_link} book_translator={c.book_translator} book_editor ={c.book_editor} book_publication={c.book_publication} book_page ={c.book_page} book_volume={c.book_volume} book_size={c.book_size} book_category={c.book_category} book_slug={c.book_slug} />
              })
            }
       </div> 
    </div>
    </>
   
  )
}

export default Books